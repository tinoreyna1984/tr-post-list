import { createSlice } from "@reduxjs/toolkit";

export const postSlice= createSlice({
    name: "posts",
    initialState: {
        postsDestacados: []
    },
    reducers: {
        initPosts: (state, action) => {
            state.postsDestacados = action.payload;
        },
        addPost: (state, action) => {
            const {id} = action.payload;
            const yaExiste = state.postsDestacados.find(post => post.id === id)
            if(yaExiste){
                alert(`El post ${id} ya existe`)
                return;
            }
            state.postsDestacados.push(action.payload)
            alert(`Se agrega post ${id} a destacados`)
            localStorage.setItem("posts", JSON.stringify(state.postsDestacados));
        },
        deletePost: (state, action) => {
            const { id } = action.payload;
            state.postsDestacados = state.postsDestacados.filter(el => el.id !== id)
            localStorage.setItem("posts", JSON.stringify(state.postsDestacados));
        },
    }
});

export const { initPosts, addPost, deletePost } = postSlice.actions;