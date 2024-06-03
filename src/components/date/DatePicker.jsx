import { IonIcon } from "@ionic/react";
import { calendar } from "ionicons/icons";

const DatePicker = ({ ...props }) => {
    return ( 
        <div className="ds-form-control w-full">
            <label className="ds-label">
                <span className="ds-label-text">{props.title}</span>
            </label>

            <div className="relative">
                <input datepicker type="text" placeholder="Select date"
                    className="datepicker peer ds-input ds-input-bordered w-full pr-[40px]" />

                <span className="group absolute right-0 top-0 w-[40px] h-full flex items-center justify-center cursor-pointer text-accent peer-focus:text-primary pointer-events-none">
                    <IonIcon icon={calendar} className="text-base text-inherit" />
                </span>
            </div>
        </div>
    );
}

export default DatePicker;