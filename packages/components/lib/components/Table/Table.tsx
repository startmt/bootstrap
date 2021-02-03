import React, { useMemo } from 'react'
import get from 'lodash/get'
import size from 'lodash/size'

import { TableProps } from './iTable'

const Table: React.FunctionComponent<TableProps> = React.memo(({
    columns,
    data,
    isShowAll,
    sizeLimitation,
    onClickLoadMore,
    messageWhenDataIsEmpty,
    customClasses,
    handleOnSelectedRow,
    isPending,
}) => {
    return null
    // const displayRecords = useMemo(() => {
    //     const dataDisplayable = data.slice(0, isShowAll ? data.length : sizeLimitation)
    //     const renderColumns = (key, allColumn, rowData) => {
    //         return allColumn.map((column, index) => (
    //             <td
    //                 key={`${key}_${index}`}
    //                 width={column.width}
    //                 className={`${classes.table_td} ${column.options?.isHeaderAvailable === false ? classes.table_td_headless : ''} ${column.classes ? column.classes : ''}`}
    //             >
    //                 { column.renderCell(get(rowData, column.field), index, rowData) }
    //             </td>
    //         ))
    //     }

    //     return dataDisplayable.map((rowData) => {
    //         return (
    //             <tr onClick={() => {
    //                 if (typeof handleOnSelectedRow !== 'undefined') {
    //                     handleOnSelectedRow(rowData)
    //                 }
    //             }} className={classes.table_tr} key={ rowData.key }>
    //                 { renderColumns(rowData.key, columns, rowData) }
    //             </tr>
    //         )
    //     })
    // }, [
    //     handleOnSelectedRow,
    //     classes,
    //     data,
    //     isShowAll,
    //     sizeLimitation,
    //     columns
    // ])

    // return (
    //     <div className={classes.root}>
    //         <table className={ `${classes.table_bordered}` }>
    //             <thead>
    //                 <tr className={classes.table_header_tr}>
    //                     {
    //                         columns.map(({ headerTitle, options }) => {
    //                             if (options?.isHeaderAvailable === false) {
    //                                 return <th></th>
    //                             }

    //                             return (
    //                                 <th
    //                                     className={classes.table_header_td}
    //                                     key={headerTitle}
    //                                 >
    //                                     { headerTitle }
    //                                 </th>
    //                             )
    //                         })
    //                     }
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 { isPending ? 
    //                 <div className={classes.icon_wrapper}>
    //                     <Icon
    //                         src={props => <LoaderIcon {...props} />}
    //                         size={32}
    //                         classes={{ icon: classes.indicator }}
    //                     />
    //                 </div> : displayRecords }
    //             </tbody>
    //         </table>
    //         <div className={classes.empty_error_msg}>
    //             { (data.length === 0 && !isPending) && messageWhenDataIsEmpty }
    //         </div>
    //         {
    //             (!isShowAll && size(data) > sizeLimitation) &&
    //             <button
    //                 onClick={onClickLoadMore}
    //                 className={classes.foot}
    //             >
    //                 <Icon src={(props) => <ArrowsDown {...props}/>} size={24} />
    //             </button>
    //         }
    //     </div>
    // )
})

export default Table
