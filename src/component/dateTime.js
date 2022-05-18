import React from 'react'

function DateTime({created}) {
    const date = new Date(created)
    const days = date.toLocaleString()
    return <p className="i-size-6 has-text-white has-text-weight-bold">{`Created - ${days}`}</p>
}

export default DateTime