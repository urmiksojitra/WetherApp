import React, { useEffect, useState } from 'react'

function WetherApp() {
    const [city, setCity] = useState('')
    const [search, setSearch] = useState('surat')

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ca59b33db2788321e05ac35284e0c1f6`
            const response = await fetch(url)
            const resJson = await response.json()
            setCity(resJson)
        }
        fetchApi()
    }, [setSearch])
    return (
        <>
            <div className="container">
                <h1 className="input-group-text">Wether app</h1>
                <div className="col-md-3 offset-md-2">
                    <input type="search"
                        className='form-control'
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}></input><br />
                    {!city ? (<p>No data Found</p>) : (
                        <div>
                            <i>{search}</i>
                            <h1>{city.main.temp}°Cel</h1>
                        </div>
                    )}
                </div>
            </div>
            <div>
            </div>
        </>
    )
}


export default WetherApp
