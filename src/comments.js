import React from 'react'

function comments() {
    return (
        <div>
            <form className="post__commentBox">
                <input 
                    className="post__input"
                    type="text"
                    placeholder="Add a a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
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

export default comments
