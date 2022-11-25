function ProductRow({ name, price, stocked }) {
    return (
        <tr>
            <td style={!stocked ? { color: "red" } : {}}>
                {name}
            </td>
            <td>
                {price}
            </td>
        </tr>
    );
};

export default ProductRow;