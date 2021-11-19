import React, { useState, useEffect } from 'react'
import PostThumb from '../PostThumb'
import LoadIcon from '../../images/loading.gif'
import LoadMoreBtn from '../LoadMoreBtn'
import { getDataAPI } from '../../utils/fetchData'
import { PROFILE_TYPES } from '../../redux/actions/profileAction'


import { useSelector, useDispatch } from 'react-redux'
import PostCard from '../PostCard'

import { POST_TYPES } from '../../redux/actions/postAction'



const Posts = ({auth, id, profile}) => {
    const [posts, setPosts] = useState([])
    const [result, setResult] = useState(0)
    const [page, setPage] = useState(0)
    const [load, setLoad] = useState(false)
    const [profilePosts, setProfilePosts] = useState([])

    // useEffect(() => {
    //     profile.posts.forEach(data => {
    //         if(data._id === id){
    //             setPosts(data.posts)
    //             setResult(data.result)
    //             setPage(data.page)
    //         }
    //     })
    // },[profile.posts, id])

    const { homePosts, theme } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        setProfilePosts(homePosts.posts.filter(post => post.user._id === id))
    },[homePosts, id])

    // const handleLoadMore = async () => {
    //     setLoad(true)
    //     const res = await getDataAPI(`user_posts/${id}?limit=${page * 9}`, auth.token)
    //     const newData = {...res.data, page: page + 1, _id: id}
    //     dispatch({type: PROFILE_TYPES.UPDATE_POST, payload: newData})
    //     setLoad(false)
    // }

    const handleLoadMore = async () => {
        setLoad(true)
        const res = await getDataAPI(`posts?limit=${homePosts.page * 9}`, auth.token)

        dispatch({type: POST_TYPES.GET_POSTS, payload: {...res.data, page: homePosts.page + 1}
        })

        setLoad(false)
    }

    // console.log("console log of profile.ids", profile.ids[0])
    // console.log("console log of homePosts.posts[1].user._id", homePosts.posts[1].user._id)
    // console.log("console log of result", result)
    // console.log("console log of posts", posts)
    // console.log("console log of homePosts.posts", homePosts.posts)
    // console.log("console log of profilePosts", profilePosts)
    // console.log("console log of profile.posts", profile.posts)

    return (
        <div className="posts">
           
            {
                profilePosts.map(post => (
                    <PostCard key={post._id} post={post} theme={theme} />
                ))
            }

            {
                load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
            }

            
            <LoadMoreBtn result={homePosts.result} page={homePosts.page}
            load={load} handleLoadMore={handleLoadMore} />
        </div>
    )
}

export default Posts
