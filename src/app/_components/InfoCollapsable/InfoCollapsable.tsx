import Colors from '@/utils/colors';
import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  alpha,
  Typography,
} from '@mui/material';
import React, { ReactNode } from 'react';

interface InfoCollapsableProps {
  summary: string | ReactNode;
  details: string | ReactNode;
  actions?: ReactNode;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

const InfoCollapsable = ({
  summary,
  details,
  actions,
  expanded,
  onChange,
}: InfoCollapsableProps) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      disableGutters
      sx={{
        boxShadow: 'none',
        '&:before': { display: 'none' },
        borderBottom: `1px solid ${alpha(Colors.black, 0.15)}`,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{ padding: '8px 16px' }}
      >
        <Typography component="span">{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography textAlign="start">{details}</Typography>
      </AccordionDetails>
      {actions && <AccordionActions>{actions}</AccordionActions>}
    </Accordion>
  );
};

export default InfoCollapsable;
