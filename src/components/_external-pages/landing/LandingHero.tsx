import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  IconButton,
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import { varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[700],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));
const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  height: 'auto',
  margin: 'auto',
  position: 'absolute'
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroImgStyle alt="hero" src="/static/home/background.png" variants={varFadeInUp} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{ fontSize: '100px', fontFamily: 'sans-serif', color: 'common.white' }}
              >
                Phu Quoc <br />
                Photo <br />
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <TextField
                style={{
                  flex: 1,
                  margin: '0 40px 0 0',
                  color: 'common.white',
                  border: 'none',
                  background: 'rgb(243, 246, 249)',
                  borderRadius: '40px',
                  transition: 'width 300ms ease'
                }}
                size="medium"
                fullWidth
                id="epg-value"
                label="Input code hear"
                margin="dense"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        color="primary"
                        component={RouterLink}
                        to={PATH_DASHBOARD.root}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
