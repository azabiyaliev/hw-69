import NavBar from './components/NavBar/NavBar.tsx';
import TvShows from './containers/TvShows/TvShows.tsx';

const App = () => {

  return (
    <>
      <NavBar/>
      <div className="container mt-5">
        <TvShows/>
      </div>
    </>
  );
};

export default App;
