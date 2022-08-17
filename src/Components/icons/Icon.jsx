import React from 'react'

export const Icon = ({ children, ...rest }) => {
  return (
    <span
      id={rest.id}
      className={`material-symbols-outlined ${rest.className}`}
    >
      {children}
    </span>
  )
}
