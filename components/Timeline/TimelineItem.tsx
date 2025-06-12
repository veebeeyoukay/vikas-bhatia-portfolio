import { cn } from "@/lib/utils";
import { TimelineItemProps } from "./types";

interface TimelineItemComponentProps extends TimelineItemProps {
  isEven: boolean;
  delay: number;
}

export function TimelineItem({ 
  date, 
  title, 
  icon, 
  isEven, 
  delay 
}: TimelineItemComponentProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-8 opacity-0 translate-y-4 scale-[0.97] transition-all duration-700 ease-ease max-w-3xl mx-auto [&:not(:last-child)]:mb-10 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 [&.animate-in]:scale-100",
        isEven ? "flex-row" : "flex-row-reverse",
        "animate-in"
      )}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      <div 
        className={cn(
          "group relative flex w-full overflow-hidden bg-violet-700 light:bg-violet-200 trail [--trail-size:300px] md:!w-1/2",
          isEven 
            ? "rounded-bl-[21px] rounded-tr-[21px] reverse -ml-[0.5px]" 
            : "rounded-br-[21px] rounded-tl-[21px] -mr-[0.5px]"
        )}
      >
        <div 
          className={cn(
            "flex flex-col gap-4 h-full w-full bg-background light:bg-foreground p-6 z-10 -mt-px mb-px border border-background light:border-foreground",
            isEven ? "rounded-bl-card ml-px" : "rounded-br-card mr-px"
          )}
        >
          <div className="icon-circle mb-2">
            <img 
              alt="" 
              loading="lazy" 
              width={36} 
              height={36} 
              decoding="async" 
              src={icon} 
              style={{ color: "transparent" }} 
            />
          </div>
          <h3 className="text-lg">{date}</h3>
          <div className="text-foreground-secondary light:text-violet-900 text-balance">
            <p className="text-foreground-secondary light:text-violet-900 font-paragraph py-2.5 w-full">
              {title}
            </p>
          </div>
        </div>
        <div 
          className={cn(
            "absolute bottom-0 h-px w-full z-10 opacity-0 transition-opacity duration-300",
            isEven 
              ? "right-0 bg-gradient-to-l from-violet-700 light:from-violet-200 to-transparent" 
              : "left-0 bg-gradient-to-r from-violet-700 light:from-violet-200 to-transparent"
          )}
          style={{ 
            animationDelay: `${delay}ms`,
            animationFillMode: "forwards"
          }}
        />
      </div>
    </div>
  );
} 