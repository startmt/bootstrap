import {
    DomainErrorCode,
    IBuildAPIErrorPayload,
    StatusCode
} from './iServer'
import {
    Message,
    MultipleMessage
} from './error'

export class ApiError {
    private _code: DomainErrorCode
    private _message: Message
  
    public static buildError(payload: IBuildAPIErrorPayload) {
      const statusCode = payload.status?.toString() ?? ''
      let code = DomainErrorCode.UNKNOWN
  
      if (!isNaN(Number(payload.status)) && Number(payload.status) < 500) {
        switch (statusCode) {
          case StatusCode.BAD_REQUEST: {
            code = DomainErrorCode.INVALID_CONTENT
            break
          }
          case StatusCode.UNAUTHORIZED: {
            code = DomainErrorCode.UNAUTHORIZED
            break
          }
          case StatusCode.FORBIDDEN: {
            code = DomainErrorCode.FORBIDDEN
            break
          }
          case StatusCode.NOT_FOUND: {
            code = DomainErrorCode.NOT_FOUND
            break
          }
          case StatusCode.METHOD_NOT_ALLOWED: {
            code = DomainErrorCode.METHOD_NOT_ALLOWED
            break
          }
          case StatusCode.NOT_ACCEPTABLE: {
            code = DomainErrorCode.NOT_ACCEPTABLE
            break
          }
          default: {
            code = DomainErrorCode.UNKNOWN
          }
        }
      } else {
        switch (statusCode) {
          case StatusCode.INTERNAL_SERVER_ERROR: {
            code = DomainErrorCode.INTERNAL_SERVER_ERROR
            break
          }
          case StatusCode.BAD_GATEWAY: {
            code = DomainErrorCode.BAD_GATEWAY
            break
          }
          case StatusCode.SERVICE_UNAVAILABLE: {
            code = DomainErrorCode.SERVICE_UNAVAILABLE
            break
          }
          default: {
            code = DomainErrorCode.UNKNOWN
          }
        }
      }
  
      if (payload.fields) {
        return new ApiError(
          code,
          new MultipleMessage(payload.topic, payload.message, payload.fields)
        )
      } else {
        return new ApiError(
          code,
          new Message(payload.topic, payload.message)
        )
      }
    }
  
    constructor(code: DomainErrorCode, message: Message) {
      this._code = code
      this._message = message
    }
    get code() {
      return this._code
    }
  
    get message(): Message {
      return this._message
    }
  
    set message(msg: Message) {
      this._message = msg
    }
  }