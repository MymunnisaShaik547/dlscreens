
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Page1 from './pages/Page1';
// import Page14 from './pages/Page14';
// import Page15 from './pages/Page15';
// import Page16 from './pages/Page16';
//  import Page17 from './pages/Page17';
// import Page18 from './pages/Page18';

// import Page10 from './pages/Page10';
//  import Page6 from './pages/Page6';
// import Page7 from './pages/Page7';
//  import Page23 from './pages/Page23';
//  import Page24 from './pages/Page24';
 import Page25 from './pages/Page25';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import Page11 from './pages/Page11';
import Page12 from './pages/Page12';
import Page13 from './pages/Page13';
import Page14 from './pages/Page14';
import Page15 from './pages/Page15';
import Page16 from './pages/Page16';
import Page17 from './pages/Page17';
import Page18 from './pages/Page18';
import Page19 from './pages/Page19';
import Page20 from './pages/Page20';
import Page21 from './pages/Page21';
import Page22 from './pages/Page22';
import Page23 from './pages/Page23';
import Page24 from './pages/Page24';
import Page26 from './pages/Page26';
import Page27 from './pages/Page27';
import Page28 from './pages/Page28';
import Page29 from './pages/Page29';
//  import Page26 from './pages/Page26';
//  import Page27 from './pages/Page27';
//  import Page28 from './pages/Page28';
//  import Page13 from './pages/Page13';
//  import Page19 from './pages/Page19';
//  import Page20 from './pages/Page20';
//  import Page21 from './pages/Page21';
//  import Page22 from './pages/Page22';
//  import Page11 from './pages/Page11';
//  import Page12 from './pages/Page12';
  // import Page8 from './pages/Page8';
//  import Page9 from './pages/Page9';
//  import Page5 from './pages/Page5';
//  import Page4 from './pages/Page4';
// import Page29 from './pages/Page29';

  // import Page2 from './pages/Page2';
  // import Page1 from './pages/Page1';
//  import Page3 from './pages/Page3';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Page1/>}></Route>
    <Route path="/page2" element={<Page2/>}></Route>
    <Route path="/page3" element={<Page3/>}></Route>
    <Route path="/page4" element={<Page4/>}></Route>
    <Route path="/page5" element={<Page5/>}></Route>
    <Route path="/page6" element={<Page6/>}></Route>
    <Route path="/page7" element={<Page7/>}></Route>
    <Route path="/page8" element={<Page8/>}></Route>
    <Route path="/page9" element={<Page9/>}></Route>
    <Route path="/page10" element={<Page10/>}></Route>
    <Route path="/page11" element={<Page11/>}></Route>
    <Route path="/page12" element={<Page12/>}></Route>
    <Route path="/page13" element={<Page13/>}></Route>
    <Route path="/page14" element={<Page14/>}></Route>
    <Route path="/page15" element={<Page15/>}></Route>
    
    <Route path="/page16" element={<Page16/>}></Route>
    <Route path="/page17" element={<Page17/>}></Route>
    <Route path="/page18" element={<Page18/>}></Route>
    <Route path="/page19" element={<Page19/>}></Route>
    <Route path="/page20" element={<Page20/>}></Route>
    <Route path="/page21" element={<Page21/>}></Route>
    <Route path="/page22" element={<Page22/>}></Route>
    <Route path="/page23" element={<Page23/>}></Route>
    <Route path="/page24" element={<Page24/>}></Route>
    <Route path="/page25" element={<Page25/>}></Route>
    <Route path="/page26" element={<Page26/>}></Route>
    <Route path="/page27" element={<Page27/>}></Route>
    <Route path="/page28" element={<Page28/>}></Route>
    <Route path="/page29" element={<Page29/>}></Route>
    
    

    
    </Routes>
    </BrowserRouter>
    
    </div>
  );
};

export default App
