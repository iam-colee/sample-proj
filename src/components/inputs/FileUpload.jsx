import { IonIcon } from "@ionic/react";
import { cloudUpload } from "ionicons/icons";

const FileUpload = ({ ...props }) => {
    return ( 
        <div className="ds-form-control w-full">
            <label className="ds-label">
                <span className="ds-label-text">{props.title}</span>
            </label>
            <div className="ds-input-group relative">
                <input type="file" placeholder="Choose File"
                    className="ds-file-input no-btn ds-input ds-input-bordered w-full pr-[48px]" />
                <span className="ds-btn ds-btn-square ds-btn-primary absolute right-0 h-full rounded-l-none pointer-events-none">
                    <IonIcon icon={cloudUpload} className="text-white text-xl"/>
                </span>
            </div>
            <label className="ds-label">
                <span className="ds-label-text-alt text-tertiary">{props.message}</span>
            </label>
        </div>
    );
}

export default FileUpload;