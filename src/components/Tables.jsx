import TableSturture from './TableSturture'


const Tables = ({DBData,TableNames})=>{    
    return (
        <div className='h-[94vh] overflow-y-scroll'>
        {
            TableNames?.map((e)=>{
                return <TableSturture TableData = {DBData[e]} TableName = {e} key = {e}/>
            })
        }
        </div>
    );
}

export default Tables;