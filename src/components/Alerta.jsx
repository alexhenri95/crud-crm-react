import React from 'react'

const Alerta = ({children}) => {
    return (
        <p class="mt-2 text-xs text-red-600 dark:text-red-500">
            <span class="font-medium">(*)</span> {children}
        </p>
    )
}

export default Alerta