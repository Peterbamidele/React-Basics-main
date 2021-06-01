import {useState} from 'react'
import {useEffect} from 'react'
  
  import React from 'react'

const Input = ({label,datakey, getData,icon}) =>{

    const [text, setText] = useState('')

    const inputContainer = {
        position:  'relative',
        marginBottom: '10px'
}  
  
    const inputIcon = {
        position: 'absolute',
        right: '15px',
        top: '30px',
        color: 'gray',
        fontSize: '20px'
    }


    
    const updateText = (value) => {
        if (datakey) getData(datakey.toLowerCase(), value)
        setText(value)
    }

    useEffect(() => {
        console.log("input mounted")
        return () => {
            console.log("input unmounted")
        }
    }, [text])
     
      return (
          <div style= {inputContainer}>
              <label htmlFor="text">{label}</label>
              <input type="text" value ={text} onChange={(e) => updateText(e.target.value)} placeholder = "Enter text..."/>
              <i className="material-icons" style={inputIcon}>{icon}</i>
          </div>
      )
  }
  
  export default Input
  