import * as React from 'react'
type LabelProps = {
    children: React.ReactNode;
}

export function Label({children}: LabelProps) {
    return (
        <label className="label">{children}</label>
    )
}