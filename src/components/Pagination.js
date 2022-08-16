import { useDispatch } from 'react-redux'
import { fetchTableData } from '../features/action/index'

const Pagination = (props) => {
    const { currentPage, setCurrentPage } = props
    const dispatch = useDispatch()
    const totalPage = 70 / 10;
    let result = Math.round(totalPage)
    let pageArr = [...Array(result).keys()].slice(1, result)

    const handleChange = (val) => {
        dispatch(fetchTableData(val))
        setCurrentPage(val)
    }

    const prevNext = (value) => {
        if(value == 'increment') {
            setCurrentPage((prevState) => prevState + 1)
        } else {
            setCurrentPage((prevState) => prevState - 1)
        }
    } 

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={ currentPage > 1 ? "page-item" : 'page-item disabled'} onClick={() => prevNext('decrement')}>
                    <a className="page-link" href="#">Prev</a>
                </li>
                {
                    pageArr.map(val => <li className={currentPage == val ? 'page-item active' : 'page-item'} key={val} onClick={() => handleChange(val)}><a className="page-link" href="#">{val}</a></li> )
                }
                <li className={ currentPage == pageArr.length ? "page-item disabled" : "page-item"} onClick={() => prevNext('increment')}>
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;