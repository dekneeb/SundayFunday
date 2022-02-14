import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


function OneBrewery(props){

    const cb= document.getElementById('stamp')
   

    const [oneBrew, setOneBrew] = useState({})

    const brew = useParams()
    // console.log(brew.id)

    const URL = `https://api.openbrewerydb.org/breweries/${brew.id}`

    useEffect(()=>{
        fetch(URL)
        .then(resp => resp.json())
        .then((json)=>{
            console.log(json)
            setOneBrew(json)
           
        })

    }, [])

    console.log(oneBrew)

   
    


    return(<div>
        
       

        <h1>{oneBrew.name}</h1>
        <p>Brew Type: {oneBrew.brewery_type}</p>
        <p>Phone number: {oneBrew.phone}</p>
        <a href={`${oneBrew.website_url}`}>{oneBrew.name} website</a> 
        <a href={`https://maps.google.com/?q=${oneBrew.street},${oneBrew.city}, ${oneBrew.state}, ${oneBrew.postal_code}`}>
        <p>{oneBrew.street}</p>
        <p> {oneBrew.city}, {oneBrew.state} {oneBrew.postal_code}</p>
        </a>

        <p> Visited this brewery already? Add a stamp to your passport!</p>
        <label htmlFor='stamp'>
        <input onClick={() => props.addStamp(oneBrew.name)} type='button' id='stamp' name='stamp' value='Stamp it!'></input>
        </label>

    </div>)
}

export default OneBrewery