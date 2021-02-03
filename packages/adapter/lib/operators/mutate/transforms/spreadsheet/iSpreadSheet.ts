export interface Configure {
  header?: 'A' | number | string[]
  range?: any
  blankrows?: boolean
  defval?: any
  raw?: boolean
}

export type FileType =
  | 'xlsx'
  | 'xlsm'
  | 'xlsb'
  | 'xls'
  | 'xla'
  | 'biff8'
  | 'biff5'
  | 'biff2'
  | 'xlml'
  | 'ods'
  | 'fods'
  | 'csv'
  | 'txt'
  | 'sylk'
  | 'html'
  | 'dif'
  | 'rtf'
  | 'prn'
  | 'eth'
