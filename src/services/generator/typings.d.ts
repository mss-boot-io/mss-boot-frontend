declare namespace API {
  type GenerateParams = {
    params?: Record<string, any>;
    repo: string;
    service?: string;
  };

  type TemplateGenerateReq = {
    generate?: GenerateParams;
    template?: TemplateParams;
  };

  type TemplateGenerateResp = {
    branch?: string;
    repo?: string;
  };

  type TemplateGetBranchesResp = {
    branches?: string[];
  };

  type TemplateGetParamsResp = {
    params?: TemplateParam[];
  };

  type TemplateGetPathResp = {
    path?: string[];
  };

  type TemplateParam = {
    name?: string;
    tip?: string;
  };

  type TemplateParams = {
    branch?: string;
    path?: string;
    source: string;
  };

  type Response = {
    errorCode?: string;
    errorMessage?: string;
    host?: string;
    showType?: number;
    success?: boolean;
    traceId?: string;
  };

  type undefinedParams = {
    /** template source */
    source: string;
  };

  type undefinedParams = {
    /** template source */
    source: string;
    /** branch default:HEAD */
    branch?: string;
    /** path default:. */
    path?: string;
  };

  type undefinedParams = {
    /** template source */
    source: string;
    /** branch default:HEAD */
    branch?: string;
  };
}
