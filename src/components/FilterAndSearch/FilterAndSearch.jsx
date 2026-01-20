import { useState } from 'react';
import './filterAndSearch.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, selectSearchTerm, selectSort } from '../../store/store';

export function FilterAndSearch() {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const sort = useSelector(selectSort);
  const searchTerm = useSelector(selectSearchTerm);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      dispatch({type: "products/resetFilters"});
    } else {
      dispatch({type: "products/setFilters", payload: {searchTerm: value}});
    }
  };

  const handleFilters = (e) => {
    const value = e.target.value;
    if (value === "phones" || value === "laptops" || value === "tablets" || value === "all") {
      dispatch({type: "products/setFilters", payload: {category: value}});
    } else if (value === "name" || value === "price") {
      dispatch({type: "products/setFilters", payload: {sort: value}});
    }
  };

  return (
    <div className="filters">
      <div className="search">
        <input
          type="text"
          placeholder="Поиск товаров..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="filter-controls">
        <select value={category} onChange={handleFilters}>
          <option value="all">Все категории</option>
          <option value="phones">Телефоны</option>
          <option value="laptops">Ноутбуки</option>
          <option value="tablets">Планшеты</option>
        </select>

        <select value={sort} onChange={handleFilters}>
          <option value="name">По названию</option>
          <option value="price">По цене</option>
        </select>

        <button onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
        </button>
      </div>
    </div>
  );
}
