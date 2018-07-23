import * as ActionTypes from '../constants/actionTypes';
import Api from '../services/api';

export function createCourse(course) {
    return { type: ActionTypes.CREATE_COURSE, course};
}

export function loadCoursesSuccess(course) {
    return { type: ActionTypes.LOAD_COURSES_SUCCESS, course};
}

export function loadCourses() {
    return function(dispatch) {
        return Api.find('Courses')
                .then(response => {
                    dispatch(loadCoursesSuccess(response.data));
                }).catch(error => console.log(error));
    }
}