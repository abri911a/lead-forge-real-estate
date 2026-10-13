import { ArrowUpRight } from "lucide-react";
import { publications } from "@/data/publications";

// Trust strip: the outlets that published Waleed's articles, high on the busiest pages.
// "page" = under a byline (rules above and below). "inline" = quieter, e.g. under a WhatsApp box.
interface PublishedInStripProps {
  variant?: "page" | "inline";
  className?: string;
}

const PublishedInStrip = ({ variant = "page", className = "" }: PublishedInStripProps) => (
  <div
    className={`${
      variant === "page" ? "border-y border-gold/20 py-3" : "py-1"
    } flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 ${className}`}
  >
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap">
      My articles in
    </span>
    {/* Phones: names wrap with plain gaps. sm+: one line with gold dots between. */}
    <ul className="flex flex-wrap items-center gap-x-2 sm:gap-x-0 -mx-2">
      {publications.map((pub, i) => (
        <li key={pub.url} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="hidden sm:block h-1 w-1 rounded-full bg-gold/60" />
          )}
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${pub.title} (${pub.outlet}, ${pub.date})`}
            className="group inline-flex items-baseline gap-1 px-2 py-2 min-h-[40px] rounded-md text-foreground hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 transition-colors"
          >
            <span className="font-serif text-lg font-semibold tracking-tight">{pub.outlet}</span>
            {pub.note && (
              <span className="text-xs text-muted-foreground group-hover:text-gold/80">(republished)</span>
            )}
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 self-center text-muted-foreground group-hover:text-gold"
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default PublishedInStrip;
