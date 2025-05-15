
import { Button } from "@/components/ui/button";
import { 
  Github,
  Linkedin, 
  Mail, 
  Phone, 
  Download,
  User
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:w-80 lg:border-r lg:bg-white p-6 flex flex-col h-full">
      <div className="flex flex-col items-center mb-8">
        <div className="h-24 w-24 rounded-full overflow-hidden mb-4 border-4 border-purple-300">
          <img
            src="/lovable-uploads/6ed48d5b-0d38-4ba5-a06c-4d88d146528c.png"
            alt="Aditya Chaudhari"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold">Aditya Chaudhari</h1>
        <p className="text-purple-500 font-medium">Frontend & AI/ML Developer</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-purple-400" />
          <a href="mailto:aditchaudhari1504@gmail.com" className="text-sm hover:text-purple-500">
            aditchaudhari1504@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-purple-400" />
          <a href="tel:+918788744639" className="text-sm hover:text-purple-500">
            +91 8788744639
          </a>
        </div>
      </div>

      <div className="flex gap-2 mb-8">
        <a href="https://linkedin.com/in/aditya-chaudhari" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="h-4 w-4" />
          </Button>
        </a>
        <a href="https://github.com/Classadi" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="rounded-full">
            <Github className="h-4 w-4" />
          </Button>
        </a>
        <Button variant="default" className="flex-1 gap-2">
          <Download className="h-4 w-4" /> Resume
        </Button>
      </div>

      <div className="space-y-4 flex-1">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div>
          <h4 className="text-sm font-medium text-purple-500 mb-1">Frontend</h4>
          <div className="flex flex-wrap gap-1">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((skill) => (
              <span key={skill} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-purple-500 mb-1">ML/AI</h4>
          <div className="flex flex-wrap gap-1">
            {["Python", "Scikit-learn", "OpenAI APIs", "Langchain", "Streamlit"].map((skill) => (
              <span key={skill} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-purple-500 mb-1">Backend</h4>
          <div className="flex flex-wrap gap-1">
            {["Node.js", "Express.js", "Firebase", "Supabase"].map((skill) => (
              <span key={skill} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-purple-500 mb-1">Tools</h4>
          <div className="flex flex-wrap gap-1">
            {["NetBeans", "Figma", "Canva", "VS Code", "GitHub"].map((skill) => (
              <span key={skill} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md">
                {skill}
              </span>
            ))}
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
