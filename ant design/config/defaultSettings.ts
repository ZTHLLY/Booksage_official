import { Settings as LayoutSettings } from '@ant-design/pro-components';

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
  title: 'BookSage Manage System',
  pwa: false,
  logo: 'https://pic.imgdb.cn/item/65717325c458853aeff3d236.png',
  iconfontUrl: '',
};

export default Settings;
