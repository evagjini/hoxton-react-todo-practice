import React from "react"

type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function Search({ setSearch }: Props) {


    return (
        <input placeholder="Search"
            onChange={(event) => {
                setSearch(event.target.value)
            }} />
    )
}