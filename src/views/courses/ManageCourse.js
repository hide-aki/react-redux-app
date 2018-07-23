import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as courseActions from "../../actions/courseActions";
import CourseForm from './CourseForm';

class ManageCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
          course: Object.assign({}, this.props.course),
        }
    }
  
    handleSubmit = (event) => {
      this.props.actions.updateCourse(this.state.course);
      this.props.history.push('/courses');  
    }
  
    onTitleChange = (event) => {
      const course = this.state.course;
      course.title = event.target.value
      this.setState({ course });
    }

    componentWillReceiveProps(nextProps) {
      if(this.props.course.id !== nextProps.course.id){
        this.setState({course: Object.assign({}, nextProps.course)});
      }
    }

    render(){

        return (
            <CourseForm course={this.state.course} onChange={this.onTitleChange} onClick={this.handleSubmit} />
        );
    }
}

function getCourseById(courses, id){
  const course = courses.filter(course => course.id == id);
  return course ? course[0] : null;
}
function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.id;
  let course = { id: "", title: ""};

  if(id && state.courses.length) course = getCourseById(state.courses, id);
  return {
    course: course
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
