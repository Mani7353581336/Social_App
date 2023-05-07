import { useContext } from "react";
import { AuthContext } from "../../context/authContextProvider";
import "./stories.scss";

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

    const stories = [
        {
            id: 1,
            name: "Man Mern",
            img: "https://images.pexels.com/photos/9961400/pexels-photo-9961400.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            name: "Man Mern",
            img: "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3,
            name: "Man Mern",
            img: "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 4,
            name: "Man Mern",
            img: "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600"
        }

    ];
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.ProfilePif} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map((story) => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
               
                </div>
            ))}

        </div>
    )
}

export default Stories;