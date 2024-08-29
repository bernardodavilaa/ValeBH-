import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
  } from "@mui/material";
  
  export function Cards() {
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ marginTop: "50px" }}>
          O que você procura?
        </Typography>
        <Grid container spacing={5} sx={{ marginTop: "20px" }}>
          {Array.from(Array(6).keys()).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Descobrir
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
  