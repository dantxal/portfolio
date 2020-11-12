import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

type Props = {
  language: string
  value: string
}

const CodeRenderer = ({ language, value }: Props) => (
  <SyntaxHighlighter showLineNumbers={true} language={language}>
    {value}
  </SyntaxHighlighter>
)

export default CodeRenderer
