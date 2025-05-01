import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ProjectCard({
  title,
  description,
  badges,
  gradient,
}: {
  title: string;
  description: string;
  badges: { label: string; className: string }[];
  gradient: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${gradient} border border-white/5 transition-all duration-500 hover:border-white/10 hover:shadow-lg`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, i) => (
            <Badge key={i} className={badge.className}>
              {badge.label}
            </Badge>
          ))}
        </div>
        <p className="text-white/60 text-sm mb-6 group-hover:text-white/70 transition-colors duration-300">
          {description}
        </p>
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="text-white/70 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            Ver proyecto <ExternalLink className="ml-1 w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
