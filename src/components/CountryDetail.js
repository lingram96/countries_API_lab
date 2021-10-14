import React from "react";

const CountryDetail = ({country}) => {

    const countryLanguages = function(){
        const countryLanguageList = [];
        for (const language of country.languages){
            countryLanguageList.push(language.nativeName)
        }
        return countryLanguageList;
    }


    return(
        <div>
            <p><img src={country.flags.png} alt="Flag"/></p>
            <h3>{country.name}</h3>
            <p>Capital: {country.capital}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <p>Languages: {countryLanguages().join(", ")}</p>
            <p>Demonym: {country.demonym}</p>
        </div>
    )
};

export default CountryDetail;