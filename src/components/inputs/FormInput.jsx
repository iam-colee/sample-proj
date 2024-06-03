import { IonIcon } from "@ionic/react";
import { checkmarkCircleOutline, eye, eyeOff } from "ionicons/icons";
import { useState } from "react";

const FormInput = ({ ...props }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return ( 
        <div className="ds-form-control w-full">
            {/* TITLE */}
            {props.title && (
                <label className="ds-label">
                    <span className="ds-label-text capitalize">{props.title}</span>
                </label>
            )}

            <div className="relative">
                {/* INPUT FIELD */}
                <input
                    id={props.id}
                    name={props.name}
                    type={showPassword ? 'text' : props.type} 
                    defaultValue={props.defaultValue}
                    placeholder={props.placeholder}
                    status={props.status}
                    className={`ds-input ds-input-bordered w-full pr-[40px] ${props.status === 'success' ? 'ds-input-success' : props.status === 'error' ? 'ds-input-error' : 'ds-input-bordered'}`}
                    disabled={props.disabled}
                    required
                />

                {/* TOGGLE PASSWORD */}
                {props.type === 'password' && (
                    <div onClick={togglePassword} className={`group absolute top-0 right-0 w-[40px] h-full flex items-center justify-center cursor-pointer ${props.status === 'error' ? 'right-6' : ''}`}>
                        {showPassword ? <IonIcon icon={eye} className="text-base text-accent group-hover:opacity-75" /> : <IonIcon icon={eyeOff} className="text-base text-accent group-hover:opacity-75" /> }
                    </div>
                    )
                }

                {/* ICON */}
                <span className={`absolute right-0 top-0 w-[40px] h-full flex items-center justify-center ${props.status === '' ? 'hidden pr-[38px]' : ''}`}>
                    {props.status === 'success' ? <IonIcon icon={checkmarkCircleOutline} className="text-base text-success" /> : <IonIcon icon={props.icon} className={`text-base ${props.status === 'error' ? 'text-error' : 'text-gray-400'}`} />}
                </span>
            </div>

            {/* BOTTOM LABEL */}
            <label className={`ds-label ${props.status === '' ? 'hidden' : ''}`}>
                <span className="ds-label-text-alt text-tertiary">
                    {props.status === 'error' ? 
                        <small className="text-error font-tertiary ds-label-text-alt">{props.message}</small> : 
                    props.status === 'success' ? 
                        <small className="text-success font-tertiary ds-label-text-alt">{props.message}</small> : 
                        <small className="font-tertiary ds-label-text-alt">{props.message}</small>
                    }
                </span>
            </label>
        </div>
    );
}

export default FormInput;