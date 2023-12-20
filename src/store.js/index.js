import { configureStore, createSlice } from "@reduxjs/toolkit";


const historySlice = createSlice({
    name:"history", 
    initialState:[],
    reducers:{
        // 'slice name' + 'function' = 'type'
        // 'history' + 'addHistory' = 'history/addHistory' ()
        // This is action type in dispatch function
        addHistory(state, action){
            state.push(action.payload)
        },

        // 'slice name' + 'function' = 'type'
        // 'history' + 'removeHistory' = 'history/removeHistory' ()
        // This is action type in dispatch function
        removeHistory(state, action) {
            // Remove Functionality
        }
    }
});


const store = configureStore({
    reducer:{
        aaaaaaaaa : historySlice.reducer
    }
});

export {store}
export const {addHistory} =historySlice.actions



// const startingState = store.getState(); 
// console.log(JSON.stringify(startingState), ' :::: startingState ::::');

// console.log(historySlice.actions.addHistory("pandit"));

store.dispatch(historySlice.actions.addHistory("RAAAWAN"));



const finalState = store.getState()
console.log(JSON.stringify(finalState), ' :::: finalState ::::');
