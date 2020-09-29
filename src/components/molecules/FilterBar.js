import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { COUNTRIES, YEARS, SORT_OPTIONS } from '../../asset/GlobalData'

import { UncontrolledDropdown, DropdownToggle, Nav, DropdownMenu, NavItem, Button } from 'reactstrap'
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
    const [genreCheckBoxsState, setGenreCheckBoxsState] = useState({})
    const [yearCheckBoxsState, setYearCheckBoxsState] = useState({})
    const [countryCheckBoxsState, setCountryCheckBoxsState] = useState({})
    const [sortCheckBoxsState, setSortCheckBoxsState] = useState({})

    const [genreValueText, setGenreValueText] = useState('All')
    const [yearValueText, setYearValueText] = useState('All')
    const [countryValueText, setCountryValueText] = useState('All')
    const [sortValueText, setSortValueText] = useState('All')
    
    const hanldeGenreCheckBoxsChange = (event) => {
        const { name, checked } = event.target
        setGenreCheckBoxsState(prevState => ({ ...prevState, [name]: checked }))
    }

    const hanldeYearCheckBoxsChange = (event) => {
        const { name, checked } = event.target
        setYearCheckBoxsState(prevState => ({ ...prevState, [name]: checked }))
    }

    const hanldeCountryCheckBoxsChange = (event) => {
        const { name, checked } = event.target
        setCountryCheckBoxsState(prevState => ({ ...prevState, [name]: checked }))
    }

    const hanldeSortCheckBoxsChange = (event) => {
        const { value } = event.target
        setSortCheckBoxsState(prevState => ({ ...prevState, "sort-type": value }))
        setSortValueText(value)
    }

    const getObjLength = (obj) => {
        return Object.keys(obj).length
    }

    const getChecked = (obj) => {
        const length = getObjLength(obj)
        if (length === 0) return 0
        return Object.values(obj).reduce((count, item) => count + (item === true ? 1 : 0), 0)
    }

    const getCheckedValue = (obj) => {
        return Object.keys(obj).find(key => obj[key] === true)
    }

    useEffect(() => {
        let countryItems = []
        let yearItems = []
        let sortItems = []

        countries.map((country, index) => {
            countryItems.push(
                <div key={index} className="dropdown-item country-filter-item">
                    <input type="checkbox" name={country} 
                        checked={countryCheckBoxsState[country]} 
                        onChange={hanldeCountryCheckBoxsChange} 
                    />
                    {country}
                </div>
            )
        })

        years.map((year, index) => {
            yearItems.push(
                <div key={index} className="dropdown-item year-filter-item">
                    <input type="checkbox" name={year} 
                        checked={yearCheckBoxsState[year]} 
                        onChange={hanldeYearCheckBoxsChange} 
                    />
                    {year}
                </div>
            )
        })

        sorts.map((sort, index) => {
            sortItems.push(
                <div key={index} className="dropdown-item sort-filter-item">
                    <input type="radio" name={sort} 
                        name="sort-type"
                        value={sort} 
                        onChange={hanldeSortCheckBoxsChange} 
                    />
                    {sort}
                </div>
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
                    <div key={index} className="dropdown-item genre-filter-item">
                        <input type="checkbox" name={genre.name} 
                            checked={genreCheckBoxsState[genre.name]} 
                            onChange={hanldeGenreCheckBoxsChange} 
                        />
                        {genre.name}
                    </div>
                )
            })
            setGenreDropdownItems(items)
        }
    }, [props.genres])

    useEffect(() => {
        const genresChecked = getChecked(genreCheckBoxsState)    
        if (genresChecked === 0) {
            setGenreValueText('All')
        } else {
            if (genresChecked === 1) {
                let genre = getCheckedValue(genreCheckBoxsState)
                setGenreValueText(genre)
            } else {
                setGenreValueText(`${genresChecked} selected`)
            }
        }
    }, [genreCheckBoxsState])

    useEffect(() => {
        const yearsChecked = getChecked(yearCheckBoxsState)    
        console.log("checked = " + yearsChecked)
        if (yearsChecked === 0) {
            setYearValueText('All')
        } else {
            if (yearsChecked === 1) {
                let year = getCheckedValue(yearCheckBoxsState)
                setYearValueText(year)
            } else {
                setYearValueText(`${yearsChecked} selected`)
            }
        }
    }, [yearCheckBoxsState])

    useEffect(() => {
        const countryChecked = getChecked(countryCheckBoxsState)    
        console.log("checked = " + countryChecked)
        if (countryChecked === 0) {
            setCountryValueText('All')
        } else {
            if (countryChecked === 1) {
                let year = getCheckedValue(countryCheckBoxsState)
                setCountryValueText(year)
            } else {
                setCountryValueText(`${countryChecked} selected`)
            }
        }
    }, [countryCheckBoxsState])

    return (
        <div className="filter-bar-wrapper">
            <Nav>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <AiTwotoneFolderOpen /> 
                        Genre 
                        <div className="genre-value">{genreValueText}</div>
                    </DropdownToggle>
                    <DropdownMenu right>
                        { genreDropdownItems }
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar className="year-filter">
                    <DropdownToggle nav caret>
                        <AiTwotoneCalendar /> Year
                        <div className="year-value">{yearValueText}</div>
                    </DropdownToggle>
                    <DropdownMenu right>
                        { yearDropdownItems }
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <AiOutlineGlobal /> Country
                        <div className="country-value">{countryValueText}</div>
                    </DropdownToggle>
                    <DropdownMenu right>
                       { countryDropdownItems }
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar className="sort-filter">
                    <DropdownToggle nav caret>
                        <TiArrowUnsorted /> Sort
                        <div className="sort-value">{sortValueText}</div>
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
