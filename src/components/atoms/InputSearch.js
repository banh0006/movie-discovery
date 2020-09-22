import React from 'react'
import { MdSearch } from "react-icons/md"
import '../../css/InputSearch.css'

export default function InputSearch() {
    const search = (e) => {
        e.preventDefault()
        alert("Searching...")
    }

    return (
        <form className="search-box" onSubmit={search}>
            <input type="text" className="input" placeholder="Movie name..."  />
            <button type="submit" className="search-button">
                <MdSearch />
            </button>
        </form>
    )
}
