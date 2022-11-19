import {useState, useEffect}from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


  

const ERCalculator = () => {
    const [todaysRateEUR, setTodaysRateEUR] = useState<any[]>([])

    const [code, setCode] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCode(event.target.value as string );
  };

     
    useEffect (()=>{

        axios.get(`
        http://api.nbp.pl/api/exchangerates/rates/A/EUR/`
        )
        .then((data) =>{
            setTodaysRateEUR(data.data)
            console.log(data.data)
           
    })
        .catch((err) => console.error(err.message));

    }, [])
    return (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Currency Code</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={code}
              label="Currency code"
              onChange={handleChange}
            >
              <MenuItem value={10}>EUR</MenuItem>
              <MenuItem value={20}>USD</MenuItem>
              <MenuItem value={30}>GBP</MenuItem>
            </Select>
          </FormControl>
        </Box>
      );
    }

export default ERCalculator;