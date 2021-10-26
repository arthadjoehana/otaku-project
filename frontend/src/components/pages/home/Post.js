import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';

import picture from '../../../images/picture.png'

export default function Post () {

    const [toggleComment, setToggleComment] = useState(false)
    const [liked, setLiked] = useState(false)

    const handleToggleComment = () => {
        setToggleComment(true)
    }

    const handleLiked = () => {
        if (liked) {
            setLiked (false)
        } else {
            setLiked(true)
        }
    }

    return (
        <div className="post">

            <div className="post-user">
                <div className="post-userprofilepic"></div>
                <div className="post-userdetails">
                    <div className="post-username">
                        Johny Silverhand
                    </div>
                    <div className="post-time">
                        3min ago
                    </div>
                </div>
            </div>

            <div className="post-title">
                Chilling with ma boi V
            </div>

            <div className="post-image">
                <img src={picture} />
            </div>

            <div className="post-details">
                <div className="post-like-count">
                    <i class="fas fa-heart liked"></i> 
                </div>
                <div>
                    1
                </div>
                <div className="post-comment-toggle">
                    <button>View comments</button>
                </div>
            </div>

            <div className="post-options">
                <button onClick={handleLiked}>
                {
                    liked ? (
                        <i class="fas fa-heart liked"></i>
                    ) : (
                        <i class="far fa-heart"></i>
                    )
                }
                </button>
                <button onClick={handleToggleComment}><i class="far fa-comment"></i></button>
                <button><i class="fas fa-share"></i></button>
            </div>

            {
                toggleComment && (
                    <div className="post-comment">
                        <div className="post-comment-userprofilepic"></div>
                        <form>
                            <input type="text" placeholder="Post your comment" />
                        </form>
                    </div>
                )
                }
            
        </div>
    );
}