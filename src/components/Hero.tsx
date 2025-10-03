import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero1Props {
  badge?: string;
  heading?: string;
  description?: string;
  buttons?: {
    text: string;
    url: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}

const Hero = ({
  heading = "PixcelLab",
  description = "わたくしのインターネットの居場所",
  buttons = {
    text: "View on GitHub",
    url: "https://www.shadcnblocks.com",
  },
  image = {
    src: "kip_sad.png",
    alt: "girl",
  },
}: Hero1Props) => {
  return (
    <section className="pt-28 pb-10">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="lg:ml-20 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.url}>
                    {buttons.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };

