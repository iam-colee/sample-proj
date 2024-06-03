import { useState } from 'react'

const Checkbox = ({ ...props }) => {
    const [val, setVal] = useState(false);
    
    return ( 
        <div className="ds-form-control">
            <label className="ds-label justify-start items-center gap-3 cursor-pointer">
                <input className={`ds-checkbox ${props.status === 'error' ? 'ds-checkbox-error' : props.status === 'warning' ? 'ds-checkbox-warning' : props.status === 'success' ? 'ds-checkbox-success' : props.status === 'info' ? 'ds-checkbox-info' : 'ds-checkbox-primary'}`}
                    type="checkbox"
                    value={val}
                    setValue={setVal}
                    defaultChecked={props.defaultChecked}
                    disabled={props.disabled} />
                <span className="ds-label-text font-secondary text-foreground">{props.chckTxt}</span>
            </label>
        </div>
    );
}

export default Checkbox;