import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamPage from '../pages/TeamPage/TeamPage';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TeamPage />} />
            </Routes>
        </Router>
    );
}

export default App;