import {FC, memo} from 'react';
import SideBar from '../../componets/SideBar';
import FloatHomeButton from '../../componets/FloatHomeButton';
import FloatPicButton from '../../componets/FloatPicButton ';
import {MyPicsLogic} from './logic';
import {motion} from 'framer-motion';
import CachedIcon from '@mui/icons-material/Cached';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import {
     Button,
     Dialog,
     DialogActions,
     DialogContent,
     DialogContentText,
     DialogTitle,
     Divider,
     Typography,
} from '@mui/material';
import {
     ContainerDownloadButtom,
     ContainerTitle,
     MainContainer,
     MainContainerPictures,
     PictureContainer,
     Pictures,
     TitlePics,
} from './style';

const MyPics: FC = () => {
     const {
          images,
          selectedImages,
          toggleImageSelection,
          shouldAnimate,
          showDownloadButton,
          downloadSelectedImages,
          handleReloadImages,
          handleReloadConfirm,
          handleReloadCancel,
          openConfirmationDialog,
     } = MyPicsLogic();

     return (
          <>
               <FloatHomeButton />
               <FloatPicButton />
               <SideBar />
               <MainContainer>
                    <ContainerTitle>
                         <TitlePics>Tus imágenes procesadas</TitlePics>
                    </ContainerTitle>
                    <ContainerDownloadButtom
                         style={{
                              display: showDownloadButton ? 'flex' : 'none',
                              justifyContent: showDownloadButton
                                   ? 'center'
                                   : 'flex-start',
                         }}
                    >
                         <motion.div
                              initial={{y: -100, opacity: 0}}
                              animate={{y: 0, opacity: 1}}
                              transition={{duration: 2}}
                              exit={{y: -100, opacity: 0}}
                         >
                              <Button
                                   sx={{
                                        mt: 3,
                                        mb: 2,
                                        bgcolor: '#a00bb9ff',
                                        '&:hover': {
                                             bgcolor: '#ba00db',
                                        },
                                        width: '250px',
                                   }}
                                   variant="contained"
                                   onClick={downloadSelectedImages}
                                   style={{
                                        display: showDownloadButton
                                             ? 'flex'
                                             : 'none',
                                   }}
                                   endIcon={<CloudDownloadIcon />}
                              >
                                   Descargar Imágenes
                              </Button>
                              <Button
                                   sx={{
                                        mt: 0,
                                        mb: 2,
                                        bgcolor: '#a00bb9ff',
                                        '&:hover': {
                                             bgcolor: '#ba00db',
                                        },
                                        width: '250px',
                                   }}
                                   endIcon={<CachedIcon />}
                                   variant="contained"
                                   color="secondary"
                                   disabled={!showDownloadButton}
                                   onClick={handleReloadImages}
                              >
                                   Recargar Imágenes
                              </Button>

                              {/* Confirmation dialog */}
                              <Dialog
                                   open={openConfirmationDialog}
                                   onClose={handleReloadCancel}
                              >
                                   <DialogTitle>Confirmación</DialogTitle>
                                   <DialogContent>
                                        <DialogContentText>
                                             ¿Estás seguro de que deseas
                                             recargar las imágenes?
                                        </DialogContentText>
                                   </DialogContent>
                                   <DialogContent
                                        sx={{
                                             padding: '0',
                                             marginLeft: '24px',
                                             marginBottom: '20px',
                                        }}
                                   >
                                        <DialogContentText>
                                             <Typography fontWeight="bold">
                                                  Cada recarga de imagen cuesta
                                                  1 ficha*
                                             </Typography>
                                        </DialogContentText>
                                   </DialogContent>

                                   <DialogActions>
                                        <Button
                                             sx={{color: '#a00bb9ff'}}
                                             onClick={handleReloadCancel}
                                        >
                                             Cancelar
                                        </Button>
                                        <Button
                                             sx={{color: '#a00bb9ff'}}
                                             onClick={handleReloadConfirm}
                                             autoFocus
                                        >
                                             Recargar
                                        </Button>
                                   </DialogActions>
                              </Dialog>
                              <Divider
                                   sx={{
                                        height: '5px',
                                        width: '50%',
                                        display: 'flex',
                                        margin: '0 auto',
                                        backgroundColor: '#a00bb9ff',
                                        border: 'none',
                                        borderRadius: '10px',
                                        marginBottom: '3rem',
                                   }}
                                   style={{
                                        display: showDownloadButton
                                             ? 'block'
                                             : 'none',
                                   }}
                              />
                         </motion.div>
                    </ContainerDownloadButtom>

                    <MainContainerPictures
                         initial={{y: 100, opacity: 0}}
                         animate={shouldAnimate ? {y: 0, opacity: 1} : {}}
                         transition={{duration: 0.5}}
                    >
                         {Object.values(images).map((image, index) => (
                              <PictureContainer key={index}>
                                   <motion.div whileHover={{scale: 1.1}}>
                                        <Pictures
                                             src={image}
                                             alt={`Imagen ${index}`}
                                             key={`image-${index}`}
                                             id={`image${index + 1}`}
                                             onClick={() =>
                                                  toggleImageSelection(index)
                                             }
                                             style={{
                                                  border: selectedImages[index]
                                                       ? '4px solid #a00bb9ff'
                                                       : 'none',
                                             }}
                                        />
                                        {/* <CachedIcon
                                    onClick={() => reloadImage(index)}
                                    sx={{
                                        position: 'absolute',
                                        bottom: '2rem',
                                        right: '2rem',
                                        color: 'white',
                                        cursor: 'pointer',
                                    }}
                                /> */}
                                   </motion.div>
                              </PictureContainer>
                         ))}
                    </MainContainerPictures>
               </MainContainer>
          </>
     );
};

export default memo(MyPics);
