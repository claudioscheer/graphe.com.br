import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="page-title text-ink mt-0 mb-8">{children}</h1>
          ),
          h2: ({ children, ...props }) => {
            // Hide the "Footnotes" heading that remark-gfm generates (has class="sr-only" and id="footnote-label")
            const propsObj = props as { id?: string; className?: string };
            if (
              propsObj.id === "footnote-label" ||
              propsObj.className?.includes("sr-only")
            ) {
              return null;
            }
            const childrenText =
              typeof children === "string"
                ? children
                : Array.isArray(children)
                  ? children.join("")
                  : String(children);
            if (childrenText === "Footnotes") {
              return null;
            }
            return (
              <h2 className="text-ink mt-14 mb-5 font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight font-semibold tracking-[-0.025em]">
                {children}
              </h2>
            );
          },
          h3: ({ children }) => (
            <h3 className="text-ink mt-10 mb-4 font-serif text-2xl leading-tight font-semibold tracking-[-0.02em]">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="body-large text-ink mb-6 max-w-[70ch]">{children}</p>
          ),
          a: ({ href, children, ...props }) => {
            // Check if this is an internal anchor link (for footnotes)
            const isInternalLink = href?.startsWith("#");
            // Check if this is a footnote backref link
            const isFootnoteBackref = (
              props as { className?: string }
            ).className?.includes("data-footnote-backref");

            if (isInternalLink) {
              return (
                <a
                  href={href}
                  className={
                    isFootnoteBackref
                      ? "text-brass ml-1 no-underline"
                      : "text-link"
                  }
                >
                  {children}
                </a>
              );
            }
            return (
              <a
                href={href}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            );
          },
          ul: ({ children }) => (
            <ul className="body-large text-ink mb-6 max-w-[70ch] list-disc space-y-2 pl-6">
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => {
            // Check if this is a footnote list - remark-gfm adds data attributes
            const propsObj = props as { className?: string; id?: string };
            const isFootnoteList =
              propsObj.className?.includes("footnotes-list") ||
              propsObj.id === "footnotes-list" ||
              (Array.isArray(children) &&
                children.some(child => {
                  const childElement = child as {
                    props?: {
                      id?: string;
                      children?: { props?: { id?: string } };
                    };
                  };
                  const childId =
                    childElement?.props?.id ||
                    childElement?.props?.children?.props?.id;
                  return (
                    childId?.startsWith("fn-") ||
                    childId?.startsWith("user-content-fn-")
                  );
                }));

            if (isFootnoteList) {
              return (
                <ol className="text-ink-soft mt-4 max-w-[70ch] list-decimal space-y-2 pl-6 text-sm leading-relaxed">
                  {children}
                </ol>
              );
            }
            return (
              <ol className="body-large text-ink mb-6 max-w-[70ch] list-decimal space-y-2 pl-6">
                {children}
              </ol>
            );
          },
          li: ({ children, ...props }) => {
            // Check if this is a footnote item (remark-gfm uses "user-content-fn-X" format)
            const id = (props as { id?: string }).id;
            const isFootnoteItem =
              id?.startsWith("fn-") || id?.startsWith("user-content-fn-");
            if (isFootnoteItem) {
              return (
                <li
                  id={id}
                  className="text-ink-soft mb-2 leading-relaxed [&>p]:mb-0 [&>p]:inline"
                >
                  {children}
                </li>
              );
            }
            return <li className="text-ink leading-relaxed">{children}</li>;
          },
          blockquote: ({ children }) => (
            <blockquote className="border-line-strong text-ink my-10 max-w-[70ch] border-l pl-6 font-serif text-[1.375rem] leading-snug italic">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="border-line my-12 max-w-[70ch]" />,
          code: ({ children }) => (
            <code className="bg-ink/[0.06] text-ink px-1.5 py-0.5 font-mono text-[0.9em]">
              {children}
            </code>
          ),
          // Footnote section styling
          section: ({ children, ...props }) => {
            const propsObj = props as {
              "data-footnotes"?: boolean;
              className?: string;
            };
            const isFootnoteSection =
              propsObj["data-footnotes"] ||
              propsObj.className?.includes("footnotes");
            if (isFootnoteSection) {
              return (
                <section className="border-line mt-16 max-w-[70ch] border-t pt-8">
                  <h2 className="meta text-ink mb-5">Referências</h2>
                  {children}
                </section>
              );
            }
            return <section {...props}>{children}</section>;
          },
          // Footnote reference styling (superscript numbers in text)
          sup: ({ children }) => (
            <sup className="text-brass text-xs">{children}</sup>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
