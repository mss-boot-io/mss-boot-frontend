import { message } from 'antd';
import React from 'react';
import { useIntl, history, SelectLang, useModel, useLocation } from 'umi';
import Footer from '@/components/Footer';

import styles from './index.less';
import { getCallback } from '@/services/tenant/tenant';

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };

  const config = initialState?.sdkConfig;
  if (config) {
    config.redirectPath = '/user/login';
  }
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem('token'));
  if (location.query?.error) {
    message.error(location.query.error);
  } else if (location.query?.code || token) {
    // if (token) {
    //   fetchUserInfo().then(() => {});
    //   return;
    // }
    //发送获取accessToken请求
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    if (token) {
      fetchUserInfo().then(() => {
        history.push(redirect || '/');
      });
    } else {
      getCallback(location.query).then((e) => {
        const { data } = e;
        localStorage.setItem('token', JSON.stringify(data));
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          duration: 1,
          defaultMessage: '登录成功！正在获取用户信息...',
        });
        message.success(defaultLoginSuccessMessage).then(() => {
          fetchUserInfo().then(() => {
            history.push(redirect || '/');
          });
        });
      });
    }
  } else {
    //跳转登录
    window.location.href = config.authCodeURL;
  }

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>登录中...</div>
      <Footer />
    </div>
  );
};

export default Login;
