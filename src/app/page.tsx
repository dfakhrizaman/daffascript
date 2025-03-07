import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import InfiniteScrollIcons from './_components/InfiniteScrollIcons/InfiniteScrollIcons';
import Hero from './_components/Hero/Hero';
import ExperienceAndEducation from './_components/ExperienceAndEducation/ExperienceAndEducation';
import ContactMe from './_components/ContactMe/ContactMe';

export default function HomePage() {
  return (
    <>
      <Box component="main" sx={{ marginRight: '24px', marginLeft: '24px' }}>
        <Hero />

        <Typography textAlign="justify" mb="32px">
          Hey there, I’m <b>Daffa</b>! 👋 <br />
          <br />A software engineer who loves building things that actually make
          a difference. I believe great <b>
            technology should be accessible
          </b>{' '}
          to everyone, and as software engineers, we should always have a
          product-first mindset—because what we build isn’t just about code,{' '}
          <b>it’s about impact.</b> <br />
          <br />
          Here are some of the stuff I’ve used.{' '}
          <b>Find out more about me below! 🚀</b>
        </Typography>

        <InfiniteScrollIcons />
        <ExperienceAndEducation />
        <ContactMe />
      </Box>
    </>
  );
}
