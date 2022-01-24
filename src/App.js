import './App.css';
import { Home, Album, AlbumRQ } from './components'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/*<li>
                <Link to="/albums">Album List</Link>
              </li>*/}
              <li>
                <Link to="/albumsRQ">Album List</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/albumsRQ" element={<AlbumRQ/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
