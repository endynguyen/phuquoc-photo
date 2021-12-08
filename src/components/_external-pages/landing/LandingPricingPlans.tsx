// material
import { useTheme, styled, alpha } from '@mui/material/styles';
import { Box, Grid, Card, Stack, Container, Typography } from '@mui/material';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------
const STEP = [1, 2, 3];
const TITLE = ['Reserve Your Ride', 'Plan Your Trip', 'Hit the Road'];
const DESCRIPTION = [
  'I am a paragraph. Click here to add your own text and edit me. Let your users get to know you.',
  'I am a paragraph. Click here to add your own text and edit me. Let your users get to know you.',
  'I am a paragraph. Click here to add your own text and edit me. Let your users get to know you.'
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
          <Typography variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
            Step {step}
          </Typography>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
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
              Book Your Trip in 3 Easy Steps
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography
              sx={{
                color: isLight ? 'text.secondary' : 'text.primary'
              }}
            >
              Choose the perfect plan for your needs. Always flexible to grow
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
                Still have questions?
              </Typography>
            </MotionInView>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h2">Contact Us</Typography>
            </MotionInView>
          </Box>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
