const ToggleSwitch = ({ ...props }) => {
    return ( 
        <div className="ds-form-control">
            <label className="flex cursor-pointer gap-2" htmlFor={props.htmlFor}>
                <input className={`ds-toggle ${props.switchClass}`}
                    name={props.name}
                    id={props.id}
                    type="checkbox" 
                    defaultChecked={props.defaultChecked}
                />
                <span className="ds-label-text font-secondary text-foreground"> {props.switchTxt} </span>
            </label>
        </div>
    );
}

export default ToggleSwitch;