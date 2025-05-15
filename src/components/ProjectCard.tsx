
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  techStack: string[];
  features: string[];
  images: string[];
}

const ProjectCard = ({ title, description, githubLink, techStack, features, images }: ProjectCardProps) => {
  return (
    <Card className="project-card overflow-hidden border border-purple-100 transition-all duration-300 mb-8 lg:mb-12">
      <CardHeader className="p-6">
        <CardTitle className="text-xl lg:text-2xl">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <div className="relative overflow-hidden">
        <div className="flex gap-2 overflow-x-auto p-4 snap-x">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="min-w-[300px] max-w-full h-[200px] md:h-[240px] relative rounded-lg overflow-hidden snap-center"
            >
              <img 
                src={img} 
                alt={`${title} screenshot ${index + 1}`} 
                className="w-full h-full object-cover project-image"
              />
            </div>
          ))}
        </div>
      </div>
      <CardContent className="p-6 pt-4">
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
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
      <CardFooter className="p-6 pt-0">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full gap-2">
            <Github className="h-4 w-4" /> View on GitHub
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
