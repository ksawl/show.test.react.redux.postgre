import './Header.scss';

import { Container, Nav, Navbar } from 'react-bootstrap';

import React from 'react';
import { connect } from 'react-redux';
import { showModalCreate } from '../../redux/actions';

const Header = ({ showModalCreate }) => {
    const handleShowModal = (event) => {
        event.preventDefault();

        showModalCreate(true);
    };

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            fixed="top"
            collapseOnSelect
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    CRUD
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            href="#add"
                            className="btn btn-danger btn-add"
                            onClick={handleShowModal}
                        >
                            Add Item
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const mapDispatchToProps = {
    showModalCreate,
};

export default connect(null, mapDispatchToProps)(Header);
