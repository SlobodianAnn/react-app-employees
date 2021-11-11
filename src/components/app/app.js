import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: true, id: 1},
        {name: 'Alex M.', salary: 3000, increase: false, id: 2},
        {name: 'Tom B.', salary: 1300, increase: true, id: 3}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data})=> {
      return{
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary, e) => {
    e.preventDefault()

    this.setState(({data}) => {
      const newEmployee = {name: name, salary: salary, increase: false, id: data.length + 1 }
      return {
        data: [...data, newEmployee]
      }
    })
  }

  render(){
    const {data} = this.state;
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
  
        <EmployersList data={data} onDelete={id => this.deleteItem(id)} />
        <EmployeesAddForm onAdd={(name, salary, e) => this.addItem(name, salary, e)} />
      </div>
    );
  }

  
}

export default App;
