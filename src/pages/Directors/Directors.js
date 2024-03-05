import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Directors({ image, name, designation, email, description }) {
  return (
    <div>
    <Card sx={{ maxWidth: 345, paddingTop: '16px', marginBottom: '16px' }}>
      <CardActionArea>
        <CardMedia
          component={() => (
            <div className="d-flex justify-content-center">
              {image}
            </div>
          )}
          height="140"
          alt="Director Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {designation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></div>
  );
}
