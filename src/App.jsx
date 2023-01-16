import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidenav from './component/sidenav/sidenav';
import Events from './component/pages/events';
import Reservation from './component/pages/reservation';
import Reserve from './component/pages/reserve';
import CreateEvent from './component/pages/new_event';
import DeleteEvent from './component/pages/delete_event';
import Login from './component/pages/login';
import Signup from './component/pages/signup';
import EventsDetails from './component/pages/events_details';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex bg-gray-200">
        <Sidenav />
        <Routes>
          <Route>
            <Route path="/" element={<Events />} />
            <Route path="/my-reservations" element={<Reservation />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/delete-event" element={<DeleteEvent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/details/:id" element={<EventsDetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
