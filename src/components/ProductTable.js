import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, isInStocked }) {
    let previousCategory;
    let rows = [];

    products.forEach(product => {
        if (product.category !== previousCategory) rows.push(<CategoryRow key={product.category} category={product.category} />);

        rows.push(<ProductRow key={product.name} name={product.name} price={product.price} stocked={product.stocked} />);
        previousCategory = product.category;
    });

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
};

export default ProductTable;