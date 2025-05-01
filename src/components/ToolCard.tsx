import { Badge } from "./ui/badge";

interface ToolCardProps {
  title: string;
  gradient: string;
  badgeLabel: string;
  badgeClassName: string;
}

function ToolCard({
  title,
  gradient,
  badgeLabel,
  badgeClassName,
}: ToolCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${gradient} border border-white/5 transition-all duration-500 hover:border-white/10 hover:shadow-lg`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6 flex flex-col items-center gap-3">
        <span className="text-white/80 group-hover:text-white transition-colors duration-300">
          {title}
        </span>
        <Badge className={badgeClassName}>{badgeLabel}</Badge>
      </div>
    </div>
  );
}

export default ToolCard;
