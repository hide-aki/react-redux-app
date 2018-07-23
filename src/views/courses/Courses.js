import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as courseActions from "../../actions/courseActions";
import CourseList from './CourseList';

class Courses extends Component {
  
  render(){

    return (
       <CourseList courses={this.props.courses} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadCourses: course => dispatch(courseActions.loadCourses())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
