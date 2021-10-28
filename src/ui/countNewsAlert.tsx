import { Alert } from '@mui/material'
import React, { FC } from 'react'

type Props = {
  countNews: number | null
}

export const CountNewsAlert: FC<Props> = ({ countNews }) => {
  return (
    //@ts-ignore
    <div style={styles}>
      <Alert severity="info" color="info">
        {countNews !== null ? `${countNews} новостей` : 'Загрузка'}
      </Alert>
    </div>
  )
}

const styles = {
  position: 'fixed',
  top: 30,
  right: 30,
  boxShadow: 'rgb(0, 0, 0) 0px 2px 10px',
}
