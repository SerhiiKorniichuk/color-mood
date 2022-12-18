import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import generationSlice from './slices/generation/slice'

export const store = configureStore({
  reducer: {
    generation: generationSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
