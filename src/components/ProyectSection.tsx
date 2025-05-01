import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Lorem",
    description: "Lorem ipsum, dolor sit amet...",
    gradient:
      "bg-gradient-to-br from-purple-900/20 to-blue-900/20 hover:shadow-purple-500/5",
    badges: [
      {
        label: "JavaScript",
        className:
          "bg-gradient-to-r from-yellow-500/80 to-amber-500/80 text-white",
      },
    ],
  },
  {
    title: "React Project",
    description:
      "Proyecto hecho con React y JavaScript para frontend dinámico.",
    gradient:
      "bg-gradient-to-br from-blue-900/20 to-cyan-900/20 hover:shadow-blue-500/5",
    badges: [
      {
        label: "React",
        className: "bg-gradient-to-r from-blue-500/80 to-sky-500/80 text-white",
      },
      {
        label: "JavaScript",
        className:
          "bg-gradient-to-r from-yellow-500/80 to-amber-500/80 text-white",
      },
    ],
  },
  {
    title: "MERN App",
    description: "Fullstack app usando Mongo, Express, React y Node.",
    gradient:
      "bg-gradient-to-br from-emerald-900/20 to-green-900/20 hover:shadow-emerald-500/5",
    badges: [
      {
        label: "React",
        className: "bg-gradient-to-r from-blue-500/80 to-sky-500/80 text-white",
      },
      {
        label: "Node.js",
        className:
          "bg-gradient-to-r from-emerald-500/80 to-green-500/80 text-white",
      },
      {
        label: "MongoDB",
        className:
          "bg-gradient-to-r from-purple-500/80 to-violet-500/80 text-white",
      },
    ],
  },
];

export default function ProyectSection() {
  return (
    <Card className="bg-white/[0.03] backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-xl font-medium text-white/90">
            Proyectos Destacados
          </CardTitle>
          <Button
            variant="ghost"
            className="text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 self-start sm:self-center"
          >
            Ver todos los proyectos <ExternalLink className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
