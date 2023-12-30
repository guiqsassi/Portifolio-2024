const initialState = {
    toggle: false
}
const darkModeReducer = ( state = initialState, action)=>{
    switch (action.type) {
        case "toggle":
            return{...state, toggle: !state.toggle}
            break;
        case "deactive":
            return{...state, active: false}
            break;
        default:
            return{...state}
            break;
    }
}

export default darkModeReducer