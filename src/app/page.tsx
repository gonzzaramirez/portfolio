import PerfilHeader from "@/components/PerfilHeader";
import ContactSection from "@/components/ContactSection";
import ProyectSection from "@/components/ProyectSection";
import EducationSection from "@/components/EducationSection";
import ToolsSection from "@/components/ToolsSection";
import BackgroundBlobs from "@/components/BackgroundBlobst";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0c14] via-[#0f1524] to-[#141a2e] text-white relative">
      <BackgroundBlobs />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2 space-y-6">
            <PerfilHeader />
            <ProyectSection />
          </div>
          <div className="md:col-span-1 space-y-6">
            <ContactSection />
            <EducationSection />
          </div>
          <div className="col-span-1 md:col-span-3">
            <ToolsSection />
          </div>
        </div>
      </div>
    </main>
  );
}
