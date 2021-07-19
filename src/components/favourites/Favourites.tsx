import './Favourites.css'
import { IFavourite } from '../app/App'
import Card from '../card/Card'
import { useEffect } from 'react'

interface IFavesProps {
  favourites: IFavourite[],
  removeFavourite: Function,
  scale: string,
  setPage: Function
}

const FavouritesPage = (props: IFavesProps) => {
  useEffect(() => {
    props.setPage("favourites")
  }, [props])

  const faves = props.favourites.map((fave: IFavourite) => {
    return <Card
      subject={fave} 
      remove={props.removeFavourite}
      scale={props.scale}
    />
  })

  return <section id="skills" className="section">
    <div className="favourites_heading">Favourites</div>
    <div className="favourites_list">
      {faves}
    </div>
  </section>
}

export default FavouritesPage