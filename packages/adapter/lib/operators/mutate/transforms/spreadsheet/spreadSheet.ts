// import * as Parser from 'xlsx'
// import * as _ from 'lodash'
// import { Configure, FileType } from './iSpreadSheet'
// import { MultipleMessage } from '~/infrastructrues/errors/serverError'

// export abstract class SpreadSheet<D, F, R> {
//   protected abstract deserialize(data: D[]): R[]
//   protected abstract serialize(data: R[]): D[]
//   protected validateRows(data: D, index: number, headerRow: number): D {
//     return data
//   }

//   public exportFile(schemas: D[], fileName: string, fileType: FileType = 'xlsx') {
//     const convertSchemaToArrayData = (data: R[]): string[][] => {
//       const headers: string[] = Object.getOwnPropertyNames(_.first(data) ?? {})
//       return data.reduce(
//         (accum: string[][], item: R) => {
//           const row: string[] = headers.map((key: string) => {
//             return _.toString(_.get(item, key, ''))
//           })

//           accum.push(row)
//           return accum
//         },
//         [headers]
//       )
//     }

//     const deserializeData: R[] = this.deserialize(schemas)
//     const ws = Parser.utils.aoa_to_sheet<string>(convertSchemaToArrayData(deserializeData))
//     const wb = Parser.utils.book_new()

//     Parser.utils.book_append_sheet(wb, ws, 'report')
//     Parser.writeFile(wb, `${fileName}.${fileType}`)
//   }

//   public parse(file: File, configuretion: Configure, headerNumber: number = 1, activeSheet: number = 0): Promise<D[]> {
//     const readFile = (resolve: (val: D[]) => void, reject: (val: any) => void) => {
//       const reader = new FileReader()
//       const rABS = !!reader.readAsBinaryString // if not working on platform
//       const listenerLoadFile = (e: ProgressEvent<FileReader>): any => {
//         const bstr = e?.target?.result ?? ''
//         const wb = Parser.read(bstr, { type: rABS ? 'binary' : 'array' })

//         const wsname = wb.SheetNames[activeSheet]
//         const ws = wb.Sheets[wsname]

//         const wholeData: R[] = Parser.utils.sheet_to_json<R>(ws, configuretion)
//         try {
//           const normalize = this.serialize(wholeData)
//           let errors: string[] = []
//           normalize.forEach((data: any, index: number) => {
//             try {
//               if (this.validateRows) {
//                 this.validateRows(data, index, headerNumber)
//               }
//             } catch (e) {
//               if (e instanceof MultipleMessage) {
//                 errors = errors.concat(e.fields)
//               }
//             }
//           })
//           if (errors.length > 0) {
//             throw new MultipleMessage('ParseError', 'ValidateFail', errors)
//           }
//           resolve(this.serialize(wholeData))
//         } catch (e) {
//           reject(e)
//         }
//       }
//       reader.onload = listenerLoadFile

//       if (rABS) {
//         reader.readAsBinaryString(file)
//       } else {
//         reader.readAsArrayBuffer(file)
//       }
//     }

//     return new Promise<D[]>(readFile)
//   }
// }
