import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from 'store'
import { Color, generateColor, generateHex } from 'utilities/color'

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
    _updateColors: (state, action: PayloadAction<Color[]>) => {
      state.colors = action.payload
    },
  },
})

// Actions

const { _updateColors } = generationSlice.actions

// Selectors

export const selectColors = (state: RootState) => state.generation.colors

// Thunks

export const createInitialColorList =
  (amount = 0): AppThunk =>
  (dispatch, getState) => {
    const colors = selectColors(getState())

    if (colors.length) return

    const newColors: Color[] = Array.from(Array(amount), () => generateColor())

    dispatch(_updateColors(newColors))
  }

export const updateColorsList = (): AppThunk => (dispatch, getState) => {
  const colors = selectColors(getState())

  const newColors = colors.map((color) => {
    if (color.locked) return color
    return { ...color, hex: generateHex() }
  })

  dispatch(_updateColors(newColors))
}

// Reducer

export default generationSlice.reducer
