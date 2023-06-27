export const Greet = ({name,designation,children}) => {
    console.log(name+' '+designation+' '+children)
    return (
        <div>
            <h1>Hello {name} a.k.a {designation}</h1>
            {children}
        </div>
    )
}
