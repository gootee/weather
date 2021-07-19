import { useEffect } from 'react'
import { IFavourite } from '../app/App'
import Temperature from '../temperature/Temperature'
import './Card.css'

interface ICardData {
  subject: IFavourite,
  remove: Function,
  scale: string,
}

const Card = (props: ICardData) => {
  useEffect(() => {
    const name: string = props.subject.name || ""
    const removeButton = document.getElementById(name)
    if (removeButton) {
      removeButton.addEventListener('click', () => {
        props.remove(props.subject)
      })
    }
  }, [props])

  return <div className="col-sm-6 col-md-4 col-lg-4 mb-4">
    <div className="card">
      <div className="heading">
        <div id={props.subject.name} className="remove_button">
          <p>X</p>
        </div>
      </div>
      <div className="main">
        <Temperature 
          scale={props.scale}
          subject={props.subject}
        />      
        <div className="name_text">
          {props.subject.name}
        </div>
        <div className="main_text">
          {props.subject.main}
        </div>
        <div className="humidity">
          {"Humidity:   " + props.subject.humidity + "%"}
        </div>         
      </div>
    </div>
  </div>
}

export default Card