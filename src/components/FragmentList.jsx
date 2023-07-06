import React from 'react'
import { ChildList } from './ChildList'

export const FragmentList = () => {
    const arr =[
    {
        id:1,
        title:'java',
        body:'Java for beginners'
    },
    {
        id:2,
        title:'C',
        body:'Let Us C'
    },
    {
        id:3,
        title:'C#',
        body:'Learning c#'
    }
    ]
    const objList =
        arr.map(item=><ChildList key={item.id} item = {item}/>
        )
    return (
       <>
        {objList}
        </>
    )
}
