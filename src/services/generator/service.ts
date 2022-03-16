// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 列表service 列表service GET /generator/api/v1/service */
export async function getService(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Page & { data?: API.ServiceListItem[] }>('/generator/api/v1/service', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建service 创建service POST /generator/api/v1/service */
export async function postService(body: API.ServiceCreateReq, options?: { [key: string]: any }) {
  return request<API.Response>('/generator/api/v1/service', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取service 获取service GET /generator/api/v1/service/${param0} */
export async function getServiceById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.ServiceGetResp }>(
    `/generator/api/v1/service/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 更新service 更新service PUT /generator/api/v1/service/${param0} */
export async function putServiceById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  body: API.ServiceUpdateReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/generator/api/v1/service/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除service 删除service DELETE /generator/api/v1/service/${param0} */
export async function deleteServiceById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/generator/api/v1/service/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
