import ReactMarkdown from 'react-markdown'
import CodeRenderer from './renderers/CodeRenderer'
import ImageRenderer from './renderers/ImageRenderer'

type Props = {
  maxWidth?: number
  content?: string
}

const MarkdownRenderer = ({ maxWidth, content }: Props) => {
  return (
    <ReactMarkdown
      escapeHtml={true}
      renderers={{
        code: CodeRenderer,
        image: data => ImageRenderer(data, maxWidth)
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer
