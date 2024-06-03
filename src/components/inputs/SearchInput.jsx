import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";

const SearchInput = ({ ...props }) => {
    return ( 
        <div className="ds-form-control w-full">
            {props.title && (
                <label className="ds-label">
                    <span className="ds-label-text capitalize">{props.title}</span>
                </label>
            )}

            <div className="ds-input-group relative">
                <input 
                    type="search" 
                    placeholder={props.placeholder}
                    className="ds-input ds-input-bordered w-full pr-[58px]" 
                />

                <button className={` absolute right-0 h-full rounded-l-none ${props.bgIcon ? 'ds-btn-primary ds-btn ds-btn-square' : 'p-4 bg-transparent'}`}>
                    <IonIcon icon={search} className={`${props.bgIcon ? 'text-white' : 'text-neutral-content'}`} />
                </button>
            </div>

        </div>
    );
}

export default SearchInput;