import * as React from 'react'
type LabelProps = {
    children: React.ReactNode;
    className?: string
}

export function Label({children, className}: LabelProps) {
    return (
        <label className={`label ${className}`}>{children}</label>
    )
}