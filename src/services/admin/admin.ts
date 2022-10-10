// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取access_token 获取access_token GET /admin/api/v1/callback */
export async function getCallback(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.TenantCallbackResp }>('/admin/api/v1/callback', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取client配置 获取client配置 GET /admin/api/v1/client */
export async function getClient(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.TenantClientResp }>('/admin/api/v1/client', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前用户 获取当前用户 GET /admin/api/v1/current-user */
export async function getCurrentUser(options?: { [key: string]: any }) {
  return request<API.Response & { data?: API.Claims }>('/admin/api/v1/current-user', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取accessToken 获取accessToken GET /admin/api/v1/refresh-token */
export async function getRefreshToken(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.TenantCallbackResp }>('/admin/api/v1/refresh-token', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 列表tenant 列表tenant GET /admin/api/v1/tenant */
export async function getTenant(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Page & { data?: API.TenantListItem[] }>('/admin/api/v1/tenant', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建tenant 创建tenant POST /admin/api/v1/tenant */
export async function postTenant(body: API.TenantCreateReq, options?: { [key: string]: any }) {
  return request<API.Response>('/admin/api/v1/tenant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取tenant 获取tenant GET /admin/api/v1/tenant/${param0} */
export async function getTenantById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.TenantGetResp }>(`/admin/api/v1/tenant/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新tenant 更新tenant PUT /admin/api/v1/tenant/${param0} */
export async function putTenantById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  body: API.TenantUpdateReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/admin/api/v1/tenant/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除tenant 删除tenant DELETE /admin/api/v1/tenant/${param0} */
export async function deleteTenantById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/admin/api/v1/tenant/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
