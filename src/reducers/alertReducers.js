const initialProps = {
    showAlert: false,
    textAlert: ""
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialProps, action) {
    switch (action.type) {
        case 'SHOW_ALERT':
            return {
                ...state,
                showAlert: action.payload
            };
        case "SET_TEXT_ALERT":
            return {
                ...state,
                textAlert: action.payload
            };
        default:
            return state;
    }
}