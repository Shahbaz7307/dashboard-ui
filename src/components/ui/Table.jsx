const Table = ({ columns, data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm md:min-w-full min-w-[600px]">
        <thead>
          <tr className="text-left text-text-secondary border-b border-border">
            {columns.map((col) => (
              <th key={col.key} className="py-2 px-2 whitespace-nowrap">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b border-border last:border-none hover:bg-card-muted transition"
            >
              {columns.map((col) => (
                <td key={col.key} className="py-3 px-2 whitespace-nowrap">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
