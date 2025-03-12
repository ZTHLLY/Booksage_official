import Footer from '@/components/Footer';
import { login } from '@/services/ant-design-pro/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { Alert, Divider, message, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import { Link, history, useModel } from 'umi';
import styles from './index.less';
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);
const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const defaultLoginFailureMessage = 'Login Failed, please try again';
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };
  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const user = await login({
        ...values,
        type,
      });
      //console.log(values);
      //console.log('登录请求后返回的结果=>', user);
      if (user.data) {
        const defaultLoginSuccessMessage = 'login success!';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as {
          redirect: string;
        };
        history.push(redirect || '/');
        return;
      } else {
        message.error(user.description);
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(user);
    } catch (error) {
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status, type: loginType } = userLoginState;

  const showInfo = () => {
    message.info('Please contact the administrator');
  };
  return (
    // 这里返回的是整个表单
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="https://pic.imgdb.cn/item/65717325c458853aeff3d236.png" />}
          title="G0dl1ke Design"
          submitter={{
            searchConfig: {
              submitText: 'Sign In',
            },
          }}
          subTitle={
            'G0dl1ke Design is the most influential web design specification in parallel worlds'
          }
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'Account To SignIn'} />
          </Tabs>

          {status === 'error' && loginType === 'account' && (
            <LoginMessage content={'wrong username or passward'} />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'Administrator: pineapple'}
                rules={[
                  {
                    required: true,
                    message: 'Username missing!',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'Administrator: 123456789'}
                rules={[
                  {
                    required: true,
                    message: 'Passward missing!',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: 'passward should more than 8 numbers',
                  },
                ]}
              />
            </>
          )}

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <Space align="start" split={<Divider type="vertical" />}>
              <ProFormCheckbox noStyle name="autoLogin">
                Automatic Login
              </ProFormCheckbox>
              <Link to="/user/register">sign up</Link>
              <a
                style={{
                  float: 'right',
                }}
                onClick={showInfo}
              >
                Forget
              </a>
            </Space>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
