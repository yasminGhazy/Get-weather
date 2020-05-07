import React, { Component } from 'react';
import axios from 'axios';
import "./weather.scss";
export default class weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: "",
            temp_max: "",
            temp_min: "",
            weatherDisc: "",
            city: "",
            country: "",
            mainWeather: "",
            error: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getweather = this.getweather.bind(this);
    }
    getweather() {
        axios({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},{{country}}&APPID=21432e29f051cbc261002482df0c6dfd`,
            method: 'get',
        })
            .then(response => {
                console.log(response);
                let { data } = response;
                this.setState({
                    temp: data.main.temp,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    weatherDisc: data.weather[0].description,
                    mainWeather: data.weather[0].main,
                    country: data.sys.country
                })
            })
            .catch(error => {
                alert("you must spelling correctly")
            })

    }
    componentDidMount() {
        axios.get('https://ipapi.co/json/')
            .then((response) => {
                console.log(response);
                this.setState({
                    city: response.data.city,
                    country: response.data.country
                })
                return axios({
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},{{country}}&APPID=21432e29f051cbc261002482df0c6dfd`,
                    method: 'get',
                })
                    .then(response => {
                        console.log(response);
                        let { data } = response;
                        this.setState({
                            temp: data.main.temp,
                            temp_max: data.main.temp_max,
                            temp_min: data.main.temp_min,
                            weatherDisc: data.weather[0].description,
                            mainWeather: data.weather[0].main
                        })
                    })
                    .catch(error => {
                        alert("connection error")
                    })
            })
    }
    handleChange(event) {
        this.setState({ city: event.target.value });
   
    }

    handleSubmit(event) {
      
        this.getweather();
        event.preventDefault();
    }

    render() {
        return (
            <main>
                <div className="container">

                    <ul className="slide pt-0">
                        <li> <h3>Just type the city name</h3>
                        </li>
                        <li><p id="note">you must spelling correctly</p>
                        </li>
                        <li><form className="form-find" onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.city} onChange={this.handleChange} />
                            <button type="submit">Find</button>
                        </form>
                        </li>
                        <li> <h3>{this.state.city} ,{this.state.country} </h3>
                        </li>

                        <li >
                            <div className="dot">
                            </div>
                        </li>

                        <li>  <p id="weather">{this.state.mainWeather}</p>
                        </li>
                        <li>  <p id="temp" className="m-0">{Math.round(this.state.temp - 273)}°</p>
                        </li>

                        <li>  <span className="mx-3">{Math.round(this.state.temp_max - 273)}°</span>
                        <span className="mx-3">{Math.round(this.state.temp_min - 273)}°</span> 

                        </li>
                        <li><p id="full-weather">{this.state.weatherDisc}
                        </p>
                        </li>

                    </ul>
                </div>
            </main>
        );
    };
}



