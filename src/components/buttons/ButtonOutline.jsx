const ButtonOutline = ({ ...props }) => {
    return ( 
        <button className={`ds-btn ds-btn-outline ${props.btnClass}`}>{props.btnTxt}</button>
    );
}

export default ButtonOutline;