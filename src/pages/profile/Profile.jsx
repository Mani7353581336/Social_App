import React from 'react';
import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaceIcon from "@mui/icons-material/Place";
import Posts from "../../components/posts/Posts"

export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/1646311/pexels-photo-1646311.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="cover" />
        <img src="https://images.pexels.com/photos/4348589/pexels-photo-4348589.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize='large' />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize='large' />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize='large' />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize='large' />
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize='large' />
            </a>
          </div>
          <div className="center">
            <span>Man Mern</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Man.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}
