import { Container, Typography } from '@mui/material';

function FeedPage() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center">
        Feed
      </Typography>
      <Typography variant="body1" align="center" sx={{ marginTop: "20px" }}>
        Aqui está o seu feed. Veja as últimas atualizações e recomendações personalizadas para você!
      </Typography>
    </Container>
  );
}

export default FeedPage;
