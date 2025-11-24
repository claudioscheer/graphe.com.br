import ReactMarkdown from "react-markdown"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-custom">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-medium text-[#222222] mb-6 mt-8">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-medium text-[#222222] mb-4 mt-8">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-medium text-[#222222] mb-3 mt-6">{children}</h3>,
          p: ({ children }) => <p className="text-[#222222] leading-relaxed mb-6">{children}</p>,
          a: ({ href, children }) => (
            <a href={href} className="text-[#2E6BE6] hover:underline" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 text-[#222222]">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2 text-[#222222]">{children}</ol>,
          li: ({ children }) => <li className="text-[#222222] leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-[#E5E5E5] pl-6 my-6 text-[#555555] italic">{children}</blockquote>
          ),
          code: ({ children }) => <code className="bg-[#F5F5F5] text-[#222222] px-2 py-1 text-sm">{children}</code>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
