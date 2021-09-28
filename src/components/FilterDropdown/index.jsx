import React from 'react';
import { Dropdown } from 'react-bootstrap';

export const FilterDropdown = ({ value, values, handleClick, name }) => {
  return (
    <Dropdown value={value} className="my-5">
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        {`Filtered by ${name}: ${value ? value : 'all'} `}
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        {values.map(value => (
          <Dropdown.Item key={value} name={name} onClick={handleClick}>
            {value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
