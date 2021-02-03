export enum DomainErrorCode {
    INVALID_CONTENT = 'invalidContent',
    NOT_FOUND = 'notFound',
    UNKNOWN = 'unknown',
    UNAUTHORIZED = 'unAuthorized',
    FORBIDDEN = 'forbidden',
    METHOD_NOT_ALLOWED = 'methodNotAllowed',
    NOT_ACCEPTABLE = 'notAcceptable',
    INTERNAL_SERVER_ERROR = 'internalServerError',
    BAD_GATEWAY = 'badGateway',
    SERVICE_UNAVAILABLE = 'serviceUnavailable',
    GATEWAY_TIMEOUT = 'gatewayTimeout',
  }
  
  export enum StatusCode {
    BAD_REQUEST = '400',
    UNAUTHORIZED = '401',
    FORBIDDEN = '403',
    NOT_FOUND = '404',
    METHOD_NOT_ALLOWED = '405',
    NOT_ACCEPTABLE = '406',
    INTERNAL_SERVER_ERROR = '500',
    BAD_GATEWAY = '502',
    SERVICE_UNAVAILABLE = '503',
    GATEWAY_TIMEOUT = '504',
  }
  
  export interface IErrors {
    row: string
    message: string
  }
  
  export interface IBuildAPIErrorPayload {
    status: string
    code: string
    topic: string
    message: string
    fields?: string[]
  }
  