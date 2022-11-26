function SearchBar({ filterText, isInStocked }) {
    return (
        <div>
            <form>
                <input value={filterText} placeholder='Search...' /><br />
                <label>
                    <input checked={isInStocked} type='checkbox' />
                    Only show when products in stock
                </label>
            </form>
        </div>
    )
};

export default SearchBar;