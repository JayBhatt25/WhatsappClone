export const initialState = {
    roomId: null,
    roomName: 'Default', 
    roomMessages: [],
};

export const actionTypes = {
    SET_ROOM: 'SET_ROOM',
};

export const reducer = (state,action) => {
    console.log(action)

    switch(action.type){
        case actionTypes.SET_ROOM:
            return {
                ...state,
                roomId: action.roomId,
                roomName: action.roomName,
                roomMessages: [...state.roomMessages, action.messages],
            }
        default:
            return state;
    }

};

export default reducer;