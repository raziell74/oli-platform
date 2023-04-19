```tsx
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
<Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': { m: 1, p: 2 },
  }}
>
  <Paper sx={{ background: "#5c5c5c", color: "#FFF" }}>
    <Search placeholder="Search" />
  </Paper>

  <Paper>
    <Search 
      placeholder="Custom Styled" 
      sx={{
        color: 'rgb(72 72 72 / 69%)',
        backgroundColor: 'rgb(255 255 255 / 35%)',
        '&:hover': {
          backgroundColor: 'rgb(255 255 255 / 69%)',
        }
      }} 
    />
  </Paper>
</Box>
```
