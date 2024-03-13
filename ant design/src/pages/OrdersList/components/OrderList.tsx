import {
  ProTable,
  ProForm,
  ProFormText,
  ModalForm,
  ProFormSelect,
} from '@ant-design/pro-components';
import React, { useState } from 'react';
import { Button, message } from 'antd';
import { searchOrder, updateOrder, userSearch } from '@/services/ant-design-pro/api';
import { DeleteTwoTone } from '@ant-design/icons';

// type Order = {
//   id: string;
//   price: number;
//   logisticsStatus: string; // 物流状态字段
//   deliver: string;
//   receiver: string;
//   book: string;
// };

// // 模拟数据
// const mockData: Order[] = [
//   {
//     id: '001',
//     price: 105450,
//     logisticsStatus: '已发货',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '002',
//     price: 121313,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '003',
//     price: 15021313,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '004',
//     price: 14540,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '005',
//     price: 34343250,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '006',
//     price: 53420,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '007',
//     price: 12430,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '008',
//     price: 45450,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '009',
//     price: 56560,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '010',
//     price: 656565,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '011',
//     price: 56565,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '012',
//     price: 17666,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '013',
//     price: 1444,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '014',
//     price: 10,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '015',
//     price: 24242,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '016',
//     price: 452,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
//   {
//     id: '017',
//     price: 14545,
//     logisticsStatus: '运输中',
//     deliver: 'lhy666',
//     receiver: 'pineapple吹雪',
//     book: 'ZiZhi TongJian',
//   },
// ];

// 物流状态选项
const logisticsOptions = [
  { label: 'Waiting', value: 'Waiting' },
  { label: 'Delivering', value: 'Delivering' },
  { label: 'Finished', value: 'Finished' },
  { label: 'Error', value: 'Error' },
];

const OrderList: React.FC = () => {
  // const [orders, setOrders] = useState<Order[]>(mockData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  // const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const showEditModal = (record) => {
    console.log('render=>', record);
    setEditingOrder(record);
    setIsModalVisible(true);
  };
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },

    {
      title: 'Deliver',
      dataIndex: 'deliver',
      key: 'deliver',
    },
    {
      title: 'Receiver',
      dataIndex: 'receiver',
      key: 'receiver',
    },
    {
      title: 'Book',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'Deliver Status',
      dataIndex: 'deliverStatus',
      key: 'deliverStatus',
      valueEnum: {
        Waiting: { text: 'waiting', status: 'default' },
        Delivering: { text: 'Delivering', status: 'Processing' },
        Finished: {
          text: 'Finished',
          status: 'success',
        },
        Error: {
          text: 'Error',
          status: 'Error',
        },
      },
    },
    {
      title: 'option',
      key: 'operation',
      render: (_, record) => (
        <Button type="link" onClick={() => showEditModal(record)}>
          change deliver status
        </Button>
      ),
    },
  ];

  const handleLogisticsStatusChange = async (values: { deliverStatus: string }) => {
    // 更新模拟数据
    // const updatedOrders = orders.map((order) =>
    //   order.id === currentOrder.id
    //     ? { ...order, logisticsStatus: values.logisticsStatus }
    //     : order,
    // );
    // setOrders(updatedOrders);
    console.log('数据状态', values);
    console.log('表单信息=>', editingOrder);
    editingOrder.deliverStatus = values.deliverStatus;
    console.log('更新后的表单=>', editingOrder);
    let requestBody = editingOrder;
    let res = await updateOrder(requestBody);
    console.log('data from backend=>', res);
    if (res.data != null) {
      setIsModalVisible(false);
      message.success('Deliver Status update success!');
    } else {
      setIsModalVisible(false);
      message.error('Deliver Status update failed, please try again');
    }
  };

  // const handleSearch = (values: { id: string }) => {
  //   const filteredData = mockData.filter((order) => order.id.includes(values.id));
  //   setOrders(filteredData); // 更新状态，仅包含匹配查询的订单
  // };

  return (
    <>
      <ProTable<API.Order>
        columns={columns}
        // dataSource={orders}
        request={async (params, sort, filter) => {
          console.log('params=>', params);

          const orderList = await searchOrder(params);
          return {
            data: orderList,
            success: true,
          };
        }}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        search={{
          searchText: 'search',
          resetText: 'reset',
        }}
      />

      <ModalForm
        title="change deliver status"
        visible={isModalVisible}
        onVisibleChange={setIsModalVisible}
        onFinish={handleLogisticsStatusChange}
      >
        <ProFormSelect
          options={logisticsOptions}
          width="md"
          name="deliverStatus"
          label="deliver status"
          // initialValue={currentOrder?.logisticsStatus}
        />
      </ModalForm>
    </>
  );
};

export default OrderList;
