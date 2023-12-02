import TableSturture from './TableSturture';


const Result = (QueryResult)=>{
    return(
        <div className='h-[40vh] overflow-y-scroll border-t border-e'>
            <div className='mx-9 mt-5'>
                <p className='text-xl'>Output</p>
            </div>
            {QueryResult?.QueryResult?<TableSturture TableData = {QueryResult?.QueryResult}/>:<p className="ms-9 mt-5 text-xl">Loading . . . </p>}
        </div>
    );
}

export default Result;