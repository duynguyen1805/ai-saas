"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownResponseProps {
  content: string;
}

const MarkdownResponse: React.FC<MarkdownResponseProps> = ({ content }) => {
  return (
    <ReactMarkdown
      className="text-sm overflow-hidden leading-7"
      components={{
        code({
          node,
          inline,
          className,
          children,
          ...props
        }: {
          node: any;
          inline: boolean;
          className: string;
          children: any;
          props: any;
        }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={dark}
              wrapLongLines
              language={match[1]}
              preTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownResponse;
