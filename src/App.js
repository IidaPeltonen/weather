import './App.css';
import {useState, useEffect} from 'react';
import Weather from './weather';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert('Sun selain ei tue sijaintia')
    }

  }, [])

    return (
      <div className="content">
        <h1>Sijaintisi:</h1>
        <p>
          Position:&nbsp;  
          {lat.toFixed(3)},
          {lng.toFixed(3)}
        </p>
        <Weather lat={lat} lng={lng} />
      </div>
    );
  }


        export default App;
     
