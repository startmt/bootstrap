// import get from 'lodash/get'
// import isNil from 'lodash/isNil'
// import flatten from 'lodash/flatten'
// import {
//   ICreateProductData,
//   HeaderTemplate,
//   IFieldValidate,
//   IAttributeMapper,
//   AttributeEnum,
//   IVariationCreateProduct,
// } from './iCreateProductTemplate'
// import { MultipleMessage } from '~/infrastructrues/errors/serverError'
// import { SpreadSheet } from '../spreadSheet'
// import { size, groupBy, pickBy, isEmpty } from 'lodash'
// import { translate } from '~/utils/translate'

// export class CreateProductsTemplate extends SpreadSheet<ICreateProductData, any, any> {
//   protected deserialize(data: ICreateProductData[]): any {}

//   protected serialize(rows: any[]): ICreateProductData[] {
//     const variationKeys: IAttributeMapper[] = [
//       { key: HeaderTemplate.SIZE, value: AttributeEnum.SIZE },
//       { key: HeaderTemplate.COLOR, value: AttributeEnum.COLOR },
//     ]
//     const columnsRequired = [HeaderTemplate.NAME, HeaderTemplate.QUANTITY, HeaderTemplate.COST]
//     const keys = Object.keys(HeaderTemplate).filter(
//       (k) => typeof HeaderTemplate[k as keyof typeof HeaderTemplate] === 'string'
//     )
//     const values = keys.map((k) => HeaderTemplate[k as keyof typeof HeaderTemplate])
//     const header = rows.reduce((header, row) => Object.assign(header, row), {})
//     const headerMissings: string[] = values.filter((value: string) => typeof header[value] === 'undefined')

//     const columnValuesMissing: string[] = flatten(
//       rows
//         .map((row: any, index: number) => {
//           return columnsRequired
//             .filter((headerText) => {
//               return isNil(row[headerText]) || row[headerText] === ''
//             })
//             .reduce((accum: string[], current: string) => {
//               accum.push(
//                 translate('file.column_value_missing_error_msg', {
//                   columnNo: current,
//                   rowNo: index + 1,
//                 })
//               )
//               return accum
//             }, [])
//         })
//         .filter((valueMissing: string[]) => {
//           return size(valueMissing) > 0
//         })
//     )

//     const notAllowDuplicatedField = [HeaderTemplate.STOCK_CODE]

//     const checkDuplicated = () => {
//       return notAllowDuplicatedField.reduce((errors: string[], current: string) => {
//         const fieldGroup = pickBy(groupBy(rows, current), (value: string[]) => value.length > 1)
//         if (!isEmpty(fieldGroup)) {
//           errors.push(
//             translate('file.column_is_duplicated', {
//               columnNo: current,
//             })
//           )
//         }

//         return errors
//       }, [])
//     }

//     const duplicatedColumns = checkDuplicated()

//     if (rows.length === 0) {
//       throw new MultipleMessage(`invalid input`, `invalid input`, [translate('file.file_empty')])
//     } else if (headerMissings.length > 0) {
//       throw new MultipleMessage(
//         `invalid input`,
//         `invalid input`,
//         headerMissings.map((value: string) => translate('file.header_is_missing', { name: value }))
//       )
//     } else if (columnValuesMissing.length > 0) {
//       throw new MultipleMessage(`Data missing`, `Data missing`, columnValuesMissing)
//     } else if (duplicatedColumns.length > 0) {
//       throw new MultipleMessage(`invalid input`, `invalid input`, duplicatedColumns)
//     }

//     return rows.map((row: any) => {
//       const variations: IVariationCreateProduct[] = variationKeys
//         .map((mapper: IAttributeMapper) => ({
//           name: mapper.value,
//           value: get(row, mapper.key)?.toString() as string,
//         }))
//         .filter((attribute: { name: AttributeEnum; value: string }) => {
//           return !isNil(attribute.value)
//         })

//       return {
//         name: row[HeaderTemplate.NAME]?.toString(),
//         stock: {
//           code: row[HeaderTemplate.STOCK_CODE],
//           costThb: Number(row[HeaderTemplate.COST]),
//           price: Number(row[HeaderTemplate.COST]),
//           quantity: Number(row[HeaderTemplate.QUANTITY]),
//         },
//         variations,
//         description: row[HeaderTemplate.DESCRIPTION]?.toString(),
//       }
//     })
//   }

//   protected validateRows(row: ICreateProductData, index: number, headerRow: number): ICreateProductData {
//     const errors: string[] = []
//     const onlyNumberfields: IFieldValidate[] = [
//       {
//         key: HeaderTemplate.QUANTITY,
//         value: row.stock.quantity?.toString(),
//       },
//       {
//         key: HeaderTemplate.COST,
//         value: row.stock.costThb?.toString(),
//       },
//     ]

//     if (row?.stock.code && !/^[0-9a-zA-Z]*$/g.test(row?.stock.code)) {
//       errors.push(
//         translate('file.must_be_characteric_only', {
//           rowNo: headerRow + (index + 1),
//           columName: HeaderTemplate.STOCK_CODE,
//         })
//       )
//     }

//     onlyNumberfields.forEach((field: IFieldValidate) => {
//       if (!field.value || !/^[0-9]*$/g.test(field.value)) {
//         errors.push(
//           translate('file.must_be_number_only', {
//             rowNo: headerRow + (index + 1),
//             columName: field.key,
//           })
//         )
//       }
//     })

//     if (errors.length > 0) {
//       throw new MultipleMessage('ParseError', 'ValidateFail', errors)
//     }

//     return row
//   }
// }
