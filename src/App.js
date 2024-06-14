import React, { useState } from "react";
import List from "./Component/list.js"
import Data from "./Component/data.js";

const AppLayout = ()=>{

    const [peoples, setPeoples] = useState(Data)

    return(
        <>
        <div className=" p-5 h-screen w-full bg-fuchsia-950 flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl font-mono py-2 text-white font-extrabold">List of {peoples.length} Students</h2>
            
                {peoples.map(people => <List key={Data.id} peoples={people}/>)}
            
            <button className="button px-5 py-2 border-2 border-black rounded-full bg-yellow-400" onClick={ () => setPeoples([]) }>Clear All</button>
        </div>
        </>
    )
}

export default AppLayout