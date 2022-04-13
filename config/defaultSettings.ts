import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'mss-boot-io',
  pwa: false,
  logo: 'https://mss-boot-io.github.io/mss-boot-docs/images/logo.svg',
  iconfontUrl: '',
};

export default Settings;
