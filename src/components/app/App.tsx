import { useState, useEffect } from 'react';
import './App.scss';
import './custom.scss';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import FavouritesPage from '../favourites/Favourites'
import SearchPage from '../search/Search'
import ScaleSelector from '../scaleSelector/ScaleSelector';

export interface IFavourite {
  name?: string,
  tempMinK?: number,
  tempMaxK?: number,
  main?: string,
  humidity?: number,
  temperatureK?: number
}

function App() {
  const[favourites, setFavourites] = useState<IFavourite[]>([])
  const[scale, setScale] = useState<string>("C")
  const[page, setPage] = useState<string>("")
  require('dotenv').config()

  useEffect(() => {
    const searchLink:HTMLElement | null = document.getElementById("search_link")
    const favouritesLink:HTMLElement | null = document.getElementById("favourites_link")
    if (searchLink && favouritesLink) {
      if (page === "search") {
        searchLink.classList.add('invisible')
        favouritesLink.classList.remove('invisible')
        searchLink.style.width="0"
      }

      if (page === "favourites") {
        searchLink.classList.remove('invisible');
        favouritesLink.classList.add('invisible');
        searchLink.style.width="100px"
      }
    }
  }, [page])

  const addFavourite = (newFave: IFavourite) => {
    if (!isFavourite(newFave)) {
      const newFavourites = [...favourites]
      newFavourites.push(newFave)
      setFavourites(newFavourites)      
    }
  }

  const isFavourite = (favourite: IFavourite): boolean => {
    const index: number = favourites.findIndex(fave => fave.name ===favourite.name)
    return index > -1
  }

  const removeFavourite = (removeFave: IFavourite) => {
    const index: number = favourites.findIndex((fave) => {
      return fave.name === removeFave.name
    })
    if (favourites.length > 0 && index > -1) {
      const remainingFavourites = [...favourites].filter((favourite: IFavourite) => {
        return favourite.name !== removeFave.name
      })
      setFavourites(remainingFavourites)      
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <div className="jumbotron App-header text-center">
            <div className="logo">Weather</div>
            <div>
              <div className="scale_selector">
                <ScaleSelector scale={scale} setScale={setScale}/>
              </div>
              <div className="links">
                <Link to="/favourites" id="favourites_link" className="link invisible">Favourites</Link>  
                <Link to="/" id="search_link" className="link invisible">Search</Link>  
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/favourites">
            <FavouritesPage 
              favourites={favourites} 
              removeFavourite={removeFavourite}
              scale={scale}
              setPage={setPage}
            />
          </Route>
          <Route path="/">
            <SearchPage 
              favourites={favourites}
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
              scale={scale}
              setPage={setPage}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
