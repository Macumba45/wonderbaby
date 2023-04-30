import React, {FC, memo} from 'react';
import {alpha, styled} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {MainContainer} from './styles';
import {InputBase} from '@mui/material';

const Search = styled('div')(({theme}) => ({
     position: 'relative',
     borderRadius: theme.shape.borderRadius,
     backgroundColor: alpha(theme.palette.common.white, 0.15),
     '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
     },
     marginRight: theme.spacing(0),
     marginLeft: 0,
     width: '100%',
     [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(0),
          width: 'auto',
     },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
     padding: theme.spacing(0, 2),
     height: '100%',
     position: 'absolute',
     pointerEvents: 'none',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
     color: 'inherit',
     '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
               width: '840px',
          },
     },
     '& input': {
          border: '1px solid #ccc',
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(1),
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
     },
}));

const SearchBar: FC = () => {
     return (
          <MainContainer>
               <Search>
                    <SearchIconWrapper>
                         <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                         placeholder="Buscar clínicas"
                         inputProps={{'aria-label': 'search'}}
                    />
               </Search>
          </MainContainer>
     );
};

export default memo(SearchBar);
