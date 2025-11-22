import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          
          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center text-gray-50">
              <p className="font-inter font-bold text-[90px] text-white leading-[1.3] tracking-[-0.03em] max-w-[680px] mx-auto mb-6 md:text-2xl">
                Tu hijo no necesita más contenido.<br />
                Necesita una forma de empezar a imaginar otra vez.
              </p>
              
              <Button className="bg-white text-black hover:bg-neutral-200 font-inter font-medium text-[15px] tracking-[0.02em] px-9 py-6 rounded-[6px]">
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