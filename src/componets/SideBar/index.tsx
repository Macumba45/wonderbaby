import { FC, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import PaidIcon from '@mui/icons-material/Paid';
import { styled } from '@mui/material/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

const Sidebar: FC = () => {
    const navigate = useNavigate();
    const drawerWidth = 240;
    const [open, setOpen] = useState(false);

    interface AppBarProps extends MuiAppBarProps {
        open?: boolean;
    }

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ backgroundColor: '#a00bb9ff' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'block',
                                md: 'block',
                            },
                        }}
                    >
                        Bienvenido - Baby Wonder
                    </Typography>

                    <Typography
                        sx={{
                            position: 'absolute',
                            right: '100px',
                            fontWeight: '400',
                            fontSize: '15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        gonzalolobo@gmail.com
                    </Typography>
                    <Typography
                        sx={{
                            position: 'absolute',
                            right: '280px',
                            fontWeight: '400',
                            fontSize: '15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        <PaidIcon sx={{ marginLeft: '20px' }} />
                        <Button sx={{ color: 'white' }}>
                            300 fichas
                        </Button>
                    </Typography>
                    <LogoutIcon
                        onClick={() => setOpen(true)}
                        sx={{
                            position: 'absolute',
                            right: '0',
                            marginRight: '2rem',
                            cursor: 'pointer',
                        }}
                    />
                    <Dialog open={open} onClose={() => setOpen(false)}>
                        <DialogTitle>Cerrar sesión</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                ¿Estás seguro que quieres cerrar la
                                sesión?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpen(false)}>
                                Cancelar
                            </Button>
                            <Button onClick={handleLogout}>
                                Cerrar sesión
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default memo(Sidebar);
