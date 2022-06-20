const BlogGrid = ({ posts }) => {
  return (
    <div>
      {posts && posts.map((post) => <p>{post.frontmatter.title}</p>)}
    </div>

  )
}

export default BlogGrid
