import './Profile.scss';
// Images
import image_1 from '../../assets/cover-photo.jpg';
// Components
import Posts from '../../components/posts/Posts'
// Icons
import { FacebookTwoTone } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { Pinterest } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Place } from '@mui/icons-material';
import { Language } from '@mui/icons-material';
import { EmailOutlined } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='images'>
                <img src={image_1} alt='' className='cover'/>
                <img src={image_1} alt='' className='profilePic'/>
            </div>
            <div className='profileContainer'>
                <div className='userInfo1'>
                    <div className='left'>
                        <a href='https://facebook.com'>
                            <FacebookTwoTone fontSize='large'/>
                        </a>
                        <a href='https://facebook.com'>
                            <Instagram fontSize='large'/>
                        </a>
                        <a href='https://facebook.com'>
                            <Twitter fontSize='large'/>
                        </a>
                        <a href='https://facebook.com'>
                            <LinkedIn fontSize='large'/>
                        </a>
                        {/* <a href='https://facebook.com'>
                            <Pinterest fontSize='large'/>
                        </a> */}
                    </div>
                    <div className='center'>
                        <span>Alireza</span>
                        <div className='info'>
                            <div className='item'>
                                <Place />
                                <span>USA</span>
                            </div>
                            <div className='item'>
                                <Language />
                                <span>social.com</span>
                            </div>
                        </div>
                            <button>Follow</button>
                    </div>
                    <div className='right'>
                        <EmailOutlined />
                        <MoreVert />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default Profile;