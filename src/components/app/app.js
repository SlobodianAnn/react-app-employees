import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

function App() {
  const data = [
    {name: 'John C.', salary: 800, increase: true, id: 1},
    {name: 'Alex M.', salary: 3000, increase: false, id: 2},
    {name: 'Tom B.', salary: 1300, increase: true, id: 3}
  ]
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployersList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
