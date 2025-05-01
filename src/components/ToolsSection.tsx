import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ToolsSection() {
  return (
    <Card className="bg-white/[0.03] backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-medium text-white/90">
          Herramientas
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="group bg-gradient-to-br from-[#1a1f35]/50 to-[#131729]/50 p-5 rounded-2xl flex flex-col items-center gap-3 border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-blue-500/5 hover:translate-y-[-2px]">
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              React
            </span>
            <Badge className="bg-gradient-to-r from-blue-500/80 to-cyan-500/80 border-none text-white shadow-sm">
              Frontend
            </Badge>
          </div>

          <div className="group bg-gradient-to-br from-[#1a1f35]/50 to-[#131729]/50 p-5 rounded-2xl flex flex-col items-center gap-3 border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-yellow-500/5 hover:translate-y-[-2px]">
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              JavaScript
            </span>
            <Badge className="bg-gradient-to-r from-yellow-500/80 to-amber-500/80 border-none text-white shadow-sm">
              Frontend
            </Badge>
          </div>

          <div className="group bg-gradient-to-br from-[#1a1f35]/50 to-[#131729]/50 p-5 rounded-2xl flex flex-col items-center gap-3 border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-blue-500/5 hover:translate-y-[-2px]">
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              TypeScript
            </span>
            <Badge className="bg-gradient-to-r from-blue-500/80 to-sky-500/80 border-none text-white shadow-sm">
              Frontend
            </Badge>
          </div>

          <div className="group bg-gradient-to-br from-[#1a1f35]/50 to-[#131729]/50 p-5 rounded-2xl flex flex-col items-center gap-3 border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-green-500/5 hover:translate-y-[-2px]">
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              Node.js
            </span>
            <Badge className="bg-gradient-to-r from-green-500/80 to-emerald-500/80 border-none text-white shadow-sm">
              Backend
            </Badge>
          </div>

          <div className="group bg-gradient-to-br from-[#1a1f35]/50 to-[#131729]/50 p-5 rounded-2xl flex flex-col items-center gap-3 border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-purple-500/5 hover:translate-y-[-2px]">
            <span className="text-white/80 group-hover:text-white transition-colors duration-300">
              MongoDB
            </span>
            <Badge className="bg-gradient-to-r from-purple-500/80 to-violet-500/80 border-none text-white shadow-sm">
              Database
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
