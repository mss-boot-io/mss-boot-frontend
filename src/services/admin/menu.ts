// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 列表menu 列表menu GET /admin/api/v1/menu */
export async function getMenu(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Page & { data?: API.MenuListItem[] }>('/admin/api/v1/menu', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建menu 创建menu POST /admin/api/v1/menu */
export async function postMenu(body: API.MenuCreateReq, options?: { [key: string]: any }) {
  return request<API.Response>('/admin/api/v1/menu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取menu 获取menu GET /admin/api/v1/menu/${param0} */
export async function getMenuById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response & { data?: API.MenuGetResp }>(`/admin/api/v1/menu/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新menu 更新menu PUT /admin/api/v1/menu/${param0} */
export async function putMenuById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  body: API.MenuUpdateReq,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/admin/api/v1/menu/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除menu 删除menu DELETE /admin/api/v1/menu/${param0} */
export async function deleteMenuById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Response>(`/admin/api/v1/menu/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
