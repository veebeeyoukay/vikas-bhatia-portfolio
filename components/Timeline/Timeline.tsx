import { cn } from "@/lib/utils";
import { TimelineItem } from "./TimelineItem";
import { TimelineItemProps } from "./types";

interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Vertical line */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-px bg-violet-700 light:bg-violet-200"
        style={{ height: "100%", transition: "height 0.75s ease-out" }}
      >
        <div 
          className="max-md:hidden absolute top-0 left-0 w-full"
          style={{
            height: "10.5463%",
            background: "linear-gradient(to bottom, transparent, hsl(var(--secondary)) 50%, hsl(var(--primary)), hsl(var(--secondary)) 90%, transparent)"
          }}
        />
      </div>

      {/* Timeline items */}
      <div className="flex flex-col">
        {items.map((item, index) => (
          <TimelineItem
            key={item.date}
            {...item}
            isEven={index % 2 === 0}
            delay={index * 1200}
          />
        ))}
      </div>
    </div>
  );
} 