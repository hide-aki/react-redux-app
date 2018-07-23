import React from 'react';
import { Row, Table } from 'reactstrap';
import Link from 'react-router-dom/Link'

const courseRow = (course, index) => {
    return (
        <tr className="" key={course.id}>
            <td>
                <Link to={`/courses/${course.id}`}>{course.title}</Link>
            </td>
        </tr>
    );
}

const CourseList = ({courses}) => {
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
                        </tr>
                    </thead>
                    <tbody>
                        { courses.map(courseRow) }
                    </tbody>
                </Table>          
            </Row>
        </div>
    );
}


export default CourseList;
