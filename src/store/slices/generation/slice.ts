import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from 'store'

interface Color {
  hex: string
  locked: boolean
}

interface GenerationState {
  colors: Color[]
}

const initialState: GenerationState = {
  colors: [],
}

const generationSlice = createSlice({
  name: 'generation',
  initialState,
  reducers: {
    updateColorList: (state, action: PayloadAction<Color[]>) => {
      state.colors = action.payload
    },
  },
})

// Actions

const { updateColorList } = generationSlice.actions

// Selectors

export const colorList = (state: RootState) => state.generation.colors

// Thunks

export const generateColors = (): AppThunk => (dispatch, getState) => {
  dispatch(updateColorList([]))
}

export const updateColor = (): AppThunk => (dispatch) => {
  dispatch(updateColorList([]))
}

// Reducer

export default generationSlice.reducer
