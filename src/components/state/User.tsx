import React, { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  // const [user, setUser] = useState<null |AuthUser >(null)
  const [user, setUser] = useState<AuthUser >({} as AuthUser) // dessa forma posso tira ro optional 
  // chaining do estado, uma vez que o valor nunca será null. Fazer isso quando confiamos que o user 
  // vai ser inicializado assim que inicializar
  const handleLogin = () => {
    setUser({
      name: 'roger',
      email: 'roger@email.com',
    })
  }
  const handleLogout = () => {
    // setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is name is {user.name}</div>
      <div>User is email is {user.email}</div>
      {/* <div>User is name is {user?.name}</div> */}
      {/* <div>User is email is {user?.email}</div> */}
    </div>
  )
}
