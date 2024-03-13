import { userSearch } from '@/services/ant-design-pro/api';
// import { PathMap } from '@ant-design/charts';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Image } from 'antd';
import { useRef } from 'react';

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

const columns: ProColumns<API.CurrentUser>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'user name',
    dataIndex: 'username',
    copyable: true,
  },
  {
    title: 'user account',
    dataIndex: 'userAccount',
    copyable: true,
  },
  {
    title: 'user avatar',
    dataIndex: 'avatarUrl',
    render: (_, record) => (
      <div>
        <Image src={record.avatarUrl} width={100} />
      </div>
    ),
  },
  {
    title: 'gender',
    dataIndex: 'gender',
  },
  {
    title: 'phone number',
    dataIndex: 'phone',
    copyable: true,
  },
  {
    title: 'email',
    dataIndex: 'email',
    copyable: true,
  },

  {
    title: 'user Role',
    dataIndex: 'userRole',
    valueEnum: {
      0: { text: 'user', status: 'default' },
      1: {
        text: 'administrators',
        status: 'success',
      },
    },
  },
  {
    title: 'create time',
    dataIndex: 'createTime',
    valueType: 'date',
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        console.log('params=>', params);
        await waitTime(2000);
        const userList = await userSearch();
        return {
          data: userList,
          success: true,
        };
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
        resetText: 'reset',
        searchText: 'Search',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="user form"
    />
  );
};
