import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidenav from './component/sidenav/sidenav';
import Events from './component/pages/events';
import Reservation from './component/pages/reservation';
import Reserve from './component/pages/reserve';
import CreateEvent from './component/pages/new_event';
import DeleteEvent from './component/pages/delete_event';

function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex bg-gray-200">
        <Sidenav />
        <Routes>
          <Route>
            <Route path="/" element={<Events />} />
            <Route path="/my-reservations" element={<Reservation />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/delete-event" element={<DeleteEvent />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
