
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  createdAt: string;
  eyecatch: {url:string};
  category?: { id: string; name: string; }; // categoryの型を修正
}

interface Blog8Props {
  heading?: string;
  description?: string;
  posts?: Post[];
}

const Articles = ({
  heading,
  description,
  posts = [
    {
      id: "post-1",
      title:
        "Building Modern UIs: A Deep Dive into Shadcn and React Components",
      createdAt: "15 Feb 2024",
      eyecatch: {url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"},
      category: { id: "web-design", name: "Web Design" }, // デフォルト値も修正
    },
    {
      id: "post-2",
      title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
      createdAt: "22 Feb 2024",
      eyecatch: {url: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"},
      category: { id: "css", name: "CSS" }, // デフォルト値も修正
    },
  ],
}: Blog8Props) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                      {/* カテゴリー表示をスタイリッシュに装飾 */}
                      {post.category ? (
                        <span className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                          {post.category.name}
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <a
                      href={"/blog/" + post.id}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">
                      {post.createdAt}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <a
                      href={"/blog/" + post.id}
                      target="_blank"
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>Read more</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={"/blog/" + post.id} target="_blank" className="block">
                    <div className="aspect-16/9 overflow-clip rounded-lg border border-border">
                      <img
                        src={post.eyecatch.url}
                        alt={post.title}
                        className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Articles };