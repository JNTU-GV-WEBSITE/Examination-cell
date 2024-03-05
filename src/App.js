import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
// import Menu from './pages/Menu';
import DirectorsHelp from './pages/DirectorsHelp';
import NotificationHelper from './pages/NotificationHelper';
import Contact from './pages/Contact';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header />
      <div className="navbar-container">
      <Navbar expand="lg" className='bg-body-tertiary shadow'>
  <Container>
    <Navbar.Brand>
      <Link to="/" className='navbar-brand text-success fw-semibold'></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' className='ms-auto' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='me-auto justify-content-end w-100'>
        <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
        <Nav.Link href='/directors' className='text-uppercase'>Directors</Nav.Link>
        <Nav.Link href='/notifications' className='text-uppercase'>Notifications</Nav.Link>
        <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/directors' element={<DirectorsHelp />} />
        <Route path='/notifications' element={<NotificationHelper />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        {/* <p className='p-3 m-0 text-center'>copyright @ made by Ionut Cora</p> */}
      </footer>
    </div></div>
  );
}

export default App;
