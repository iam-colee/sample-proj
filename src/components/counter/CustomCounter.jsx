import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";
import { useState } from "react";

const Counter = ({ ...props }) => {
    const [counter, setCounter] = useState(0)

    const counterIncrement = () => {
        setCounter(counter + 1)
    }

    const counterDecrement = () => {
        setCounter(counter - 1)
    }

    return ( 
        <div className="ds-form-control w-full">
            <label className="ds-label">
                <span className="ds-label-text">{props.title}</span>
            </label>
            <div className="ct-counter ds-input-group relative max-w-[200px]">
                {/* <input className="ct-counter__display peer ds-input ds-input-bordered w-full pl-[58px] pr-[58px] text-center" 
                    type="text"
                    defaultValue={props.counter}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    /> */}
                <button onClick={counterDecrement} disabled={props.disabled}
                    className="ct-counter__decrement ds-btn ds-btn-square ds-btn-accent absolute left-0 h-full rounded-r-none hover:bg-primary peer-focus:bg-primary">
                    <IonIcon icon={removeOutline} className="text-tertiary-content text-lg" />
                </button>
                <button onClick={counterIncrement} disabled={props.disabled}
                    className="ct-counter__increment ds-btn ds-btn-square ds-btn-accent absolute right-0 h-full rounded-l-none hover:bg-primary peer-focus:bg-primary">
                    <IonIcon icon={addOutline} className="text-tertiary-content text-lg"/>
                </button>
                <div className="ct-counter__display peer ds-input ds-input-bordered w-full pl-[58px] pr-[58px] pt-3.5 text-center border border">{counter}</div>
            </div>
        </div>
    );
}

export default Counter;