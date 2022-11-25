import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterProductTable({ products }) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )
};

export default FilterProductTable;