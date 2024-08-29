import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // para navegação
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export function Cards() {
  const navigate = useNavigate();

  const cards = [
    { title: "Descobrir", icon: <SearchIcon sx={{ fontSize: 50, color: 'white' }} />, route: "/descobrir" },
    { title: "Feed", icon: <FeedIcon sx={{ fontSize: 50, color: 'white' }} />, route: "/feed" },
    { title: "Deixa que a gente escolhe", icon: <ThumbUpIcon sx={{ fontSize: 50, color: 'white' }} />, route: "/escolhe" },
  ];

  return (
    <Container maxWidth="lg">
      <Typography 
        variant="h3" 
        align="center" 
        sx={{ 
          marginTop: "100px", 
          fontFamily: 'Roboto, sans-serif', 
          fontWeight: 700, 
          color: '#333', 
          letterSpacing: '1px' 
        }}
      >
        O que você procura?
      </Typography>
      <Grid container spacing={5} sx={{ marginTop: "100px" }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CardActionArea onClick={() => navigate(card.route)}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 200, backgroundColor:'#1B263B', color: 'white' }}>
                  {card.icon}
                  <Typography gutterBottom variant="h5" component="div" align="center" sx={{ marginTop: 2 }}>
                    {card.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
