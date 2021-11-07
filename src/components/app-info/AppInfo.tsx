import './AppInfo.css';

interface InfoProp {
  employeesCount: number;
  increasedCount: number;
  choosenCount: number;
}

function AppInfo({ employeesCount, increasedCount, choosenCount }: InfoProp) {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employeesCount}</h2>
      <h2>Премию получат: {increasedCount}</h2>
      <h2>Избранные сотрудники: {choosenCount}</h2>
    </div>
  );
}

export default AppInfo;
