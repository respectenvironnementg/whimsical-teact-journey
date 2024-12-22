import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Shield, Zap } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Built with performance in mind for the best user experience.",
    icon: Zap
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security built into every layer.",
    icon: Shield
  },
  {
    title: "Scale with Ease",
    description: "Grow your application without worrying about infrastructure.",
    icon: Rocket
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Amazing Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;