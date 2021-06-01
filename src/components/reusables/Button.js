


const Button = ({color,text,width,outline,action}) => {

    const borderOutline = `1px solid ${color}`
    
    const buttonStyle = {
        cursor: 'pointer',
        backgroundColor: outline ? "white"  : color,
        color: outline ? color : '#fff',
        border: outline ? borderOutline : 0,
        display:'block',
        fontSize:'15px',
        padding: '15px',
        width: width,
        textTransform: 'upperCase',
        borderRadius: '4px'
    
    }
    return(
        <button style= {buttonStyle} onClick={action}>{text} </button>
    )
}

Button.defaultProps={
    color: "black"
}

export default Button