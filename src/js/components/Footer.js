import React from 'react'
import {Container, Button} from 'react-bootstrap';
//css import
import '../../css/style.scss';

export default function Footer(props) {
    return (
        <Container className="app-footer-container">
            <Button variant={'light'} className="app-addrow-button" onClick={props.addNewRow}>
                <i className="bi bi-plus-lg"></i>{' Add row'}
            </Button>
        </Container>
    );
}