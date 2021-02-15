import Frontpage from './frontpage/Frontpage';
import {Switch, Route} from 'react-router-dom';
import Mainpage from './mainpage/Mainpage';

function App() {
  return (
    <div style={{zoom: '.8'}}>
    <Switch>
    <Route path='/' exact component={Frontpage} />
    <Route path='/mainpage' component={Mainpage} />
    
    
    </Switch>
    </div>
  );
}

export default App;
