import { createAction } from "@reduxjs/toolkit";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users:null,
  loading: false,
  error: null,
  isAuthenticated:false
};


 const LoginRequest = createAction("LoginRequest");
 const LoginSuccess = createAction("LoginSuccess");
 const LoginFailure = createAction("LoginFailure");

 const RegisterRequest = createAction("RegisterRequest");
 const RegisterSuccess = createAction("RegisterSuccess");
 const RegisterFailure = createAction("RegisterFailure");

 const LoadUserRequest = createAction("LoadUserRequest");
 const LoadUserSuccess = createAction("LoadUserSuccess");
 const LoadUserFailure = createAction("LoadUserFailure");

 const LogoutUserRequest = createAction("LogoutUserRequest");
 const LogoutUserSuccess = createAction("LogoutUserSuccess");
 const LogoutUserFailure = createAction("LogoutUserFailure");
 const clearErrors = createAction("clearErrors");


export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LoginRequest, (state) => {
      state.loading = true;
      state.error = null; // Clear any previous errors
    })
    .addCase(LoginSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null; // Clear any previous errors
    })
    .addCase(LoginFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;

    })
    .addCase(RegisterRequest, (state) => {
      state.loading = true;
      state.error = null; // Clear any previous errors
    })
    .addCase(RegisterSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;

      state.error = null; // Clear any previous errors
    })
    .addCase(RegisterFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;

    })
    .addCase(LoadUserRequest, (state) => {
      state.loading = true;
      state.error = null; // Clear any previous errors
    })
    .addCase(LoadUserSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;

      state.error = null; // Clear any previous errors
    })
    .addCase(LoadUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;

    })

    .addCase(LogoutUserRequest, (state) => {
      state.loading = true;
      state.error = null; // Clear any previous errors
    })
    .addCase(LogoutUserSuccess, (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;

      state.error = null; // Clear any previous errors
    })
    .addCase(LogoutUserFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = true;

    })
    .addCase(clearErrors,(state)=>{
      state.error = null;
    });
});





/*
const initialState = {};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  RegisterRequest: (state) => {
state.loading= true;
  },
  RegisterSuccess: (state, action) => {
    state.loading= false;
    state.user = action.payload;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
*/

/*
export const postofFollowingReducer = createReducer(initialState,{
  postofFollowingRequest:(state)=>{
    state.loading= true;

  },
  postofFollowingSuccess:(state,action)=>{
    state.loading = false;
    state.posts =action.payload;
  },
  postofFollowingFailure:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
  },
  clearErrors:(state)=>{
    state.error = null;
  },
})

*/

const postofFollowingRequest = createAction('postofFollowingRequest');
const postofFollowingSuccess = createAction('postofFollowingSuccess');
const postofFollowingFailure = createAction('postofFollowingFailure');

export const postofFollowingReducer = createReducer(initialState, builder => {
  builder
    .addCase(postofFollowingRequest, (state) => {
      state.loading = true;
    })
    .addCase(postofFollowingSuccess, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(postofFollowingFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});


const allUsersRequest = createAction('allUsersRequest');
const allUsersSuccess = createAction('allUsersSuccess');
const allUsersFailure = createAction('allUsersFailure');


export const allUserReducer = createReducer(initialState, builder => {
  builder
    .addCase(allUsersRequest, (state) => {
      state.loading = true;
    })
    .addCase(allUsersSuccess, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      console.log(" state .user is in reducer ",state.user);
      state.isAuthenticated=true;
    })
    .addCase(allUsersFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated=false;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});

const userProfileRequest = createAction('userProfileRequest');
const userProfileSuccess = createAction('userProfileSuccess');
const userProfileFailure = createAction('userProfileFailure');

export const userProfileReducer = createReducer(initialState, builder => {
  builder
    .addCase(userProfileRequest, (state) => {
      state.loading = true;
    })
    .addCase(userProfileSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(userProfileFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});