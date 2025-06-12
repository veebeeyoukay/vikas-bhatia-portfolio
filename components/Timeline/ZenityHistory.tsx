import { Timeline } from "./Timeline";
import "./Timeline.css";

const zenityHistoryData = [
  {
    date: "April 2021",
    title: "Zenity launches security and governance platform for low-code/no-code development. Founded in Tel Aviv-Yafo, Israel, by Ben Kliger (CEO) and Michael Bargury (CTO), both former Microsoft leaders, Zenity began as a security solution for low-code/no-code environments, initially focusing on platforms like Power BI.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/b742023b4bd5845e010b945ff277d53ea1d2c98b-25x24.svg"
  },
  {
    date: "November 2021",
    title: "Zenity exits stealth with $5M seed round led by Vertex Ventures and UpWest, accelerating its mission to secure low-code/no-code development for enterprises.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/4366a10f40d3d62bff75c37674ddb0a273c2370b-24x24.svg"
  },
  {
    date: "January 2022",
    title: "Zenity launches General Availability of its security and governance platform for low-code/no-code development, expanding its reach to more enterprises.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/bd0cf09d788bd88b574c53a2d8a1cf161d4bdac3-25x24.svg"
  },
  {
    date: "June 2022",
    title: "Zenity wins Best Product for low-code/no-code security at the Global InfoSec Awards, recognizing its innovation in the field.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/4af5753bd9ec0d7dea1fdb7d46d27c9ebc3663b8-24x24.svg"
  },
  {
    date: "September 2022",
    title: "Zenity discloses #ZAPESCAPE, demonstrating its commitment to research and industry leadership in low-code/no-code and agentic AI security.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/7c3819fd021217bd465b5b742a9e6b13de836fb5-25x24.svg"
  },
  {
    date: "August 2023",
    title: "Zenity CTO Michael Bargury delivers 'All You Need is Guest' presentation at BlackHat, highlighting Zenity's expertise in AI security research.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/f7b2def3563486180b843812c1b35bef43c84c0a-24x24.svg"
  },
  {
    date: "September 2023",
    title: "Zenity raises Series A round of $16.5M led by Intel Capital, supporting further innovation in AI Agent security and governance.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/0f78c3d758c1aaf6f85458ceb7adca09c7d035f7-25x24.svg"
  },
  {
    date: "November 2023",
    title: "Zenity announces full support for securing enterprise AI Co-Pilots, becoming the first company to do so and reinforcing its leadership in agentic AI security.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/087045d465f1da090d80a0ef12963f4f3d410763-24x24.svg"
  },
  {
    date: "May 2024",
    title: "Zenity introduces support to secure and govern Microsoft Copilot for M365, expanding its platform's reach and impact.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/8bbf59eaff1d17b4d43ec9fe72c08d50d45ab29e-37x36.svg"
  },
  {
    date: "July 2024",
    title: "Zenity takes in strategic investment from Microsoft's investment arm, M12, further validating its market position and technology approach.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/087045d465f1da090d80a0ef12963f4f3d410763-24x24.svg"
  },
  {
    date: "August 2024",
    title: "Zenity Labs discloses 'remote copilot execution' for Copilot for M365, continuing its tradition of industry-leading research.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/7c3819fd021217bd465b5b742a9e6b13de836fb5-25x24.svg"
  },
  {
    date: "October 2024",
    title: "Zenity raises $38M Series B round of fundraising, co-led by Third Point Ventures and DTCP, bringing total funding to over $55M and fueling global expansion.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/0f78c3d758c1aaf6f85458ceb7adca09c7d035f7-25x24.svg"
  },
  {
    date: "February 2025",
    title: "Zenity is named a Representative Vendor in the 2025 Gartner Market Guide for AI TRiSM, recognized for its leadership in AI security and governance.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/4af5753bd9ec0d7dea1fdb7d46d27c9ebc3663b8-24x24.svg"
  },
  {
    date: "March 2025",
    title: "Zenity Labs hosts the first ever AI Agent Security Summit, further establishing its role as a thought leader in the industry.",
    icon: "https://cdn.sanity.io/images/bqvkdjz2/production/bd0cf09d788bd88b574c53a2d8a1cf161d4bdac3-25x24.svg"
  }
];

export function ZenityHistory() {
  return (
    <Timeline items={zenityHistoryData} className="bg-transparent" />
  );
} 