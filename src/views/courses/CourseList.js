import React from 'react';
import { Row, Table, Button } from 'reactstrap';
import Link from 'react-router-dom/Link'

const courseRow = (course) => {
    return (
        <tr className="" key={course.id}>
            <td>
                <Link to={`/courses/${course.id}`}>{course.title}</Link>
            </td>
            <td>
                <Button onClick={() => {this.onClick(course.id)}}>Delete</Button>
            </td>
        </tr>
    );
}

const CourseList = ({courses, onClick}) => {
    this.onClick = onClick;
    return (
        <div className="container-fluid card">
            <Row>
            <h1>Courses</h1>
            </Row>
            <Row>
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th> Title </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        { courses.map(courseRow, this) }
                    </tbody>
                </Table>          
            </Row>
        </div>
    );
}


export default CourseList;
