

const TableSturture = ({ TableData ,TableName}) => {

    const columnName = Object.keys(TableData[0]);

    return (
        <div class="mb-10 mt-3 mx-3">
            <p className="mb-3 text-lg font-semibold">{TableName}</p>
            {
                <table class="table-auto text-center w-full">
                    <thead class="text-xs">
                        <tr>
                            {
                                columnName.map((name) => {
                                    return <th  class="px-2 py-3 border" key={name}>{name}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>


                        {
                            TableData.map((TableRow) => {

                                return (
                                    <tr class="text-xs">
                                        {
                                            columnName.map((name) => {
                                                return <th  class="border px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={name}>{TableRow[name]}</th>
                                            })
                                        }

                                    </tr>

                                )
                            })
                        }

                    </tbody>

                </table>
            }
</div>
    );
}

export default TableSturture;