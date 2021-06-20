import Routes from './Routes'
import {BrowserRouter} from  'react-router-dom';
import GlobalStyles from './Styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
)


export default App;
