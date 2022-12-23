// Styles
import './Stories.scss'
// Image
import image_1 from '../../assets/social-1.jpg';
// import image_2 from '../../assets/social-2.jpg';
import image_3 from '../../assets/social-3.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';


const Stories = () => {
    const {currentUser} = useContext(AuthContext);

    const stories = [
        {
          id: 1,
          name: "John Doe",
          img: image_3,
        },
        {
          id: 2,
          name: "John Doe",
          img: image_3,
        },
        {
          id: 3,
          name: "John Doe",
          img: image_3,
        },
        {
          id: 4,
          name: "John Doe",
          img: image_3,
        },
      ];

    return (
        <div className='stories'>
            <div className="story">
                <img src={image_1} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
        </div>
    );
};

export default Stories;