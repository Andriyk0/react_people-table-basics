import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { PeoplePage } from './PeoplePage';
import { NotFoundPage } from './NotFoundPage';
import { NavigationLink } from './NavigationLink';

const App = () => {
  return (
    <div className="App">
      <NavigationLink />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
