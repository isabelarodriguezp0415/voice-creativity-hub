import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full h-full">
        <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden rounded-none border-0">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          
          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 px-12 relative z-10 flex flex-col justify-center">
              <div className="max-w-[700px] mx-auto">
                <h1 className="font-inter font-extrabold text-7xl md:text-5xl text-white leading-[1.1] tracking-[-0.02em] mb-12">
                  Tu hijo no necesita más contenido.<br />
                  Necesita una forma de empezar a imaginar otra vez.
                </h1>
                
                <Button className="w-96 h-16 bg-white text-black font-inter font-semibold text-xl rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                  Descubre Imagine Lab
                </Button>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative">
              <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
            </div>
          </div>
        </Card>
      </div>
    </div>;
};
export default Index;