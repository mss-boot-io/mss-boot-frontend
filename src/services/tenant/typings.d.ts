declare namespace API {
  type Claims = {
    accessToken?: string;
    address?: string[];
    affiliation?: string;
    /** the `aud` (Audience) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3 */
    aud?: string[];
    avatar?: string;
    bio?: string;
    birthday?: string;
    createdIp?: string;
    createdTime?: string;
    dingtalk?: string;
    displayName?: string;
    education?: string;
    email?: string;
    exp?: NumericDate;
    facebook?: string;
    gender?: string;
    gitee?: string;
    github?: string;
    gitlab?: string;
    google?: string;
    hash?: string;
    homepage?: string;
    iat?: NumericDate;
    id?: string;
    idCard?: string;
    idCardType?: string;
    isAdmin?: boolean;
    isDefaultAvatar?: boolean;
    isDeleted?: boolean;
    isForbidden?: boolean;
    isGlobalAdmin?: boolean;
    isOnline?: boolean;
    /** the `iss` (Issuer) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1 */
    iss?: string;
    /** the `jti` (JWT ID) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7 */
    jti?: string;
    karma?: number;
    language?: string;
    lark?: string;
    lastSigninIp?: string;
    lastSigninTime?: string;
    ldap?: string;
    linkedin?: string;
    location?: string;
    name?: string;
    nbf?: NumericDate;
    owner?: string;
    password?: string;
    passwordSalt?: string;
    permanentAvatar?: string;
    phone?: string;
    preHash?: string;
    properties?: Record<string, any>;
    qq?: string;
    ranking?: number;
    region?: string;
    score?: number;
    signupApplication?: string;
    /** the `sub` (Subject) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.2 */
    sub?: string;
    tag?: string;
    title?: string;
    type?: string;
    updatedTime?: string;
    wechat?: string;
    wecom?: string;
    weibo?: string;
  };

  type TenantCallbackResp = {
    /** AccessToken is the token that authorizes and authenticates
the requests. */
    accessToken?: string;
    /** Expiry is the optional expiration time of the access token.

If zero, TokenSource implementations will reuse the same
token forever and RefreshToken or equivalent
mechanisms for that TokenSource will not be used. */
    expiry?: string;
    /** RefreshToken is a token that's used by the application
(as opposed to the user) to refresh the access token
if it expires. */
    refreshToken?: string;
    /** TokenType is the type of token.
The Type method returns either this or "Bearer", the default. */
    tokenType?: string;
  };

  type TenantClientResp = {
    appName?: string;
    clientId?: string;
    organizationName?: string;
    serverUrl?: string;
  };

  type TenantCreateReq = {
    /** 联系方式 */
    contact?: string;
    /** 描述 */
    description?: string;
    /** 域名 */
    domains?: string[];
    /** 邮箱 */
    email?: string;
    /** 有效期 */
    expiredAt: string;
    /** 名称 */
    name: string;
    /** 状态 */
    status?: number;
    /** 系统管理 */
    system?: boolean;
  };

  type TenantGetResp = {
    /** 联系方式 */
    contact?: string;
    /** 创建时间 */
    createdAt?: string;
    /** 描述 */
    description?: string;
    /** 域名 */
    domains?: string[];
    /** 有效期 */
    expiredAt: string;
    /** 名称 */
    name?: string;
    /** 状态 */
    status?: number;
    /** 系统管理 */
    system?: boolean;
    /** 更新时间 */
    updatedAt?: string;
  };

  type TenantListItem = {
    /** 联系方式 */
    contact?: string;
    /** 创建时间 */
    createdAt?: string;
    /** 描述 */
    description?: string;
    /** 域名 */
    domains?: string[];
    /** 有效期 */
    expiredAt: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 状态 */
    status?: number;
    /** 系统管理 */
    system?: boolean;
    /** 更新时间 */
    updatedAt?: string;
  };

  type TenantUpdateReq = {
    /** 联系方式 */
    contact?: string;
    /** 描述 */
    description?: string;
    /** 域名 */
    domains?: string[];
    /** 邮箱 */
    email?: string;
    /** 有效期 */
    expiredAt: string;
    /** 名称 */
    name?: string;
  };

  type NumericDate = {
    'time.Time'?: string;
  };

  type Page = {
    current?: number;
    pageSize?: number;
    total?: number;
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
    /** code */
    code?: string;
    /** state */
    state?: string;
    /** error */
    error?: string;
    /** error_description */
    error_description?: string;
  };

  type undefinedParams = {
    /** refresh_token */
    refresh_token?: string;
  };

  type undefinedParams = {
    /** 租户名称 */
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
