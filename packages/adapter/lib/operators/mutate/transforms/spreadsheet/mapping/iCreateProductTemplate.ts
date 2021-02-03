export interface IRowDataCreateProductTemplate {}

export enum AttributeEnum {
  SIZE = 'size',
  COLOR = 'color',
}

export interface IAttributeMapper {
  key: string
  value: AttributeEnum
}

export interface IVariationCreateProduct {
  name: AttributeEnum
  value: string
}

export interface ICreateProductStock {
  code: string
  costThb: number
  price: number
  quantity: number
}

export interface ICreateProductData {
  name: string
  stock: ICreateProductStock
  variations: IVariationCreateProduct[]
  description: string
}

export enum HeaderTemplate {
  NAME = 'name',
  DESCRIPTION = 'description',
  STOCK_CODE = 'stock-code',
  SIZE = 'size',
  COLOR = 'color',
  QUANTITY = 'quantity',
  COST = 'cost',
}

export interface IFieldValidate {
  key: string
  value: any
}
