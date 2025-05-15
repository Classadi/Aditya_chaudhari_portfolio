
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  name: string;
  skills: Array<{ name: string; level: number }>;
}

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  
  const skillCategories: SkillCategory[] = [
    {
      name: "frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "Figma", level: 75 },
        { name: "Canva", level: 85 },
      ]
    },
    {
      name: "ml-ai",
      skills: [
        { name: "Python", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Scikit-learn", level: 80 },
        { name: "Deep Q-Learning", level: 70 },
        { name: "OpenAI Gym", level: 75 },
      ]
    },
    {
      name: "backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "Next.js", level: 65 },
        { name: "Firebase", level: 80 },
        { name: "SQL", level: 70 },
        { name: "MongoDB", level: 65 },
      ]
    },
    {
      name: "devops",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Google Cloud", level: 75 },
        { name: "Docker", level: 65 },
        { name: "CI/CD", level: 60 },
        { name: "Kubernetes", level: 55 },
      ]
    }
  ];

  return (
    <div className="py-16" id="skills">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I've developed expertise across various technologies with a focus on frontend development and ML/AI
        </p>
      </div>

      <Card>
        <CardHeader>
          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="frontend">Frontend & Design</TabsTrigger>
              <TabsTrigger value="ml-ai">ML & AI</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">Cloud & DevOps</TabsTrigger>
            </TabsList>

            {skillCategories.map(category => (
              <TabsContent key={category.name} value={category.name} className="mt-6">
                <CardTitle className="mb-4">{
                  category.name === "frontend" ? "Frontend & Design" :
                  category.name === "ml-ai" ? "Machine Learning & AI" :
                  category.name === "backend" ? "Backend Development" : "Cloud & DevOps"
                }</CardTitle>
                <CardDescription className="mb-6">
                  {category.name === "frontend" ? 
                    "Creating beautiful, responsive, and user-friendly interfaces using modern technologies and design tools." :
                    category.name === "ml-ai" ? 
                    "Building intelligent systems and models with a focus on practical applications and performance." :
                    category.name === "backend" ? 
                    "Developing robust backend systems that support scalable and efficient applications." :
                    "Managing infrastructure and deployment pipelines to ensure smooth operation of applications."
                  }
                </CardDescription>
                <CardContent className="p-0">
                  <div className="grid gap-4">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-purple-300 transition-all duration-1000 ease-out" 
                            style={{ 
                              width: activeTab === category.name ? `${skill.level}%` : '0%' 
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </TabsContent>
            ))}
          </Tabs>
        </CardHeader>
      </Card>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-purple-600 hover:bg-purple-700">Google AI/ML</Badge>
          <Badge className="bg-purple-600 hover:bg-purple-700">AWS Data Science Engineer</Badge>
          <Badge className="bg-purple-600 hover:bg-purple-700">NVIDIA Deep Learning</Badge>
          <Badge className="bg-purple-600 hover:bg-purple-700">RedHat OpenShift</Badge>
          <Badge className="bg-purple-600 hover:bg-purple-700">Google Cloud Generative AI</Badge>
          <Badge className="bg-purple-600 hover:bg-purple-700">Cisco Python Essentials</Badge>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
