

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Post {
  id: string;
  title: string;
  createdAt: string;
  eyecatch: { url: string };
  category?: { id: string; name: string; }; // categoryの型を修正
}

interface BlogProps {
  heading: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog = ({
  heading = "Blog Posts",
  buttonText = "View all articles",
  buttonUrl = "/blog",
  posts,
}: BlogProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-left gap-16 lg:px-16">
        <div className="">
          <h2 className="mb-2 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <Button variant="link" className="w-full sm:w-auto" asChild>
            <a href={buttonUrl}>
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="flex w-full flex-col gap-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex flex-col gap-6 border-b pb-8 group md:flex-row"
            >
              <div className="w-full md:w-1/3 lg:w-1/4">
                <img
                  src={post.eyecatch.url}
                  alt={post.title}
                  className="aspect-video w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/3 lg:w-3/4">
                {/* カテゴリー表示をスタイリッシュに装飾 */}
                {post.category && (
                  <span className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                    {post.category.name}
                  </span>
                )}
                <p className="text-sm text-muted-foreground">
                  {new Date(post.createdAt).toLocaleDateString("ja-JP")}
                </p>
                <h3 className="mt-1 text-lg font-semibold group-hover:underline">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog };