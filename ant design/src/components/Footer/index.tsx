import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'si1v3r design';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ZTHLLY',
          blankTarget: true,
        },
        {
          key: "si1v3r's blog",
          title: "si1v3r's blog",
          href: 'https://zthlly.github.io/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
