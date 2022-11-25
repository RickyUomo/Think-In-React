function SearchBar() {
    return (
        <div>
            <form>
                <input placeholder='Search...' /><br />
                <label>
                    <input type='checkbox' />
                    Only show when products in stock
                </label>
            </form>
        </div>
    )
};

export default SearchBar;