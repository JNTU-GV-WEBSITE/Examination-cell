import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const examNotificationData = [
  {
    id: 1,
    primaryText: 'Exam Tomorrow',
    secondaryText: 'Mathematics exam scheduled for tomorrow at 10 AM.',
    date: '2024-02-10',
    link: 'https://example.com/exam-tomorrow',
  },
  {
    id: 2,
    primaryText: 'Project Submission',
    secondaryText: 'Reminder: Submit your project by the end of the day.',
    date: '2024-02-11',
    link: 'https://example.com/project-submission',
  },
  // Add more exam notification data as needed
];

const resultNotificationData = [
  {
    id: 3,
    primaryText: 'Mathematics Exam Result',
    secondaryText: 'The result for the recent Mathematics exam is now available.',
    date: '2024-02-12',
    link: 'https://example.com/exam-result',
  },
  {
    id: 4,
    primaryText: 'Physics Exam Result',
    secondaryText: 'Check your Physics exam result in the student portal.',
    date: '2024-02-13',
    link: 'https://example.com/physics-result',
  },
  // Add more result notification data as needed
];

export default function Notifications() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {/* Left side - Exam Notification */}
      <div style={{ flex: '1', maxWidth: '100%', marginBottom: '16px' }}>
        <Typography variant="h5" gutterBottom>
          Exam Notifications
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {examNotificationData.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem alignItems="flex-start">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    marginRight: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ color: '#333333' }}>
                    {item.date}
                  </Typography>
                </div>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#1976D2', textDecoration: 'none' }}
                    >
                      {item.primaryText}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.secondaryText}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </div>

      {/* Right side - Result Notification */}
      <div style={{ flex: '1', maxWidth: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Result Notifications
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {resultNotificationData.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem alignItems="flex-start">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    marginRight: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ color: '#333333' }}>
                    {item.date}
                  </Typography>
                </div>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#1976D2', textDecoration: 'none' }}
                    >
                      {item.primaryText}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.secondaryText}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </div>
    </div>
  );
}
