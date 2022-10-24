import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <RouterProvider router={routes}> </RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />

      <ToastContainer />


    </div>
  );
}

export default App;
