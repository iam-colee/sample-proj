// import { IonIcon } from '@ionic/react';
import SwitchDark from '../switch/SwitchDark';
// import { arrowBackOutline } from 'ionicons/icons';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <header className="w-full flex items-center justify-center px-0 pb-8">
            <nav className="2xl:container w-full flex items-center justify-end">
                {/* <Link to={'/'} className='flex items-center gap-x-1'>
                    <IonIcon icon={arrowBackOutline} />
                    <p className='font-tertiary'>Back</p>
                </Link> */}

                <ul className='flex items-center gap-x-4'>
                    <li>Toggle Switch</li>
                    <SwitchDark />
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;