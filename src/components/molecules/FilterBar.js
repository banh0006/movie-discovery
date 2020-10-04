import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterbarActions from '../../redux/actions/filterbarActions'
import { COUNTRIES, YEARS, SORT_OPTIONS } from '../../asset/GlobalData'
import { UncontrolledDropdown, DropdownToggle, Nav, DropdownMenu, NavItem, Button } from 'reactstrap'
import "../../css/FilterBar.css"
import { TiArrowUnsorted } from "react-icons/ti"
import { RiFilterOffFill } from "react-icons/ri"
import { AiOutlineGlobal, AiTwotoneCalendar, AiTwotoneFolderOpen } from "react-icons/ai"

export function FilterBar(props) {
    const countries = COUNTRIES
    const years = YEARS
    const sorts = SORT_OPTIONS
    const [countryDropdownItems, setCountryDropdownItems] = useState([])
    const [yearDropdownItems, setYearDropdownItems] = useState([])
    const [sortDropdownItems, setSortDropdownItems] = useState([])
    const [genreDropdownItems, setGenreDropdownItems] = useState([])
    const [genreCheckBoxsState, setGenreCheckBoxsState] = useState([])
    const [yearCheckBoxsState, setYearCheckBoxsState] = useState([])
    const [countryCheckBoxsState, setCountryCheckBoxsState] = useState([])
    const [sortCheckBoxsState, setSortCheckBoxsState] = useState({sortType: 'Default'})
    const [isClearingFilter, setIsClearingFilter] = useState(false)
    const [genreValueText, setGenreValueText] = useState('All')
    const [yearValueText, setYearValueText] = useState('All')
    const [countryValueText, setCountryValueText] = useState('All')
    const [sortValueText, setSortValueText] = useState('Default')
    
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
        setSortCheckBoxsState(prevState => ({ ...prevState, "sortType": value }))
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

    const getCheckedArray = (obj) => {
        let checkedArray = []
        for (const [key, value] of Object.entries(obj)) {
            if (value === true) checkedArray.push(key)
        }
        return checkedArray
    }

    const clearFilter = async() => {
        setIsClearingFilter(true)
        if (getObjLength(yearCheckBoxsState) > 0) {
            let newYearState = unCheck(yearCheckBoxsState)
            await setYearCheckBoxsState(newYearState)
        }
        
        if (getObjLength(countryCheckBoxsState) > 0) {
            let newCountryState = unCheck(countryCheckBoxsState)
            await setCountryCheckBoxsState(newCountryState)
        }
        
        if (getObjLength(genreCheckBoxsState) > 0) {
            let newGenreState = unCheck(genreCheckBoxsState)
            await setGenreCheckBoxsState(newGenreState)
        }

        await setSortCheckBoxsState({sortType: 'Default'})

        // use await to make sure there is no useEffect change redux store
        props.actions.clearFilter()
        setIsClearingFilter(false)
    }

    const unCheck = (obj) => {
        let newObj = {}
        Object.keys(obj).map(key => {
            newObj = { ...newObj, [key]: false}
        })

        return newObj
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
            return null
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
            return null
        })

        sorts.map((sort, index) => {
            sortItems.push(
                <div key={index} className="dropdown-item sort-filter-item">
                    <input type="radio" name="sort"
                        checked={props.filterOptions.sort===sort}
                        key={index}
                        value={sort} 
                        onChange={hanldeSortCheckBoxsChange} 
                    />
                    {sort}
                </div>
            )
            return null
        })

        setCountryDropdownItems(countryItems)
        setYearDropdownItems(yearItems)
        setSortDropdownItems(sortItems)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let yearItems = []
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
            setYearDropdownItems(yearItems)
            return null
        })

        if (isClearingFilter) {
            setYearValueText('All')
            return 
        }

        const yearsChecked = getChecked(yearCheckBoxsState)    
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

        const checkedYears = getCheckedArray(yearCheckBoxsState)
        props.actions.setFilterOptions({ ...props.filterOptions, years: checkedYears })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [yearCheckBoxsState])

    useEffect(() => {
        let countryItems = []
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
            setCountryDropdownItems(countryItems)
            return null
        })

        if (isClearingFilter) {
            setCountryValueText('All')
            return
        }

        const countryChecked = getChecked(countryCheckBoxsState)    
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

        const checkedCountries = getCheckedArray(countryCheckBoxsState)
        props.actions.setFilterOptions({ ...props.filterOptions, countries: checkedCountries })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryCheckBoxsState])

    useEffect(() => {
        let sortItems = []
        sorts.map((sort, index) => {
            sortItems.push(
                <div key={index} className="dropdown-item sort-filter-item">
                    <input type="radio" name="sort"
                        key={index}
                        checked={sortCheckBoxsState.sortType === sort}
                        value={sort} 
                        onChange={hanldeSortCheckBoxsChange} 
                    />
                    {sort}
                </div>
            )
            setSortDropdownItems(sortItems)
            return null
        })

        if (isClearingFilter) {
            setSortValueText('Default')
            return
        }

        const sortValue = sortCheckBoxsState.sortType
        setSortValueText(sortValue)
        props.actions.setFilterOptions({ ...props.filterOptions, sort: sortValue })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortCheckBoxsState])

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
                return null
            })
            setGenreDropdownItems(items)
        }

        if (isClearingFilter) {
            setGenreValueText('All')
            return 
        }

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

        const checkedGenres = getCheckedArray(genreCheckBoxsState)
        props.actions.setFilterOptions({ ...props.filterOptions, genres: checkedGenres })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.genres, genreCheckBoxsState])

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
                    <Button color="info" className="clear-filter-button" onClick={clearFilter} ><RiFilterOffFill />Clear Filter</Button>
                </NavItem>
            </Nav>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        genres: state.genres.length === 0 ? [] : state.genres,
        filterOptions: state.filterbar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            setFilterOptions: bindActionCreators(filterbarActions.setFilterOptions, dispatch),
            clearFilter: bindActionCreators(filterbarActions.clearFilter, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)