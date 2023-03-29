
import './App.css';
import { Resume } from './components/coursera/Resume';
import { Form } from './components/coursera/form';
import { Hello } from './components/moodle/task1/helloworld';
import { Card } from './components/moodle/task2/card';
import { League } from './components/moodle/task3/league';
import { Socialbuttons } from './components/moodle/task4/socialbuttons';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Menu } from './components/moodle/menu';
import { Notification } from './components/moodle/task5/notification';
import { Login } from './components/moodle/task6/login';
import { Techcard } from './components/moodle/task7/Technology_card';
import { Hook } from './components/moodle/task8/hooks/hooks';
import { Fruitcounter } from './components/moodle/task9/fruitcounter';
import { Feedbackapp } from './components/moodle/task10/feedbackapp';
import { Feedbacktq } from './components/moodle/task10/feedbacktq';
import { Datefunction } from './components/moodle/task11/datefunction';
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={[<Menu/>,<Hello/>]}/>
          <Route path="/Card" element={[<Menu/>,<Card/>]}/>
          <Route path="/League" element={[<Menu/>,<League/>]}/>
          <Route path="/Socialbuttons" element={[<Menu/>,<Socialbuttons/>]}/>
          <Route path="/Notification" element={[<Menu/>,<Notification/>]}/>
          <Route path="/Login" element={[<Menu/>,<Login/>]}/>
          <Route path="/Techcard" element={[<Menu/>,<Techcard/>]}/>
          <Route path="/Resume" element={[<Menu/>,<Resume/>]}/>
          <Route path="/Form" element={[<Menu/>,<Form/>]}/>
          <Route path="/Hook" element={[<Menu/>,<Hook/>]}/>
          <Route path="/Fruitcounter" element={[<Menu/>,<Fruitcounter/>]}/>
          <Route path="/Feedbackapp" element={[<Menu/>,<Feedbackapp/>]}/>
          <Route path="/Feedbacktq" element={[<Menu/>,<Feedbacktq/>]}/>
          <Route path="/Datefunction" element={[<Menu/>,<Datefunction/>]}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
 
}

export default App;
