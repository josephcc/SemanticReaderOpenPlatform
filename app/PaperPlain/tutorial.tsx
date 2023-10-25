'use client'

import Markdown, { Components } from 'react-markdown'
import tutorialMd from './tutorial.md'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const markdownHDowngrade: Partial<Components> = {
  h1(props) { return (<h3 {...props} />) },
  h2(props) { return (<h4 {...props} />) },
  h3(props) { return (<h5 {...props} />) },
  h4(props) { return (<h6 {...props} />) },
  h5(props) { return (<h6 {...props} />) },
  code(props) {
    const {children, className } = props
    const match = /language-(\w+)/.exec(className || '')
    const code = children as string
    if (match) {
      return (
        <SyntaxHighlighter className={className} style={shadesOfPurple} language={match[1]} customStyle={{ fontSize: '0.84em', padding: '18px', margin: 0 }} wrapLongLines PreTag="span"
        >{code}</SyntaxHighlighter>
      )
    }
    return <code {...props} />
  },
  pre(props) {
    return (
      <pre {...props} style={{ padding: 0 }} />
    )
  }
}


export const metadata = {
  title: 'PaperPlain - Semantic Reader Open Research Platform',
  description: "Paper Plain: Making Medical Research Papers Approachable to Healthcare Consumers with Natural Language Processing",
}

export default function Tutorial() {

  return (
    <article className="prose lg:prose-xl">
      <p className='mb-4'>
        Source code will be available soon.
      </p>

      <Markdown components={markdownHDowngrade}>{tutorialMd.trim().replace(/#[\w\W]+?\n+?/,"")
}</Markdown>
    </article>
  )
}
