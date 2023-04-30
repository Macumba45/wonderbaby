import styled from 'styled-components';
import {motion} from 'framer-motion';

export const MainContainer = styled.div``;

export const MainContainerPictures = styled(motion.div)`
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
`;

export const PictureContainer = styled.div`
     position: relative;
`;

export const Pictures = styled.img`
     width: 300px;
     height: 300px;
     margin: 20px;
     object-fit: cover;
     border-radius: 10px;
`;

export const TitlePics = styled.h2`
     font-family: ${({theme}) => theme.fonts.primary};
     font-size: ${({theme}) => theme.fontSizes.small};
     text-align: center;
     margin-bottom: 1rem;
`;

export const ContainerTitle = styled.div`
     margin-top: 8rem;
     margin-bottom: 2rem;
`;

export const ContainerDownloadButtom = styled.div`
     display: flex;
     margin-top: 2rem;
     margin-bottom: 2rem;
`;
