import React from 'react';
import "./rightBar.scss";

export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <span>Man Mern</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <span>Man Mern</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <p>
                <span>Man Mern</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <p>
                <span>Man Mern</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <p>
                <span>Man Mern</span> liked comment
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <p>
                <span>Man Mern</span> posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online" />
              <span>Man Mern</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online" />
              <span>Man Mern</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online" />
              <span>Man Mern</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online" />
              <span>Man Mern</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online" />
              <span>Man Mern</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/7550294/pexels-photo-7550294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="online" />
              <span>Man Mern</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
