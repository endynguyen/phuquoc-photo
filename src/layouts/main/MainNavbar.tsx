import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
// import { MHidden } from '../../components/@material-extend';
// //
// import MenuDesktop from './MenuDesktop';
// import MenuMobile from './MenuMobile';
// import navConfig from './MenuConfig';

import * as React from 'react';
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 50;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
  to?: string;
  children?: {
    subheader: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};

export type MenuProps = {
  isOffset: boolean;
  isHome: boolean;
  navConfig: MenuItemProps[];
};

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'rgb(0,0,0,0.7)' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'rgb(0,0,0,0.7)',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Label
            color="info"
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'common.white'
            }}
          >
            Phu Quoc Photo
          </Label>
          <Box sx={{ flexGrow: 1 }} />
          <RouterLink to="/">
            <Label
              sx={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'common.white',
                textAlign: 'right'
              }}
            >
              Hướng Dẫn
            </Label>
          </RouterLink>

          {/* <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden> */}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
