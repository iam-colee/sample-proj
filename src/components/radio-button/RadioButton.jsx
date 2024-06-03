import { useState } from 'react'

const RadioButton = ({ ...props }) => {
    
    return ( 
        <div className="ds-form-control">
            <label className="ds-label justify-start items-center gap-3 cursor-pointer">
                <input className={`ds-radio ${props.status === 'error' ? 'ds-radio-error' : props.status === 'warning' ? 'ds-radio-warning' : props.status === 'success' ? 'ds-radio-warning' : props.status === 'info' ? 'ds-radio-info' : 'ds-radio-primary'}`} 
                    type="radio"
                    name={props.name} 
                    defaultChecked={props.defaultChecked} 
                    disabled={props.disabled} 
                />
                <span className="ds-label-text font-secondary text-foreground"> {props.rdBtn} </span>
            </label>
        </div>
    );
}

export default RadioButton;