import { IFavourite } from '../app/App'
import { convertFromKelvin } from '../search/searchServices'
import './Temperature.css'

interface ITempProps {
  scale: string,
  subject: IFavourite
}

const Temperature = (props: ITempProps) => {
  return <div className="temperature">
  <div className="temperature_left">
    {convertFromKelvin(props.subject.temperatureK || 0, props.scale) }
  </div>
  <div className="temperature_right">
    <div className="temperature_right_top">
      {"\xB0"}
      {props.scale}
    </div>
    <div className="temperature_right_bottom">
      <div className="min_max">
        <div className="arrow">{"\u2191"}</div>
        {convertFromKelvin(props.subject.tempMaxK || 0, props.scale)}
        {"\xB0"}
      </div>   
      <div className="min_max">
        <div className="arrow">{"\u2193"}</div>
        <div>
          {convertFromKelvin(props.subject.tempMinK || 0, props.scale)}
          {"\xB0"}
        </div>
      </div>
    </div>
  </div>
</div>
}

export default Temperature