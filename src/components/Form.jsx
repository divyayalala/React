import React,{useState} from 'react'

export const Form = () => {
    const [username,setUsername] = useState('');
    console.log(username)
    const submitHandler = (event)=>{
        event.preventDefault();
        alert(`from data is ${username}`)
    }
    return (
            <form onSubmit={submitHandler}>
                <div>
                    <label>Username</label>
                    <input type="text" value = {username} onChange={(event)=>setUsername(event.target.value)}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
    )
}
