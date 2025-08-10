import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  name: string;
  skills: Array<{ name: string; level: number }>;
}

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("fullstack");
  
  const skillCategories: SkillCategory[] = [
    {
      name: "fullstack",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 75 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "REST APIs", level: 80 }
      ]
    },
    {
      name: "datascience-ai",
      skills: [
        { name: "Python", level: 90 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Hugging Face", level: 80 },
        { name: "Ollama", level: 70 },
        { name: "Prompt Engineering", level: 75 },
        { name: "Data Visualization", level: 80 },
        { name: "Feature Engineering", level: 75 }
      ]
    },
    {
      name: "backend-databases",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 80 },
        { name: "Firebase", level: 80 },
        { name: "Supabase", level: 75 },
        { name: "MERN Stack", level: 85 },
        { name: "Authentication & Security", level: 75 }
      ]
    },
    {
      name: "cloud-devops",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Google Cloud", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 70 },
        { name: "RedHat OpenShift", level: 65 }
      ]
    }
  ];

  return (
    <div className="py-16" id="skills">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expertise in Full Stack Development, Data Science, AI/ML, and Cloud — delivering scalable and intelligent solutions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <Tabs defaultValue="fullstack" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="datascience-ai">Data Science & AI</TabsTrigger>
              <TabsTrigger value="backend-databases">Backend & DB</TabsTrigger>
              <TabsTrigger value="cloud-devops">Cloud & DevOps</TabsTrigger>
            </TabsList>

            {skillCategories.map(category => (
              <TabsContent key={category.name} value={category.name} className="mt-6">
                <CardTitle className="mb-4">{
                  category.name === "fullstack" ? "Full Stack Development" :
                  category.name === "datascience-ai" ? "Data Science & AI" :
                  category.name === "backend-databases" ? "Backend & Databases" :
                  "Cloud & DevOps"
                }</CardTitle>
                <CardDescription className="mb-6">
                  {category.name === "fullstack" ? 
                    "Building responsive and scalable web applications with modern frameworks and APIs." :
                    category.name === "datascience-ai" ? 
                    "Creating intelligent systems, data pipelines, and AI/ML models for real-world applications." :
                    category.name === "backend-databases" ? 
                    "Designing robust server-side architectures with efficient database management." :
                    "Deploying, scaling, and managing applications on cloud platforms with CI/CD."
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
