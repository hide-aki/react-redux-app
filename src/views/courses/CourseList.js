import React, {Component} from 'react';
import { Row } from 'reactstrap';

class CourseList extends Component {
  
  courseRow = (course, index) => {
    return <tr className="" key={course.id}> <td>{course.title} </td> </tr>
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
