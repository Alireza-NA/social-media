import {useContext} from 'react';
// Style
import './Leftbar.scss'
// img
import person from '../../assets/social-1.jpg';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import reddit from '../../assets/reddit.png';
import github from '../../assets/github.png'; 
// Mui
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
// Context
import { AuthContext } from '../../context/authContext';




const Leftbar = () => {

    const {currentUser} = useContext(AuthContext);

    return (
        <div className='leftbar'>
            <div className='container'>
                <div className='menu'>
                    <div className='user'>
                        <img src={person} alt='user'/>
                        <span>{currentUser.name}</span>
                    </div>
                    <div className='item'>
                        <i>
                            <Diversity1OutlinedIcon />
                        </i>
                        <span>Friends</span>
                    </div>
                    <div className='item'>
                        <i>
                            <Diversity2OutlinedIcon />
                        </i>
                        <span>Groups</span>
                    </div>
                    <div className='item'>
                        <i>
                            <StorefrontOutlinedIcon />
                        </i>
                        <span>Market place</span>
                    </div>
                    <div className='item'>
                        <i>
                            <OndemandVideoOutlinedIcon />
                        </i>
                        <span>Watch</span>
                    </div>
                    <div className='item'>
                        <i>
                            <SentimentSatisfiedOutlinedIcon />
                        </i>
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className='menu' >
                    <span>Your shortcuts</span>
                    <div className='item'>
                        <i>
                            <EventAvailableOutlinedIcon />
                        </i>
                        <span>Events</span>
                    </div>
                    <div className='item'>
                        <i>
                            <SportsEsportsOutlinedIcon />
                        </i>
                        <span>Gameing</span>
                    </div>
                    <div className='item'>
                        <i>
                            <CollectionsOutlinedIcon />
                        </i>
                        <span>Gallery</span>
                    </div>
                </div>
                <hr/>
                <div className='menu' >
                    <span>Other Social</span>
                    <div className='item'>
                        <img src={github} alt='item' />
                        <span>Github</span>
                    </div>
                    <div className='item'>
                        <img src={reddit} alt='item' />
                        <span>Reddit</span>
                    </div>
                    <div className='item'>
                        <img src={linkedin} alt='item' />
                        <span>Linkedin</span>
                    </div>
                    <div className='item'>
                        <img src={instagram} alt='item' />
                        <span>Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leftbar;