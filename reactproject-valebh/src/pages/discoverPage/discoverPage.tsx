import React from 'react';
import { Typography } from '@mui/material';
import { LocationMap } from 'pages/mainPage/Menu/LocationMap';
import BasicTabs from 'components/BasicTabs/BasicTabs';


function DiscoverPage() {
  return (
    <div className='px-8 justify-center'>
      <Typography variant="h4" align='center' sx={{ marginTop: "60px" }}>
        Descobrir
      </Typography>
      <div className='flex'>
        <LocationMap zoom={6} className='h-[500px] mt-28 w-[900px]'/>
        <div className='flex mt-10'>
          <BasicTabs/>
        </div>
      </div>

    </div>
  );
}

export default DiscoverPage;
