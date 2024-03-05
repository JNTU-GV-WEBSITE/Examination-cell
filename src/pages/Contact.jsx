import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const contactContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
};

const contactHeadingStyle = {
  marginBottom: '20px', // You can adjust the spacing as needed
};

const contactInfoStyle = {
  fontSize: '1.2rem',
  marginBottom: '16px', // You can adjust the spacing as needed
};

const Contact = () => {
  return (
    <div className="h-100">
      <Container maxWidth="md" style={contactContainerStyle}>
        <Typography variant="h2" style={contactHeadingStyle}>
          Contact Us
        </Typography>
        <Typography variant="body1" style={contactInfoStyle}>
          For inquiries and support, please contact us at:
        </Typography>
        <Typography variant="body1" style={contactInfoStyle}>
          Email: your-email@example.com
        </Typography>
        <Typography variant="body1" style={contactInfoStyle}>
          Gmail: your-gmail@gmail.com
        </Typography>
        {/* Add your 3D art or animations here */}
      </Container>
    </div>
  );
};

export default Contact;
