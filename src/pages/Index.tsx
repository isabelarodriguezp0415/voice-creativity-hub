import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { Sparkles, Code2, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section - Problem */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            El Problema
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Como padres, no queremos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              prohibir las pantallas
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Eso es imposible en 2025. Lo que necesitamos es transformar cómo los niños usan la
            tecnología. En vez de apps que los vuelven{" "}
            <span className="text-foreground font-semibold">consumidores pasivos</span>, necesitamos
            software que los convierta en{" "}
            <span className="text-primary font-semibold">creadores activos</span>.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <Code2 className="w-4 h-4" />
              La Solución
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Por eso creamos{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Imagination Lab
              </span>
            </h2>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg">
                <Zap className="w-5 h-5" />
                Imagine Coding
              </div>
              <p className="text-xl md:text-2xl leading-relaxed">
                Una forma de programar donde los niños crean escenarios completos usando solo{" "}
                <span className="font-semibold text-primary">su voz y su cuerpo</span>.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-muted-foreground line-through">⌨️</div>
                  <p className="text-sm text-muted-foreground">Nada de teclados</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-muted-foreground line-through">🖱️</div>
                  <p className="text-sm text-muted-foreground">Nada de clicks</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">✨</div>
                  <p className="text-sm font-semibold">Solo imaginación</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground pt-4">
                Computer vision y voice AI traduciendo imaginación en acción instantánea.{" "}
                <span className="text-accent font-semibold">
                  Es como darles superpoderes creativos.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section with Spline */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            Déjanos mostrarte cómo funciona
          </h3>
          
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
                  <h4 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Imaginación en 3D
                  </h4>
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
      </section>

      {/* Human Enhancement Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-accent/5 rounded-2xl p-8 md:p-12 border-2 border-accent/20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold">
                Esto es{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  human enhancement
                </span>
              </h3>
              <p className="text-xl leading-relaxed">
                Porque estamos devolviéndole a los niños una capacidad que están perdiendo:{" "}
                <span className="font-semibold text-foreground">
                  traducir imaginación a realidad.
                </span>
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-3 p-6 rounded-xl bg-card border border-border/50">
                  <p className="text-lg font-semibold">Un niño de 10 años puede:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Programar con su cuerpo sin saber código
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Crear mundos sin saber diseño 3D
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center p-6 rounded-xl bg-gradient-primary text-primary-foreground">
                  <p className="text-2xl font-bold text-center">
                    Solo necesita imaginar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground">
              Construimos esto en{" "}
              <span className="text-foreground font-bold text-3xl">36 horas</span> para probar que
              es posible.
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Estamos devolviendo la creatividad a una generación que está perdiendo{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                la capacidad de imaginar
              </span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="text-lg px-8 py-6 shadow-glow">
              Conoce Más
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Contacto
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Imagination Lab
            </h3>
            <p className="text-sm text-muted-foreground">
              Transformando niños de espectadores a creadores
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
