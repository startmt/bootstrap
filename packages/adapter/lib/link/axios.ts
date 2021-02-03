import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { from, Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
// import Cookie from 'js-cookie'
import { isEmpty } from 'lodash'
// import { CookieKeyEnum } from '~h/stores/storages/constants/cookieConstant'

import {
  IApi,
  IApiOptions,
  IConfigHeader,
  IConfigurable
} from './iApi'
import { ApiError } from '../error/error'


export class Axios implements IApi {
    public static createAPI(config: IConfigurable) {
      const instance = axios.create({
        baseURL: config.baseURL,
        headers: config.headers,
      })
  
      return new Axios(instance)
    }
  
    private _instance: AxiosInstance
  
    constructor(instance: AxiosInstance) {
      this._instance = instance
    }
  
    public changeHeader(header: IConfigHeader) {
      this._instance.defaults.headers = header
    }
  
    private _responseHanlder<R>(error: { response: AxiosResponse<R> }): ApiError {
      const data = (error?.response?.data as any) ?? {}
  
      if (isEmpty(data)) {
        Object.assign(data, {
          status: '',
          code: undefined,
          message: (error as any).message,
        })
      }
  
      return ApiError.buildError({
        status: error.response?.status.toString(),
        code: data.code as string,
        topic: data.message,
        message: data.localMessage,
        fields: data.reasons,
      })
    }
  
    private _serializeUrl(url: string): string {
      const hasExistingParams = /\?/g.test(url)
      const lang = 'EN'
      // const lang = Cookie.get(CookieKeyEnum.LANG) || 'EN'
      return `${url}${!hasExistingParams ? `?lang=${lang}` : `&lang=${lang}`}`
    }
  
    public get<R>(url: string, config: IApiOptions = {}): Observable<R | ApiError> {
      const request: Promise<any> = this._instance.get<R>(this._serializeUrl(url), config)
  
      return from(request).pipe(
        map((response: any) => {
          return response.data
        }),
        catchError((error: any) => {
          return throwError(this._responseHanlder(error))
        })
      )
    }
  
    public post<R>(url: string, data: any = {}, config: IApiOptions = {}): Observable<R | ApiError> {
      const request: Promise<any> = this._instance.post<R>(this._serializeUrl(url), data, config)
  
      return from(request).pipe(
        map((response: any) => {
          return response.data
        }),
        catchError((error: any) => {
          return throwError(this._responseHanlder(error))
        })
      )
    }
  
    public patch<R>(url: string, data: any = {}, config: IApiOptions = {}): Observable<R | ApiError> {
      const request: Promise<any> = this._instance.patch<R>(this._serializeUrl(url), data, config)
  
      return from(request).pipe(
        map((response: any) => {
          return response.data
        }),
        catchError((error: any) => {
          return throwError(this._responseHanlder(error))
        })
      )
    }
  
    public put<R>(url: string, data: any = {}, config: IApiOptions = {}): Observable<R | ApiError> {
      const request: Promise<any> = this._instance.put<R>(this._serializeUrl(url), data, config)
  
      return from(request).pipe(
        map((response: any) => {
          return response.data
        }),
        catchError((error: any) => {
          return throwError(this._responseHanlder(error))
        })
      )
    }
  
    public delete<R>(url: string, config: IApiOptions = {}): Observable<R | ApiError> {
      const request: Promise<any> = this._instance.delete<R>(this._serializeUrl(url), config)
  
      return from(request).pipe(
        map((response: any) => {
          return response.data
        }),
        catchError((error: any) => {
          return throwError(this._responseHanlder(error))
        })
      )
    }
  }