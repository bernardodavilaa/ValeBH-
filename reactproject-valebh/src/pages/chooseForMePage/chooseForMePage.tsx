import React from 'react';
import { Container, Typography } from '@mui/material';

function ChooseForMePage() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center">
        Deixa que a gente escolhe
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginTop: "20px" }}>
        Não consegue decidir? Deixa que a gente escolhe algo incrível para você!
      </Typography>
    </Container>
  );
}

export default ChooseForMePage;
