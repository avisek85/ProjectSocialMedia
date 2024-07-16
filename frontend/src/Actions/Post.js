import axios from "axios";
import { useDispatch } from "react-redux";
const dispatch = useDispatch;
export const likePost = (postId)=>async (dispatch)=>{
    try {
        dispatch({
            type:"likeRequest",
        });
        // console.log(postId);
        const {data} = await axios.get(`/api/v1/post/${postId}`);
        // console.log("posts/actions message",data.message);
        dispatch({
            type:"likeSuccess",
            payload:data.message,
        })
    } catch (error) {
        dispatch({
            type:"likeFailure",
            payload:error.response.data.message
        })
    }
}

export const addCommentOnPost = (postId,comment)=>async (dispatch)=>{
    try {
        dispatch({
            type:"addCommentRequest",
        });
        // console.log(postId);
        const {data} = await axios.put(`/api/v1/post/comment/${postId}`,{comment},{
            headers:{
                "Content-Type":"application/json",
            }
        });
        // console.log("posts/actions message",data.message);
        dispatch({
            type:"addCommentSuccess",
            payload:data.message,
        })
    } catch (error) {
        dispatch({
            type:"addCommentFailure",
            payload:error.response.data.message
        })
    }
}

export const deleteCommentOnPost = (postId,commentId)=>async (dispatch)=>{
    try {
        dispatch({
            type:"deleteCommentRequest",
        });
        // console.log(postId);
        const {data} = await axios.delete(`/api/v1/post/comment/${postId}`,{
            data:{commentId}
        });
      
        dispatch({
            type:"deleteCommentSuccess",
            payload:data.message,
        })
    } catch (error) {
        dispatch({
            type:"deleteCommentFailure",
            payload:error.response.data.message
        })
    }
}

export const createNewPost = (caption,image)=>async (dispatch)=>{
    try {
        dispatch({
            type:"newPostRequest",
        });
        // console.log(postId);
        const {data} = await axios.post(`/api/v1/post/upload`,{
            caption,
            image
        },{
            headers:{
                "Content-Type":"application/json"
            }
        });
      
        dispatch({
            type:"newPostSuccess",
            payload:data.message,
        })
    } catch (error) {
        dispatch({
            type:"newPostFailure",
            payload:error.response.data.message
        })
    }
}

export const updatePost = (caption,id)=>async (dispatch)=>{
    try {
        dispatch({
            type:"updateCaptionRequest",
        });
        // console.log(postId);
        const {data} = await axios.put(`/api/v1/post/${id}`,{
            caption,
        },{
            headers:{
                "Content-Type":"application/json"
            }
        });
      
        dispatch({
            type:"updateCaptionSuccess",
            payload:data.message,
        })
    } catch (error) {
        dispatch({
            type:"updateCaptionFailure",
            payload:error.response.data.message
        })
    }
}

export const deletePost = (id)=>async (dispatch)=>{
    try {
        dispatch({
            type:"deletePostRequest",
        });
        // console.log(postId);
        const {data} = await axios.delete(`/api/v1/post/${id}`);
      
        dispatch({
            type:"deletePostSuccess",
            payload:data.message,
        })
    } catch (error) {
        dispatch({
            type:"deletePostFailure",
            payload:error.response.data.message
        })
    }
}