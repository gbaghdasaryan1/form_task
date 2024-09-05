/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FormState = {
    formData: Record<string,any> 
}
const initialState: FormState = {
    formData: {}
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        onChange: (state, {payload}: PayloadAction<{value: any, key: string}>) => {
            state.formData[payload.key] = payload.value
        },
        reset: (state) => { 
            state.formData = {}
         }
    },
})

export const { onChange, reset} = formSlice.actions

export default formSlice.reducer