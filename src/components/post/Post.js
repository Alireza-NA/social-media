import { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import './Post.scss';
// Icons
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { FavoriteOutlined } from '@mui/icons-material';
import { TextsmsOutlined } from '@mui/icons-material';
import { ShareOutlined } from '@mui/icons-material';
import { MoreHoriz } from '@mui/icons-material';
// Components
import Comments from '../comments/Comments';

const Post = ({post}) => {

    const [commentOpen , setCommentOpen] = useState(false)

    const liked = false;

    return (
        <div className='post'>
            <div className='container'>
                <div className='user'>
                <div className='userInfo'>
                    <img src={post.profilePic} alt='post-img'/>
                    <div className='details'>
                        <Link to={`/profile/${post.userId}`} style={{textDecoration:"none" ,color:'inherit'}}>
                            <span className='name'>{post.name}</span>
                        </Link>
                            <span className='date'>1 min ago</span>
                    </div>
                </div>
                <MoreHoriz />
                </div>
                <div className='content'>
                    <p>{post.desc}</p>
                    <img src={post.img} alt=''/>
                </div>
                <div className='info'>
                    <div className='item'>
                        {liked ?  <FavoriteOutlined/>: <FavoriteBorderOutlined/>}
                        12 Likes
                    </div>
                    <div className='item' onClick={()=> setCommentOpen(!commentOpen)}>
                        <TextsmsOutlined />
                        12 Comments
                    </div>
                    <div className='item'>
                        <ShareOutlined />
                        Shared
                    </div>
                </div>
                {commentOpen && <Comments /> }
            </div>
        </div>
    );
};

export default Post;