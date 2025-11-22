import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <Card className="w-full h-[600px] bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden border-2">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(var(--primary))"
          />
          
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Demo Interactivo
                </div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Imaginación en 3D
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Experimenta cómo los niños crean mundos completos usando solo su voz y gestos. 
                  Computer vision y AI transformando imaginación en realidad instantánea.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="px-4 py-2 rounded-lg bg-card border border-border/50 text-sm font-medium">
                    🎤 Control por voz
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-card border border-border/50 text-sm font-medium">
                    👋 Gestos naturales
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-card border border-border/50 text-sm font-medium">
                    ⚡ Resultado instantáneo
                  </div>
                </div>
              </div>
            </div>

            {/* Right content - Spline Scene */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-0">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
