import * as ActionType from '../constants/actionTypes';
import InitialState from '../constants/initialState';

export default function courseReducer (state = InitialState.courses, action) {
    switch(action.type){
        case ActionType.CREATE_COURSE_SUCCESS:
            return [...state, 
                Object.assign({}, action.course)
            ];
        case ActionType.UPDATE_COURSE_SUCCESS:
            return [...state.filter(course => course.id !== action.course.id ), 
                Object.assign({}, action.course)
            ];
        case ActionType.DELETE_COURSE_SUCCESS:
            return [...state.filter(course => course.id !== action.courseId) ];
        case ActionType.LOAD_COURSES_SUCCESS:
            return action.courses; 
        default:
            return state;
    }
}