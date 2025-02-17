import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';
import { Pie, Column, Bar, Line } from '@ant-design/charts';
import { currentUser } from '@/services/ant-design-pro/api';

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

const Welcome = () => {
  const [pieData, setPieData] = useState(null);
  useEffect(() => {
    const fetchDataAndSetPieData = async () => {
      try {
        const user = await currentUser();
        //console.log('get current user=>', user);

        let pieData;
        if (user.userRole === 1) {
          pieData = [
            { type: 'science fiction', value: 27 },
            { type: 'literature', value: 25 },
            { type: 'education', value: 18 },
            { type: 'romantic', value: 15 },
            { type: 'history', value: 10 },
            { type: 'other', value: 5 },
          ];
        } else {
          pieData = [
            { type: 'science fiction', value: 15 },
            { type: 'literature', value: 25 },
            { type: 'education', value: 30 },
            { type: 'romantic', value: 23 },
            { type: 'history', value: 2 },
            { type: 'other', value: 5 },
          ];
        }

        // 更新状态，触发组件重新渲染
        setPieData(pieData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndSetPieData();
  }, []); // 空数组表示只在组件挂载时运行

  const [columnData, setColumnData] = useState(null);
  useEffect(() => {
    const fetchDataAndSetColumnData = async () => {
      try {
        const user = await currentUser();
        //console.log('get current user=>', user);

        let columnData;
        if (user.userRole === 1) {
          columnData = [
            { category: 'January', sales: 38 },
            { category: 'February', sales: 52 },
            { category: 'March', sales: 61 },
            { category: 'April', sales: 30 },
            { category: 'May', sales: 48 },
            { category: 'June', sales: 38 },
            { category: 'July', sales: 28 },
            { category: 'August', sales: 38 },
            { category: 'September', sales: 68 },
            { category: 'October', sales: 50 },
            { category: 'November', sales: 58 },
            { category: 'December', sales: 38 },
          ];
        } else {
          columnData = [
            { category: 'January', sales: 45 },
            { category: 'February', sales: 22 },
            { category: 'March', sales: 65 },
            { category: 'April', sales: 30 },
            { category: 'May', sales: 78 },
            { category: 'June', sales: 38 },
            { category: 'July', sales: 52 },
            { category: 'August', sales: 38 },
            { category: 'September', sales: 68 },
            { category: 'October', sales: 15 },
            { category: 'November', sales: 58 },
            { category: 'December', sales: 80 },
          ];
        }

        // 更新状态，触发组件重新渲染
        setColumnData(columnData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndSetColumnData();
  }, []); // 空数组表示只在组件挂载时运行

  const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'spider',
      content: '{name} ({percentage})',
    },
    interactions: [{ type: 'element-active' }],
  };

  const columnConfig = {
    data: columnData,
    xField: 'category',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      category: { alias: '类别' },
      sales: { alias: '销量' },
    },
  };
  // 新增条形图和线图的数据
  const barData = [
    { year: '2020', sales: 6000 },
    { year: '2021', sales: 5000 },
    { year: '2022', sales: 8000 },
  ];

  const lineData = [
    { month: 'January', sales: 1000 },
    { month: 'February', sales: 1500 },
    { month: 'March', sales: 3000 },
    { month: 'April', sales: 4500 },
    { month: 'May', sales: 1500 },
    { month: 'June', sales: 300 },
    { month: 'July', sales: 2000 },
    { month: 'August', sales: 3500 },
    { month: 'September', sales: 6000 },
    { month: 'October', sales: 10200 },
    { month: 'November', sales: 4000 },
    { month: 'December', sales: 3700 },
    // ...其他月份数据...
  ];
  // 条形图配置
  const barConfig = {
    data: barData,
    xField: 'sales',
    yField: 'year',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
      },
    },
  };

  // 线图配置
  const lineConfig = {
    data: lineData,
    xField: 'month',
    yField: 'sales',
  };

  return (
    <PageContainer>
      <ProCard split="vertical" gutter={[16, 16]}>
        {pieData && (
          <ProCard title="Distribution of book categories" colSpan="30%">
            <Pie {...pieConfig} />
          </ProCard>
        )}

        {columnData && (
          <ProCard title="Monthly sales trend">
            <Column {...columnConfig} />
          </ProCard>
        )}
      </ProCard>

      <ProCard gutter={[16, 16]} style={{ marginTop: 16 }}>
        <ProCard title="Annual sales comparison" colSpan="40%">
          <Bar {...barConfig} />
        </ProCard>
        <ProCard title="Monthly sales analysis">
          <Line {...lineConfig} />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default Welcome;
