import React from 'react'
import { Select } from 'flowbite-react'

const SelectFilter = ({ title, setLimit }) => {
    return (
        <>
            <Select
                className="rounded w-1/3  "
                onChange={(e) => setLimit(e.target.value)}
            >
                <option value="15">{title} 15</option>
                <option value="30">{title} 30</option>
                <option value="0">Todos</option>
            </Select>
        </>
    )
}

export default SelectFilter
