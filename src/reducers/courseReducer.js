import * as ActionType from '../constants/actionTypes';
import InitialState from '../constants/initialState';

export default function courseReducer (state = InitialState.courses, action) {
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