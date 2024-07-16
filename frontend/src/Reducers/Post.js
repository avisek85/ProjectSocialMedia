import { createReducer } from "@reduxjs/toolkit"

const initialState ={
    loading:false,
    message:null,
    error:null,
}

export const likeReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase('likeRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('likeSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('likeFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase('addCommentRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('addCommentSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('addCommentFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase('deleteCommentRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('deleteCommentSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('deleteCommentFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })

    .addCase('newPostRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('newPostSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('newPostFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })

    .addCase('updateCaptionRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('updateCaptionSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('updateCaptionFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })

    .addCase('deletePostRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('deletePostSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('deletePostFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })

    .addCase('UpdateProfileRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('UpdateProfileSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('UpdateProfileFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })

    .addCase('UpdatePasswordRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('UpdatePasswordSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('UpdatePasswordFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })

    .addCase('deleteProfileRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('deleteProfileSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('deleteProfileFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase('forgotPasswordRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('forgotPasswordSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('forgotPasswordFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase('resetPasswordRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('resetPasswordSuccess',(state,action)=>{
        state.loading = false;
        // console.log("post/reducer  action .payload",action.payload)
        state.message = action.payload;
    })
    .addCase('resetPasswordFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })


    .addCase('followUserRequest',(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase('followUserSuccess',(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    })
    .addCase('followUserFailure',(state,action)=>{
        state.loading = false;
        state.error = action.payload; 
    })
    

   .addCase('clearError',(state)=>{
        state.error = null;
    })
    .addCase('clearMessage',(state)=>{
        state.message = null;
    });
});


export const myPostsReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase("myPostsRequest",(state)=>{
        state.loading= true;
    })
    .addCase("myPostsSuccess",(state,action)=>{
        state.loading = false;
        state.posts = action.payload;
    })
    .addCase("myPostsFailure",(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    })
    .addCase("clearErrors",(state)=>{
        state.error = null;
    })

})

export const userPostsReducer = createReducer(initialState,(builder)=>{
    builder
    .addCase("userPostsRequest",(state)=>{
        state.loading= true;
    })
    .addCase("userPostsSuccess",(state,action)=>{
        state.loading = false;
        state.posts = action.payload;
    })
    .addCase("userPostsFailure",(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    })
    .addCase("clearErrors",(state)=>{
        state.error = null;
    })

})
