import React, { FC, useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { teal } from '@mui/material/colors'
import { observer } from 'mobx-react-lite'

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
  const [countNews, setCountNews] = useState(null)
  const countNewsTitle =
    countNews !== null ? `${countNews} новостей` : 'Загрузка'

  const users = store.users

  const getCountNews = async (id: number) => {
    const count = await store.getUserCountNewsFromApi(id)
    setCountNews(count)
  }

  const mouseOutHandle = () => {
    setCountNews(null)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <Tooltip title={countNewsTitle} placement="bottom">
                  <StyledTableCell
                    align="center"
                    onMouseOver={() => getCountNews(user.id)}
                    onMouseOut={() => mouseOutHandle()}
                  >
                    {user.email}
                  </StyledTableCell>
                </Tooltip>
                <StyledTableCell align="center">{user.gender}</StyledTableCell>
                <StyledTableCell align="center">{user.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
})
