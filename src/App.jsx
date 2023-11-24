import { useState } from 'react'
import './App.css'

import Ide from './components/Ide';
import Result from './components/Result';
import DataBase from './components/DataBase';
import Header from './components/Header';


function App() {

  const [SqlQuery, setSqlQuery] = useState("select * from PRODUCTS;");
  const [QueryResult , setQueryResult] = useState();

  return (
    <div className='bg-[#303130] text-white h-full flex flex-col'>

      <div className='flex'>
        <div className='flex flex-col flex-1'>
          <Header SqlQuery={SqlQuery} setQueryResult={setQueryResult} />
          <Ide setSqlQuery={setSqlQuery} />
          <Result QueryResult={QueryResult}/>
        </div>
        <div className=''>
          <DataBase />
        </div>
      </div>
    </div>
  )
}

export default App
