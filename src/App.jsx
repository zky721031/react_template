import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import AppRedux from './AppRedux';

// lazy loading
import LazyLoad from './lazyLoad';

// useRoutes
import MRouter from './router';

function App() {
  return (
    <AppRedux>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <hr />
      {LazyLoad('AppReduxTest')}
      <MRouter />
    </AppRedux>
  );
}

export default App;
