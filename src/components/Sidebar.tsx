
import { Button } from "@/components/ui/button";
import { 
  Github,
  Linkedin, 
  Mail, 
  Phone, 
  Download,
  Palette,
  Code,
  LayoutGrid,
  Brain,
  Database,
  Server
} from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("design");
  
  // Resume data for download
  const generateResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume_Aditya_Chaudhari.pdf';
    link.download = 'Resume_Aditya_Chaudhari.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:w-80 lg:border-r lg:bg-white p-6 flex flex-col h-full bg-gradient-to-b from-white to-purple-50">
      <div className="flex flex-col items-center mb-8">
        <div className="h-24 w-24 rounded-full overflow-hidden mb-4 border-4 border-purple-300 hover:border-purple-500 transition-colors duration-300 shadow-lg">
          <img
            src="/lovable-uploads/6ed48d5b-0d38-4ba5-a06c-4d88d146528c.png"
            alt="Aditya Chaudhari"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Aditya Chaudhari</h1>
        <p className="text-purple-500 font-medium">Frontend & AI/ML Developer</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2 hover:translate-x-1 transition-transform">
          <Mail className="h-4 w-4 text-purple-400" />
          <a href="mailto:aditchaudhari1504@gmail.com" className="text-sm hover:text-purple-500 transition-colors">
            aditchaudhari1504@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 hover:translate-x-1 transition-transform">
          <Phone className="h-4 w-4 text-purple-400" />
          <a href="tel:+918788744639" className="text-sm hover:text-purple-500 transition-colors">
            +91 8788744639
          </a>
        </div>
      </div>

      <div className="flex gap-2 mb-8">
        <a href="https://linkedin.com/in/adityasureshch" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="rounded-full hover:bg-purple-50 hover:text-purple-500 transition-colors">
            <Linkedin className="h-4 w-4" />
          </Button>
        </a>
        <a href="https://github.com/Classadi" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="rounded-full hover:bg-purple-50 hover:text-purple-500 transition-colors">
            <Github className="h-4 w-4" />
          </Button>
        </a>
        <Button 
          variant="default" 
          className="flex-1 gap-2 hover:bg-purple-600 transition-colors bg-gradient-to-r from-purple-600 to-indigo-600"
          onClick={generateResume}
        >
          <Download className="h-4 w-4" /> Resume
        </Button>
      </div>

      <div className="space-y-6 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
        <Tabs defaultValue="design" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-4">
            <TabsTrigger value="design" className="text-xs">Design</TabsTrigger>
            <TabsTrigger value="frontend" className="text-xs">Frontend</TabsTrigger>
            <TabsTrigger value="aiml" className="text-xs">AI/ML</TabsTrigger>
          </TabsList>
          
          <TabsContent value="design" className="mt-0">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Palette className="h-5 w-5 text-purple-500" />
                <h3 className="text-lg font-semibold">Design Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                  <span className="block text-xs font-medium mb-1">UI/UX</span>
                  <div className="flex items-center justify-center">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                  <span className="block text-xs font-medium mb-1">Figma</span>
                  <div className="flex items-center justify-center">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                  <span className="block text-xs font-medium mb-1">Canva</span>
                  <div className="flex items-center justify-center">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                  <span className="block text-xs font-medium mb-1">Adobe XD</span>
                  <div className="flex items-center justify-center">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="frontend" className="mt-0">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-5 w-5 text-purple-500" />
                <h3 className="text-lg font-semibold">Frontend</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                  <span className="block text-xs font-medium mb-1">React</span>
                  <div className="flex items-center justify-center">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                  <span className="block text-xs font-medium mb-1">Next.js</span>
                  <div className="flex items-center justify-center">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                  <span className="block text-xs font-medium mb-1">Tailwind</span>
                  <div className="flex items-center justify-center">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                  <span className="block text-xs font-medium mb-1">JavaScript</span>
                  <div className="flex items-center justify-center">
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {["HTML", "CSS", "TypeScript", "Redux", "SASS", "Bootstrap"].map((skill) => (
                  <span key={skill} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md hover:bg-purple-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="aiml" className="mt-0">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-semibold">AI/ML</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                    <span className="block text-xs font-medium mb-1">TensorFlow</span>
                    <div className="flex items-center justify-center">
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                    <span className="block text-xs font-medium mb-1">PyTorch</span>
                    <div className="flex items-center justify-center">
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                    <span className="block text-xs font-medium mb-1">Scikit-learn</span>
                    <div className="flex items-center justify-center">
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 transition-colors hover:shadow-md">
                    <span className="block text-xs font-medium mb-1">OpenAI</span>
                    <div className="flex items-center justify-center">
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-full bg-purple-500 rounded-full skill-bar" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-semibold">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["SQL", "Firebase", "MongoDB", "Supabase"].map((skill) => (
                    <span key={skill} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md hover:bg-purple-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Server className="h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-semibold">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["AWS", "Google Cloud", "Docker", "CI/CD", "Kubernetes"].map((skill) => (
                    <span key={skill} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md hover:bg-purple-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Education</h3>
          <div className="bg-purple-50 p-3 rounded-md hover:shadow-md transition-shadow">
            <p className="text-sm font-medium">B.E. Information Technology</p>
            <p className="text-xs text-gray-600">A. P. Shah Institute of Technology</p>
            <p className="text-xs text-gray-600">2022 - Present</p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 text-center text-sm text-gray-500">
        Made with ❤️ by Aditya Chaudhari
      </div>
    </div>
  );
};

export default Sidebar;
