import { useState, useEffect } from 'react'
import CarsCard from './../CarsCard/CarsCard'
import SearchCar from './../Search/SearchCar'
import Pagination from '../Pagination/Pagination'
import SortCar from './../SortCar/SortCar'

import './CarsList.css'

const apiUrl = 'http://localhost:8000/api/cars'

function CardList() {
    const [isCarArrEmpty, setCarArrEmpty] = useState(false);
    const [allCars, setAllCars] = useState([])

    const [cars, setCars] = useState([])
    const [itensPage, setItensPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(cars.length / itensPage)
    const startIndex = currentPage * itensPage
    const endIndex = startIndex + itensPage
    const currentItens = cars.slice(startIndex, endIndex)


    const getAllCars = async () => {
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            setCars(data)
            setAllCars(data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCars()
    }, [])

    const searchCarList = (query) => {
        let searchCars = allCars.filter((carsFilter) => {
            return carsFilter.BRAND.toLowerCase().includes(query.toLowerCase())
        })

        if (searchCars.length === 0) {
            setCarArrEmpty(true)
        }
        setCars(searchCars)

    }

    const sortByBrandAZ = () => {
        const arrByBrand = [...cars].sort((a, b) => (a.BRAND) > b.BRAND ? 1 : -1)
        setCars(arrByBrand)
    }

    const sortByBrandZA = () => {
        const arrByBrand2 = [...cars].sort((a, b) => (a.BRAND) < b.BRAND ? 1 : -1)
        //console.log(arrByName)

        setCars(arrByBrand2)
    }


    return (
        <div className='container'>
            <div className='search'>
                <SearchCar carList={searchCarList} />
            </div>
            <div className="car-list">
            <SortCar sortByBrandAZ={sortByBrandAZ} sortByBrandZA={sortByBrandZA} />
                {isCarArrEmpty ?
                    currentItens.map((oneCar, index) => {
                        return (
                            <div key={index}>
                                <CarsCard cars={oneCar} />
                            </div>
                        )
                    })
                    : currentItens.map((oneCar, index) => {
                        return (
                            <div key={index}>
                                <CarsCard cars={oneCar} />
                            </div>
                        )
                    })
                }
                <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
            <div className='currentPage'>
                {currentPage + 1}
                <br />
            </div>
        </div>
    )
}

export default CardList; 