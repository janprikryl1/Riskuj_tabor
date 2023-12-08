import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function QuestionModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Otázka za {props.price} bodů
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>{props.text}</h1>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide1}>
                    Skupinka 1
                </Button>
                <Button variant="success" onClick={props.onHide2}>
                    Skupinka 2
                </Button>
                <Button variant="danger" onClick={props.onHide3}>
                    Skupinka 3
                </Button>
                <Button variant="warning" onClick={props.onHide4}>
                    Skupinka 4
                </Button>
                <Button variant="dark" onClick={props.onHideNobody}>
                    Nikdo
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default QuestionModal;