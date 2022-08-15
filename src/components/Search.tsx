import React from "react"



export function Search({ setSearch }: any) {

    return (
        <input placeholder="Search" className="search-input"
            onChange={(event) => {
                setSearch(event.target.value)
            }} />
    )
}