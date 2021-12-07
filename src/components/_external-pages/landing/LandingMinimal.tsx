// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, useMediaQuery, TextField } from '@mui/material';
//
import { MotionInView, varFadeInDown } from '../../animate';
import * as React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 500,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`
  };
});

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [value, setValue] = React.useState('Controlled');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Contact Us
            </Typography>
          </MotionInView>
        </Box>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '40ch' },
            textAlign: 'left'
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="standard-textarea"
              label="First Name"
              multiline
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-textarea"
              label="Last Name"
              multiline
              onChange={handleChange}
              variant="standard"
            />
            <TextField id="standard-textarea" label="Email" multiline variant="standard" />
            <TextField
              id="standard-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="standard"
            />
          </div>
          <Button size="large" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </RootStyle>
  );
}
