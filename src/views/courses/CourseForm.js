import React from 'react';
import { Row, Col, FormGroup, Input, Button } from 'reactstrap';

const CourseForm = ({ course, onChange, onClick}) => {
    return (
        <div className="container-fluid card pt-4">
            <Row>
            <Col xs="12" sm="6" md="4">
                <FormGroup>
                <Input name="title" type="text" placeholder="Title" onChange={onChange} value={course.title}/>
                </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col>
                <FormGroup>
                <Button onClick={onClick} className="btn btn-success btn-md">Submit</Button>
                </FormGroup>
            </Col>
            </Row>
        </div>
    );
}


export default CourseForm;
