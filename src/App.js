import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import Card from './components/shared/Card';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext';
function App() {

  return (
  <FeedbackProvider>
    <Router>
    <Header />
    <div className='container'>

    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
          path="/home"
          element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </>
          }
      />
      <Route path='/about' element={<AboutPage />}/>
    </Routes>
    <AboutIconLink />
    </div>
    </Router>
  </FeedbackProvider>   
  );

}

export default App;
