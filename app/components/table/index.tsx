import {TableProps} from "@/app/interfaces/store/table.interface";
import Label from "@/app/components/label";

const Table: React.FC<TableProps> = ({rows, columns}) => {
  // Verificação se rows é um array
  if (!Array.isArray(rows) || rows.length === 0) {
    return <div className="w-[100%] flex items-center justify-center p-10"><Label>Não há dados para exibir</Label></div>;
  }

  return (
      <table className="w-[100%]" >
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.field} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {column.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.field} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default Table;
