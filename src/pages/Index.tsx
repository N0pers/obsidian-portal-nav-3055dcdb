import { Button } from "@/components/ui/button";
import { Rocket, Zap, Star } from "lucide-react";

const Index = () => {
  const handleNavigation = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-4 py-8">
      {/* Header Section */}
      <div className="w-full max-w-4xl text-center pt-12 md:pt-20">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float">
          Welcome to the Future
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Navigate to your destination with a single click
        </p>
      </div>

      {/* Center Buttons Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-8">
        <Button
          variant="nav"
          size="xl"
          onClick={() => handleNavigation("https://www.google.com")}
          className="group relative overflow-hidden flex-col hover:shadow-[0_0_50px_hsl(270_80%_60%/0.6)]"
        >
          <Rocket className="transition-transform duration-300 group-hover:translate-y-[-8px] group-hover:scale-125" />
          <span className="relative z-10 text-xs mt-2">Launch</span>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>

        <Button
          variant="nav"
          size="xl"
          onClick={() => handleNavigation("https://www.github.com")}
          className="group relative overflow-hidden flex-col hover:shadow-[0_0_50px_hsl(180_90%_50%/0.6)]"
        >
          <Zap className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />
          <span className="relative z-10 text-xs mt-2">Explore</span>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>

        <Button
          variant="nav"
          size="xl"
          onClick={() => handleNavigation("https://www.youtube.com")}
          className="group relative overflow-hidden flex-col hover:shadow-[0_0_50px_hsl(330_80%_60%/0.6)]"
        >
          <Star className="transition-transform duration-300 group-hover:rotate-180 group-hover:scale-125" />
          <span className="relative z-10 text-xs mt-2">Discover</span>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>

      {/* Footer Spacer */}
      <div className="h-20" />
    </div>
  );
};

export default Index;
