
import { useTable } from "react-table"

const Table = ({columns,data}) => {
    const  {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow

    } = useTable({ columns,data})
    return (
        <table className="min-w-max w-full table-auto" {...getTableProps()}>
          <thead>
          {headerGroups.map(headerGroup => (
          <tr className=" text-gray-600 border-t-2 border-b-2 shadow-sm border-gray-100 uppercase text-sm leading-normal" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className="py-3 px-4 text-left" {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
          </thead>
          <tbody className="text-gray-600 text-sm font-light" {...getTableBodyProps()}>
          {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="border-b border-gray-100 hover:bg-gray-100" {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td className="py-3 px-6 text-left whitespace-nowrap" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}

          </tbody>
            
        </table>
    )
}

export default Table
