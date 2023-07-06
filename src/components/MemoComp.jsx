import React from 'react'
const MemoComp = ({name}) => {
    console.log('rendering memo component')
    return (
        <div>
            {name}
        </div>
    )
}
export default React.memo(MemoComp)

//when the parent rerenders MemoComp also rerenders 
//but the name prop is going to stay the same with every rerender
//so we need a way to avoid rerendering this memocomp func component 
//we can do that by using react.memo()
//props are not changing its better to avoid rerendering memo component  

//memo:something called higherorder component 
//accepts a component and returns a new enhanced component 
//in this case a component capable of avoiding rerenders when 
//there is no change in props
//similar to pure component it works with func component instead