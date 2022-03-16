declare namespace API {
  type ModelCreateReq = {
    description?: string;
    metadata?: any;
    name?: string;
    service?: string;
  };

  type ModelGetResp = {
    createdAt?: string;
    description?: string;
    id?: string;
    metadata?: any;
    name?: string;
    service?: string;
    status?: number;
    updatedAt?: string;
  };

  type ModelListItem = {
    createdAt?: string;
    description?: string;
    id?: string;
    name?: string;
    service?: string;
    status?: number;
    updatedAt?: string;
  };

  type ModelUpdateReq = {
    description?: string;
    metadata?: any;
    name?: string;
    service?: string;
  };

  type ServiceCreateReq = {
    description?: string;
    metadata?: any;
    name?: string;
  };

  type ServiceGetResp = {
    createdAt?: string;
    description?: string;
    id?: string;
    metadata?: any;
    name?: string;
    status?: number;
    updatedAt?: string;
  };

  type ServiceListItem = {
    createdAt?: string;
    description?: string;
    id?: string;
    name?: string;
    status?: number;
    updatedAt?: string;
  };

  type ServiceUpdateReq = {
    description?: string;
    metadata?: any;
    name?: string;
  };

  type Page = {
    current?: number;
    pageSize?: number;
    total?: number;
  };

  type Response = {
    code?: number;
    msg?: string;
    /** 数据集 */
    requestId?: string;
    status?: string;
  };

  type undefinedParams = {
    /** 名称 */
    name?: string;
    /** 当前页 */
    page?: string;
    /** 每页容量 */
    pageSize?: string;
  };

  type undefinedParams = {
    /** id */
    id: string;
  };

  type undefinedParams = {
    /** id */
    id: string;
  };

  type undefinedParams = {
    /** id */
    id: string;
  };

  type undefinedParams = {
    /** 名称 */
    name?: string;
    /** 当前页 */
    page?: string;
    /** 每页容量 */
    pageSize?: string;
  };

  type undefinedParams = {
    /** id */
    id: string;
  };

  type undefinedParams = {
    /** id */
    id: string;
  };

  type undefinedParams = {
    /** id */
    id: string;
  };
}
