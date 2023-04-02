import { createSlice } from "@reduxjs/toolkit";
import tuits from '../post-summary-item/posts.json';

const tuitsSlice = createSlice({
<<<<<<< HEAD
    name: 'tuits',
=======
    name: 'tuitSummary',
>>>>>>> test
    initialState: tuits
});

export default tuitsSlice.reducer;