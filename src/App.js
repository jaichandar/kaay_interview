import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTableData, performSearch } from './features/action/index'
import Pagination from './components/Pagination';

function App() {
  const { isError, details } = useSelector(state => state.tableData)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fetchTableData(currentPage))
  }, [currentPage])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(search !== '') {
      dispatch(performSearch(search))
    } else if(search == '') {
      dispatch(fetchTableData(1))
    }
  }

  return (
    <div className="App">
     <h1 className='text-danger'>User Details</h1>
     <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group mx-sm-3 mb-2">
        <label className="sr-only">Username</label>
        <input className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="name" />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Search</button>
    </form>
     <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Tagline</th>
            <th scope="col">First Brewed</th>
          </tr>
        </thead>
        <tbody>
          {
            details.length > 0 && !isError && details.map((val) => {
              return (
                <tr key={val.id}>
                  <th scope="row">{val.id}</th>
                  <td>{val.name}</td>
                  <td>{val.tagline}</td>
                  <td>{val.first_brewed}</td>
                </tr>
              )
            }) 
          }
        </tbody>
      </table>
      {
      details.length >= 10 && (
        <Pagination 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )
      }
    </div>
  );
}

export default App;
