import { counter } from "@fortawesome/fontawesome-svg-core";
import { IonIcon } from "@ionic/react";
import { caretDownOutline, caretUpOutline } from "ionicons/icons";
import { useState } from "react";

const Counter = ({ ... props }) => {
    const [count, setAdd] = useState(0)

    const toggleAdd = ()=> {
        setAdd(count + 1)
    }

    const toggleMinus = ()=> {
        if (count <= 0) {
            setAdd(count = 0)
        } else {
            setAdd(count - 1)
        }
    }

    return ( 
        <div className="ds-form-control w-full max-w-[200px]">
            <label className="ds-label">
                <span className="ds-label-text">{props.title}</span>
            </label>
            <div className="ct-counter relative">
                {/* <input 
                    type="text" 
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                    className="ct-counter__display peer ds-input ds-input-bordered w-full pr-[58px]" 
                    disabled={props.disabled}
                /> */}
                <span 
                    className="border border-red-600 absolute right-0 top-0 w-[48px] rounded-r-lg h-full bg-accent flex flex-col items-center justify-center peer-focus:bg-primary">
                    <button disabled={props.disabled} onClick={toggleAdd}>
                        <IonIcon icon={caretUpOutline} className="border border-green-600 ct-counter__increment text-base text-tertiary-content cursor-pointer hover:opacity-50" />
                    </button>
                    <button disabled={props.disabled} onClick={toggleMinus}>
                        <IonIcon icon={caretDownOutline} className="border border-green-600 ct-counter__decrement text-base text-tertiary-content cursor-pointer hover:opacity-50" />
                    </button>
                </span>
                <div className="ct-counter__display peer ds-input ds-input-bordered w-full pt-3.5 pr-[58px]" >{count}</div>
            </div>

            <label className="ds-label justify-end">
                <span className="ds-label-text-alt text-tertiary">{props.label}</span>
            </label>
        </div>
    );
}

export default Counter;