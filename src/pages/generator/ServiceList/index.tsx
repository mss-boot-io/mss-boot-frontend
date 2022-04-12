import React, { useRef, useState } from 'react';
import { Button, message, Modal, Tooltip } from 'antd';
import { ExclamationCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { ServiceListItem } from '@/services/generator/service';
import { deleteServiceById } from '@/services/generator/service';
import { getService } from '@/services/generator/service';
import ControlForm from './components/ControlForm';

export default () => {
  const ref = useRef<ActionType>();
  const [visible, setVisible] = useState(false);
  const [id, setID] = useState(String);
  const visibleCallback = (t) => {
    setVisible(t);
    if (!t) {
      setID('');
    }
  };
  const columns: ProColumns<ServiceListItem>[] = [
    {
      title: '名称',
      width: 160,
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '状态',
      width: 160,
      dataIndex: 'status',
      initialValue: 'all',
      valueEnum: {
        0: { text: '启用', status: 'success' },
        1: { text: '禁用', status: 'error' },
        2: { text: '锁定', status: 'proccessing' },
      },
    },
    {
      title: (
        <>
          创建时间
          <Tooltip placement="top" title="这是一段描述">
            <QuestionCircleOutlined style={{ marginLeft: 4 }} />
          </Tooltip>
        </>
      ),
      width: 200,
      key: 'since',
      dataIndex: 'createdAt',
      valueType: 'date',
      sorter: (a, b) => a.createdAt - b.createdAt,
    },
    {
      title: '描述',
      dataIndex: 'description',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '操作',
      width: 180,
      key: 'key',
      dataIndex: 'id',
      valueType: 'option',
      render: (_, record, index, actionRef) => [
        <a
          key="edit"
          onClick={() => {
            setID(record.id);
            setVisible(true);
          }}
        >
          编辑
        </a>,
        <a
          key="generate"
          onClick={() => {
            Modal.confirm({
              title: 'Confirm',
              icon: <ExclamationCircleOutlined />,
              content: `确认要生成服务${record.name}吗? 生成后将覆盖原有代码！`,
              okText: '确认',
              cancelText: '取消',
              onOk: () => {
                message.success('生成成功');
                actionRef?.reload();
              },
            });
          }}
        >
          生成
        </a>,
        <a
          key="delete"
          onClick={() => {
            Modal.confirm({
              title: 'Confirm',
              icon: <ExclamationCircleOutlined />,
              content: `确认要删除服务${record.name}`,
              okText: '确认',
              cancelText: '取消',
              onOk: () => {
                deleteServiceById({ id: record.id });
                message.success('删除成功');
                // 刷新
                actionRef?.reload();
              },
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];
  return (
    <>
      <ProTable<TableListItem>
        actionRef={ref}
        columns={columns}
        request={getService}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
        }}
        search={false}
        dateFormatter="string"
        headerTitle="服务"
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setID('');
              setVisible(true);
            }}
          >
            创建服务
          </Button>,
        ]}
      />
      <ControlForm
        visible={visible}
        id={id || ''}
        onVisibleChange={visibleCallback}
        onSuccess={() => {
          ref.current.reload();
          setID('');
        }}
      />
    </>
  );
};
