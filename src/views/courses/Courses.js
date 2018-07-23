import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from "../../actions/courseActions";
import CourseList from './CourseList';

class Courses extends Component {
  
  onDelete = (id) => {
    this.props.actions.deleteCourse(id);
  }

  render(){

    return (
       <CourseList courses={this.props.courses} onClick={this.onDelete}/>
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
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
