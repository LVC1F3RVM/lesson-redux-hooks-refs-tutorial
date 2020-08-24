import { GET_SHOW, SET_SHOW } from "../constants/shows"

const initialState = {
    show: null,
    shows: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_SHOW:
        return { ...state, show: payload }

    default:
        return state
    }
}
