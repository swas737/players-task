const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.TName.includes(e.target.value) || post.PFName.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                   Search
                </button>
            </form>
        </header>
    )
}
export default SearchBar