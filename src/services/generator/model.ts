// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 列表model 列表model GET /generator/api/v1/model */
export async function getModel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Page & { data?: API.ModelListItem[] }>('/generator/api/v1/model', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建model 创建model POST /generator/api/v1/model */
export async function postModel(body: API.ModelCreateReq, options?: { [key: string]: any }) {
  return request<API.Response>('/generator/api/v1/model', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取model 获取model GET /generator/api/v1/model/${param0} */
export async function getModelById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.ModelGetResp }>(`/generator/api/v1/model/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新model 更新model PUT /generator/api/v1/model/${param0} */
export async function putModelById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  body: API.ModelUpdateReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/generator/api/v1/model/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除model 删除model DELETE /generator/api/v1/model/${param0} */
export async function deleteModelById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/generator/api/v1/model/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
