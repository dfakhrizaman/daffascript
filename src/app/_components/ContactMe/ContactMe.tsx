'use client';

import { TYPOGRAPHY } from '@/utils/typography';
import { Check, ContentCopy } from '@mui/icons-material';
import { Box, IconButton, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './ContactMe.styles';

const email = 'daffafakhrizaman@gmail.com';

const ContactMe = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.heading}>☎️ Get in touch</Typography>
      <Typography textAlign="justify">
        I’m always open to new opportunities and collaborations! Feel free to
        reach out to me. Looking forward to hearing from you! 💌
      </Typography>

      <Box sx={styles.emailContainer}>
        <TextField
          value={email}
          sx={styles.textField}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
        <IconButton onClick={handleCopy} size="small" sx={styles.iconButton}>
          {copied ? (
            <Check fontSize="small" color="primary" />
          ) : (
            <ContentCopy fontSize="small" color="primary" />
          )}
        </IconButton>
      </Box>

      <Typography sx={TYPOGRAPHY.BODY_14_MEDIUM}>
        Or find out more about me here:
      </Typography>

      <Box sx={styles.otherSocials}>
        <IconButton
          href="https://github.com/dfakhrizaman"
          target="_blank"
          sx={styles.iconButton}
        >
          <Image
            src="/icons/ic_github.svg"
            alt="GitHub Icon"
            width={20}
            height={20}
          />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/daffa-fakhrizaman/"
          target="_blank"
          sx={styles.iconButton}
        >
          <Image
            src="/icons/ic_linkedin.svg"
            alt="GitHub Icon"
            width={20}
            height={20}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactMe;
