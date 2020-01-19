import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({icon: weather.weather[0].icon.slice(0, -1)});
    this.setState({temp: weather.main.temp});
    this.setState({feels: weather.main.feels_like});
    this.setState({humidity: weather.main.humidity});
  }

  render() {
    const { icon } = this.state;
    const { temp } = this.state;
    const { feels } = this.state;
    const { humidity } = this.state;
    return (
      <div>
        <div className="icon">
        { icon && <img src={`/img/${icon}.svg`} /> }
        </div>
        <div className="temp">
        { temp &&<h1>Temperature: {temp}</h1>}
        </div>
        <div className="temp">
        { feels &&<h2>Feels like: {feels}</h2>}
        </div>
        <div className="temp">
        { humidity &&<h1>Humidity: {humidity}</h1>}
        </div>
        <div>
        </div>
      </div>
    
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
