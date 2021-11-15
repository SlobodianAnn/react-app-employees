import './app-info.css';

const AppInfo = ({numberEmployees, arrIncrease}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {numberEmployees} </h2>
      <h2>Премию получат: {arrIncrease} </h2>
    </div>
  );
};

export default AppInfo;
