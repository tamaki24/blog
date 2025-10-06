import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface OptimizedImage {
    src: string;
    attributes: {
      width: number;
      height: number;
    };
}

interface Hero1Props {
  heading?: string;
  description?: string;
  buttons?: {
    text: string;
    url: string;
  };
  image?: OptimizedImage;
}

const Hero = ({
  heading = "PixelFringe",
  description = "わたくしのインターネットの居場所",
  buttons = {
    text: "View on Kipfel",
    url: "/kipfel",
  },
  image,
}: Hero1Props) => {
  return (
    <section className="pt-20 pb-10">
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
          {image && (
            <img
              src={image.src}
              {...image.attributes}
              alt="Hero Image"
              className="max-h-96 w-full rounded-md object-cover"
              loading="eager"
              decoding="async"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero };