import { PropTypes } from 'prop-types';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material/';

export default function ServiceCard({ title, image, alt, info }) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia component="img" alt={alt} height="250" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book Now</Button>
      </CardActions>
    </Card>
  );
}

ServiceCard.PropTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
