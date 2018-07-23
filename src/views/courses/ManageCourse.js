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
        this.props.updateCourse(this.state.course);
      }
    
      onTitleChange = (event) => {
        const course = this.state.course;
        course.title = event.target.value
        this.setState({ course });
      }
  
    render(){

        return (
            <CourseForm course={this.state.course} onChange={this.onTitleChange} onSubmit={this.handleSubmit} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    let course = { id: "id", title: "id"}
  return {
    course: course
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: course => bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
