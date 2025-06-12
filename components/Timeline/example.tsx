import { Timeline } from "./Timeline";
import "./Timeline.css";

const timelineData = [
  {
    date: "April 2021",
    title: "Zenity launches security and governance platform for low-code/no-code development",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/b742023b4bd5845e010b945ff277d53ea1d2c98b-25x24.svg"
  },
  {
    date: "November 2021",
    title: "Zenity exits stealth with $5M seed round led by Vertex Ventures and UpWest",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/4366a10f40d3d62bff75c37674ddb0a273c2370b-24x24.svg"
  },
  // Add more timeline items as needed
];

export function TimelineExample() {
  return (
    <div className="container mx-auto py-12">
      <Timeline items={timelineData} />
    </div>
  );
} 