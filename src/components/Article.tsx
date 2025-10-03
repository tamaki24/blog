type Props = {
  blog: {
    title: string;
    createdAt: string;
    content: string;
    eyecatch: { url: string };
  };
};

const Article = (props: Props) => {
  const { blog } = props;
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
          </header>

          <img
            src={blog.eyecatch?.url}
            alt={blog.title || "Eyecatch image"}
            className="mb-8 w-full rounded-lg object-cover"
          />

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