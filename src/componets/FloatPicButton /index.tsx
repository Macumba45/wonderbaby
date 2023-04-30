import {FC, memo} from 'react';
import {Fab, Tooltip} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';

const FloatPicButton: FC = () => {
     const navigate = useNavigate();

     const CustomTooltip = ({title, children}: any) => {
          return (
               <Tooltip title={title} placement="left">
                    {children}
               </Tooltip>
          );
     };

     const goPics = () => {
          navigate('/mypics');
     };

     return (
          <CustomTooltip title="Mis imágenes">
               <Fab
                    onClick={goPics}
                    size="small"
                    sx={{
                         position: 'fixed',
                         bottom: '6rem',
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
                    <ImageIcon />
               </Fab>
          </CustomTooltip>
     );
};

export default memo(FloatPicButton);
