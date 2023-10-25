'use client'
import predictorPy from './predictor.py'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default async function Tutorial() {


  return (
    <div>
      <article className="prose lg:prose-xl">
      </article>
      <SyntaxHighlighter style={shadesOfPurple} language={'python'} customStyle={{ fontSize: '0.8em', padding: '12px' }} wrapLongLines >
        {predictorPy}
      </SyntaxHighlighter>
    </div>
  )
}
