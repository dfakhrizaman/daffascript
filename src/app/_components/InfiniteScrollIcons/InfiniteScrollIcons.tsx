'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';
import Image from 'next/image';
import styles from './InfiniteScrollIcons.styles';

const iconRoutes = [
  { src: '/icons/ic_flutter.svg', alt: 'Flutter Logo' },
  { src: '/icons/ic_react.svg', alt: 'React Logo' },
  { src: '/icons/ic_go.svg', alt: 'Go (Golang) Logo' },
  { src: '/icons/ic_typescript.svg', alt: 'TypeScript Logo' },
  { src: '/icons/ic_javascript.svg', alt: 'JavaScript Logo' },
  { src: '/icons/ic_nextjs.svg', alt: 'Next.js Logo' },
  { src: '/icons/ic_mongodb.svg', alt: 'MongoDB Logo' },
  { src: '/icons/ic_aws.svg', alt: 'AWS Logo' },
  { src: '/icons/ic_postgresql.svg', alt: 'PostgreSQL Logo' },
  { src: '/icons/ic_python.svg', alt: 'Python Logo' },
  { src: '/icons/ic_docker.svg', alt: 'Docker Logo' },
  { src: '/icons/ic_firebase.svg', alt: 'Firebase Logo' },
  { src: '/icons/ic_mui.svg', alt: 'Material-UI (MUI) Logo' },
  { src: '/icons/ic_nestjs.svg', alt: 'NestJS Logo' },
  { src: '/icons/ic_nodejs.svg', alt: 'Node.js Logo' },
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
        autoPlaySpeed={1}
        customTransition="all 3s linear"
        transitionDuration={3000}
        additionalTransfrom={0}
        removeArrowOnDeviceType={[
          'tablet',
          'mobile',
          'desktop',
          'superLargeDesktop',
        ]}
        draggable={false}
        swipeable={false}
        keyBoardControl={false}
        pauseOnHover={false}
        shouldResetAutoplay={true}
        focusOnSelect={false}
      >
        {infiniteIcons.map((icon, index) => (
          <Box key={index} sx={{ textAlign: 'center' }}>
            <Image
              src={icon.src}
              alt={icon.alt}
              width={50}
              height={50}
              priority
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default InfiniteScrollIcons;
