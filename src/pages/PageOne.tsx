import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function PageOne() {
  return (
    <Box>
      <ImageList cols={4} gap={6}>
        {itemData.map((item) => (
          <ImageListItem
            sx={{
              '& .MuiImageListItem-img': {
                height: '400px'
              }
            }}
            key={item.img}
          >
            <img src={item.img} srcSet={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://cdn.tgdd.vn/2020/09/CookRecipe/Avatar/pizza-hai-san-pho-mai-thumbnail.jpg',
    title: 'Bed'
  },
  {
    img: 'https://cdn-www.vinid.net/2020/04/4692c9e2-huong-dan-cach-lam-banh-pizza-tai-nha-khong-can-lo-nuong.jpg',
    title: 'Books'
  },
  {
    img: 'https://top10quynhon.com/wp-content/uploads/pizza.jpg',
    title: 'Sink'
  },
  {
    img: 'https://cdn.huongnghiepaau.com/wp-content/uploads/2019/04/banh-pizza-thom-ngon.jpg',
    title: 'Kitchen'
  },
  {
    img: 'https://img.dominos.vn/Veggie-mania.jpg',
    title: 'Blinds'
  },
  {
    img: 'https://i.ytimg.com/vi/ng3vo1RmeyQ/maxresdefault.jpg',
    title: 'Chairs'
  },
  {
    img: 'https://i.ytimg.com/vi/ng3vo1RmeyQ/maxresdefault.jpg',
    title: 'Laptop'
  },
  {
    img: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4Njg1OTI3MDI0MzUx/hungry-history-a-slice-of-history-pizza-through-the-ages-istock_000018675576large-2.jpg',
    title: 'Doors'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPIp_23gTF_FAtMarEb8DjGMOf39el2FMPw&usqp=CAU',
    title: 'Coffee'
  },
  {
    img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=85',
    title: 'Storage'
  },
  {
    img: 'https://cookieandkate.com/images/2021/07/classic-margherita-pizza.jpg',
    title: 'Candle'
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table'
  }
];
