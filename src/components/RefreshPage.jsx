'use client'

import { useEffect } from "react"

export const RefreshPage = ({ intervalInMinutes }) => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            window?.location?.reload?.()
        }, 1000 * 60 * intervalInMinutes);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <></>
}