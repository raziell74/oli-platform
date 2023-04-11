import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Accordion from './Accordion';

describe('Accordion Component', () => {
  const accordionSections = [
    {
      id: 'section1',
      sectionTitle: 'Section 1 Title',
      sectionContent: 'Section 1 Content',
      children: <></>,
    },
    {
      id: 'section2',
      sectionTitle: 'Section 2 Title',
      sectionContent: 'Section 2 Content',
      children: <></>,
    },
  ];
  test('renders accordion sections with correct titles and content', async () => {
    render(<Accordion sections={accordionSections} />);

    accordionSections.forEach(({ sectionTitle }) => {
      const title = screen.getByText(sectionTitle);
      expect(title).toBeInTheDocument();
    });
  });

  test('expands and collapses accordion sections when clicked', async () => {
    render(<Accordion sections={accordionSections} />);

    // Expand
    await act(async () => {
      accordionSections.forEach(({ sectionTitle }) => {
        const header = screen.getByRole('button', { name: sectionTitle });
        userEvent.click(header);
      });
    });

    accordionSections.forEach(({ id, sectionContent }) => {
      const expandedAccordion = screen.getByTestId(`${id}-accordion`);
      expect(expandedAccordion).toHaveClass('Mui-expanded');

      const expandedContent = screen.getByText(sectionContent);
      expect(expandedContent).toBeInTheDocument();
    });

    // Collapse
    await act(async () => {
      accordionSections.forEach(({ sectionTitle }) => {
        const header = screen.getByRole('button', { name: sectionTitle });
        userEvent.click(header);
      });
    });

    accordionSections.forEach(({ id, sectionContent }) => {
      const expandedAccordion = screen.getByTestId(`${id}-accordion`);
      expect(expandedAccordion).not.toHaveClass('Mui-expanded');
    });
  });

  test('renders with correct background color in light mode', () => {
    const theme = createTheme({
      palette: { mode: 'light' },
    });

    const accordionSections = [
      {
        id: 'section1',
        sectionTitle: 'Section 1 Title',
        sectionContent: 'Section 1 Content',
        children: <></>,
      },
      {
        id: 'section2',
        sectionTitle: 'Section 2 Title',
        sectionContent: 'Section 2 Content',
        children: <></>,
      },
    ];

    render(
      <ThemeProvider theme={theme}>
        <Accordion sections={accordionSections} />
      </ThemeProvider>
    );

    const summaryElement = screen.getByTestId('section1-accordion-summary');
    expect(summaryElement).toHaveStyle('background-color: rgba(0, 0, 0, .03)');
  });

  test('renders with correct background color in dark mode', () => {
    const theme = createTheme({
      palette: { mode: 'dark' },
    });

    const accordionSections = [
      {
        id: 'section1',
        sectionTitle: 'Section 1 Title',
        sectionContent: 'Section 1 Content',
        children: <></>,
      },
      {
        id: 'section2',
        sectionTitle: 'Section 2 Title',
        sectionContent: 'Section 2 Content',
        children: <></>,
      },
    ];

    render(
      <ThemeProvider theme={theme}>
        <Accordion sections={accordionSections} />
      </ThemeProvider>
    );

    const summaryElement = screen.getByTestId('section1-accordion-summary');
    expect(summaryElement).toHaveStyle('background-color: rgba(255, 255, 255, .05)');
  });
});
