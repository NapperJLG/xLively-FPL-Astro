const BlogGrid = ({ posts }) => {
  return (
    <div>
      {posts && posts.map((post) => <a href={post.url}>{post.frontmatter.title}</a>)}
    </div>

  )
}

export default BlogGrid
