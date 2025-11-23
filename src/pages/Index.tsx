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
            <div className="flex-1 px-8 relative z-10 flex flex-col justify-center text-gray-50">
              <p className="font-inter font-bold text-[64px] md:text-[40px] text-white leading-[1.15] tracking-[-0.03em] max-w-[680px] mx-auto mb-10">
                Tu hijo no necesita más contenido.<br />
                Necesita una forma de empezar a imaginar otra vez.
              </p>
              
              <Button className="bg-white text-black hover:bg-white hover:brightness-110 font-inter font-semibold tracking-[0.02em] px-8 py-4 text-lg rounded-lg transition-all hover:scale-[1.02] max-w-fit mx-auto">
                Descubre Imagine Lab
              </Button>
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