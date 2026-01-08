'use client'

import { useState, useEffect } from 'react'

export default function useVisitors() {
    const [count, setCount] = useState(null)

    useEffect(() => {
        async function fetchCount() {
            const res = await fetch('/api/visitors')
            const data = await res.json()
            setCount(data.count)
        }
        fetchCount()
    }, [])

    return count
}
