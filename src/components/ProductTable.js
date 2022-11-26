import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, isInStocked }) {
    let previousCategory;
    let rows = [];

    products.forEach(product => {
        // https://masteringjs.io/tutorials/fundamentals/foreach-return#:~:text=Using%20return%20in%20a%20forEach,continue%20in%20a%20conventional%20loop.
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return; //return means skip to next item/product
        if (isInStocked && !product.stocked) return;

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