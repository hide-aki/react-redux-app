import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as courseActions from "../../actions/courseActions";
import { FormGroup, Button, Input, Row, Col } from 'reactstrap';

class Courses extends Component {
  constructor(props){
    super(props);
    this.state = {
      course: { title: "" },
    }
  }

  handleSubmit = (event) => {
    this.props.createCourse(this.state.course);
  }

  onTitleChange = (event) => {
    const course = this.state.course;
    course.title = event.target.value
    this.setState({ course });
  }
  
  courseRow = (course, index) => {
    return <div className="row card-header" key={index}> {course.title} </div>
  }

  render(){

    return (
      <div className="container-fluid card">
        <Row>
          <h1>Courses</h1>
        </Row>
        <div>
          { this.props.courses.map(this.courseRow) }
        </div>
        <Row>
          <Col xs="12" sm="6" md="4">
            <FormGroup>
              <Input name="title" type="text" placeholder="Title" value={this.state.title} required onChange={this.onTitleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Button onClick={this.handleSubmit} className="btn btn-success btn-md">Submit </Button>
            </FormGroup>
          </Col>
        </Row>
      </div>
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
