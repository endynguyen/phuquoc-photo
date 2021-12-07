import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AppPagination from '../components/AppPagination';

export default function PageOne() {
  return (
    <Box sx={{ marginTop: '88px' }}>
      <ImageList variant="masonry" cols={4} gap={6}>
        {itemData.map((item) => (
          <ImageListItem
            sx={{
              '& .MuiImageListItem-img': {
                maxWidth: '100%',
                height: 'auto'
              }
            }}
            key={item.img}
          >
            <img src={item.img} srcSet={item.img} alt={item.title} loading="lazy" />
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
            />
          </ImageListItem>
        ))}
      </ImageList>
      <AppPagination />
    </Box>
  );
}

const itemData = [
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
