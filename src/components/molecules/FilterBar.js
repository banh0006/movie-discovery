import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { COUNTRIES, YEARS, SORT_OPTIONS } from '../../asset/GlobalData'

import { DropdownItem, UncontrolledDropdown, DropdownToggle, Nav, DropdownMenu, NavItem, Button } from 'reactstrap'
import "../../css/FilterBar.css"
import { TiFilter, TiArrowUnsorted } from "react-icons/ti"
import { AiOutlineGlobal, AiTwotoneCalendar, AiTwotoneFolderOpen } from "react-icons/ai"

export function FilterBar(props) {
    const countries = COUNTRIES
    const years = YEARS
    const sorts = SORT_OPTIONS
    const [countryDropdownItems, setCountryDropdownItems] = useState([])
    const [yearDropdownItems, setYearDropdownItems] = useState([])
    const [sortDropdownItems, setSortDropdownItems] = useState([])
    const [genreDropdownItems, setGenreDropdownItems] = useState([])

    useEffect(() => {
        let countryItems = []
        let yearItems = []
        let sortItems = []

        countries.map((country, index) => {
            countryItems.push(
                <DropdownItem key={index}>
                    {country}
                </DropdownItem>
            )
        })

        years.map((year, index) => {
            yearItems.push(
                <DropdownItem key={index}>
                    {year}
                </DropdownItem>
            )
        })

        sorts.map((sort, index) => {
            sortItems.push(
                <DropdownItem key={index}>
                    {sort}
                </DropdownItem>
            )
        })

        setCountryDropdownItems(countryItems)
        setYearDropdownItems(yearItems)
        setSortDropdownItems(sortItems)
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
        <div className="filter-bar-wrapper">
            <Nav>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <AiTwotoneFolderOpen /> Genre
                    </DropdownToggle>
                    <DropdownMenu right>
                        { genreDropdownItems }
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar className="year-filter">
                    <DropdownToggle nav caret>
                        <AiTwotoneCalendar /> Year
                    </DropdownToggle>
                    <DropdownMenu right>
                        { yearDropdownItems }
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <AiOutlineGlobal /> Country
                    </DropdownToggle>
                    <DropdownMenu right>
                       { countryDropdownItems }
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar className="sort-filter">
                    <DropdownToggle nav caret>
                        <TiArrowUnsorted /> Sort
                    </DropdownToggle>
                    <DropdownMenu right>
                       { sortDropdownItems }
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <Button color="info"><TiFilter /> Filter</Button>
                </NavItem>
            </Nav>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        genres: state.genres.length === 0 
            ? [] 
            : state.genres
    }
}

export default connect(mapStateToProps)(FilterBar)
