
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
  Linkedin,
  Brain,
  Palette
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("design");
  
  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  // Resume download function
  const generateResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume_Aditya_Chaudhari.pdf';
    link.download = 'Resume_Aditya_Chaudhari.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md z-50 lg:hidden border-b">
      <div className="container h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-purple-300 shadow-md">
            <img
              src="/lovable-uploads/6ed48d5b-0d38-4ba5-a06c-4d88d146528c.png"
              alt="Aditya Chaudhari"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Aditya Chaudhari</h1>
            <p className="text-xs text-purple-500">Frontend & AI/ML Developer</p>
          </div>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[90vw] sm:w-[350px] bg-gradient-to-b from-white to-purple-50">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8 pt-8">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-purple-300 shadow-md">
                  <img
                    src="/lovable-uploads/6ed48d5b-0d38-4ba5-a06c-4d88d146528c.png"
                    alt="Aditya Chaudhari"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Aditya Chaudhari</h1>
                  <p className="text-sm text-purple-500">Frontend & AI/ML Developer</p>
                </div>
              </div>
              
              <nav className="mb-6">
                <ul className="space-y-2">
                  <li>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-base gap-3 hover:bg-purple-50"
                      onClick={() => navigateTo('root')}
                    >
                      <Home className="h-5 w-5 text-purple-500" /> Home
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-base gap-3 hover:bg-purple-50"
                      onClick={() => navigateTo('projects')}
                    >
                      <LayoutGrid className="h-5 w-5 text-purple-500" /> Projects
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-base gap-3 hover:bg-purple-50"
                      onClick={() => navigateTo('skills')}
                    >
                      <Code className="h-5 w-5 text-purple-500" /> Skills
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-base gap-3 hover:bg-purple-50"
                      onClick={() => navigateTo('contact')}
                    >
                      <Mail className="h-5 w-5 text-purple-500" /> Contact
                    </Button>
                  </li>
                </ul>
              </nav>

              <div className="flex-1 overflow-y-auto pr-2">
                <Tabs defaultValue="design" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
                  <TabsList className="w-full grid grid-cols-3 mb-4">
                    <TabsTrigger value="design" className="text-xs">
                      <Palette className="h-4 w-4 mr-1" /> Design
                    </TabsTrigger>
                    <TabsTrigger value="frontend" className="text-xs">
                      <Code className="h-4 w-4 mr-1" /> Frontend
                    </TabsTrigger>
                    <TabsTrigger value="aiml" className="text-xs">
                      <Brain className="h-4 w-4 mr-1" /> AI/ML
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="design" className="mt-0">
                    <div className="grid grid-cols-2 gap-2">
                      {["UI/UX", "Figma", "Canva", "Adobe XD"].map((skill) => (
                        <div key={skill} className="bg-purple-50 text-purple-700 p-2 rounded-md text-center text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="frontend" className="mt-0">
                    <div className="grid grid-cols-2 gap-2">
                      {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Redux"].map((skill) => (
                        <div key={skill} className="bg-purple-50 text-purple-700 p-2 rounded-md text-center text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="aiml" className="mt-0">
                    <div className="grid grid-cols-2 gap-2">
                      {["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Deep Q-Learning", "AWS", "Google Cloud", "Docker"].map((skill) => (
                        <div key={skill} className="bg-purple-50 text-purple-700 p-2 rounded-md text-center text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="py-6 border-t">
                <div className="flex justify-between gap-4">
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
                  <Button 
                    className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600" 
                    onClick={generateResume}
                  >
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
