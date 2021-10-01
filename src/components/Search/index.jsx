import React, { useState, useMemo } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

import { useSearchEntities } from 'hooks/entities.js';
import { Card } from 'components/Card';

export const Search = () => {
  const [query, setQuery] = useState('');

  const { data } = useSearchEntities({
    query,
    queryOptions: { enabled: query?.length > 2 },
  });
  const list = useMemo(() => data, [data]);

  const handleChange = ({ target }) => setQuery(target.value);

  const handleClick = () => setQuery('');

  return (
    <InputGroup className="me-2">
      <FormControl
        className="search-input"
        onChange={handleChange}
        value={query}
        placeholder="search"
        aria-label="search"
      />
      {query?.length > 2 ? (
        <ul className="search-dropdown">
          {list?.map(({ show }) => (
            <li className="search-item" key={show.id}>
              <Card height="130px" search entity={show} handleClick={handleClick} />
            </li>
          ))}
        </ul>
      ) : null}
    </InputGroup>
  );
};
