import {FC, memo} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../views/Auth/Login';
import Dashboard from '../views/Dashboard';
import MyPics from '../views/MyPics';

const Router: FC = () => {
     // const ProtectedRoutes = ({children}: {children: JSX.Element}) => {
     //      const token = getAuthenticatedToken();
     //      const location = useLocation();

     //      if (!token || token === null) {
     //           return <Navigate to="/login" replace state={{from: location}} />;
     //      }

     //      return children;
     // };

     // const PublicRoute = ({children}: {children: JSX.Element}) => {
     //      const token = getAuthenticatedToken();
     //      const location = useLocation();

     //      if (token) {
     //           if (
     //                location.pathname === '/login' ||
     //                location.pathname === '/signup' ||
     //                location.pathname === '/'
     //           ) {
     //                return <Navigate to="/" replace state={{from: location}} />;
     //           }
     //           return children;
     //      }

     //      return children;
     // };

     // const NotFound = () => {
     //      const navigate = useNavigate();
     //      const token = getAuthenticatedToken();

     //      useEffect(() => {
     //           if (token) {
     //                // navigate('/feed', { replace: true });
     //           } else {
     //                navigate('/login', {replace: true});
     //           }
     //      }, [navigate, token]);

     //      return <NotFound404 />;
     // };

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/mypics" element={<MyPics />} />
               </Routes>
          </BrowserRouter>
     );
};

export default memo(Router);
