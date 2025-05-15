
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Card className="project-card overflow-hidden border border-purple-100 transition-all duration-300 mb-8 lg:mb-12 hover:shadow-lg">
      <CardHeader className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50">
        <CardTitle className="text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <div className="relative overflow-hidden">
        <div className="flex gap-2 overflow-hidden p-4">
          <div className="w-full h-[250px] md:h-[300px] relative rounded-lg overflow-hidden shadow-md">
            <img 
              src={images[activeImageIndex]} 
              alt={`${title} screenshot ${activeImageIndex + 1}`} 
              className="w-full h-full object-contain bg-gray-50 project-image transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(activeImageIndex)}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
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
      <CardFooter className="p-6 pt-0 flex gap-2 border-t border-gray-100 mt-2">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" className="w-full gap-2 hover:bg-purple-50">
            <Github className="h-4 w-4" /> View on GitHub
          </Button>
        </a>
        <Button 
          variant="outline" 
          className="hover:bg-purple-50" 
          onClick={() => openLightbox(activeImageIndex)}
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </CardFooter>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-3xl p-0 bg-black/95 border-none">
          <div className="relative h-[80vh]">
            <img 
              src={images[lightboxIndex]} 
              alt={`${title} screenshot enlarged`}
              className="w-full h-full object-contain"
            />
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev + 1) % images.length);
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProjectCard;
