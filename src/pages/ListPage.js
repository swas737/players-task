import Card from "../components/Card"

const ListPage = ({ searchResults }) => {
    const results = searchResults.sort((a, b) =>
    a.Value.toString().localeCompare(b.Value.toString())).map(post => <Card key={post.Id} players={post} />)
    const content = results?.length ? results : <article><p>No Matching Posts</p></article>
    return (
        <main style={{display:'flex',flexWrap:'wrap'}}>{content}</main>
    )
}
export default ListPage 