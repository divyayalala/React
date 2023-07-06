import React from 'react'
import {Person} from './Person'
export const NamedList = () => {
    const names = ['Mango','Grapes','Orange','Apple']
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill:'Vue'
        },

    ]
    const nameList =  names.map((a,index)=><h2 key={index}>{index} {a}</h2>)
    const personList = persons.map(person=><Person key = {person.id} person = {person}/>)
    return (
        <div>
              {nameList}
              {personList}
        </div>
    )
}
