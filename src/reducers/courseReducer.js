import * as ActionType from '../constants/actionTypes';

export default function courseReducer (state = [], action) {
    switch(action.type){
        case ActionType.CREATE_COURSE:
            return [...state, 
                Object.assign({}, action.course)
            ];
        case ActionType.LOAD_COURSES_SUCCESS:
            return action.courses; 
        default:
            return state;
    }
}