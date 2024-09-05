import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ValidationState = {
    hasError: string[]
}
const initialState: ValidationState = {
    hasError: [],
}

export const validationSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
       
        setError: (state, {payload}: PayloadAction<string>) => {
            if(state.hasError.includes(payload)) return;
            state.hasError.push(payload)
        },
        removeError: (state, {payload}: PayloadAction<string>) => {
            state.hasError = state.hasError.filter((el:string) => el !== payload)
        },
    },
})

export const { setError , removeError} = validationSlice.actions

export default validationSlice.reducer