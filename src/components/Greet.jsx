import React from 'react'

type GreetProps = {
  name: String,
  age: number
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}! You have 10 unread messages and you have {props.age} age</h2>
    </div>
  )
}
