import { Observable } from 'rxjs'
import { ApiError } from '../error'

export interface IConfigHeader {
  Authorization?: string
}

export interface IConfigurable {
  baseURL: string
  headers?: IConfigHeader
}


export enum ApiMethod {
  GET = 'GET',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  LINK = 'LINK',
  UNLINK = 'UNLINK',
}

export interface IApiOptions {
  url?: string
  method?: ApiMethod
  baseURL?: string
  headers?: any
  params?: any
  paramsSerializer?: (params: any) => string
  timeout?: number
  data?: any
}

export interface IApi {
  changeHeader: (header: IConfigHeader) => void
  get: <R>(url: string, options?: IApiOptions) => Observable<R | ApiError>
  post: <R>(url: string, data: any, options?: IApiOptions) => Observable<R | ApiError>
  patch: <R>(url: string, data: any, options?: IApiOptions) => Observable<R | ApiError>
  put: <R>(url: string, data: any, options?: IApiOptions) => Observable<R | ApiError>
  delete: <R>(url: string, options?: IApiOptions) => Observable<R | ApiError>
}
