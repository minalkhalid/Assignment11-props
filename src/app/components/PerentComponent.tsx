import React from 'react'
import ChildComponent from './ChildComponent'

const PerentComponent = () => {
    const data = [
      {
        name:"Zoya",
        age:23,
        fvtColor:"pink",
        fvtDish:"biryani"
      },
      {
        name:'Abeer',
        age:14,
        fvtColor:"black",
        fvtDish:"Pizza"
      },
      {
        name:"Meerab",
        age:20,
        fvtColor:"blue",
        fvtDish:"Burger"
      }
    ]
  return (
    <div>
      {data.map((person,index) =>(
        <ChildComponent 
        key={index}
        name={person.name}
        age={person.age}
        fvtColor={person.fvtColor}
        fvtDish={person.fvtDish} />
      ))}
        
    </div>
  )
}

export default PerentComponent