import React, { useState, useEffect } from 'react'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarBrand, 
    UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap'
import '../../css/NavBar.css'
import InputSearch from '../atoms/InputSearch'

import { BASE_URL, GENRE_URL, API_KEY, COUNTRIES } from '../../asset/GlobalData'
import axios from 'axios'

export default function NavBar(props) {
    const [genres, setGenres] = useState([])
    const [genreDropdownItems, setGenreDropdownItems] = useState([])
    const [countryDropdownItems, setCountryDropdownItems] = useState([])
    const countries = COUNTRIES

    const [show, setShow] = useState({ ...props.showNav })
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const getGenres = async() => {
        let url = BASE_URL + GENRE_URL + API_KEY
        try {
            axios.get(url)
                .then(res => {
                    setGenres(res.data.genres)
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        setShow(props.showNav)
    }, [props.showNav])

    useEffect(() => {
        getGenres()
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
        if (genres.length > 0) {
            let items = []
            genres.map((genre, index) => {
                items.push(
                    <DropdownItem key={index}>
                        {genre.name}
                    </DropdownItem>
                )
            })
            setGenreDropdownItems(items)
        }
    }, [genres])

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
