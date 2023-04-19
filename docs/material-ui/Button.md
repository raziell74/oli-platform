### Variants

```tsx
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

<Stack spacing={2} direction="row">
  <Button variant="text">Text</Button>
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
</Stack>
```

### Coloring

```tsx
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

<Stack spacing={2} direction="row">
  <Button variant="outlined">Primary</Button>
  <Button variant="outlined" color="secondary">Secondary</Button>
  <Button variant="contained" color="success">Success</Button>
  <Button variant="contained" color="error">Error</Button>
</Stack>
```

### Sizes

```tsx
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

<>
  <Stack spacing={2} direction="row">
    <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
  </Stack>
  <br />
  <Stack spacing={2} direction="row">
    <Button variant="outlined" size="small">Small</Button>
      <Button variant="outlined" size="medium">Medium</Button>
      <Button variant="outlined" size="large">Large</Button>
  </Stack>
  <br />
  <Stack spacing={2} direction="row">
    <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Medium</Button>
      <Button variant="contained" size="large">Large</Button>
  </Stack>
</>
```

### Button Icons

```tsx
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

<Stack spacing={2} direction="row">
  <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
  <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
</Stack>
```
