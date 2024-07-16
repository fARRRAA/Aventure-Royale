import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:null,
    fname:null,
    lname:null,
    email:null,
    phone:null,
    password:null,
    id:null,
    token:null,
    role:'user'
}
const userSlice= createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.fname = payload.fname;
            state.lname = payload.lname;
            state.email = payload.email;
            state.phone = payload.phone;
            state.password = payload.password;
            state.id = payload.id;
            state.token = payload.token;
            state.role=payload.role;
            state.id = payload.id;
        },
    
    removeUser: (state)=>{
        state.fname = null;
        state.lname = null;
        state.email = null;
        state.phone = null;
        state.password = null;
        state.id=null;
        state.token = null;
        state.role = null;
    }
}
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;