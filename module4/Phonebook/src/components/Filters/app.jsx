/* eslint-disable react/prop-types */
const Filter = ({ filter, handleFilterChange }) => {
    return (
      <div>
        <h2>Filter shown with <input value={filter} onChange={handleFilterChange} /></h2>
      </div>
    );
  };

  export default Filter;