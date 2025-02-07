import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
import ExpenseTracker from './ExpenseTracker';

function App() {
  return (
    <Router>
      <Routes>
        {/*Landing Page is the default page*/}
        <Route path='/' element={<LandingPage />} />

        {/*Expense Tracker page*/}
        <Route path='/tracker' element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;