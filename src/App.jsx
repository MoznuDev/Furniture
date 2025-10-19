

import './App.css'
import RootLayout from './Components/Layout/RootLayout'
import Home from './Components/Page/Home'
import { Routes, Route} from 'react-router-dom';
import Shop from './Components/Page/Shop';
import Contract from './Components/Page/Contract';
import About from './Components/Page/About';


function App() {
  

  return (
    <>
   <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contract" element={<Contract/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
