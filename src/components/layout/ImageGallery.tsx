import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Image from 'next/image';
import { type } from 'os';

type props = {
    url: String[]
}

const heights = [200, 250, 120, 90, 130, 140, 250, 180, 100, 110];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ImageGallery({url} : props) {
  return (
    <Box sx={{ height:'100vh', width:'80%', margin:'auto', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => ( 
          <Item key={index} sx={{ height,  position:'relative' }}>
            <Image src={url[index]} alt={'works'}  layout='fill' objectFit='cover' over style={{ objectPosition : 'top'}}/>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}