import { FC } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

import { tableHeaders, rows } from "./constants";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: 300,
  },
}));

export const PricesTable: FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='prices table'>
        <TableHead>
          <TableRow>
            {tableHeaders.map((tableHeaderName, index) => (
              <TableCell key={`table-header-${index}`} style={{ fontSize: 16, fontWeight: 800 }}>
                {tableHeaderName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={`table-${index}`}>
              <StyledTableCell component='th' scope='row'>
                {row.sizeName}
              </StyledTableCell>
              <StyledTableCell>{row.size}</StyledTableCell>
              <StyledTableCell>{row.priceForSize}</StyledTableCell>
              <StyledTableCell>{row.priceForMonth}</StyledTableCell>
              <StyledTableCell>{row.priceForThreeMonth}</StyledTableCell>
              <StyledTableCell>{row.priceForHalfYear}</StyledTableCell>
              <StyledTableCell>{row.priceForYear}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};