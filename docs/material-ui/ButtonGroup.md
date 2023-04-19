### Basic button group

```tsx
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

### Button variants

```tsx
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      m: 1,
    },
  }}
>
  <ButtonGroup variant="outlined" aria-label="outlined button group">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>

  <ButtonGroup variant="text" aria-label="text button group">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
</Box>
```

### Sizes and colors

```tsx
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      m: 1,
    },
  }}
>
  <ButtonGroup size="small" aria-label="small button group">
    <Button key="one">One</Button>
    <Button key="two">Two</Button>
    <Button key="three">Three</Button>
  </ButtonGroup>
  <ButtonGroup color="secondary" aria-label="medium secondary button group">
    <Button key="one">One</Button>
    <Button key="two">Two</Button>
    <Button key="three">Three</Button>
  </ButtonGroup>
  <ButtonGroup size="large" aria-label="large button group">
    <Button key="one">One</Button>
    <Button key="two">Two</Button>
    <Button key="three">Three</Button>
  </ButtonGroup>
</Box>
```

### Vertical Group

```tsx
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

<Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '& > *': {
      m: 1,
    },
  }}
>
  <ButtonGroup 
    orientation="vertical"
    aria-label="vertical outlined button group"
  >
    <Button key="one">One</Button>
    <Button key="two">Two</Button>
    <Button key="three">Three</Button>
  </ButtonGroup>
  <ButtonGroup 
    orientation="vertical"
    aria-label="vertical contained button group"
    variant="contained"
  >
    <Button key="one">One</Button>
    <Button key="two">Two</Button>
    <Button key="three">Three</Button>
  </ButtonGroup>
  <ButtonGroup 
    orientation="vertical"
    aria-label="vertical contained button group"
    variant="text"
  >
    <Button key="one">One</Button>
    <Button key="two">Two</Button>
    <Button key="three">Three</Button>
  </ButtonGroup>
</Box>
```
