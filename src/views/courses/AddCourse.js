import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as courseActions from "../../actions/courseActions";
import CourseForm from './CourseForm';

class Courses extends Component {
  constructor(props){
    super(props);
    this.state = {
      course: { title: "" },
    }
  }

  handleSubmit = (event) => {
    this.props.createCourse(this.state.course);
    this.props.history.push('/courses');
  }

  onTitleChange = (event) => {
    const course = this.state.course;
    course.title = event.target.value
    this.setState({ course });
  }
  
  render(){

    return (
        <CourseForm course={{}} onChange={this.onTitleChange} onClick={this.handleSubmit} />
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
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
