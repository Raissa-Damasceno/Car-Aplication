import { Button } from 'react-bootstrap'

function SortCar( {sortByBrandAZ, sortByBrandZA} ) {
    return ( 
        <div className="orderBy">
        <div className="btn">
            Order By:
        </div>
        <Button className="btn" onClick={sortByBrandAZ}>Brand A-Z</Button>
        <Button className="btn" onClick={sortByBrandZA}>Brand Z-A</Button>
    </div>
     );
}

export default SortCar;