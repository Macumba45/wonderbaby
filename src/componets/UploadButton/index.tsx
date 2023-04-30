import { FC, memo, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Props } from './type';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import {
    InputContainer,
    MainContainer,
    ContainerThumbnails,
    Img,
    DeleteButton,
    PicturesButton,
    ButtonContainer,
    Input,
    Container,
} from './style';

const UploadButton: FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [images, setImages] = useState([]);
    const [dragging, setDragging] = useState(false);
    const navigate = useNavigate();

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleImageChange = useCallback(
        (event: any) => {
            const files = event.target.files;
            const imagesArray: any = [];

            if (files.length > 10) {
                alert('No se pueden subir mas de 10 fotos')
                setImages([])
                return

            }

            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = () => {
                    imagesArray.push(reader.result);
                    if (imagesArray.length === files.length) {
                        setImages(imagesArray);
                        setProcessing(true);
                    }
                };
                reader.readAsDataURL(files[i]);
            }
        },
        [setImages, setProcessing]
    );

    const handleButtonClick = useCallback(() => {
        if (images.length > 0) {
            console.log('Procesando imágenes...');
            setProcessing(true);
            navigate('/mypics');
        } else {
            fileInputRef.current?.click();
        }
    }, [images, fileInputRef, setProcessing, navigate]);

    const handleDeleteClick = useCallback(
        (index: number) => {
            const newImages = [...images];
            newImages.splice(index, 1);
            setImages(newImages);
            setProcessing(false);
        },
        [images, setImages]
    );

    const handleDragEnter = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            setDragging(true);
        },
        [setDragging]
    );

    const handleDragLeave = useCallback(() => {
        setDragging(false);
    }, [setDragging]);

    const handleDragOver = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
        },
        []
    );

    const handleDrop = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            setDragging(false);
            const files = event.dataTransfer.files;
            handleImageChange({ target: { files } });
        },
        [handleImageChange, setDragging]
    );

    const ImageThumbnails: FC<Props> = ({ disable }) => (
        <ContainerThumbnails disable={disable}>
            {images.map((image, index) => (
                <Container
                    key={index}
                    style={{ display: 'flex', justifyContent: 'center' }}

                >
                    <Container
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        style={{ position: 'relative' }}>
                        <Img
                            src={image}
                            alt="thumbnail"
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                margin: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                position: 'relative',
                            }}
                        />
                        <DeleteButton
                            onClick={() => handleDeleteClick(index)}
                            style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '16px',
                                cursor: 'pointer',
                                zIndex: 1,
                            }}
                        >
                            <DeleteIcon />
                        </DeleteButton>
                    </Container>
                </Container>
            ))}
        </ContainerThumbnails>
    );

    return (
        <>
            <MainContainer
                className={dragging ? 'dragging' : ''}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <ButtonContainer>
                    {processing &&
                        <PicturesButton
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            onClick={handleOpenDialog}>
                            Subir imágenes
                        </PicturesButton>
                    }
                    {!processing &&
                        <PicturesButton
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            onClick={handleButtonClick}>
                            Cargar imágenes o arrástralas
                        </PicturesButton>
                    }
                </ButtonContainer>

                <InputContainer>
                    <Input
                        type="file"
                        multiple
                        onChange={handleImageChange}
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                    />
                </InputContainer>
                {images.length === 0 ? (
                    <ImageThumbnails disable={true} />
                ) : (
                    <ImageThumbnails disable={false} />
                )}
                {processing && (
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>Confirmación</DialogTitle>
                        <DialogContent>
                            <DialogContentText sx={{ marginBottom: '1rem' }}>
                                ¿Está seguro de que desea procesar las imágenes?
                            </DialogContentText>
                            <DialogContentText>
                                <Typography fontWeight="bold">
                                    Cada subida de imagen cuesta
                                    1 ficha*
                                </Typography>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button sx={{ color: '#ba00db', bgcolor: 'none', }} onClick={handleCloseDialog}>Cancelar</Button>
                            <Button
                                sx={{
                                    color: 'white', bgcolor: '#ba00db', '&:hover': {
                                        bgcolor: '#570066',
                                    },
                                }}
                                onClick={() => {
                                    handleButtonClick()
                                }}
                                variant="contained"
                                color="primary"
                            >
                                Procesar imágenes
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </MainContainer >
        </>
    );
};

export default memo(UploadButton);
