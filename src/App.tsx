import { Route, Routes } from 'react-router';
import styles from './App.module.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Cartoons from './pages/Cartoons';
import Films from './pages/Films';
import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';
import Person from './pages/Person';
import Series from './pages/Series';

function App() {


  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.main}>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cartoons' element={<Cartoons/>}/>
          <Route path='/films' element={<Films/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='/film/:id' element={<Movie/>}/>
          <Route path='/name/:id' element={<Person/>}/>

          <Route path="*" element={<NotFound/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
