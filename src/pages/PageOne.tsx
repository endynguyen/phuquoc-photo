import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  styled,
  Typography,
  useTheme,
  MobileStepper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery
} from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AppPagination from '../components/AppPagination';
import DownloadIcon from '@mui/icons-material/Download';
import LinkIcon from '@mui/icons-material/Link';
import { Button as MuiButton, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import ImageIcon from '@mui/icons-material/Image';
const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: 'transparent',
  color: '#000',
  borderRadius: '20px',
  padding: theme.spacing(1)
}));

const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

export default function PageOne() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [state, setState] = useState({ isOpen: false, photoIndex: 0, photoUrl: '' });
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const [id, setID] = useState(generateOrderNumber());
  const maxSteps = images.length;
  return (
    <div style={{ alignItems: 'center', marginTop: '88px' }}>
      <Typography gutterBottom variant="h2" align="center">
        Hình ảnh mã đơn hàng #{id}
      </Typography>
      <ButtonGroup style={{ float: 'right', marginRight: '80px' }}>
        <MuiButton size="large" startIcon={<ImageIcon />} onClick={handleClickOpen}>
          Image Box
        </MuiButton>
      </ButtonGroup>
      <Box sx={{ margin: '88px 60px' }}>
        <ImageList variant="masonry" cols={mobile ? 2 : fullScreen ? 3 : 4} gap={6}>
          {images.map((item) => (
            <ImageListItem
              sx={{
                '& .MuiImageListItem-img': {
                  maxWidth: '100%',
                  height: 'auto',
                  padding: '10px 10px',
                  borderRadius: '30px'
                }
              }}
              key={item.img}
            >
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
                onClick={() => {
                  let updateState = { ...state };
                  updateState.isOpen = true;
                  updateState.photoUrl = item.img;
                  setState(updateState);
                  handleClickOpen();
                }}
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <CloudDownloadIcon />
                  </IconButton>
                }
                sx={{ margin: '0px 10px 10px', borderRadius: '30px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{'Phuquoc Photos'}</DialogTitle>
          <DialogContent>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.title}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: '100%',
                        maxWidth: '100%',
                        overflow: 'hidden',
                        width: '100%'
                      }}
                      src={step.img}
                      alt={step.title}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
                </Button>
              }
            />
          </DialogContent>
          <ButtonGroup style={{ display: 'flex', justifyContent: 'center' }}>
            <MuiButton size="large" startIcon={<DownloadIcon />}>
              Download
            </MuiButton>
            <MuiButton size="large" startIcon={<LinkIcon />}>
              Share
            </MuiButton>
          </ButtonGroup>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <AppPagination />
      </Box>
    </div>
  );
}

const images = [
  {
    img: 'http://wiki-travel.com.vn/Uploads/picture/hieuhieu-193223023247-phan-biet-snorkeling-va-diving.jpg',
    title: 'Bed'
  },
  {
    img: 'http://wiki-travel.com.vn/Uploads/picture/hieuhieu-193323023318-Snorkeling.jpg',
    title: 'Books'
  },
  {
    img: 'http://wiki-travel.com.vn/Uploads/picture/hieuhieu-193323023336-Diving.jpg',
    title: 'Sink'
  },
  {
    img: 'http://wiki-travel.com.vn/Uploads/picture/hieuhieu-193423023413-cac-buoc-can-chuan-bi-doi-voi-nguoi-khong-biet-boi.jpg',
    title: 'Kitchen'
  },
  {
    img: 'http://wiki-travel.com.vn/Uploads/picture/hieuhieu-193423023452-nhung-luu-y-truoc-khi-lan-bien.jpg',
    title: 'Blinds'
  },
  {
    img: 'http://wiki-travel.com.vn/Uploads/picture/hieuhieu-193523023518-phai-dam-bao-suc-khoe.jpg',
    title: 'Chairs'
  },
  {
    img: 'http://wiki-travel.com.vn/Uploads/picture/hieuhieu-193523023545-thoi-diem-nen-di-lan-bien.jpg',
    title: 'Laptop'
  },
  {
    img: 'https://toplist.vn/images/800px/con-dao-166396.jpg',
    title: 'Doors'
  },
  {
    img: 'https://toplist.vn/images/800px/phu-quoc-166397.jpg',
    title: 'Coffee'
  },
  {
    img: 'https://toplist.vn/images/800px/nha-trang-166398.jpg',
    title: 'Storage'
  },
  {
    img: 'https://toplist.vn/images/800px/cu-lao-cham-166400.jpg',
    title: 'Candle'
  },
  {
    img: 'https://toplist.vn/images/800px/vinh-vinh-hy-166401.jpg',
    title: 'Coffee table'
  }
];
