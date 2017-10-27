export default function userReducer(state={
    name: ""}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "SAVE_TOKEN":
            newState.token = action.token;
            break;
        case "AXIOS_ERROR":
            throw action.error;
        default:
            break;
    }
    return newState;
}
