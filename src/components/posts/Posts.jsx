import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {


    // Creating Temporary posts............
const posts = [
    {
        id:1,
        name:"Man Mern",
        userId:1,
        profilePic:"https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque velit quod. Totam aperiam odio pariatur dicta? Dolorum, recusandae omnis?",
        img: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:1,
        name:"Man Mern",
        userId:2,
        profilePic:"https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque velit quod. Totam aperiam odio pariatur dicta? Dolorum, recusandae omnis?",
        img:"https://images.pexels.com/photos/9961400/pexels-photo-9961400.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

  return (
    <div className="posts">
        {posts.map((post)=>(
            <Post post={post} key={post.id}/>
        ))}

    </div>
  )
}

export default Posts;