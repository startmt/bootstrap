interface ColumnOption {
    isHeaderAvailable: boolean
}

interface Columns {
    headerTitle: string
    field: string
    renderCell: () => React.ReactNode
    width: string
    options: ColumnOption
}

interface CustomClasses {
    table_header_tr: string
    table_header_td: string
    table_td: string
    empty_error_msg: string
    table_td_headless: string
}

export interface TableProps {
    isPending: boolean
    handleOnSelectedRow: () => void
    customClasses: CustomClasses
    messageWhenDataIsEmpty: string
    data: any[]
    isShowAll: boolean
    sizeLimitation: number
    onClickLoadMore: () => void
    columns: Columns[]
}
