import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (travelers, id) => {
    var result = -1;
    travelers.forEach((traveler, index) => {
        if (traveler.id === id) {
            result = index;
        }
    });
    return result;
}

const travelers = (state = initialState, action) => {
    var index = -1;
    var { id, traveler } = action;
    switch (action.type) {
        case Types.FETCH_DS1552_SUBMITTED_TRAVELERS:
            state = action.travelers;
            return [...state];
      
        default: return [...state];
    }
};

export default travelers;