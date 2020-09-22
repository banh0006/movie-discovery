import React, { useState, useEffect } from 'react'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarBrand, 
    UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'
import '../../css/NavBar.css'
import InputSearch from '../atoms/InputSearch'

export default function NavBar(props) {
    const [show, setShow] = useState({ ...props.showNav })
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        setShow(props.showNav)
    }, [props.showNav])

    return (
        <Navbar fixed="top" color="dark" dark expand="md" className={ show ? 'nav-show' : 'nav-hide'}>
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Genre
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            Genre 1
                        </DropdownItem>
                        <DropdownItem>
                            Genre 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Genre 3
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Country
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            Country 1
                        </DropdownItem>
                        <DropdownItem>
                            Country 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Country 3
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/latest">Latest</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/trending">Trending</NavLink>
                    </NavItem>
                </Nav>
                <NavItem className="input-search">
                    <InputSearch />
                </NavItem>
            </Collapse>
        </Navbar>
    )
}
