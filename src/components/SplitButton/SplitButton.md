```tsx
import Stack from '@mui/material/Stack';

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
const disabledOptions = ['Rebase and merge'];

<Stack direction="row">
  <SplitButton 
    options={options} 
    disabled={disabledOptions}
    onClick={selectedOption => alert(`${selectedOption} Clicked!`)} 
  />
</Stack>
```
