import React , {useEffect} from 'react'
import {useHistory, useLocation, useRouteMatch} from "react-router-dom"
import Button from './reusables/Button';
import {pathString} from "../helpers" 


const styles = {
    justifyContent: 'space-between',
    display: 'flex',
}

const Header = () => {
    let location = useLocation();
    let history = useHistory();

    let text = pathString(location)
    const goToRoute = () => {
        if(text === "login"){
            history.push("/register")
        }else{
            history.push("/login")
        }
    }

    return (
        <div style={styles}>
            <div> Header</div>
            <Button color='black' text={text === 'login' ? 'register' : 'login'} width="40%" outline={true} action={goToRoute}/>
        </div>
    )
}

export default Header
