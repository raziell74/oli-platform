import React, { ReactNode } from 'react';
import MuiAccordion, { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const MuiStyledAccordion = styled((props: MuiAccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface AccordionSection extends MuiAccordionProps {
  id: string;
  sectionTitle: string | ReactNode;
  sectionContent: string | ReactNode;
  expandIcon?: ReactNode;
}

type AccordionProps = {
  sections: AccordionSection[];
};

/**
 * OLI Styled Accordion
 * Expands a list into a functional MUI Accordion
 *
 * @author Jordan Richmeier
 * @returns ReactNode
 */
const Accordion = ({ sections }: AccordionProps) => {
  return (
    <>
      {sections.map(({ id, sectionTitle, sectionContent, expandIcon, ...props }, index) => (
        <MuiStyledAccordion
          {...props}
          key={`accordion-index-${index}`}
          data-testid={`${id}-accordion`}
        >
          <AccordionSummary
            expandIcon={expandIcon ?? null}
            aria-controls={`${id}-panel${index}-content`}
            id={`${id}-panel${index}-header`}
            data-testid={`${id}-accordion-summary`}
          >
            {sectionTitle}
          </AccordionSummary>
          <AccordionDetails>{sectionContent}</AccordionDetails>
        </MuiStyledAccordion>
      ))}
    </>
  );
};

export default Accordion;
