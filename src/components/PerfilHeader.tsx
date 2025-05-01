import { Card, CardContent } from "./ui/card";

export default function PerfilHeader() {
  return (
    <Card className="bg-white/[0.03] backdrop-blur-lg border border-white/10 shadow-xl overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium mb-4">
              Hola 👋
            </div>
            <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Gonzalo Ramirez
            </h1>
            <h2 className="text-xl text-white/80 mb-6 font-light">
              Desarrollador FullStack
            </h2>
            <p className="text-white/70 max-w-2xl leading-relaxed">
              Desarrollador web apasionado con experiencia en la creación de
              aplicaciones web modernas y responsivas. Especializado en React,
              Next.js y diseño UI/UX. Enfocado en crear experiencias de usuario
              excepcionales con código limpio y mantenible.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
