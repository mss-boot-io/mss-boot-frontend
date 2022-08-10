import { message } from 'antd';
import React from 'react';
import { LoginForm } from '@ant-design/pro-form';
import { useIntl, SelectLang, useLocation } from 'umi';

import styles from './index.less';
import { getClient, getCallback } from '@/services/admin/admin';

const Login: React.FC = () => {
  const intl = useIntl();

  const location = useLocation();
  React.useEffect(() => {
    console.log(location.query);
    if (location.query && location.query.error) {
      //callback
      message.error(location.query.error);
    } else if (location.query && location.query.code) {
      //发送获取accessToken请求
      // const { query } = history.location;

      getCallback(location.query).then((e) => {
        const { data } = e;
        localStorage.setItem('token', JSON.stringify(data));
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          duration: 1,
          defaultMessage: '登录成功！正在获取用户信息...',
        });
        message.success(defaultLoginSuccessMessage).then(() => {
          console.log('welcome');
          // history.replace('/welcome');
          window.location.href = window.location.origin;
        });
      });
    }
  }, [intl, location.query]);

  const handleSubmit = async () => {
    try {
      const client = await getClient();
      if (!client.data) {
        message.error(client.msg);
      }
      // 登录
      window.location.href = client.data?.authCodeURL || '';
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <LoginForm
          // logo={<img alt="logo" src="logo.svg" />}
          title="mss-boot-io"
          subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async () => {
            await handleSubmit();
          }}
        />
      </div>
    </div>
  );
};

export default Login;
