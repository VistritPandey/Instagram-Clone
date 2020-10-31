import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            <img className="post__image" src="https://m.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/06/20/Pictures/_3fe51840-b31f-11ea-8315-f58cec6734ed.jpg" alt="" />
            <h4 className="post__text"><strong>Username: </strong> caption goes rigth here</h4>
        </div>
    )
}

export default Post
