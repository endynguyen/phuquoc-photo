import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack, Input, Button } from '@mui/material';
import * as React from 'react';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import { varFadeInUp, varWrapEnter, varFadeInRight, varFadeInLeft } from '../../animate';
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
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    margin: 'auto',
    textAlign: 'center'
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
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroImgStyle alt="hero" src="/static/home/background.png" variants={varFadeInUp} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInLeft}>
              <Typography
                sx={{
                  fontSize: '90px',
                  fontWeight: 'bold',
                  color: 'common.white'
                }}
              >
                PhuQuoc <br />
                Photo <br />
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Box
                style={{
                  flex: 1,
                  color: 'common.white',
                  border: 'none',
                  background: 'white',
                  borderRadius: '40px',
                  transition: 'width 300ms ease',
                  height: '70px',
                  minWidth: '400px'
                }}
              >
                <Input
                  style={{
                    flex: 1,
                    border: 'none',
                    height: '70px',
                    minWidth: '330px',
                    maxWidth: '400px'
                  }}
                  id="epg-value"
                  placeholder="Nhập mã code vào đây"
                  disableUnderline
                />
                <Button
                  style={{
                    border: 'none',
                    borderRadius: '40px',
                    height: '40px',
                    width: '80px'
                  }}
                  variant="contained"
                  component={RouterLink}
                  to={PATH_DASHBOARD.root}
                >
                  Gửi Mã
                </Button>
              </Box>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
