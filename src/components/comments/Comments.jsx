import React, { useContext } from 'react'
import "./comments.scss";
import { AuthContext } from '../../context/authContextProvider';

export default function Comments() {

    const { currentUser } = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            name: "Man Mern",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/9961400/pexels-photo-9961400.jpeg?auto=compress&cs=tinysrgb&w=600",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque velit quod. Totam aperiam odio pariatur dicta? Dolorum, recusandae omnis?",
            img: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            name: "Man Mern",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/9961400/pexels-photo-9961400.jpeg?auto=compress&cs=tinysrgb&w=600",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque velit quod. Totam aperiam odio pariatur dicta? Dolorum, recusandae omnis?",

        }
    ]

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.ProfilePif} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>

    )
}
