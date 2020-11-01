import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"
import { useState, useEffect } from 'react'
import { db } from './firebase'
import firebase from 'firebase'

function Post({ postId, user, imageUrl, username, caption}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe; 
        if (postId) {
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) =>{
                setComments((snapshot.docs.map((doc) => doc.data())))
            });
        }

        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }

    return (
        <div className="post">
        <div className="post__header">
        <Avatar 
            className="post__avatar"
            alt={username}
            src="/static/images/avatar/1.jpg"
        />
            <h3>{username}</h3>
        </div>

            <img className="post__image" src={imageUrl} alt="" />
            <h4 className="post__text"><strong>{username}: </strong> {caption} </h4>
            {
                <div className="post__comments">
                    {comments.map((comment) => (
                        <p>
                            <b>{comment.username}</b>{comments.text}
                        </p>
                    ))}
                </div>
            }
            <form className="post__commentBox">
                <input 
                    className="post__input"
                    type="text"
                    placeholder="Add a a comment"
                    value={comment}
                    onChange={(e) => setComments(e.target.value)}
                />
                <button
                disabled={!comment}
                className="post__button"
                type="submit"
                onClick={postComment}>
                    Post
                </button>
            </form>
        </div>
    )
}

export default Post
