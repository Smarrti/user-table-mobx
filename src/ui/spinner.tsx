import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`

export const Spinner = () => {
  return (
    <Root>
      <CircularProgress />
    </Root>
  )
}
