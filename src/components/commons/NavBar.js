import React, { useState, useEffect } from 'react'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarBrand, 
    UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'
import '../../css/NavBar.css'
import InputSearch from '../atoms/InputSearch'
import * as genreActions from '../../redux/actions/genreActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { COUNTRIES } from '../../asset/GlobalData'

export function NavBar(props) {
    const [genreDropdownItems, setGenreDropdownItems] = useState([])
    const [countryDropdownItems, setCountryDropdownItems] = useState([])
    const countries = COUNTRIES

    const [show, setShow] = useState({ ...props.showNav })
    const [isTransparent, setIsTransparent] = useState({ ...props.isTransparent })
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    useEffect(() => {
        setShow(props.showNav)
    }, [props.showNav])

    useEffect(() => {
        setIsTransparent(props.isTransparent)
    }, [props.isTransparent])

    useEffect(() => {
        props.actions.loadGenres()
        let items = []
        countries.map((country, index) => {
            items.push(
                <DropdownItem key={index}>
                    {country}
                </DropdownItem>
            )
        })
        setCountryDropdownItems(items)
    }, [])

    useEffect(() => {
        if (props.genres.length > 0) {
            let items = []
            props.genres.map((genre, index) => {
                items.push(
                    <DropdownItem key={index}>
                        {genre.name}
                    </DropdownItem>
                )
            })
            setGenreDropdownItems(items)
        }
    }, [props.genres])

    return (
        <Navbar fixed="top" expand="md" className={ `${show ? 'nav-show' : 'nav-hide'} ${isTransparent ? 'transparent-nav' : 'non-transparent'}`}>
            <NavbarBrand href="/" className={props.textColor} >Home</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className={`mr-auto ${props.textColor}`} navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Genre
                        </DropdownToggle>
                        <DropdownMenu right>
                            { genreDropdownItems }
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Country
                        </DropdownToggle>
                        <DropdownMenu right>
                           { countryDropdownItems }
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/toprated">Top Rated</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/popular">Popular</NavLink>
                    </NavItem>
                </Nav>
                <NavItem className="input-search">
                    <InputSearch />
                </NavItem>
            </Collapse>
        </Navbar>
    )
}

function mapStateToProps(state) {
    return {
        genres: state.genres.length === 0 
            ? [] 
            : state.genres,

        textColor: state.navbar.textColor
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadGenres: bindActionCreators(genreActions.loadGenres, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
