import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';
//css import
import '../../css/style.scss';

export default function CalcRow(props) {

  return (
        <>
          <Row className='no-gutters' style={{marginBottom: '20px'}}>
            <Col md={6} xs={6}>
              <Form.Control type="number" className="app-input-text" 
                name={props.idx} 
                value={props.value}
                disabled={!props.enabled}
                onChange={(e) => props.editRowNumber(props.idx, e.target.value)} 
                />
            </Col>
            <Col md={2} xs={2}>
              {
                props.sign ?
                <Button variant={'light'} className="app-input-button" disabled={!props.enabled} onClick={() => props.editSign(props.idx)}><i className="bi bi-plus-circle-fill"></i></Button>
                :
                <Button variant={'light'} className="app-input-button" style={{color: "#17c3b2"}} disabled={!props.enabled} onClick={() => props.editSign(props.idx)}><i className="bi bi-dash-circle-fill"></i></Button>
              }
            </Col>
            <Col md={2} xs={2}>
              {
                props.enabled ?
                <Button variant={'light'} className="app-input-button" onClick={() => props.editEnabling(props.idx)}><i className="bi bi-eye-fill"></i></Button>
                :
                <Button variant={'light'} className="app-input-button" onClick={() => props.editEnabling(props.idx)}><i className="bi bi-eye-slash-fill"></i></Button>
              }
            </Col>
            <Col md={2} xs={2}>
              <Button variant={'light'} className="app-input-remove" id={props.idx} ><i className="bi bi-x-circle-fill" id={props.idx} onClick={() => props.removeRowByIndex(props.idx)}></i></Button>
            </Col>
          </Row>
        </>
  );
}