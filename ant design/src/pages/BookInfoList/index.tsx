import React, { useState } from 'react';
// import { userSearch } from '@/services/ant-design-pro/api';
import {
  ProTable,
  ModalForm,
  ProFormText,
  ProFormTextArea,
  ProFormDigit,
} from '@ant-design/pro-components';
import { Form, Button, Image, message } from 'antd';

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

const BookTable = () => {
  // 模拟数据，从上传的Excel文件中提取
  const initialData = [
    // 数据示例，你可以根据实际数据进行调整
    {
      isbn: '9787568095242',
      name: 'Zizhi Tongjian',
      author: 'Sima Guang',
      publisher: 'Huazhong University of Science and Technology Press',
      price: 143,
      description: 'The New Notes (All 14 volumes) is the result...',
      image: 'https://pic.imgdb.cn/item/656dc617c458853aef05e3be.jpg',
      image1: 'https://pic.imgdb.cn/item/656dc617c458853aef05e3be.jpg',
      image2: 'https://pic.imgdb.cn/item/656dc617c458853aef05e3be.jpg',
      image3: 'https://pic.imgdb.cn/item/656dc617c458853aef05e3be.jpg',
      image4: 'https://pic.imgdb.cn/item/656dc617c458853aef05e3be.jpg',
      image5: 'https://pic.imgdb.cn/item/656dc617c458853aef05e3be.jpg',
    },
    {
      isbn: '9787573207388',
      name: 'Guwen Guanzhi',
      author: 'Li Mengsheng, Shi Zhaoliang',
      publisher: 'Shanghai Ancient Books Publishing House',
      price: 34,
      description: 'This book is based on the 1956......',
      image: 'https://pic.imgdb.cn/item/656dc67bc458853aef07f8f8.jpg',
      image1: 'https://pic.imgdb.cn/item/656dc673c458853aef07d5bb.jpg',
      image2: 'https://pic.imgdb.cn/item/656dc673c458853aef07d57e.jpg',
      image3: 'https://pic.imgdb.cn/item/656dc673c458853aef07d523.jpg',
      image4: 'https://pic.imgdb.cn/item/656dc673c458853aef07d31e.jpg',
      image5: 'https://pic.imgdb.cn/item/656dc673c458853aef07d2cf.jpg',
    },
    {
      isbn: '2357965',
      name: 'The Three-Body Problem',
      author: 'Liu Cixin',
      publisher: 'Chongqing Press',
      price: 44.7,
      description:
        "While the Cultural Revolution was in full swing, the military's secret program to search for alien civilizations......",
      image: 'https://pic.imgdb.cn/item/656dc750c458853aef0bb214.jpg',
      image1: 'https://pic.imgdb.cn/item/656dc750c458853aef0bb078.jpg',
      image2: 'https://pic.imgdb.cn/item/656dc750c458853aef0bb0f7.jpg',
      image3: 'https://pic.imgdb.cn/item/656dc750c458853aef0bb150.jpg',
      image4: 'https://pic.imgdb.cn/item/656dc750c458853aef0bb1a0.jpg',
      image5: 'https://pic.imgdb.cn/item/656dc792c458853aef0cce9c.jpg',
    },
    {
      isbn: '9787555415206',
      name: 'Shih Chi',
      author: 'Sima Qian',
      publisher: 'Beijing United Publishing Company',
      price: 86.9,
      description:
        'The Record of the Grand Historian is a biographical history book written by Sima Qian, a famous historian of the Western Han Dynasty. It is the most comprehensive......',
      image: 'https://pic.imgdb.cn/item/656dc7c6c458853aef0dae99.jpg',
      image1: 'https://pic.imgdb.cn/item/656dc7c6c458853aef0daee8.jpg',
      image2: 'https://pic.imgdb.cn/item/656dc7c6c458853aef0daf63.jpg',
      image3: 'https://pic.imgdb.cn/item/656dc7c6c458853aef0dae07.jpg',
      image4: 'https://pic.imgdb.cn/item/656dc7c6c458853aef0dae4d.jpg',
      image5: 'https://pic.imgdb.cn/item/656dc820c458853aef0f3881.jpg',
    },
    {
      isbn: '9787540484880',
      name: 'The Biography of Su Dongpo',
      author: 'Lin Yutang',
      publisher: 'Hunan Literature and Art Publishing House',
      price: 26,
      description: 'This book is a biography of Su Dongpo as......',
      image: 'https://pic.imgdb.cn/item/656dc83dc458853aef0fb237.jpg',
      image1: 'https://pic.imgdb.cn/item/656dc83dc458853aef0fb2af.jpg',
      image2: 'https://pic.imgdb.cn/item/656dc83ec458853aef0fb32d.jpg',
      image3: 'https://pic.imgdb.cn/item/656dc83ec458853aef0fb3cc.jpg',
      image4: 'https://pic.imgdb.cn/item/656dc83ec458853aef0fb45d.jpg',
      image5: 'https://pic.imgdb.cn/item/656dc87bc458853aef10ad02.jpg',
    },
    {
      isbn: '9787302642428',
      name: 'The Beauty of Control ',
      author: 'Wang Tianwei, Huang Junkui',
      publisher: 'Tsinghua University Press',
      price: 59.2,
      description:
        'These topics have also attracted much attention in recent years, including......',
      image: 'https://pic.imgdb.cn/item/656dc8cec458853aef12071e.jpg',
      image1: 'https://pic.imgdb.cn/item/656dc8cec458853aef1207e8.jpg',
      image2: 'https://pic.imgdb.cn/item/656dc8cec458853aef120887.jpg',
      image3: 'https://pic.imgdb.cn/item/656dc8cec458853aef120684.png',
      image4: 'https://pic.imgdb.cn/item/656dc8cec458853aef1206b7.jpg',
      image5: 'https://pic.imgdb.cn/item/656dc8fdc458853aef12d370.jpg',
    },
    {
      isbn: '9787111712367',
      name: 'Computer networking: a top-down approach',
      author: 'James F. Kurose',
      publisher: 'China Machine Press',
      price: 96.7,
      description:
        "This book uses the author's original top-down approach to teach the principle of computer network......",
      image: 'https://pic.imgdb.cn/item/656dc922c458853aef138b81.jpg',
      image1: 'https://pic.imgdb.cn/item/656dc922c458853aef138a86.jpg',
      image2: 'https://pic.imgdb.cn/item/656dc922c458853aef138abc.jpg',
      image3: 'https://pic.imgdb.cn/item/656dc922c458853aef138b03.jpg',
      image4: 'https://pic.imgdb.cn/item/656dc922c458853aef138b58.jpg',
      image5: 'https://pic.imgdb.cn/item/656dc958c458853aef14860c.jpg',
    },
    {
      isbn: '9787111495482',
      name: 'The courage to be hated',
      author: 'Ichiro Kishi, Shiken Koga',
      publisher: 'China Machine Press',
      price: 27.5,
      description:
        'A deeply inferior, incompetent and unhappy youth, heard a philosopher advocate......',
      image: 'https://pic.imgdb.cn/item/656dc977c458853aef15155b.jpg',
      image1: 'https://pic.imgdb.cn/item/656dc977c458853aef15146e.jpg',
      image2: 'https://pic.imgdb.cn/item/656dc977c458853aef1514ac.jpg',
      image3: 'https://pic.imgdb.cn/item/656dc977c458853aef1514dc.jpg',
      image4: 'https://pic.imgdb.cn/item/656dc977c458853aef151520.jpg',
      image5: 'https://pic.imgdb.cn/item/656dc9a4c458853aef15ddc7.jpg',
    },
  ];
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [data, setData] = useState(initialData);
  //删除书籍
  const handleDelete = async (isbn) => {
    setData(data.filter((item) => item.isbn !== isbn));
    message.success('delete book success');
  };
  //编辑书籍
  const handleEdit = (record) => {
    setCurrentRecord(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };
  //增加书籍
  const handleAddNew = async () => {
    setCurrentRecord(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleFinish = async (values) => {
    if (currentRecord) {
      setData(
        data.map((item) => (item.isbn === currentRecord.isbn ? { ...item, ...values } : item)),
      );
      message.success('edit book success');
    } else {
      setData([...data, { ...values, isbn: `ISBN_${Date.now()}` }]);
      message.success('add book success');
    }
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: 'ISBN',
      dataIndex: 'isbn',
      key: 'isbn',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Publishing House',
      dataIndex: 'publisher',
      key: 'publisher',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (_, record) => <Image width={50} src={record.image} />,
    },
    {
      title: 'Image2',
      dataIndex: 'image1',
      key: 'image1',
      render: (_, record) => <Image width={50} src={record.image1} />,
    },
    {
      title: 'Image3',
      dataIndex: 'image2',
      key: 'image2',
      render: (_, record) => <Image width={50} src={record.image2} />,
    },
    {
      title: 'Image4',
      dataIndex: 'image3',
      key: 'image3',
      render: (_, record) => <Image width={50} src={record.image3} />,
    },
    {
      title: 'Image5',
      dataIndex: 'image4',
      key: 'image4',
      render: (_, record) => <Image width={50} src={record.image4} />,
    },
    {
      title: 'Image6',
      dataIndex: 'image5',
      key: 'image5',
      render: (_, record) => <Image width={50} src={record.image5} />,
    },
    {
      title: 'Option',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.isbn)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <ProTable
        columns={columns}
        dataSource={data}
        rowKey="isbn"
        search={false}
        toolBarRender={() => [
          <Button key="add" type="primary" onClick={handleAddNew}>
            Add new Book
          </Button>,
        ]}
        pagination={{
          pageSize: 4,
          onChange: (page) => {},
        }}
      />

      <ModalForm
        title={currentRecord ? '编辑书籍' : '新增书籍'}
        form={form}
        visible={isModalVisible}
        onVisibleChange={setIsModalVisible}
        onFinish={handleFinish}
      >
        <ProFormText name="isbn" label="ISBN" rules={[{ required: true }]} />
        <ProFormText name="name" label="书名" rules={[{ required: true }]} />
        <ProFormText name="author" label="作者" rules={[{ required: true }]} />
        <ProFormText name="publisher" label="出版社" rules={[{ required: true }]} />
        <ProFormDigit name="price" label="价格" rules={[{ required: true }]} />
        <ProFormTextArea name="description" label="简介" rules={[{ required: true }]} />
        <ProFormText name="image" label="图片网址1" rules={[{ required: true }]} />
        <ProFormText name="image1" label="图片网址2" />
        <ProFormText name="image2" label="图片网址3" />
        <ProFormText name="image3" label="图片网址4" />
        <ProFormText name="image4" label="图片网址5" />
        <ProFormText name="image5" label="图片网址6" />
      </ModalForm>
    </>
  );
};

export default BookTable;
