import { useState } from "react"
import WeatherInfo from "./WeatherInfo"

const Image = ({id, imgSrc}) => {
    return (
      <img alt={id} src={imgSrc}></img>
    )
}

const Part = ({name, value}) => {
    return (
      <p>{`${name} ${value}`}</p>
    )
}
const Languages = ({langs}) => {
    //console.log(Object.keys(langs))
    return (
        <>
            <h4>languages:</h4>
            <ul>
                {
                Object.keys(langs).map(attr => 
                    <li key={attr}>{langs[attr]}</li>
                )}
            </ul>
        </>
        
    )
}

const CountryInfo = ({country}) => {
    const {capital, languages, area, cca3, flags} = country
    //const [showInfo, setInfoShowable] = useState(false)
    return (
        <>
            {
                capital 
                ? <Part name='capital' value={capital[0]}/> 
                : <p>No capital</p>
            }
            <Part name='area' value={area}/>
            <Languages langs={languages}/>
            <Image id={cca3} imgSrc={flags.png}/>
        </>
    )
}

const Country = ({country, isSingle}) => {
    //const {name, capital, languages, area, cca3, flags} = country
    const [showInfo, setInfoShowable] = useState(false)

    const handleShowInfoChange = () => {
        setInfoShowable(!showInfo)
    }

    return (isSingle)
    ? (
        <>
            <h3>{country.name.common}</h3>
            <CountryInfo country={country}/>
            {
                country.capital
                ? <WeatherInfo capital={country.capital[0]}/>
                : <p>No capital to show</p>
            }
        </>
    )
    : (
        <>
            <div>
                {country.name.common}
                <button onClick={handleShowInfoChange}>{!showInfo ? 'show' : 'hide info'}</button>
                {showInfo ? <CountryInfo country={country}/> : ''}
            </div>
        </>
    )
}

export {Country, Part, Image}