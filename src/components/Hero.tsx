
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Frontend & ML/AI Developer";
  
  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 100);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setTypedText("");
        }, 3000);
        
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, isTyping]);

  return (
    <div className="py-16 md:py-24 gradient-bg rounded-3xl mb-16">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
              Hi, I'm <span className="text-purple-500">Aditya</span> 👋
            </h1>
            <div className="h-8 mb-4">
              <p className="text-xl md:text-2xl font-medium">
                <span>{typedText}</span>
                <span className="inline-block w-1 h-6 ml-1 bg-purple-500 animate-pulse"></span>
              </p>
            </div>
            <p className="text-lg max-w-3xl mb-8 md:mb-10">
              I build engaging user experiences and intelligent systems that solve real problems. 
              Currently seeking AI/ML or Data Analytics internship opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gap-2 text-base animate-fade-in"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 text-base animate-fade-in"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Skills
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="gap-2 text-base animate-fade-in"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="relative w-52 h-52 rounded-full border-4 border-purple-300 overflow-hidden animate-scale-in">
            <img
              src="/lovable-uploads/6ed48d5b-0d38-4ba5-a06c-4d88d146528c.png"
              alt="Aditya Chaudhari"
              className="h-full w-full object-cover hover:scale-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-white font-medium">Aditya Chaudhari</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
