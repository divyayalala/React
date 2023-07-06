import React from 'react'

export const ChildList = ({item}) => {
    return (
        <>
            <h2>{item.id}</h2>
            <h2>{item.title}</h2>
            <h2>{item.body}</h2>
            </>
    )
}
