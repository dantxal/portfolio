import matter from 'gray-matter'
import { useRef } from 'react'
import { MatterData } from './index'

import Layout from '../../components/Layout'
import MarkdownRenderer from '../../components/MarkdownRenderer'
import getWidth from '../../utils/getWidthFromRef'
import { PostContainer } from '../../styles/pages/BlogPost'

type Props = {
  content: string
  data: MatterData
}
const Post = ({ content, data }: Props): React.ReactElement => {
  const divRef = useRef<HTMLDivElement>(null)
  const maxWidth = getWidth(divRef)
  console.log(data)

  return (
    <Layout
      title={`${data.title} - dantxal`}
      description={`${data.description}`}
    >
      <PostContainer ref={divRef}>
        <h1>{data.title}</h1>
        <h3>{data.description}</h3>

        <div>
          <MarkdownRenderer maxWidth={maxWidth} content={content} />
        </div>
      </PostContainer>
    </Layout>
  )
}

export default Post

Post.getInitialProps = async context => {
  const { post } = context.query

  const content = await import(`../../../srcContent/${post}.md`)
  const data = matter(content.default)

  return { ...data }
}
