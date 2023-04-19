```tsx
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

<Accordion sections={[
  { 
    id: "s1", 
    sectionTitle: <Typography>Accordion One</Typography>, 
    sectionContent: 
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>,
    expandIcon: <ExpandMoreIcon />
  },
  { 
    id: "s2", 
    sectionTitle: <Typography>Accordion Two</Typography>, 
    sectionContent: 
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>,
    expandIcon: <ExpandMoreIcon />
  },
  { 
    id: "s3", 
    sectionTitle: <Typography>Accordion Three</Typography>, 
    sectionContent: 
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>,
    expandIcon: <ExpandMoreIcon />
  },
  { 
    id: "accordion-disabled-section", 
    sectionTitle: <Typography>Accordion DISABLED</Typography>, 
    sectionContent: 
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>,
    expandIcon: <ExpandMoreIcon />,
    disabled: true
  }
]} />
```
