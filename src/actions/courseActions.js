import * as ActionTypes from '../constants/actionTypes';

export function createCourse(course) {
    return { type: ActionTypes.CREATE_COURSE, course}
}