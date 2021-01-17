import Constants from '../constants'
const initialState = {
    openNavbar: true,
    table: null,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants.OPEN_NAVBAR:
            state.openNavbar = payload;
            return { ...state };
        case Constants.CHANGE_TABLE:
            state.table = payload;
            return { ...state };
        default:
            return state;
    }
};

export default reducer;