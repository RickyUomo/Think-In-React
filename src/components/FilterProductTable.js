import { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [isInStocked, setIsInStocked] = useState(false);

    return (
        <div>
            <SearchBar filterText={filterText} isInStocked={isInStocked} setFilterText={setFilterText} setIsInStocked={setIsInStocked} />
            <ProductTable filterText={filterText} isInStocked={isInStocked} products={products} />
        </div>
    )
};

export default FilterProductTable;