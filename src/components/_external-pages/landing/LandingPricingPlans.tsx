// material
import { useTheme, styled, alpha } from '@mui/material/styles';
import { Box, Grid, Card, Stack, Container, Typography } from '@mui/material';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------
const STEP = [1, 2, 3];
const TITLE = ['Nhập Mã Code', 'Tải Ảnh ', 'Ảnh Đã Lưu'];
const DESCRIPTION = [
  'Khi bạn vào trang chủ, sẽ có hiển thị ô nhập mã, bạn nhập mã code bạn có được vào ô và nhấn nút gửi .',
  'Sau khi nhập mã, toàn bộ  ảnh của bạn sẽ hiển thị, bạn có thể lựa chọn tải từng tấm ảnh hoặc tải từng bức ảnh.',
  'Ảnh của bạn sẽ đươc lưu vào máy của bạn, nếu việc tải ảnh chưa thành công, vui lòng thực hiện tải ảnh lại từ đầu như bước 2.'
];
const PLANS = [...Array(3)].map((_, index) => ({
  step: STEP[index],
  title: TITLE[index],
  description: DESCRIPTION[index]
}));

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(5)
  }
}));

// ----------------------------------------------------------------------

type PlanCardProps = {
  plan: {
    step: number;
    title: string;
    description: string;
  };
  cardIndex: number;
};

function PlanCard({ plan, cardIndex }: PlanCardProps) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const { step, title, description } = plan;

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: (theme) =>
          `0px 48px 80px ${alpha(
            isLight ? theme.palette.grey[500] : theme.palette.common.black,
            0.12
          )}`,
        ...(cardIndex === 1 && {
          boxShadow: (theme) =>
            `0px 48px 80px ${alpha(
              isLight ? theme.palette.grey[500] : theme.palette.common.black,
              0.48
            )}`
        })
      }}
    >
      <Stack spacing={5}>
        <div>
          <Typography variant="h4" sx={{ mb: 2, display: 'block' }}>
            Bước {step}
          </Typography>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h6" sx={{ mb: 2, display: 'block' }}>
            {description}
          </Typography>
        </div>
      </Stack>
    </Card>
  );
}

export default function LandingPricingPlans() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Tải ảnh đã chụp dể dàng trong 3 bước
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={5}>
          {PLANS.map((plan, index) => (
            <Grid key={plan.step} item xs={12} md={4}>
              <MotionInView variants={index === 1 ? varFadeInDown : varFadeInUp}>
                <PlanCard plan={plan} cardIndex={index} />
              </MotionInView>
            </Grid>
          ))}
        </Grid>
        <MotionInView variants={varFadeIn}>
          <Box sx={{ pt: 5, mt: 10, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography paddingBottom="50px" variant="h3">
                Bạn vẫn còn câu hỏi ?
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h2">Liên Hệ Với Chúng Tôi</Typography>
            </MotionInView>
          </Box>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
