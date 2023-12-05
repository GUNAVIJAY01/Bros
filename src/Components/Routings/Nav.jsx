import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RoomIcon from '@mui/icons-material/Room';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import TranslateSharpIcon from '@mui/icons-material/TranslateSharp';
import { Container, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FaBars } from "react-icons/fa6";

export default function Nav() {
  return (
    <Box>
      <Container maxWidth="xl" sx={{position:"sticky",top:"0",backgroundColor:"white",height:"60px",padding:"5px 0",zIndex:"88"}}>
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:1,}}>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <Box component="span" sx={{cursor:"pointer",display:{xs:"block",sm:"block",md:"none",lg:"none"},paddingRight:"8px",fontSize:"18px"}}><FaBars/>     </Box>
        
        <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"width="150px"style={{paddingBottom:"8px",cursor:"pointer"}} />
      </Box>
      <Box sx={{display:{xs:"none",sm:"none",md:"none",lg:"flex"}}}>
      <Box component="div" sx={{margin:{lg:"0 15px 0 0"},cursor:"pointer"}}>
        <Typography component="h4"> NEW CARS</Typography>
        </Box>
<Box component="div" sx={{margin:{lg:"0 15px 0 0"},cursor:"pointer"}}>
        <Typography component="h4"> USED CARS</Typography>
        </Box>
        <Box component="div" sx={{margin:{lg:"0 15px 0 0"},cursor:"pointer"}}>
        <Typography component="h4"> REVIEW & NEWS</Typography>
      </Box>
      </Box>
      
      <Box position="relative" >
        <Stack direction="row" spacing={2}sx={{alignItems:"center"}}>
        <Box component="input" placeholder="Search" sx={{display:{xs:"none",sm:"none",md:"none",lg:"block"},height:"35px",padding:"0px 8px",borderRadius:"5px",outline:"none",border:"1px solid lightgray",width:"100%"}}/>
        <Box component="span" sx={{cursor:"pointer",display:{xs:"block",sm:"block",md:"block",lg:"none"}}}>             <SearchIcon/>     </Box>
        <Box component="span" sx={{cursor:"pointer"}}><RoomIcon/>     </Box>
        <Box component="span" sx={{cursor:"pointer",display:{xs:"none",sm:"none",md:"none",lg:"block"}}}><TranslateSharpIcon/>     </Box>
        <Box component="span" sx={{cursor:"pointer",display:{xs:"none",sm:"none",md:"none",lg:"block"}}}>             <AccountCircleSharpIcon/>     </Box>
        </Stack>
      </Box>


    </Box>
        </Container>      
        </Box>
  );
}