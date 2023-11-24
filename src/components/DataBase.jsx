import { useState,useEffect } from "react";

import Tables from './Tables'


const DataBase = ()=>{
    const [DBData,setDBData] = useState();
    const [TableNames,setTableNames] = useState();





    useEffect(() => {

        const getTodos = async () => {

            const response = await fetch("https://sqlmaestro.onrender.com/api/v1/alltables");
            const data = await response.json();
            setDBData(data);
            setTableNames(Object.keys(data))
        }
        getTodos();
        
        
    }, [])
    

    return(
        <div className="">
            <div className="h-[6vh] px-5 py-2 bg-[#2C2E34] w-[704px] border-b">
                <p className="text-xl ">Available Tables</p>
            </div>
            {DBData?<Tables DBData={DBData} TableNames={TableNames} />:<p className="m-5 text-xl">Loading . . . </p>}
            
            
        </div>
    );
}

export default DataBase;