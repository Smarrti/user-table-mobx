import { Alert } from '@mui/material'
import React, { FC } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  box-shadow: rgba(0, 0, 0) 0 2px 10px;
`

type Props = {
  countNews: number | null
}

export const CountNewsAlert: FC<Props> = ({ countNews }) => {
  return (
    <Root>
      <Alert severity="info" color="info">
        {countNews !== null ? `${countNews} новостей` : 'Загрузка'}
      </Alert>
    </Root>
  )
}
