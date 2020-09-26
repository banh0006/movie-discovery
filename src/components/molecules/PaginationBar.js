import React, { useState, useEffect } from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import '../../css/PaginationBar.css'

export default function PaginationBar({ moviesPerPage, totalMovies, currentPage, paginate }) {
    const [pageNumbers, setPageNumbers] = useState(0)
    const [paginationItems, setPaginationItems] = useState([])
    const [activePage, setActivePage] = useState(currentPage)

    const firstPageClick = () => {
        paginate(1)
        setActivePage(1)
    }

    const prePageClick = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1)
            setActivePage(currentPage - 1)
        }
    }

    const nextPageClick = () => {
        if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1)
            setActivePage(currentPage + 1)
        }
    }

    const lastPageClick = () => {
        const lastIndex = pageNumbers.length
        paginate(lastIndex)
        setActivePage(lastIndex)
    }

    const pageClick = (number) => {
        paginate(number)
        setActivePage(number)
    }

    useEffect(() => {
        setActivePage(currentPage)
    }, [currentPage])

    useEffect(() => {
        let pageNum = []
        for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
            pageNum.push(i)
        }
        setPageNumbers(pageNum)
    }, [totalMovies])

    useEffect(() => {
        if (pageNumbers.length > 0) {
            const items = pageNumbers.map(number => (
                <PaginationItem key={number} className={activePage === number ? 'active-page' : ''}>
                    <PaginationLink previous href="#popular-movies" onClick={()=> pageClick(number)}>{number}</PaginationLink>
                </PaginationItem>
            ))
            setPaginationItems(items)
        } else {
            setPaginationItems([])
        }
    }, [pageNumbers, activePage])

    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink first href="#popular-movies" onClick={firstPageClick} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous href="#popular-movies" onClick={prePageClick} />
            </PaginationItem>
                {paginationItems}
            <PaginationItem>
                <PaginationLink next href="#popular-movies" onClick={nextPageClick} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last href="#popular-movies" onClick={lastPageClick} />
            </PaginationItem>
        </Pagination>
    )
}
