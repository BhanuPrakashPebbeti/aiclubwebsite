import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Projects from './components/Projects/Projects';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Inductions/Register';
import Data from './components/Inductions/Data';
import TeamUpdate from './components/Team/TeamUpdate';
import TeamAdd from './components/Team/TeamAdd';
import Error from './components/Error';
import AddProject from './components/AddProject/AddProject';
import Events from './components/Events/Events';
import Inductions from './components/Inductions/Inductions';
import Leaderboard from './components/Inductions/Leaderboard';
import Overview from './components/Inductions/Overview';

import Compete from './components/Inductions/Compete';

const Routing = () => {

    return(
      <Routes>
        {/* Home */}
        <Route exact path='/' element={<Home />} />
        
        {/* Team */}
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/team/edit/:username' element={<TeamUpdate />} />
        <Route exact path='/team/add' element={<TeamAdd />} />

        {/* Projects */}
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/addproject' element={<AddProject />} />

        {/* Events */}
        <Route exact path='/events' element={<Events />} />

        {/* Inductions */}
        {/* <Route exact path='/inductions-b21-b20' element={<Inductions />} /> */}
        {/* <Route exact path='/inductions-b21-b20/data' element={<Data />} /> */}
        {/* <Route exact path='/inductions-b21-b20/leaderboard' element={<Leaderboard />} /> */}
        {/* <Route exact path='/inductions-b21-b20/register' element={<Register />} /> */}
        <Route path='/:spath/:path' element={<Compete />} />
        <Route path='/:spath' element={<Compete />} />

        {/* Others */}
        <Route path='*' element={<Error />} />
  
  
      </Routes>
    )
  }

export default Routing;