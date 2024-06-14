import React from "react";

const List = ({peoples})=>{

    const {id, name, age, image} = peoples
    
    return(
        <>
            <div className="section h-fit w-2/5 p-3 flex items-center justify-start border-2 border-black rounded-full bg-yellow-400">
                <img className="image h-20 w-20 mx-3 rounded-full object-cover object-top" src={image}/>
                <div>
                    <h1 className="name font-bold text-xl" >{name}</h1>
                    <p className="age font-normal text-sm">Age: {age}</p>
                </div>
                
            </div>
        </>
    )
}

export default List