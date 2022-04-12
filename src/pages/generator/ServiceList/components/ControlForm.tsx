import React, { useRef } from 'react';
import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { ProFormText, DrawerForm, ProFormTextArea } from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { getServiceById, postService, putServiceById } from '@/services/generator/service';
import { message } from 'antd';
import type { ServiceCreateReq } from '@/services/generator/service';

type CreateFormProps = {
  onVisibleChange: (boolean) => void;
  onSuccess: () => void;
  id: string;

  done: boolean;
  visible: boolean;
  onDone: () => void;
};

const ControlForm: React.FC<CreateFormProps> = (props) => {
  const { visible, onVisibleChange, onSuccess, id, done } = props;
  const formRef = useRef<ProFormInstance>();
  const { run } = useRequest(id ? putServiceById : postService, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
      onSuccess();
    },
  });
  const onFinish = async (values: Record<string, any>) => {
    if (id) {
      run({ id }, values);
    } else {
      run(values);
    }
    formRef.current?.formRef.current?.resetFields();
    return true;
  };

  return (
    <>
      <DrawerForm<ServiceCreateReq>
        onVisibleChange={(e) => {
          if (!e || !id) {
            formRef.current?.resetFields();
          }
          onVisibleChange(e);
        }}
        formRef={formRef}
        title={`服务${id ? '编辑' : '添加'}`}
        visible={visible}
        onFinish={onFinish}
        drawerProps={{
          // onClose: () => onDone(),
          destroyOnClose: true,
          bodyStyle: done ? { padding: '72px 0' } : {},
        }}
        request={
          id
            ? async () => {
                console.log(id);
                return getServiceById({ id }).then((e) => {
                  return e.data;
                });
              }
            : undefined
        }
      >
        {visible ? (
          <>
            <ProForm.Group>
              <ProFormText
                width="lg"
                name="name"
                label="名称"
                tooltip="最长为 24 位"
                placeholder="请输入名称"
                rules={[{ required: true, message: '这是必填项' }]}
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormTextArea
                width="lg"
                name="description"
                label="描述"
                placeholder="请输入名称"
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormTextArea
                width="lg"
                name="metadata"
                label="配置信息"
                tooltip="生成服务所需的模板配置"
                placeholder="请输入配置信息"
              />
            </ProForm.Group>
          </>
        ) : (
          <></>
        )}
      </DrawerForm>
    </>
  );
};

export default ControlForm;
