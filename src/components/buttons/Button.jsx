const Button = ({ ...props }) => {
    return ( 
        <button className={`ds-btn ${props.btnClass}`} disabled={props.disabled}>{props.btnTxt}</button>
    );
}

export default Button;