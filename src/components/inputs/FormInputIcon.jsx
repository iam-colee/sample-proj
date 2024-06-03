import { IonIcon } from "@ionic/react";
import { useState } from "react";
import { alertCircleOutline, checkmarkCircleOutline, eye, eyeOff } from "ionicons/icons";

const FormInputIcon = ({ ...props }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return ( 
        <div className="ds-form-control w-full">
                {/* TITLE */}
                <label className="ds-label">
                    <span className="ds-label-text">{props.title}</span>
                </label>

                <div className="relative overflow-hidden">
                    {/* LEFT ICON */}
                    <span
                        className={`absolute left-0 top-0 w-[48px] rounded-l-lg h-full flex items-center justify-center peer-focus:bg-primary ${props.iconBgTransparent? 'bg-transparent' : ''} ${props.status === 'error' ? 'bg-error' : props.status === 'success' ? 'bg-success' : 'bg-accent'}`}>
                        <IonIcon icon={props.icon} className={`text-base ${props.iconBgTransparent ? 'text-primary' : 'text-tertiary-content'}`} />
                    </span>

                    {/* INPUT FIELD */}
                    <input 
                        id={props.id}
                        name={props.name}
                        type={showPassword ? 'type' : props.type}
                        defaultValue={props.defaultValue} 
                        placeholder={props.placeholder}
                        disabled={props.disabled}
                        required
                        className={`peer ds-input ds-input-bordered w-full pl-[58px] ${props.status === 'error' ? 'ds-input-error' : props.status === 'success' ? 'ds-input-success' : ''}`}
                    />

                    {/* TOGGLE PASSWORD */}
                    {props.type === 'password' && (
                        <div onClick={togglePassword} className={`group absolute top-0 right-0 w-[40px] h-full flex items-center justify-center cursor-pointer ${props.status === 'error' ? 'right-6' : ''}`}>
                            {showPassword ? <IonIcon icon={eye} className="text-base text-accent group-hover:opacity-75" /> : <IonIcon icon={eyeOff} className="text-base text-accent group-hover:opacity-75" /> }
                        </div>
                        )
                    }

                    {/* STATUS ICON */}
                    {props.status && (
                        <span className={`absolute right-0 top-0 w-[40px] h-full flex items-center justify-center ${props.status === '' ? 'hidden pr-[38px]' : ''}`}>
                            {props.status === 'success' ? <IonIcon icon={checkmarkCircleOutline} className="text-base text-success" /> : <IonIcon icon={alertCircleOutline} className={`text-base ${props.status === 'error' ? 'text-error' : 'text-gray-400'}`} />}
                        </span>
                    )}
                </div>

                {/* BOTTOM LABEL */}
                <label className="ds-label justify-end">
                    <span className={`ds-label-text-alt ${props.status === 'error' ? 'text-error' : props.status === 'success' ? 'text-success' : 'text-tertiary'}`}>{props.message}</span>
                </label>
        </div>
    );
}

export default FormInputIcon;