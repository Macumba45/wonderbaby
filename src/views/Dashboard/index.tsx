import { FC, memo } from 'react';
import Sidebar from '../../componets/SideBar';
import UploadButton from '../../componets/UploadButton';
import {
     ContainerTextUploadImages,
     ContainerUploadImages,
     MainContainer,
     TextUploadImages,
} from './styles';
import FloatHomeButton from '../../componets/FloatHomeButton';
import FloatPicButton from '../../componets/FloatPicButton ';

const Dashboard: FC = () => {
     return (
          <MainContainer>
               <FloatHomeButton />
               <FloatPicButton />
               <Sidebar />
               <ContainerUploadImages>
                    <ContainerTextUploadImages>
                         <TextUploadImages>
                              Convierte aquí tus imagenes en HD
                         </TextUploadImages>
                    </ContainerTextUploadImages>
                    <UploadButton />
               </ContainerUploadImages>
          </MainContainer>
     );
};

export default memo(Dashboard);
