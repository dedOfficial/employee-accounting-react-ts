import { MouseEvent } from 'react';
import { filterByType } from '../app/App';
import './AppFilter.css';

interface AppFilterProp {
  onChangeCategory: (filterBy: filterByType) => void;
  filter: filterByType;
}

function AppFilter({ onChangeCategory, filter }: AppFilterProp) {
  const changeCategory = (e: MouseEvent) => {
    const t = e.currentTarget as HTMLButtonElement;
    onChangeCategory(t.dataset.category as filterByType);
  };

  const btnsData = [
    { name: 'all', text: 'Все сотрудники' },
    { name: 'increased', text: 'На повышение' },
    { name: 'big-salary', text: 'З/П больше 1000$' },
  ];

  const btnsElements = btnsData.map(({ name, text }) => {
    const isActive = filter === name;
    const activeClass = isActive ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        className={'btn ' + activeClass}
        type="button"
        onClick={changeCategory}
        data-category={name}
        key={name}
      >
        {text}
      </button>
    );
  });

  return <div className="btn-group">{btnsElements}</div>;
}

export default AppFilter;
