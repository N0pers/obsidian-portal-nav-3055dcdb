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
        <h1 className="mb-4 text-3xl md:text-4xl font-bold font-rajdhani bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
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
          onClick={() => handleNavigation("https://emby.nopers.xyz/")}
          className="group relative overflow-hidden flex-col hover:shadow-[0_0_50px_hsl(270_80%_60%/0.6)]"
        >
          <Rocket className="transition-transform duration-300 group-hover:translate-y-[-8px] group-hover:scale-125 mb-4" />
          <span className="relative z-10 text-xl font-bold font-rajdhani">Emby</span>
          <span className="relative z-10 text-xs mt-1 font-rajdhani text-muted-foreground px-4 text-center">
            Your favorite Movies and TV Shows!
          </span>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>

        <Button
          variant="nav"
          size="xl"
          onClick={() => handleNavigation("https://seer.nopers.xyz/")}
          className="group relative overflow-hidden flex-col hover:shadow-[0_0_50px_hsl(180_90%_50%/0.6)]"
        >
          <Zap className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125 mb-4" />
          <span className="relative z-10 text-xl font-bold font-rajdhani">Jellyseer</span>
          <span className="relative z-10 text-xs mt-1 font-rajdhani text-muted-foreground px-4 text-center">
            Missing a title? Request it here!
          </span>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>

        <Button
          variant="nav"
          size="xl"
          onClick={() => handleNavigation("https://help.nopers.xyz/")}
          className="group relative overflow-hidden flex-col hover:shadow-[0_0_50px_hsl(330_80%_60%/0.6)]"
        >
          <Star className="transition-transform duration-300 group-hover:rotate-180 group-hover:scale-125 mb-4" />
          <span className="relative z-10 text-xl font-bold font-rajdhani">Tip Jar</span>
          <span className="relative z-10 text-xs mt-1 font-rajdhani text-muted-foreground px-4 text-center">
            Pinch in to help with the bills ❤️
          </span>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>

      {/* Footer Spacer */}
      <div className="h-20" />
    </div>
  );
};

export default Index;
