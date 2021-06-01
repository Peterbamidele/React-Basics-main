import Button from "../../../components/reusables/Button"
import Input from "../../../components/reusables/Input"
import {useEffect, useState} from 'react'
import './Login.css'
    
import Logo from "../../../"
import { useHistory } from "react-router"



const Login =() => {

    let data = {
        // username: '',
        // password: ''
}
    const getData = (key, value) =>{
        data[key] = value
    }

    const logData = () => {
        console.log(data)

    }  

    const [loading, setLoading] = useState(false)


    const history = useHistory()

    const loginUser = async () =>{
        setLoading(true)
        try{
            let res = await fetch('http://locahost:5000/users/?email=${data.email}&password=&{data.password}')
            .catch(err => console.error(err))
            let  result = await res.json()
            setLoading(false)
            console.log(result)

            if (result.length > 0) history.push("/posts")
        }catch (error){
            setLoading(false)
            console.error(error)
        }
    }
    return (
        
        <div>
            <h5>Welcome</h5>
            <div className="loginContainer">
                <Input label = "email" getData={getData} datakey="email" icon="email"/>
                <Input label = "password" getData= {getData} datakey="password" icon="person"/>
            </div>    

            <div className = 'loginBtn'>
                <Button color='green' text={loading ? 'loading' : 'login'} width="100%" outline={false} action={logData} key= ""/> 

            </div> 

        </div> 
     
    )
}

export default Login