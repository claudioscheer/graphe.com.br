import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose-custom">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-8 mb-6 text-3xl font-medium text-[#222222]">
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => {
            // Hide the "Footnotes" heading that remark-gfm generates (has class="sr-only" and id="footnote-label")
            const propsObj = props as { id?: string; className?: string }
            if (
              propsObj.id === "footnote-label" ||
              propsObj.className?.includes("sr-only")
            ) {
              return null
            }
            const childrenText =
              typeof children === "string"
                ? children
                : Array.isArray(children)
                  ? children.join("")
                  : String(children)
            if (childrenText === "Footnotes") {
              return null
            }
            return (
              <h2 className="mt-8 mb-4 text-2xl font-medium text-[#222222]">
                {children}
              </h2>
            )
          },
          h3: ({ children }) => (
            <h3 className="mt-6 mb-3 text-xl font-medium text-[#222222]">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-[#222222]">{children}</p>
          ),
          a: ({ href, children, ...props }) => {
            // Check if this is an internal anchor link (for footnotes)
            const isInternalLink = href?.startsWith("#")
            // Check if this is a footnote backref link
            const isFootnoteBackref = (
              props as { className?: string }
            ).className?.includes("data-footnote-backref")

            if (isInternalLink) {
              return (
                <a
                  href={href}
                  className={
                    isFootnoteBackref
                      ? "ml-1 text-[#2E6BE6] no-underline"
                      : "text-[#2E6BE6] hover:underline"
                  }
                >
                  {children}
                </a>
              )
            }
            return (
              <a
                href={href}
                className="text-[#2E6BE6] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )
          },
          ul: ({ children }) => (
            <ul className="mb-4 list-inside list-disc space-y-2 text-[#222222]">
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => {
            // Check if this is a footnote list - remark-gfm adds data attributes
            const propsObj = props as { className?: string; id?: string }
            const isFootnoteList =
              propsObj.className?.includes("footnotes-list") ||
              propsObj.id === "footnotes-list" ||
              (Array.isArray(children) &&
                children.some(child => {
                  const childElement = child as {
                    props?: {
                      id?: string
                      children?: { props?: { id?: string } }
                    }
                  }
                  const childId =
                    childElement?.props?.id ||
                    childElement?.props?.children?.props?.id
                  return (
                    childId?.startsWith("fn-") ||
                    childId?.startsWith("user-content-fn-")
                  )
                }))

            if (isFootnoteList) {
              return (
                <ol className="mt-4 list-inside list-decimal space-y-2 pl-0 text-sm text-[#555555]">
                  {children}
                </ol>
              )
            }
            return (
              <ol className="mb-6 list-inside list-decimal space-y-2 text-[#222222]">
                {children}
              </ol>
            )
          },
          li: ({ children, ...props }) => {
            // Check if this is a footnote item (remark-gfm uses "user-content-fn-X" format)
            const id = (props as { id?: string }).id
            const isFootnoteItem =
              id?.startsWith("fn-") || id?.startsWith("user-content-fn-")
            if (isFootnoteItem) {
              return (
                <li
                  id={id}
                  className="mb-2 leading-relaxed text-[#555555] [&>p]:mb-0 [&>p]:inline"
                >
                  {children}
                </li>
              )
            }
            return (
              <li className="leading-relaxed text-[#222222]">{children}</li>
            )
          },
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
          // Footnote section styling
          section: ({ children, ...props }) => {
            const propsObj = props as {
              "data-footnotes"?: boolean
              className?: string
            }
            const isFootnoteSection =
              propsObj["data-footnotes"] ||
              propsObj.className?.includes("footnotes")
            if (isFootnoteSection) {
              return (
                <section className="mt-12 border-t border-[#E5E5E5] pt-8">
                  <h2 className="mb-4 text-lg font-medium text-[#222222]">
                    Referências
                  </h2>
                  {children}
                </section>
              )
            }
            return <section {...props}>{children}</section>
          },
          // Footnote reference styling (superscript numbers in text)
          sup: ({ children }) => (
            <sup className="text-xs text-[#2E6BE6]">{children}</sup>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
