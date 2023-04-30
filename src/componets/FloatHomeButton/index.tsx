import {FC, memo} from 'react';
import {Fab, Tooltip} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {Home} from '@mui/icons-material';

const FloatHomeButton: FC = () => {
     const navigate = useNavigate();

     const CustomTooltip = ({title, children}: any) => {
          return (
               <Tooltip title={title} placement="left">
                    {children}
               </Tooltip>
          );
     };

     const goPics = () => {
          navigate('/dashboard');
     };

     return (
          <CustomTooltip title="Inicio">
               <Fab
                    onClick={goPics}
                    size="small"
                    sx={{
                         position: 'fixed',
                         bottom: '2rem',
                         right: 0,
                         marginRight: '2rem',
                         backgroundColor: '#7E1B75',
                         '&:hover': {
                              backgroundColor: '#7e1b7655', // Cambiar color del hover
                         },
                    }}
                    color="primary"
                    aria-label="add"
               >
                    <Home />
               </Fab>
          </CustomTooltip>
     );
};

export default memo(FloatHomeButton);
