import { Country } from "./Country"


//export 
const Countries = ({countries, filterValue}) => {
    const someCountries = countries.filter(country => country.name.common.toLowerCase().includes(filterValue.toLowerCase()))
    //console.log(someCountries)
    if (filterValue==='') {
        return (<p>Put something please</p>)
    }
    if (someCountries.length===0) {
        return (<p>No matches, specify another filter</p>)
    } else if (someCountries.length===1) {
        return (
            <div>
                {<Country 
                    key={someCountries[0].cca3} 
                    country={someCountries[0]}
                    isSingle={true}
                    />}
            </div>
        )
    } else if (someCountries.length>0 && someCountries.length<=10) {
        return (
            <div>
                {someCountries
                //.filter(person => person.name.common.toLowerCase().includes(filterValue.toLowerCase()))
                .map(country => <Country 
                    key={country.cca3} 
                    country={country}
                    isSingle={false}
                    />)}
            </div>
        )
    } else if (someCountries.length>10) {
        return <p>Too many matches, specify another filter</p>
    }
    /*
    return (someCountries.length<=10)
    ? (
        <div>
            {someCountries
            //.filter(person => person.name.common.toLowerCase().includes(filterValue.toLowerCase()))
            .map(person => <Country 
                key={person.cca3} 
                name={person.name.common} 
                number={person.cca3}/>)}
        </div>
    )
    : <p>Too many matches, specify another filter</p>*/
}

export default Countries;