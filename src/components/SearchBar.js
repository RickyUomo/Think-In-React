function SearchBar({ filterText, isInStocked, setFilterText, setIsInStocked }) {
    const handleFilterChange = (e) => setFilterText(e.target.value);
    const handleInStockedChange = (e) => setIsInStocked(e.target.checked);

    return (
        <div>
            <form>
                <input
                    value={filterText}
                    placeholder='Search...'
                    onChange={handleFilterChange}
                /><br />
                <label>
                    <input
                        checked={isInStocked}
                        type='checkbox'
                        onChange={handleInStockedChange}
                    />
                    Only show when products in stock
                </label>
            </form>
        </div>
    )
};

export default SearchBar;