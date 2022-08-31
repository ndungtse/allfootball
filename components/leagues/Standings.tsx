import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useApp } from '../../components/constants/contexts/AppContext';

export default function Standings({data}: any) {
  const { isDark } = useApp();
  return (
    <TableContainer sx={{backgroundColor: isDark?'#040921':'white'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow sx={{borderBottom: isDark?'2px solid #212f4b':''}}>
            <TableCell sx={{color: isDark?'white':'black'}} >Club</TableCell>
            <TableCell sx={{color: isDark?'white':'black'}} align="right">MP</TableCell>
            <TableCell sx={{color: isDark?'white':'black'}} align="right">W</TableCell>
            <TableCell sx={{color: isDark?'white':'black'}} align="right">D</TableCell>
            <TableCell sx={{color: isDark?'white':'black'}} align="right">L</TableCell>
            <TableCell sx={{color: isDark?'white':'black'}} align="right">GF</TableCell>
            <TableCell sx={{color: isDark?'white':'black'}} align="right">GA</TableCell>
            <TableCell sx={{color: isDark?'white':'black'}} align="right">GD</TableCell>
            <TableCell sx={{color: isDark?'white':'black'}} align="right">Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: any) => (
            <TableRow hover key={row.team.id} sx={{":hover": { cursor: 'pointer', backgroundColor: isDark?'#0f1327!important':''}, borderBottom: isDark?'2px solid #212f4b':''}} >
              <TableCell sx={{color: isDark?'white':'black', ":hover": { cursor: 'pointer'}}} component="th" scope="row">
               <div className={`flex w-full ${isDark&&'text-white'} h-full items-center`}>
                <p>{row.rank}</p>
                <img className='w-[20px] bg-[] mx-2 h-[20px] object-cover' src={row.team.logo} alt="" />
                <p>{row.team.name}</p>
               </div>
              </TableCell>
              <TableCell sx={{color: isDark?'white':'black', ":hover": { cursor: 'pointer'}}} align="right">{row.all.played}</TableCell>
              <TableCell sx={{color: isDark?'white':'black', ":hover": { cursor: 'pointer'}}} align="right">{row.all.win}</TableCell>
              <TableCell sx={{color: isDark?'white':'black', ":hover": { cursor: 'pointer'}}} align="right">{row.all.draw}</TableCell>
              <TableCell sx={{color: isDark?'white':'black', ":hover": { cursor: 'pointer'}}} align="right">{row.all.lose}</TableCell>
              <TableCell sx={{color: isDark?'white':'black', ":hover": { cursor: 'pointer'}}} align="right">{row.all.goals.for}</TableCell>
              <TableCell sx={{color: isDark?'white':'black', ":hover": { cursor: 'pointer'}}} align="right">{row.all.goals.against}</TableCell>
              <TableCell sx={{color: isDark?'white':'black', ":hover": { cursor: 'pointer'}}} align="right">{row.goalsDiff}</TableCell>
              <TableCell sx={{color: isDark?'white':'black', ":hover": { cursor: 'pointer'}}} align="right">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
