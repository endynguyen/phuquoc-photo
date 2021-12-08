// material
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, useMediaQuery, TextField } from '@mui/material';
import * as React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(4)
  }
}));

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
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '50ch' },
            textAlign: 'center'
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
          <Button
            style={{
              border: 'none',
              borderRadius: '40px',
              height: '40px',
              minWidth: '80px'
            }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </RootStyle>
  );
}
