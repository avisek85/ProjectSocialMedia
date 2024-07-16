import { configureStore } from "@reduxjs/toolkit";
import { allUserReducer,postofFollowingReducer, userProfileReducer, userReducer } from "./Reducers/User";
import { likeReducer, myPostsReducer, userPostsReducer } from "./Reducers/Post";

const initialState={}

const store= configureStore({
    reducer:{
        user:userReducer,
        postofFollowing:postofFollowingReducer,
        allUsers:allUserReducer,
        like:likeReducer,
        myPosts:myPostsReducer,
        userProfile:userProfileReducer,
        userPosts:userPostsReducer,
    }
})

export default store;