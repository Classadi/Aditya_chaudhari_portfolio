
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  techStack: string[];
  features: string[];
  images: string[];
}

const ProjectCard = ({ title, description, githubLink, techStack, features, images }: ProjectCardProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="project-card overflow-hidden border border-purple-100 transition-all duration-300 mb-8 lg:mb-12 hover:shadow-lg">
      <CardHeader className="p-6">
        <CardTitle className="text-xl lg:text-2xl">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <div className="relative overflow-hidden">
        <div className="flex gap-2 overflow-hidden p-4">
          <div className="w-full h-[200px] md:h-[240px] relative rounded-lg overflow-hidden">
            <img 
              src={images[activeImageIndex]} 
              alt={`${title} screenshot ${activeImageIndex + 1}`} 
              className="w-full h-full object-cover project-image transition-all duration-500"
            />
            
            {images.length > 1 && (
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeImageIndex ? "bg-purple-600 w-4" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1 shadow-md opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1 shadow-md opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-6 pt-4">
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">Key Features:</p>
          <ul className="list-disc pl-5 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground">{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" className="w-full gap-2 hover:bg-purple-50">
            <Github className="h-4 w-4" /> View on GitHub
          </Button>
        </a>
        <Button variant="outline" className="hover:bg-purple-50" onClick={() => window.open(images[0], '_blank')}>
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
