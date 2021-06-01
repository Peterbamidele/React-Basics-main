import React from 'react'


import Button from "../../../components/reusables/Button"
import Input from "../../../components/reusables/Input"
import {useEffect} from 'react'
import './Register.css'
    
// import Logo from "../../../"



const Register =() => {

    let data = {
        email :'',
        username: '',
        password: ''

    }
    const getData = (key, value) =>{
        data[key] = value
    }

    const logData = () => {
        console.log(data)

    }  

    useEffect(() => {
        console.log("Login: i mounted")
        return () => console.log("Login: i unMounted")
    }, [])


    return (
        
        <div>
            <h5>Sign Up</h5>
            <div className="loginContainer">

                <Input label = "Email" getData={getData} datakey="email" icon="email"/>
                <Input label = "Username" getData={getData} datakey="username" icon="username"/>
                <Input label = "Password" getData={getData} datakey="password" icon="password"/>
                <Input label = "Confim Password" getData= {getData} datakey="password" icon="password"/>
            </div>    

            <div className = 'loginBtn'>
                <Button color='green' text="Register" width="100%" outline={false} action={logData} key= ""/> 

            </div> 

        </div> 
     
    )
}

export default Register