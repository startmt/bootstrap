// import isNil from 'lodash/isNil'

// export class Model {
//     private _id: string

//     constructor(id: string) {
//         this._id = id
//     }

//     get id(): string {
//         return this._id
//     }
// }

// export class Command {
//     private _payload?: Model
//     private _error?: string

//     constructor(payload?: Model, error?: string) {
//         this._payload = payload
//         this._error = error
//     }

//     public error() {
//         return !isNil(this._error) ? this._error : null
//     }

//     public payload(): Model {
//         return this._payload
//     }

//     public isSuccess(): boolean {
//         return !!this.error
//     }
// }

// export class Batch {
//     private _commands: Command[] = []

//     constructor(commands: Command[]) {
//         this._commands = commands
//     }

//     get commands(): Command[] {
//         return this._commands
//     }
// }