type OptimizedImage = {
  src: string;
  attributes: {
    width: number;
    height: number;
    [key: string]: any;
  };
};

type Props = {
  blog: {
    title: string;
    createdAt: string;
    content: string;
    eyecatch: { url: string };
    category?: { id: string; name: string; };
  };
  headings: {
    text: string;
    id: string;
    name: string;
  }[];
  optimizedEyecatch: OptimizedImage;
};

const Article = (props: Props) => {
  const { blog, optimizedEyecatch } = props;
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <article className="mx-auto max-w-3xl">
          <header className="mb-8">
            <h1 className="mb-2 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
              {blog.title}
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400">
              公開日: {new Date(blog.createdAt).toLocaleDateString("ja-JP")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {blog.category && (
                <span className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                  {blog.category.name}
                </span>
              )}
            </div>
          </header>

          <img
            {...optimizedEyecatch.attributes}
            src={optimizedEyecatch.src}
            alt={blog.title || "Eyecatch image"}
            loading="eager"
            className="mb-8 w-full rounded-lg object-cover"
          />

          <div className="mb-8 rounded-lg border p-4">
            <h2 className="mb-2 text-lg font-bold">目次</h2>
            <ul>
              {props.headings.map((heading) => (
                <li key={heading.id} className={`ml-${(parseInt(heading.name.replace('h', '')) - 1) * 4}`}>
                  <a href={`#${heading.id}`} className="text-primary hover:underline">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:underline"
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        </article>
      </div>
    </section>
  );
};

export { Article };