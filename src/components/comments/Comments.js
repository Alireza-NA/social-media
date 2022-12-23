import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

// Styles
import './Comments.scss';
// Img
import image_1 from '../../assets/social-4.jpg';
import image_2 from '../../assets/social-3.jpg';
import image_3 from '../../assets/social-1.jpg';

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "John Doe",
          userId: 1,
          profilePicture:
            image_1,
        },
        {
          id: 2,
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
          name: "Jane Doe",
          userId: 2,
          profilePicture:
            image_2,
        },
      ];

    return (
        <div className='comments'>
            <div className='write'>
            <img src={image_3} alt=''/>
            <input type='text'  placeholder='write a comment'/>
            <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className='comment'>
                    <img src={comment.profilePicture} alt=''/>
                    <div className='info'>
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>

                </div>
            ))}
        </div>
    );
};

export default Comments;