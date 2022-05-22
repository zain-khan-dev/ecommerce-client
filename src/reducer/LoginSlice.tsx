import { createSlice, PayloadAction } from "@reduxjs/toolkit";





interface LoggedSchema {
    isLogged:boolean
}

const initialState:LoggedSchema = {isLogged:(()=>{
    const storageItem = localStorage.getItem("access_token")
    return storageItem != "" && storageItem != null && storageItem != undefined
})()}


const loginSlice = createSlice({
        name:'isLogged',
        initialState,
        reducers:{
            setLogged: (state, action:PayloadAction<boolean>) => {
                state.isLogged = action.payload
            }
        }
    }
)

export const {setLogged} = loginSlice.actions
export default loginSlice.reducer