export class Message {
  private _message: string
  private _topic: string

  constructor(topic: string, msg: string) {
    this._message = msg
    this._topic = topic
  }

  get message() {
    return this._message
  }

  set message(msg: string) {
    this._message = msg
  }
}

export class MultipleMessage extends Message {
  private _fields: string[] = []

  constructor(topic: string, msg: string, fields: string[]) {
    super(topic, msg)

    this._fields = fields
  }

  get fields() {
    return this._fields
  }

  set fields(fields: string[]) {
    this._fields = fields
  }
}
