import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home'
import EditorPage from './Pages/EditorPage'

function App() {
  return (
     <>
        <div>
          <Toaster 
            position="top-center" 
            toastOptions={{
              success: {
                theme: {
                  primary: '#4aed88'
                }
              }
            }
            }>

          </Toaster>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/editor/:roomId' element={<EditorPage/>}></Route>
          </Routes>
        </BrowserRouter>
     </>
  );
}

export default App;