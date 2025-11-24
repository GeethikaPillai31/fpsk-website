import { cn } from "@/lib/utils";

/**
 * Testimonial Card - Based on KokonutUI Tweet Card but without X branding
 */
interface TestimonialCardProps {
  authorName: string;
  authorImage?: string;
  content: string | string[];
  date?: string;
  className?: string;
}

export function TestimonialCard({
  authorName,
  authorImage,
  content,
  date,
  className,
}: TestimonialCardProps) {
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <div
      className={cn(
        "w-full min-w-[400px] md:min-w-[500px] max-w-xl p-1.5 rounded-2xl relative isolate overflow-hidden",
        "bg-white/5 dark:bg-black/90",
        "bg-linear-to-br from-black/5 to-black/[0.02] dark:from-white/5 dark:to-white/[0.02]",
        "backdrop-blur-xl backdrop-saturate-[180%]",
        "border border-black/10 dark:border-white/10",
        "shadow-[0_8px_16px_rgb(0_0_0_/_0.15)] dark:shadow-[0_8px_16px_rgb(0_0_0_/_0.25)]",
        "will-change-transform translate-z-0",
        className
      )}
    >
      <div
        className={cn(
          "w-full p-5 rounded-xl relative",
          "bg-linear-to-br from-black/[0.05] to-transparent dark:from-white/[0.08] dark:to-transparent",
          "backdrop-blur-md backdrop-saturate-150",
          "border border-black/[0.05] dark:border-white/[0.08]",
          "text-black/90 dark:text-white",
          "shadow-xs",
          "will-change-transform translate-z-0",
          "before:absolute before:inset-0 before:bg-linear-to-br before:from-black/[0.02] before:to-black/[0.01] dark:before:from-white/[0.03] dark:before:to-white/[0.01] before:opacity-0 before:transition-opacity before:pointer-events-none",
          "hover:before:opacity-100"
        )}
      >
        <div className="flex gap-3">
          {authorImage && (
            <div className="shrink-0">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src={authorImage}
                  alt={authorName}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="font-semibold text-black dark:text-white/90">
                  {authorName}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          {contentArray.map((item, index) => (
            <p
              key={index}
              className="text-black dark:text-white/90 text-base leading-relaxed"
            >
              {item}
            </p>
          ))}
          {date && (
            <span className="text-black dark:text-white/50 text-sm mt-2 block">
              {date}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
