
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingBottom: 3,
  },
  entryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  entryDetail: {
    fontSize: 11,
    marginVertical: 2,
  },
  entryDate: {
    fontSize: 10,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    fontSize: 10,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  column: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    fontSize: 10,
    backgroundColor: '#F3F4F6',
    padding: 3,
    borderRadius: 3,
  },
});

// Create Resume Document
const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Aditya Chaudhari</Text>
      <Text style={styles.contact}>
        +91 8788744639 | aditchaudhari1504@gmail.com | linkedin.com/in/adityasureshch | github.com/classadi
      </Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SUMMARY</Text>
        <Text style={styles.bulletText}>
          AI/ML and Data Analytics enthusiast actively seeking a 2–3 month internship to apply my skills in real-world projects.
          Certified by Google and AWS, with hands-on experience in AI/ML model development, cloud integration, and chatbot systems.
          Actively involved in hackathons and team leadership, I bring both technical proficiency and a collaborative mindset.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <Text style={styles.entryTitle}>Bachelor of Engineering (B.E.), Information Technology</Text>
        <Text style={styles.entryDetail}>A. P. Shah Institute of Technology</Text>
        <Text style={styles.entryDate}>2022 – Present</Text>
        <Text style={styles.entryDetail}>Senior Secondary (HSC), Science – 81.67% (2022)</Text>
        <Text style={styles.entryDetail}>Secondary (SSC) – 93.40% (2020)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Google AI/ML Certification</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>AWS Data Science Engineer</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>NVIDIA Deep Learning</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>redhat openshift: containers and kubernetes(D0180)</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Google cloud generative ai</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Cisco python essentials</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROJECTS</Text>
        
        <Text style={styles.entryTitle}>Desvio: The Wholesome Tour Assistant</Text>
        <Text style={styles.entryDate}>Sept 2024 – Dec 2024</Text>
        <Text style={styles.bulletText}>
          Built an AI-powered travel assistant using Dialogflow, SaaS, and Firebase. Integrated Google Maps API 
          for real-time location tracking and hotel booking automation. Reduced query resolution time by 30% and 
          improved user satisfaction by 25%.
        </Text>
        
        <Text style={styles.entryTitle}>AI Lunar Landing using Deep Q-Learning</Text>
        <Text style={styles.entryDate}>Jan 2025 – Feb 2025</Text>
        <Text style={styles.bulletText}>
          Developed an AI model with Deep Q-Learning for lunar landing simulations using TensorFlow, PyTorch, 
          and OpenAI Gym. Achieved 95% accuracy in simulations.
        </Text>
        
        <Text style={styles.entryTitle}>Elixir: AI-Driven Platform for Learning Improvement</Text>
        <Text style={styles.entryDate}>Jan 2025 – Present</Text>
        <Text style={styles.bulletText}>
          Designed a platform to track and improve users' learning using data analytics and AI-based personalized 
          recommendations. Integrated with Google Cloud for real-time insights.
        </Text>
        
        <Text style={styles.entryTitle}>CARNIVAL: AI-Powered Event Management</Text>
        <Text style={styles.entryDate}>Jan 2024 – Mar 2024</Text>
        <Text style={styles.bulletText}>
          Developed a React & Node.js-based event platform with AWS integration. Reduced registration time 
          by 30% and added personalized event suggestions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.entryDetail}>Programming: Python (Flask, Tkinter), Java</Text>
            <Text style={styles.entryDetail}>AI/ML: TensorFlow, PyTorch, Scikit-learn, Deep Q-Learning, OpenAI Gym</Text>
            <Text style={styles.entryDetail}>Data Analytics: Google Cloud AI, Data Visualization</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.entryDetail}>Full-Stack Dev: React, Node.js, Express.js, Next.js</Text>
            <Text style={styles.entryDetail}>Cloud Platforms: AWS, Google Cloud</Text>
            <Text style={styles.entryDetail}>Databases: SQL, Firebase, MongoDB</Text>
            <Text style={styles.entryDetail}>DevOps (Basic): Docker, CI/CD, Kubernetes</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ACHIEVEMENTS & HACKATHONS</Text>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Participated in national and internal hackathons focused on AI/ML</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Built and deployed chatbot-driven HR systems and smart assistants</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Winner at HackWave Hackathon</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Team Leader in Smart India Hackathon (SIH)</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>INTERNSHIP AVAILABILITY</Text>
        <Text style={styles.entryDetail}>Looking for: AI/ML or Data Analytics Internship</Text>
        <Text style={styles.entryDetail}>Type: In-Office (Pune/Mumbai preferred) or Remote</Text>
        <Text style={styles.entryDetail}>Duration: 2 to 3 Months</Text>
        <Text style={styles.entryDetail}>Start Date: Immediate</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ASSOCIATIONS</Text>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Technical Co-ordinator, ITSA</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Volunteer, AIML Club</Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>Technical Speaker at GUI Quest</Text>
        </View>
      </View>
    </Page>
  </Document>
);

// Create a component that generates the resume
export const ResumeGenerator = () => {
  return (
    <PDFDownloadLink document={<Resume />} fileName="Aditya_Chaudhari_Resume.pdf">
      {({ loading }) => (loading ? 'Loading document...' : 'Download Resume')}
    </PDFDownloadLink>
  );
};

export default Resume;
