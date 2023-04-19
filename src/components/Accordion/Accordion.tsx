import React, { ReactNode } from 'react';
import { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import { MuiStyledAccordion, AccordionSummary, AccordionDetails } from './style';

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
