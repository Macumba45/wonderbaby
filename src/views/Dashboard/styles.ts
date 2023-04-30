import styled from 'styled-components';

export const MainContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
`;

export const DividerContainer = styled.div`
     display: flex;
     margin: 0 auto;
     width: 700px;
     align-items: center;
     position: absolute;
     top: 52%;
     left: 50%;
     transform: translate(-50%, -50%);
`;
export const ContainerUploadImages = styled.div`
     display: flex;
     justify-content: center;
     flex-direction: column;
`;

export const ContainerTextUploadImages = styled.div`
     margin: 0 auto;
     margin-bottom: 2rem;
     width: 400px;
`;

export const TextUploadImages = styled.h2`
     font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.small};
     text-align: center;
     margin-bottom: 2rem;
     margin-top: 4rem;
`;
