import './App.css';
import Header from './components/Header';
import router from './routes';
import { Outlet, RouterProvider } from 'react-router-dom';
import { wordData } from './contexts/WordContext';

function App() {
  return (
    <>
     <Header/>
     <RouterProvider router={router}>
        <div>
          <Outlet/>
        </div>
     </RouterProvider>
    </>
  );
}

export default App;
