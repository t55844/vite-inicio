import { createSlice } from '@reduxjs/toolkit'
import { VisitorMold } from '../../../model/Visitor/VisitorMold'

interface VisitorInfo {
    name: string
    secondName: string
    currentAge: number
    visitorEnteredNumber: number
    visitorEnteredDate: string
}

interface VisitorState {
    value: {
        VisitorInfo: VisitorInfo
    }
}

const initialState = {
    value: {
        VisitorInfo: {}
    }
} as VisitorState

const visitorSlice = createSlice({
    name: 'visitor',
    initialState,
    reducers: {
        setVisitorInfo(state, action: { payload: VisitorInfo }) {
            const visitor = action.payload

            sessionStorage.setItem('VisitorInfo', JSON.stringify(visitor))
            state.value.VisitorInfo = visitor
        }
    },
})

export const { setVisitorInfo } = visitorSlice.actions
export default visitorSlice.reducer