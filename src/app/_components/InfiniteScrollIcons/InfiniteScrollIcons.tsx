'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';
import Image from 'next/image';
import styles from './InfiniteScrollIcons.styles';

const iconRoutes = [
  '/icons/ic_flutter.svg',
  '/icons/ic_react.svg',
  '/icons/ic_go.svg',
  '/icons/ic_typescript.svg',
  '/icons/ic_javascript.svg',
  '/icons/ic_nextjs.svg',
  '/icons/ic_mongodb.svg',
  '/icons/ic_aws.svg',
  '/icons/ic_postgresql.svg',
  '/icons/ic_python.svg',
  '/icons/ic_docker.svg',
  '/icons/ic_firebase.svg',
  '/icons/ic_mui.svg',
  '/icons/ic_nestjs.svg',
  '/icons/ic_nodejs.svg',
];

const infiniteIcons = [...iconRoutes, ...iconRoutes];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 7 },
  desktop: { breakpoint: { max: 1200, min: 1024 }, items: 6 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 5 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 4 },
};

const InfiniteScrollIcons = () => {
  return (
    <Box sx={styles.container}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1} // Ensures smooth scrolling
        customTransition="all 3s linear"
        transitionDuration={3000}
        additionalTransfrom={0}
        removeArrowOnDeviceType={[
          'tablet',
          'mobile',
          'desktop',
          'superLargeDesktop',
        ]}
        draggable={false} // Prevents user drag
        swipeable={false} // Ensures smooth autoplay
        keyBoardControl={false} // Prevents keyboard interactions from pausing it
        pauseOnHover={false} // Ensures hover doesn't stop autoplay
        shouldResetAutoplay={true} // Resets autoplay after interaction
        focusOnSelect={false} // Prevents click from stopping autoplay
      >
        {infiniteIcons.map((src, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <Image src={src} alt="Icon" width={50} height={50} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default InfiniteScrollIcons;
