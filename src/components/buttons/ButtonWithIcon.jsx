import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IonIcon } from '@ionic/react';

const ButtonWithIcon = ({ ...props }) => {
    return ( 
        <button className={`ds-btn ${props.btnClass}`}>
            {props.btnTxt}
            {props.fontAwesome ? <FontAwesomeIcon icon={props.fontAwesome} className={`${props.iconClass}`} /> : <IonIcon icon={props.ionIcon} className={`${props.iconClass}`} />}
        </button>
    );
}

export default ButtonWithIcon;