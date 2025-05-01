import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function EducationSection() {
  return (
    <Card className="bg-white/[0.03] backdrop-blur-lg border border-white/10 shadow-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium text-white/90">
          Educación
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-4">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10">
          <div className="flex justify-between mb-1">
            <span className="text-white/60 text-sm">2023-2024</span>
          </div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">
            Full Stack Web Developer
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="bg-white/5 text-white/70 border-white/10 hover:border-white/20"
            >
              #HTML
            </Badge>
            <Badge
              variant="outline"
              className="bg-white/5 text-white/70 border-white/10 hover:border-white/20"
            >
              #JavaScript
            </Badge>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/10">
          <div className="flex justify-between mb-1">
            <span className="text-white/60 text-sm">2022</span>
          </div>
          <h3 className="text-lg font-semibold text-white/90 mb-2">
            JavaScript
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="bg-white/5 text-white/70 border-white/10 hover:border-white/20"
            >
              #JavaScript
            </Badge>
            <Badge
              variant="outline"
              className="bg-white/5 text-white/70 border-white/10 hover:border-white/20"
            >
              #WebDev
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
