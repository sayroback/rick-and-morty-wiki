import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { Species } from '../Hooks/Species'

export const IndexRoutes = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage />} />
      </Route>
      <Route path='species' element={<Species />} />
    </Routes>
  )
}
