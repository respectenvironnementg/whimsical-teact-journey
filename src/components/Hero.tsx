import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-16">
      <div className="container px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Build something amazing
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Create beautiful, responsive web applications with modern tools and frameworks.
          Start your journey today and bring your ideas to life.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;