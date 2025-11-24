import ReactMarkdown from "react-markdown"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-custom">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="mt-8 mb-6 text-3xl font-medium text-[#222222]">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-8 mb-4 text-2xl font-medium text-[#222222]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 mb-3 text-xl font-medium text-[#222222]">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-6 leading-relaxed text-[#222222]">{children}</p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-[#2E6BE6] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 list-inside list-disc space-y-2 text-[#222222]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 list-inside list-decimal space-y-2 text-[#222222]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed text-[#222222]">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-2 border-[#E5E5E5] pl-6 text-[#555555] italic">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-[#F5F5F5] px-2 py-1 text-sm text-[#222222]">
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
