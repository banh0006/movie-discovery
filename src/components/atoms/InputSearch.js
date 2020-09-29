import React, { useState } from 'react'
import { MdSearch } from "react-icons/md"
import '../../css/InputSearch.css'
import { useHistory } from 'react-router-dom'

export default function InputSearch() {
    const history = useHistory()
    const [searchString, setSearchString] = useState('')
    const search = (e) => {
        e.preventDefault()
        if (searchString.length > 0) {
            history.push('/search', {searchString: searchString})
        } else {
            alert('Please input search key words')
        }
    }

    const handleChange = (event) => setSearchString(event.target.value)

    return (
        <form className="search-box" onSubmit={search}>
            <input type="text" className="input" placeholder="Movie name..." value={searchString} onChange={handleChange} />
            <button type="submit" className="search-button">
                <MdSearch />
            </button>
        </form>
    )
}
