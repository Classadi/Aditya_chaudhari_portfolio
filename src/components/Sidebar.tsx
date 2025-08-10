import { Button } from "@/components/ui/button";
import { 
  Github,
  Linkedin, 
  Mail, 
  Phone, 
  Download,
  Code,
  Brain,
  Database,
  Server
} from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("fullstack");
  
  // Resume download
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
      
      {/* Profile */}
      <div className="flex flex-col items-center mb-8">
        <div className="h-24 w-24 rounded-full overflow-hidden mb-4 border-4 border-purple-300 hover:border-purple-500 transition-colors duration-300 shadow-lg">
          <img
            src="/lovable-uploads/6ed48d5b-0d38-4ba5-a06c-4d88d146528c.png"
            alt="Aditya Chaudhari"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Aditya Chaudhari</h1>
        <p className="text-purple-500 font-medium">Full Stack & Data Science Developer</p>
      </div>

      {/* Contact */}
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

      {/* Socials & Resume */}
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

      {/* Skills Tabs */}
      <div className="space-y-6 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent">
        <Tabs defaultValue="fullstack" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-4">
            <TabsTrigger value="fullstack" className="text-xs">Full Stack</TabsTrigger>
            <TabsTrigger value="datascience" className="text-xs">Data Science</TabsTrigger>
          </TabsList>
          
          {/* Full Stack */}
          <TabsContent value="fullstack" className="mt-0">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-5 w-5 text-purple-500" />
                <h3 className="text-lg font-semibold">Full Stack Development</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL"].map(skill => (
                  <div key={skill} className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 hover:shadow-md">
                    <span className="block text-xs font-medium mb-1">{skill}</span>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {["HTML", "CSS", "JavaScript", "TypeScript", "Redux", "REST APIs", "TailwindCSS"].map(tag => (
                  <span key={tag} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md hover:bg-purple-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Data Science */}
          <TabsContent value="datascience" className="mt-0">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-semibold">Data Science & AI</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Hugging Face", "Ollama"].map(skill => (
                    <div key={skill} className="bg-purple-50 text-purple-700 p-3 rounded-lg text-center hover:bg-purple-100 hover:shadow-md">
                      <span className="block text-xs font-medium mb-1">{skill}</span>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-semibold">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["SQL", "MongoDB", "Firebase", "Supabase"].map(db => (
                    <span key={db} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md hover:bg-purple-100">
                      {db}
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
                  {["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"].map(tool => (
                    <span key={tool} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md hover:bg-purple-100">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Education */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Education</h3>
          <div className="bg-purple-50 p-3 rounded-md hover:shadow-md transition-shadow">
            <p className="text-sm font-medium">B.E. Information Technology (AI/ML Honors)</p>
            <p className="text-xs text-gray-600">A. P. Shah Institute of Technology</p>
            <p className="text-xs text-gray-600">2022 - Present</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 text-center text-sm text-gray-500">
        Made with 💟 by Aditya Chaudhari
      </div>
    </div>
  );
};

export default Sidebar;
