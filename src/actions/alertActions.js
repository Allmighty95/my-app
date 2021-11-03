export const ACTIVATE_DESACTIVATE_ALERT= state => {
    return {
        type: "SHOW_ALERT",
        payload: state 
    };
};

export const UPDATE_ALERT_MESSAGE= state => {
    return {
        type: "SET_TEXT_ALERT",
        payload: state 
    };
}