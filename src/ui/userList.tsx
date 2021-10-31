import React, { FC, useState } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { teal } from '@mui/material/colors'
import { observer } from 'mobx-react-lite'

import { CountNewsAlert } from './countNewsAlert'

import { IUsers } from '../store/users'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: teal[500],
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: teal[50],
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

type Props = {
  store: IUsers
}

export const UserList: FC<Props> = observer(({ store }) => {
  const [isAlertShow, setIsAlertShow] = useState(false)
  const [countNews, setCountNews] = useState(null)

  const users = store.getUsers()

  const getCountNews = async (id: number) => {
    setIsAlertShow(true)

    const count = await store.getUserCountNewsFromApi(id)
    setCountNews(count)
  }

  const mouseOutHandle = () => {
    setCountNews(null)
    setIsAlertShow(false)
  }

  return (
    <>
      {isAlertShow && <CountNewsAlert countNews={countNews} />}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell
                  align="right"
                  onMouseOver={() => getCountNews(user.id)}
                  onMouseOut={() => mouseOutHandle()}
                >
                  {user.email}
                </StyledTableCell>
                <StyledTableCell align="right">{user.gender}</StyledTableCell>
                <StyledTableCell align="right">{user.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
})
