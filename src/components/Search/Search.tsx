import { InputBaseProps } from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { SearchAction } from '../../actions/search/types';
import { SearchWrapper, SearchIconWrapper, StyledInputBase } from './style';

interface SearchProps extends InputBaseProps {
  action: SearchAction;
}

/**
 * OLI - Dynamic Search
 *
 * @TODO extend to make use of the action to execute the search and display the results
 * @author Jordan Richmeier
 * @returns ReactNode
 */
const Search = ({ action, sx, ...props }: SearchProps) => {
  return (
    <SearchWrapper sx={sx}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase {...props} />
    </SearchWrapper>
  );
};

export default Search;
