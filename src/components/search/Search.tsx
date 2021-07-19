import './Search.css'
import { useState, useEffect, MouseEvent, ChangeEvent } from 'react'
import { getFormattedSearchCity } from './searchServices'
import { IFavourite } from '../app/App'
import Temperature from '../temperature/Temperature'

interface ISearchProps {
  addFavourite: Function,
  removeFavourite: Function,
  scale: string,
  favourites: IFavourite[],
  setPage: Function
}
const SearchPage = (props: ISearchProps) => {
  const [subject, setSubject] = useState<IFavourite>({"name": "Your city"})
  const [rawSearchCity, setRawSearchCity] = useState<string>("")
  const [error, setError] = useState<Error | null>()
  interface IMain {
    "temp": number
    "feels_like": number
    "temp_min": number
    "temp_max": number
    "pressure": number
    "humidity": number
  }

  interface IWeather {
    "id": number
    "main": string
    "description": string
    "icon": string
  }


  useEffect(() => {
    const attachListeners = () => {
      const yesHeart:HTMLElement | null = document.getElementById("yes")
      const noHeart:HTMLElement | null = document.getElementById("no")
  
      if (yesHeart) {
        yesHeart.addEventListener('click', () => {
          props.removeFavourite(subject)
        })
      }
  
      if (noHeart) {
        noHeart.addEventListener('click', () => {
          props.addFavourite(subject)
        })  
      }
    }

    const isExistingFavourite: boolean = props.favourites.findIndex((fave) => {
      return fave.name === subject.name
    }) > -1 

    const yesHeart:HTMLElement | null = document.getElementById("yes")
    const noHeart:HTMLElement | null = document.getElementById("no")
    if (yesHeart && noHeart) {
      if (isExistingFavourite) {
        yesHeart.classList.remove('invisible');
        noHeart.classList.add('invisible');
      } else {
        yesHeart.classList.add('invisible');
        noHeart.classList.remove('invisible');
      }
    }

    attachListeners()
    props.setPage("search")
  }, [subject, props])

  const onSubmit = (event: MouseEvent) => {
    event.preventDefault()
    const formatted: string = getFormattedSearchCity(rawSearchCity.toLowerCase())
    fetchData(formatted)
  }

  const onChangeSearchCity = (city: string) => {
    setRawSearchCity(city)
  }

  const fetchData = (formattedCity: string) => {
    const apiKey: string | undefined = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
    const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${apiKey}`

    fetch(url).then(async response => {
      try {
        const data = await response.json()
        if (data && response.status === 200) {
          const main: IMain = data.main
          const weather: IWeather[] = data.weather
          const newSubject: IFavourite = {
            name: data.name,
            main: weather[0].main,
            temperatureK: main.temp,
            tempMinK: main.temp_min,
            tempMaxK: main.temp_max,
            humidity: main.humidity
          }
          setSubject(newSubject)
        } else {
          setError(new Error("Read error"))
        }
      } catch(error) {
        setError(error)
      }
    })
  }
  
  if (error) {
    return <p className="error">{ error.message }</p>
  }

  return <section className="search">
    <div className="search_box">
      <input 
        className="search_city" 
        type="text"
        placeholder="Enter a city..."
        value={rawSearchCity}
        onChange={(
            ev: ChangeEvent<HTMLInputElement>,
        ): void => onChangeSearchCity(ev.target.value)}
      ></input>
      <input 
        className="search_button" 
        type="button"
        value="Search"
        onClick={onSubmit}
      ></input>      
    </div>
    
    <div className="city">
      <Temperature scale={props.scale} subject={subject}/>
      <div className="name_and_favourite">
        <div className="name_and_favourite_side"></div>
        <div className="name_text">{subject.name}</div>
        <div className="name_and_favourite_side">
          <div id="yes" title="remove from Favourites" className="heart yesHeart invisible">{"\u2665"}</div>   
          <div id="no" title="add to Favourites" className="heart noHeart invisible">{"\u2661"}</div>           
        </div>
      </div>
      <div className="main_text">{subject.main}</div>
      <div className="humidity">Humidity: {subject.humidity}</div>
    </div>
  </section>
}

export default SearchPage