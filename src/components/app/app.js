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
        {name: 'John C.', salary: 800, increase: true, rise: true, id: 1},
        {name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2},
        {name: 'Tom B.', salary: 1300, increase: true, rise: false, id: 3}
      ],
      term: '',
      filter: 'all'
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

    if(name !== '' && salary !== ''){
      this.setState(({data}) => {
        const newEmployee = {name: name, salary: salary, increase: false, rise: false, id: data.length + 1 }
        return {
          data: [...data, newEmployee]
        }
      })
    }

  }

  onToggleProp = (id, prop) => {
    this.setState(({data})=> {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = {...old, [prop]: !old[prop]}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  searchEmp = (items, term) => {
    if(term.length === 0){
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }
  onUpdateSearch = (term) => {
    this.setState({term})
  }

filterPost = (items, filter) => {
  switch(filter){
    case 'rise': 
      return items.filter(item => item.rise);
    case 'moreThen1000': 
      return items.filter(item => item.salary > 1000)
    default: 
    return items;
  }
}

  onFilterSelect = (filter) => {
    this.setState({filter})
  }


  render(){
    const {data, term, filter} = this.state;
    const arrIncrease = data.filter(item => item.increase === true ).length
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)

    return (
      <div className="app">
        <AppInfo numberEmployees={data.length} arrIncrease={arrIncrease} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
  
        <EmployersList 
        data={visibleData} 
        onDelete={id => this.deleteItem(id)}
        onToggleProp={this.onToggleProp}
         />
        <EmployeesAddForm onAdd={(name, salary, e) => this.addItem(name, salary, e)} />
      </div>
    );
  }

  
}

export default App;
