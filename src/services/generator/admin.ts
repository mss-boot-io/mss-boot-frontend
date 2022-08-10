// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 从模版生成代码 从模版生成代码 POST /generator/api/v1/template/generate */
export async function postGenerate(
  body: API.TemplateGenerateReq,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.TemplateGenerateResp }>(
    '/generator/api/v1/template/generate',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取template分支 获取template分支 GET /generator/api/v1/template/get-branches */
export async function getGetBranches(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.TemplateGetBranchesResp }>(
    '/generator/api/v1/template/get-branches',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取template参数配置 获取template参数配置 GET /generator/api/v1/template/get-params */
export async function getGetParams(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.TemplateGetParamsResp }>(
    '/generator/api/v1/template/get-params',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取template文件路径list 获取template文件路径list GET /generator/api/v1/template/get-path */
export async function getGetPath(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { data?: API.TemplateGetPathResp }>(
    '/generator/api/v1/template/get-path',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
