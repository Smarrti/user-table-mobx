import { CircularProgress } from '@mui/material'
import React from 'react'

export const Spinner = () => {
  return (
    <div style={style}>
      <CircularProgress />
    </div>
  )
}

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 80,
}
