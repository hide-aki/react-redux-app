import * as ActionTypes from '../constants/actionTypes';
import Api from '../services/api';

export function createCourseSuccess(course) {
    return { type: ActionTypes.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return { type: ActionTypes.UPDATE_COURSE_SUCCESS, course};
}

export function loadCoursesSuccess(courses) {
    return { type: ActionTypes.LOAD_COURSES_SUCCESS, courses};
}

export function createCourse(course) {
    return function(dispatch) {
        return Api.create('Courses', course)
                .then(response => {
                    dispatch(createCourseSuccess(response.data));
                }).catch(error => console.log(error));
    }
}

export function updateCourse(course) {
    return function(dispatch) {
        return Api.update('Courses', course.id, course)
                .then(response => {
                    dispatch(updateCourseSuccess(response.data));
                }).catch(error => console.log(error));
    }
}


export function loadCourses() {
    return function(dispatch) {
        return Api.find('Courses')
                .then(response => {
                    dispatch(loadCoursesSuccess(response.data));
                }).catch(error => console.log(error));
    }
}