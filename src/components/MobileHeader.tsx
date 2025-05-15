
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home,
  LayoutGrid,
  Code,
  Mail,
  Download,
  Github,
  Linkedin
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 lg:hidden border-b">
      <div className="container h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-purple-300">
            <img
              src="/lovable-uploads/6ed48d5b-0d38-4ba5-a06c-4d88d146528c.png"
              alt="Aditya Chaudhari"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">Aditya Chaudhari</h1>
            <p className="text-xs text-purple-500">Frontend & AI/ML Developer</p>
          </div>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[80vw]">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8 pt-8">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-purple-300">
                  <img
                    src="/lovable-uploads/6ed48d5b-0d38-4ba5-a06c-4d88d146528c.png"
                    alt="Aditya Chaudhari"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold">Aditya Chaudhari</h1>
                  <p className="text-sm text-purple-500">Frontend & AI/ML Developer</p>
                </div>
              </div>
              
              <nav className="flex-1">
                <ul className="space-y-6">
                  <li>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-lg gap-3"
                      onClick={() => navigateTo('root')}
                    >
                      <Home className="h-5 w-5" /> Home
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-lg gap-3"
                      onClick={() => navigateTo('projects')}
                    >
                      <LayoutGrid className="h-5 w-5" /> Projects
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-lg gap-3"
                      onClick={() => navigateTo('skills')}
                    >
                      <Code className="h-5 w-5" /> Skills
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-lg gap-3"
                      onClick={() => navigateTo('contact')}
                    >
                      <Mail className="h-5 w-5" /> Contact
                    </Button>
                  </li>
                </ul>
              </nav>
              
              <div className="py-6 border-t">
                <div className="flex justify-center gap-4">
                  <a href="https://github.com/Classadi" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/adityasureshch" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                  <Button className="gap-2">
                    <Download className="h-4 w-4" /> Resume
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileHeader;
