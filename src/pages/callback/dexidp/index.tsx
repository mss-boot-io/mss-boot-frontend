import { message } from 'antd';
import React from 'react';
import { useIntl, history, SelectLang, useLocation } from 'umi';
import Footer from '@/components/Footer';

import styles from './index.less';
import { getCallback } from '@/services/admin/admin';

const Callback: React.FC = () => {
  const intl = useIntl();

  const location = useLocation();
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token);
  if (location.query?.error) {
    message.error(location.query.error);
  } else if (location.query?.code || token) {
    //发送获取accessToken请求
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    if (token) {
      history.push(redirect || '/');
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
          history.push(redirect || '/');
        });
      });
    }
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
export default Callback;
