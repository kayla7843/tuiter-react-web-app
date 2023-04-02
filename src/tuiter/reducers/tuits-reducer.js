<<<<<<< HEAD
import {createSlice}
    from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';
import {deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";
=======
import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json'
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "disliked": false,
    "dislikes": 0
}
>>>>>>> test

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }
<<<<<<< HEAD
=======


>>>>>>> test
    },
    reducers: { }
});

<<<<<<< HEAD
=======

export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
>>>>>>> test
export default tuitsSlice.reducer;