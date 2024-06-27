import './App.css';
import Listen from './Components/Listen/Listen';
import {createHashRouter, RouterProvider } from 'react-router-dom';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import Layout from './Components/Layout/Layout';

import Azkar from './Components/Azkar/Azkar';
import AzkarItem from './Components/AzkarItem/AzkarItem';
import Tafsir from './Components/Tafsir/Tafsir';
import Home from './Components/Home/Home';
import TafsirItem from './Components/TafsirItem/TafsirItem';
import Tadbor from './Components/Tadbor/Tadbor';
import Radio from './Components/Radio/Radio';
import TadborItem from './Components/TadborItem/TadborItem';


let x = createHashRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: '/Listen', index: true, element: <Listen /> },
      { path: 'ItemDetails/:id/:name', element: <ItemDetails /> },
      { path: 'Azkar', element: <Azkar /> },
      { path: 'Radio', element: <Radio /> },
      { path: 'Tafsir', element: <Tafsir /> },
      { path: 'Tadbor', element: <Tadbor /> },
      { path: 'TafsirItem/:id', element: <TafsirItem/> },
      { path: 'TadborItem/:id', element: <TadborItem/> },
      { path: '/', element: <Home /> },
      { path: 'AzkarItem/:id', element: <AzkarItem /> }
    ]
  }

])

function App() {

  return <>

    <RouterProvider router={x} />

  </>

}

export default App;
