import { useState, useEffect } from "react";

import Tables from './Tables'


const DataBase = () => {
    const [DBData, setDBData] = useState();
    const [TableNames, setTableNames] = useState();


    const Warning = `👋 Hey there,The app's loading may be slower due to free backend hosting.The backend server takes about a minute to start up when you first launch the app. We're working on a fix and will transition to a paid service for faster loading times.Bear with us as we make this important improvement. Thanks for your patience!`

    useEffect(() => {

        const getTodos = async () => {

            const response = await fetch("https://sqlmaestro.onrender.com/api/v1/alltables");
            const data = await response.json();
            setDBData(data);
            setTableNames(Object.keys(data))
        }
        getTodos();


    }, [])


    return (
        <div className="w-[50vw] border-s h-[100vh]">
            <div className="h-[6vh] px-5 py-2 bg-[#2C2E34] border-b">
                <p className="text-xl ">Available Tables</p>
            </div>
            {DBData ? <Tables DBData={DBData} TableNames={TableNames} /> : <p className="m-5 text-xl">{Warning}</p>}


        </div>
    );
}

export default DataBase;