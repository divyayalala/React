import React from 'react'
import ReactDOM from 'react-dom'

export const PortalDemo = () => {
    return  ReactDOM.createPortal(
        <div>
            portals Demo
        </div>,
        document.getElementById('portal-root')
    )
}
