import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";


interface CounterState {
    value : number;
    status: string
}

const initialState : CounterState = {
    value : 0,
    status: 'idle'
}

export const counterslice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },

        reset:(state)=>{
            state.value = 0
        },
        addval:(state,action:PayloadAction<number>)=>{
            state.value = state.value + action.payload
        },
        subval:(state,action:PayloadAction<number>)=>{
            state.value = state.value - action.payload
        }

    },
    extraReducers:(builder)=>{
        builder 

        .addCase(addAsync.pending,(state)=>{
            state.status = 'pending'
            })

        .addCase(addAsync.fulfilled,(state,action:PayloadAction<number>)=>{
            state.value = state.value + action.payload
            state.status = 'fulfilled'
        })
    }

})

export const addAsync = createAsyncThunk(
    'counter/AddAsync',
    async(amount:number)=>{
        await new Promise ((resolve )=>setTimeout(resolve,2000))
        return amount;
    }
)


export const {increment, decrement, reset, addval, subval} = counterslice.actions


export default counterslice.reducer