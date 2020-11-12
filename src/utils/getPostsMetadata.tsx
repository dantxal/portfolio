import fs from 'fs'

function getPostsMetadata(): string[] {
  const files = fs.readdirSync(`${process.cwd()}/srcContent`, 'utf-8')
  const posts = files.filter(filename => filename.endsWith('.md'))

  return posts.map(postFile => {
    const path = `${process.cwd()}/srcContent/${postFile}`
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8'
    })

    return rawContent
  })
}

export default getPostsMetadata
