import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { SettingDrawer } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import defaultSettings from '../config/defaultSettings';
import { getCurrentUser } from './services/admin/admin';
import { getMenu } from './services/admin/menu';
import { MenuDataItem } from '@umijs/route-utils';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
const callbackPath = '/callback/dexidp';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await getCurrentUser();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath && history.location.pathname !== callbackPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  const routes = [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user',
          routes: [
            {
              name: 'login',
              path: '/user/login',
              component: './user/Login',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ];
  return {
    menu: {
      params: {
        pageSize: 10000,
      },
      request: async (params) => {
        let data:
          | (
              | {
                  path: string;
                  layout: boolean;
                  routes: (
                    | {
                        path: string;
                        routes: { name: string; path: string; component: string }[];
                        component?: undefined;
                      }
                    | { component: string; path?: undefined; routes?: undefined }
                  )[];
                  component?: undefined;
                }
              | { component: string; path?: undefined; layout?: undefined; routes?: undefined }
            )[]
          | API.MenuListItem[]
          | MenuDataItem[]
          | PromiseLike<MenuDataItem[]> = routes;
        if (location.pathname !== loginPath && history.location.pathname !== callbackPath) {
          try {
            const menuData = await getMenu(params);
            data = menuData.data || routes;
          } catch (error) {
            data = routes;
          }
        }

        return data;
      },
    },
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (
        !initialState?.currentUser &&
        location.pathname !== loginPath &&
        history.location.pathname !== callbackPath
      ) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

export const request = {
  middlewares: [
    async function middlewareToken(ctx, next) {
      const token = JSON.parse(localStorage.getItem('token'));
      if (!token) {
        await next();
        return;
      }
      const { req } = ctx;
      const { url, options } = req;
      if (url.indexOf('/admin/api/v1/callback') != 0 || url.indexOf('/admin/api/v1/client') != 0) {
        options.headers = {
          ...options.headers,
          Authorization: `${token.tokenType} ${token.accessToken}`,
        };
        ctx.req.options = options;
      }
      req.url = `${process.env.BASE_URL}${url}`;
      await next();
      const { res } = ctx;
      const { errorCode } = res;
      if (errorCode == '401') {
        localStorage.removeItem('token');
        history.go('/user/login');
      }
    },
  ],
};
