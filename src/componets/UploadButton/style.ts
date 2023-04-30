import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MainContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: 60vw;
     height: 60vh;
     padding: 50px;
     border: 2px dashed ${({ theme }) => theme.colors.primary};
     border-radius: 10px;
     background-color: ${({ theme }) => theme.colors.background};
     cursor: pointer;
     transition: border-color 0.3s ease;

     &.dragging {
          background-color: #9f0bb937;
     }
`;

export const ButtonUpload = styled.div`
     display: flex;
     margin: 0 auto;
     margin-top: 100px;
     border: none;
     background-color: white;
     cursor: pointer;
`;

export const ContainerThumbnails = styled.div<{ disable: boolean }>`
     display: flex;
     margin: 0 auto;
     max-width: 900px;
     flex-wrap: wrap;    

     ${(props) =>
          !props.disable &&
          `
        margin-bottom: 5rem;
        margin-top: 2rem;
        `}
`;

export const InputContainer = styled.div`
     display: flex;
     justify-content: center;
`;

export const ButtonContainer = styled.div`
     display: flex;
     justify-content: center;
`;

export const PicturesButton = styled(motion.button)`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     padding: 15px;
     border: none;
     background-color: ${({ theme }) => theme.colors.primary};
     color: white;
     border-radius: 5px;
     cursor: pointer;
     :hover {
          background-color: #620073ff;
          transform: scale(1.1);   
     }
`;

export const Img = styled.img``;

export const DeleteButton = styled.button`
     margin-top: 8.2rem;
     margin-right: 0.5rem;
`;

export const ContainerUploadImages = styled.div`
     display: flex;
     justify-content: center;
     flex-direction: column;
`;

export const TextUploadImages = styled.h2`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.small};
     text-align: center;
     margin-bottom: 2rem;
     margin-top: 4rem;
`;

export const Input = styled.input``;
export const Container = styled(motion.div)``;
