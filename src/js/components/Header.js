import React from 'react'
import {Container, Form} from 'react-bootstrap';
//css import
import '../../css/style.scss';

export default function Header(props) {
    let result = props.values
          .filter(v => v['enabled'])
          .map(v => v['sign'] ? parseFloat(v['value']) : parseFloat(v['value']*(-1)))
          .reduce((tot, cur) => tot = tot + cur, 0);
    return (
        <Container className="app-header-container">
          <Form.Label className="app-label-calculator"><i className="bi bi-calculator"></i></Form.Label>
          <Form.Label style={{marginRight: '20px'}}>{ result === undefined || isNaN(result) ? "Fill all cells" : result}</Form.Label>
        </Container>
    );
}