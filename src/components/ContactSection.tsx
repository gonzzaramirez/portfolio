import { Github, Linkedin, Mail } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ContactSection() {
  return (
    <Card className="bg-white/[0.03] backdrop-blur-lg border border-white/10 shadow-xl ">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-white/90">
          Contacto
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <a
          href="https://github.com/tunombre"
          className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
            <Github className="w-5 h-5 text-white/80" />
          </div>
          <span className="text-white/80 group-hover:text-white transition-colors duration-300">
            GitHub
          </span>
          <ChevronRight className="w-4 h-4 ml-auto text-white/40 group-hover:text-white/80 transition-colors duration-300" />
        </a>
        <a
          href="https://linkedin.com/in/tunombre"
          className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
            <Linkedin className="w-5 h-5 text-white/80" />
          </div>
          <span className="text-white/80 group-hover:text-white transition-colors duration-300">
            LinkedIn
          </span>
          <ChevronRight className="w-4 h-4 ml-auto text-white/40 group-hover:text-white/80 transition-colors duration-300" />
        </a>
        <a
          href="mailto:tu@email.com"
          className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
            <Mail className="w-5 h-5 text-white/80" />
          </div>
          <span className="text-white/80 group-hover:text-white transition-colors duration-300">
            Email
          </span>
          <ChevronRight className="w-4 h-4 ml-auto text-white/40 group-hover:text-white/80 transition-colors duration-300" />
        </a>
      </CardContent>
    </Card>
  );
}
