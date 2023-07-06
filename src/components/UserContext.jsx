//1.creating context
import React from 'react'
const UserContext = React.createContext('Center for Good Governance')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext