import { createSlice } from "@reduxjs/toolkit";
import tuits from '../post-summary-item/posts.json';

const tuitsSlice = createSlice({
    name: 'tuitSummary',
    initialState: tuits
});

export default tuitsSlice.reducer;