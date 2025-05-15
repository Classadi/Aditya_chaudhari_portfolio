
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Project data
  const projects = [
    {
      title: "Poetic Soulmate AI",
      description: "A unique dating and friendship app that connects people via poems. Users match based on poetic expression and sentiment.",
      githubLink: "https://github.com/Classadi/poetic-soulmate-ai",
      techStack: ["Streamlit", "OpenAI GPT", "Supabase", "Python", "NLP"],
      features: [
        "NLP-based poetry analysis and personality match",
        "Connect with kindred souls through the power of poetry",
        "Share verses, analyze poems with AI",
        "Create playlists to match poems with music"
      ],
      images: [
        "/lovable-uploads/63f39651-9308-4f60-8d61-3442e5ddca76.png", 
        "/lovable-uploads/b7fa2f33-d18b-4517-8116-60604838548d.png",
        "/lovable-uploads/fff603ff-1944-44bc-b6ac-a08a2c3d3d5a.png",
        "/lovable-uploads/07e129d3-f90a-453c-a198-8f83f3a9c05e.png"
      ]
    },
    {
      title: "Desvio - Travel Companion App",
      description: "Desvio is a personalized travel application offering itinerary generation, chatbot assistance, bucket list management, and inspirational recommendations.",
      githubLink: "https://github.com/11byte/Desvio_backup",
      techStack: ["React Native", "Firebase", "OpenAI API", "Maps Integration"],
      features: [
        "AI Chatbot for travel recommendations",
        "Custom Itinerary Planner",
        "Bucket List UI with travel categories",
        "Interactive maps and route planning"
      ],
      images: [
        "/lovable-uploads/e12a03df-81d1-4a26-ade3-18d3ec47c1ce.png", 
        "/lovable-uploads/2badf105-5307-46cc-9ed2-2998558a71cc.png"
      ]
    },
    {
      title: "Elixir - AI-Driven Platform for Learning",
      description: "Designed a platform to track and improve users' learning using data analytics and AI-based personalized recommendations. Integrated with Google Cloud for real-time insights.",
      githubLink: "https://github.com/Classadi/Elixir",
      techStack: ["Python", "Google Cloud", "Data Analytics", "AI"],
      features: [
        "AI-based personalized learning recommendations",
        "Data analytics for learning improvement tracking",
        "Google Cloud integration for real-time insights",
        "User-friendly learning dashboard"
      ],
      images: [
        "/lovable-uploads/b7b98a43-1212-425a-938b-74f77934552d.png", 
        "/lovable-uploads/9965b6d2-00b3-4f7f-bd92-31b2b822a4f3.png"
      ]
    },
    {
      title: "Carnival - Event Management App",
      description: "A React & Node.js-based event platform with AWS integration. Reduced registration time by 30% and added personalized event suggestions.",
      githubLink: "https://github.com/Classadi/Carnival-The-college-event-management-Application",
      techStack: ["React", "Node.js", "AWS", "Event Management"],
      features: [
        "Personalized event suggestions",
        "30% faster registration process",
        "AWS Integration for scalability",
        "React & Node.js technology stack"
      ],
      images: [
        "/lovable-uploads/77a19291-cc6a-4220-aa11-37a3a1f46f67.png",
        "/lovable-uploads/20f3b4ff-b9e7-4ff6-9d49-b55b42904481.png"
      ]
    }
  ];

  return (
    <>
      <MobileHeader />
      <div className="flex">
        <div className="hidden lg:block lg:w-80 shrink-0">
          <Sidebar />
        </div>
        <main className="flex-1 min-h-screen lg:pl-80">
          <div className="container px-6 md:px-8 py-8">
            <Hero />

            <div id="projects" className="py-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Here are some of the projects I've worked on. Each one has taught me something new and helped me grow as a developer.
                </p>
              </div>

              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Index;
