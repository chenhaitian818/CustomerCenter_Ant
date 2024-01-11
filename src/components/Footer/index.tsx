import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '陈楚出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '陈楚用户中心',
          title: '用户中心项目',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 陈楚 GitHub前端</>,
          href: 'https://github.com/chenhaitian818/CustomerCenter_Ant.git',
          blankTarget: true,
        },
        {
          key: 'github2',
          title: <><GithubOutlined /> 陈楚 GitHub后端</>,
          href: 'https://github.com/chenhaitian818/CustomerCenter_Backend.git',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
