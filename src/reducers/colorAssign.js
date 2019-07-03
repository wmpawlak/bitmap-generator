const colorAssign = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COLOR':
            return [
                ...state,
                {
                    color: [ , , ]
                }
            ]
        default:
            return state;
    }
}

export default colorAssign;