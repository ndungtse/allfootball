import { createSlice } from '@reduxjs/toolkit';

const footDataSlice = createSlice({
    name: 'footData',
    initialState: {
        leagues: {
            isGot: false,
            value: []
        },
        players: {
            isGot: false,
            value: []
        },
        stadings: {
            isGot: false,
            value: []
        },
        fixtures: {
            isGot: false,
            value: []
        },
    },
    reducers: {
        setLeagues: (state, action) => {
            state.leagues.isGot = true
            state.leagues.value = action.payload
        },
        setFixtures: (state, action) => {
            state.fixtures.isGot = true
            state.fixtures.value = action.payload
        },
        setPlayers: (state, action) => {
            state.players.isGot = true
            state.players.value = action.payload
        },
        setStandings: (state, action) => {
            state.stadings.isGot = true
            state.stadings.value = action.payload
        },
    },
})

export default footDataSlice.reducer
export const { setLeagues, setPlayers, setStandings, setFixtures } = footDataSlice.actions