import './Rightbar.scss';
// Img
import user from '../../assets/social-1.jpg'

const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className='container'>
                <div className='item'>
                    <span>Suggestions For You</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <span>Alireza</span>
                        </div>
                        <div className='buttons'>
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <span>Alireza</span>
                        </div>
                        <div className='buttons'>
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <span>Latest Activites</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <p>
                                <span>Alireza</span> Change their picture
                            </p>
                        </div>
                        <span>
                            1 min ago
                        </span>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <p>
                                <span>Alireza</span> Change their picture
                            </p>
                        </div>
                        <span>
                            1 min ago
                        </span>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <p>
                                <span>Alireza</span> Change their picture
                            </p>
                        </div>
                        <span>
                            1 min ago
                        </span>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <p>
                                <span>Alireza</span> Change their picture
                            </p>
                        </div>
                        <span>
                            1 min ago
                        </span>
                    </div>
                </div>
                <div className='item'>
                    <span>Online Friends</span>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <div className='online' />
                            <span>Alireza</span> 
                        </div>
                    </div>
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <div className='online' />
                            <span>Alireza</span> 
                        </div>
                    </div> 
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <div className='online' />
                            <span>Alireza</span> 
                        </div>
                    </div> 
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <div className='online' />
                            <span>Alireza</span> 
                        </div>
                    </div> 
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <div className='online' />
                            <span>Alireza</span> 
                        </div>
                    </div> 
                    <div className='user'>
                        <div className='userInfo'>
                            <img src={user} alt='img'/>
                            <div className='online' />
                            <span>Alireza</span> 
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    );
};

export default Rightbar;