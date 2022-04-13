import './searchCar.css'
import { useState } from 'react'

function SearchCar({ carList }) {
  const [searchCar, setSearchCar] = useState("")

  const handleSearch = ((e) => {
    e.preventDefault();
    console.log('event', e.target.value);

    setSearchCar(e.target.value)
    carList(e.target.value)
})

  return (
    <div className="search">
      <input value={searchCar} placeholder="Enter search brand" type="text" onChange={handleSearch} />
    </div>
  )
}


export default SearchCar;