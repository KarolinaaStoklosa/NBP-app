import {useState, useEffect} from "react"
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(
    name: string,
    code: string,
    rate: number,
  ) {
    return { name, code, rate };
  }


const ExchangerateTable = () => {

    const [todaysRate, setTodaysRates] = useState<any[]>([])

    const rows = todaysRate[0]? todaysRate[0].rates.map((el: any, i: number) => {
      return createData(el.currency, el.code, el.mid);
    }): [];

    
    useEffect (()=>{

        axios.get(`
        http://api.nbp.pl/api/exchangerates/tables/A/`
        )
        .then((data) =>{
            setTodaysRates(data.data)
            console.log(data.data)
           
    })
        .catch((err) => console.error(err.message));

    }, [])

    return (
        <>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Waluta</StyledTableCell>
            <StyledTableCell align="right">Kod waluty</StyledTableCell>
            <StyledTableCell align="right">Kurs średni</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.code}</StyledTableCell>
              <StyledTableCell align="right">{row.rate}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}

export default ExchangerateTable;