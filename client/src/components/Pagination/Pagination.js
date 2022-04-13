import { Button } from 'react-bootstrap'
import './pagination.css'

function Pagination({ setCurrentPage, pages, currentPage }) {
    console.log(currentPage);

    return (
        <div className="pagination-group">
            <div classname="pagination-button">

                <Button className='pagination-button' value={currentPage >= 1 ? currentPage - 1 : 0} onClick={(event) => setCurrentPage(Number(event.target.value))}> Previous </Button>

                {Array.from(Array(7), (item, index) => {
                    return <Button key={index} className='pagination-button' value={index} onClick={(event) => setCurrentPage(Number(event.target.value))}>{index + 1}</Button>
                })}
                <Button className='pagination-button' value={currentPage <= 293 ? currentPage + 1 : 294} onClick={(event) => setCurrentPage(Number(event.target.value))}> Next </Button>
                <Button>... + {pages - currentPage - 1}</Button>
            </div>

        </div>
    );
}

export default Pagination;


