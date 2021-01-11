import Constants from '../constants'
const initialState = {
    openNavbar: true,
    adminContent: 'home',
    adminContentExtension: '',
    table: null,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants.OPEN_NAVBAR:
            state.openNavbar = payload;
            return { ...state };
        case Constants.CHANGE_ADMIN_CONTENT:
            state.adminContent = payload;
            return { ...state };
        case Constants.CHANGE_ADMIN_CONTENT_EXTENSION:
            state.adminContentExtension = payload;
            return { ...state };
        case Constants.CHANGE_TABLE:
            state.table = payload;
            return { ...state };
        default:
            return state;
    }
};

export default reducer;