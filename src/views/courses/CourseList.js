import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as courseActions from "../../actions/courseActions";
import { FormGroup, Button, Input, Row, Col } from 'reactstrap';

class CourseList extends Component {
  constructor(props){
    super(props);
  }
  
  courseRow = (course, index) => {
    return <tr className="" key={index}> <td>{course.title} </td> </tr>
  }

  render(){

    return (
        <div>
            <Row>
            <h1>Courses</h1>
            </Row>
            <Row>
                <table className="table">
                    <tr>
                        <th> Title </th>
                    </tr>
                    { this.props.courses.map(this.courseRow) }
                </table>          
            </Row>
        </div>
    );
  }
}


export default CourseList;
