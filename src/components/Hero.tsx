
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-16 md:py-24 gradient-bg rounded-3xl mb-16">
      <div className="container px-6 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          Hi, I'm <span className="text-purple-500">Aditya</span> 👋
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 md:mb-10">
          A passionate developer specializing in Frontend and Machine Learning. 
          I build engaging user experiences and intelligent systems that solve real problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="gap-2 text-base"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Projects <ArrowRight className="h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 text-base"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
