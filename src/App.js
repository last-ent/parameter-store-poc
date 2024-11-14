import logo from './logo.svg';
import './App.css';

import { StatsigClient} from '@statsig/js-client';


function App() {

  const YOUR_SDK_KEY = "";

  const user = { userID: 'some_user_id-333' };
  const options = {
    environment: { tier: "development" }
  }
  
  const myStatsigClient = new StatsigClient(YOUR_SDK_KEY, user, options);
  myStatsigClient.initializeSync();
  
  const homepageStore = myStatsigClient.getParameterStore("nik_test_1");
  console.log(homepageStore)

  // console.log(homepageStore.get("button1"))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {homepageStore.get("tag1", "default")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
