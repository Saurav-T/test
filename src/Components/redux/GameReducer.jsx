const initial_data = {
    game : 'Football',
    player : 'Stephen Hawking'
}

export const gameReducer = (state = initial_data, action) => {
    switch (action.type) {
        case "UPDATE_PLAYER":
            return { ...state, player: action.payload }
        case "UPDATE_GAME" :
            return { ...state, game: action.payload }
        default:
            return state
    }
}