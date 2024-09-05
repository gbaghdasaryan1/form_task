import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../services/slices/formSlice'
import validationReducer from '../services/slices/validationSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    validation: validationReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;