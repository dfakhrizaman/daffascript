'use client';

import Colors from '@/utils/colors';
import { TYPOGRAPHY } from '@/utils/typography';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import InfoCollapsable from '../InfoCollapsable/InfoCollapsable';

const experiences = [
  {
    id: 'panel1',
    years: '2024 - Now',
    title: 'Software Engineer @Finku 🚀',
    details:
      'An exciting journey in fintech, where I got to collaborate with a lot of talented & creative people. Shipped new products, optimized app performances and improved UXs. A company with a lot of alignment in values and visions with me.',
  },
  {
    id: 'panel2',
    years: '2022 - 2024',
    title: 'Frontend Engineer (Web & Mobile) @BFI Finance',
    details:
      'Well-rooted company with a modern mindset. Contributed to modernizing digital platforms and introducing test-driven development. Worked on various projects from web to mobile, from delivering product-based features to expanding components library for other engineers to use.',
  },
  {
    id: 'panel3',
    years: '2022',
    title: 'Software Engineer @Ice House',
    details:
      'Leading software house in Indonesia with top-notch talents. Learned a lot about software architectures, test-driven development, and software engineering best practices. A great place to grow and learn. Contributed to Employee Training & LMS project.',
  },
  {
    id: 'panel4',
    years: '2024',
    title: "Bachelor's in Engineering, Universitas Indonesia 🎓",
    details:
      'My journey in college was a blast! Learned a lot about engineering and building robust systems. Thanks to the pandemic I had a lot of time to learn software engineering by myself and. Also, got to meet a lot of great people and friends.',
  },
  {
    id: 'panel5',
    years: '2021 - 2022',
    title: 'Mobile App Developer Intern @LingoTalk',
    details:
      'Brought fun to language learning by building new features for LingoTalk’s mobile app. Created the LingoTrivia gamification, added internationalization (i18n) support, and followed OOP best practices. A great hands-on experience in Flutter development!',
  },
  {
    id: 'panel6',
    years: '2019',
    title: 'Started my Bachelor’s @Universitas Indonesia',
    details:
      "Haven't really figured out what I want to do with myself at the time.",
  },
  {
    id: 'panel8',
    years: '2001',
    title: 'Started my first project... as a human being 🐣',
    details: 'Booted up in 2001 and ready to tackle the world! 🎉',
  },
];

const ExperienceAndEducation = () => {
  const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : false);
    };

  return (
    <Box id="experiences" sx={{ marginTop: '32px' }}>
      <Typography
        sx={{
          ...TYPOGRAPHY.SUBHEADING_20_MULTILINE,
          paddingBottom: '16px',
          borderBottom: `1px solid ${Colors.black}`,
        }}
      >
        🛠️ Experiences & Education
      </Typography>

      {experiences.map(({ id, years, title, details }) => (
        <InfoCollapsable
          key={id}
          expanded={expandedPanel === id}
          onChange={handleAccordionChange(id)}
          summary={
            <>
              {years}: <b>{title}</b>
            </>
          }
          details={details}
        />
      ))}
    </Box>
  );
};

export default ExperienceAndEducation;
