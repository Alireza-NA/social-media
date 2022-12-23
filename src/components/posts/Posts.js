// Styles
import './Posts.scss'
// Component
import Post from '../post/Post';

// Image
import image_1 from '../../assets/social-4.jpg';
import image_2 from '../../assets/social-5.jpg';

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        image_1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: image_2,
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        image_1,
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
// // Styles
// import './Posts.scss'
// // Component
// import Post from '../post/Post';


// const Posts = () => {

//     const posts = [
//         {
//           id: 1,
//           name: "John Doe",
//           userId: 1,
//           profilePic:
//             image_2,
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//           img: image_1,
//         },
//         {
//           id: 2,
//           name: "Jane Doe",
//           userId: 2,
//           profilePic:
//             image_2,
//           desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
//         },
//       ];

//     return (
//         <>
//         <h1>Hi</h1>
//         <Post />
//         <div className='posts'>
//             {posts.map(item =>{
//                 <Post 
//                 id = {item.id}
//                 item = {item}
//                 />
//             })}
//         </div>
//         </>
//     );
// };

// export default Posts;