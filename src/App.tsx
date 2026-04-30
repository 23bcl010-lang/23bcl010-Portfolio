/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronLeft, ChevronRight, Users, PenTool, Target, Shield, Award, Cpu, Rocket, BookOpen, Globe, TrendingUp, Zap, Mail, Phone, Linkedin } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'intro', label: 'Intro' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'ethics', label: 'Ethics' },
  { id: 'future', label: 'Future' },
  { id: 'assessment', label: 'Assessment' },
  { id: 'testimonial', label: 'Testimonial' },
];

function Navbar({ activeSection }: { activeSection: string }) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl">
      <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between overflow-x-auto no-scrollbar">
        <div className="text-accent font-serif font-bold text-xl shrink-0 mr-8">DP.</div>
        <ul className="flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight mb-6">
            Deval <br />
            <span className="text-white/70">Padaliya</span>
          </h1>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-8">
            B.Tech Civil Engineering @ PDEU
          </p>
          <p className="text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed mb-12 font-light">
            “Learning engineering not just to build structures, but to build solutions for a better and sustainable future.”
          </p>
          <a href="#intro" className="inline-flex items-center space-x-2 text-accent hover:text-white transition-colors group">
            <span className="text-sm uppercase tracking-wider font-medium">Explore Journey</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 hidden lg:block"
        >
          <div className="relative w-full aspect-[4/5] max-w-sm sm:max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl mix-blend-overlay z-10 pointer-events-none" />
            <img
              src="/profile.jpg"
              alt="Deval Padaliya"
              className="w-full h-full object-cover object-top rounded-2xl shadow-2xl shadow-black/50"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/deval/800/1000?grayscale";
              }}
            />
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-accent/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section id="intro" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-serif mb-8">Learning Philosophy</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-10" />
          <p className="text-lg sm:text-2xl text-white/70 leading-relaxed font-light">
            My journey began with a profound fascination for mathematics, which naturally evolved into a passion for Civil Engineering at PDEU. I believe that engineering is fundamentally about <span className="text-white font-medium">ethical responsibility</span> and <span className="text-accent font-medium">sustainability</span>. Every structure we design must harmonize with its environment and serve society with integrity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-serif mb-16"
        >
          Academic <span className="text-white/40">Excellence</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CGPA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl flex flex-col justify-center items-center text-center group hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            <Award className="w-10 h-10 text-accent mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-5xl font-serif text-accent mb-2">9.32</h3>
            <p className="text-sm uppercase tracking-widest text-white/50">Cumulative GPA</p>
          </motion.div>

          {/* SGPA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl md:col-span-2 lg:col-span-2 group hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <h3 className="text-xl font-serif mb-6 flex items-center">
              <Target className="w-5 h-5 mr-3 text-accent" />
              Semester Progression
            </h3>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { sem: 'S1', val: 9.04 },
                    { sem: 'S2', val: 9.10 },
                    { sem: 'S3', val: 9.50 },
                    { sem: 'S4', val: 9.60 },
                    { sem: 'S5', val: 9.77 },
                  ]}
                  margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="sem" stroke="rgba(255,255,255,0.5)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[8, 10]} stroke="rgba(255,255,255,0.5)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#D4AF37' }}
                    labelStyle={{ color: 'rgba(255,255,255,0.7)' }}
                  />
                  <Line type="monotone" dataKey="val" stroke="#D4AF37" strokeWidth={3} dot={{ r: 4, fill: '#D4AF37', strokeWidth: 0 }} activeDot={{ r: 6, fill: '#fff', stroke: '#D4AF37', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            <Cpu className="w-8 h-8 text-accent mb-6" />
            <h3 className="text-lg font-serif mb-4">Technical</h3>
            <ul className="space-y-3">
              {['MATLAB', 'Simulink', 'AutoCAD', 'STAAD.Pro'].map((skill) => (
                <li key={skill} className="flex items-center text-white/70 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    id: 1,
    title: "Drone-Based Crack Detection",
    category: "Structural Health",
    image: "https://picsum.photos/seed/drone/800/600",
    methodology: "Utilized high-resolution drone imagery combined with computer vision algorithms to identify and map micro-cracks in inaccessible concrete structures.",
    outcome: "Improved inspection efficiency by 40% and significantly reduced safety risks for human inspectors."
  },
  {
    id: 2,
    title: "SWANA Project",
    category: "Waste Management",
    image: "https://picsum.photos/seed/waste/800/600",
    methodology: "Developed a comprehensive solid waste management framework focusing on source segregation and optimized routing for collection vehicles.",
    outcome: "Secured 3rd Place out of 20 international teams in the SWANA SDC 2026 held in USA, delivering a comprehensive technical report and presentation on utilizing AI to reduce municipal collection costs by 20% and mitigate hazardous waste fires at Material Recovery Facilities."
  },
  {
    id: 3,
    title: "Net Zero Carbon Footprint",
    category: "Sustainability",
    image: "https://picsum.photos/seed/eco/800/600",
    methodology: "Analyzed lifecycle carbon emissions of standard residential buildings and modeled alternative eco-friendly material substitutions.",
    outcome: "Formulated a blueprint reducing embodied carbon by 35% without compromising structural integrity."
  }
];

function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-32 px-6 bg-secondary/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-serif"
          >
            Latest <span className="text-accent italic">Projects</span>
          </motion.h2>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          {projects.map((project, index) => {
            let relativeIndex = index - currentIndex;
            if (relativeIndex < -1) relativeIndex += projects.length;
            if (relativeIndex > 1) relativeIndex -= projects.length;

            const isActive = relativeIndex === 0;
            const isLeft = relativeIndex === -1;
            const isRight = relativeIndex === 1;

            let transform = 'translateX(0) scale(1) translateZ(0)';
            let zIndex = 10;
            let opacity = 1;

            if (isLeft) {
              transform = 'translateX(-60%) scale(0.8) translateZ(-100px) rotateY(15deg)';
              zIndex = 5;
              opacity = 0.5;
            } else if (isRight) {
              transform = 'translateX(60%) scale(0.8) translateZ(-100px) rotateY(-15deg)';
              zIndex = 5;
              opacity = 0.5;
            } else if (!isActive) {
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={project.id}
                className="absolute w-full max-w-3xl transition-all duration-700 ease-out"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  perspective: '1000px'
                }}
                onClick={() => {
                  if (isLeft) prevProject();
                  if (isRight) nextProject();
                }}
              >
                <div className={`relative rounded-2xl overflow-hidden glass-panel border-white/10 ${isActive ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'cursor-pointer'}`}>
                  <div className="aspect-[16/9] relative group">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <p className="text-accent text-sm font-medium tracking-wider mb-2">{project.category}</p>
                      <h3 className="text-3xl sm:text-4xl font-serif text-white mb-4">{project.title}</h3>

                      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-0 group-hover:max-h-48 opacity-0 group-hover:opacity-100' : 'hidden'}`}>
                        <div className="pt-4 border-t border-white/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-xs text-white/50 uppercase tracking-wider mb-1">Methodology</h4>
                            <p className="text-sm text-white/80 leading-relaxed">{project.methodology}</p>
                          </div>
                          <div>
                            <h4 className="text-xs text-white/50 uppercase tracking-wider mb-1">Outcome</h4>
                            <p className="text-sm text-accent leading-relaxed">{project.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={prevProject}
            className="absolute left-4 sm:left-12 z-20 w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 sm:right-12 z-20 w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 hover:text-accent transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

function SkillsLeadershipSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm text-accent uppercase tracking-widest mb-4">Soft Skills</h2>
          <h3 className="text-4xl sm:text-5xl font-serif mb-12 leading-tight">
            Beyond the <br/><span className="text-white/40">Calculations</span>
          </h3>

          <div className="space-y-8">
            {[
              { icon: Users, title: "Team Collaboration", desc: "Fostering synergy in multidisciplinary engineering teams." },
              { icon: PenTool, title: "Technical Documentation", desc: "Translating complex data into clear, actionable reports." },
              { icon: Target, title: "Strategic Problem Solving", desc: "Approaching structural challenges with innovative solutions." }
            ].map((skill, i) => (
              <div key={i} className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-6 shrink-0 group-hover:bg-accent/20 transition-colors">
                  <skill.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">{skill.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="award"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full" />
          <h2 className="text-sm text-accent uppercase tracking-widest mb-4">Award</h2>
          <h3 className="text-3xl font-serif mb-6">Best Academic Performance Award winner</h3>
          <div className="mb-6 rounded-xl overflow-hidden shadow-2xl relative aspect-[4/3]">
            <img 
              src="/award.jpg" 
              alt="Award Representation" 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/award/800/600";
              }}
            />
          </div>
          <p className="text-white/70 leading-relaxed">
            Recipient of Best Academic Performance at Pandit Deendayal Energy University (PDEU), Gandhinagar. Maintained consistent academic excellence and highest grades throughout the engineering curriculum.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function EthicsSection() {
  return (
    <section id="ethics" className="py-32 px-6 bg-[#020305] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080?grayscale')] opacity-5 mix-blend-overlay pointer-events-none" referrerPolicy="no-referrer" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Shield className="w-12 h-12 text-accent mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl sm:text-5xl font-serif text-accent mb-10 leading-tight">
            "The true measure of engineering is not the height of the structure, but the depth of its positive impact on society."
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            Balancing technological progress with societal safety and environmental stewardship is the core of my professional ethos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CircularProgress({ value, label }: { value: number; label: string; key?: React.Key }) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28 flex items-center justify-center mb-4">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.15)]" />
        <svg className="w-full h-full -rotate-90 relative z-10" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#D4AF37"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-serif text-white">{value}<span className="text-sm text-accent">%</span></span>
        </div>
      </div>
      <span className="text-sm font-medium text-white/80 text-center max-w-[140px] leading-tight">{label}</span>
    </div>
  );
}

function MasterySection() {
  const softwareSkills = [
    { name: "AutoCAD", value: 92 },
    { name: "STADPro", value: 84 },
    { name: "Revit", value: 96 },
    { name: "MS Project", value: 88 },
  ];

  const technicalSkills = [
    { name: "Structural Design & Solid Mechanics", value: 87 },
    { name: "Materials & Concrete Technology", value: 94 },
    { name: "Environmental Engineering & Sciences", value: 91 },
    { name: "Costing & Evaluation", value: 82 },
  ];

  return (
    <section id="mastery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif"
          >
            Advanced Skill Development & <br className="hidden sm:block" />
            <span className="text-white/40">Mastery</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Software Mastery Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 sm:p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-serif mb-3 text-center text-white">Designing & Software Mastery</h3>
            <p className="text-sm text-white/60 text-center mb-12 max-w-md mx-auto font-light">
              Bridging structural intuition with digital precision through advanced CAD, BIM, and high-performance simulation
            </p>
            
            <div className="grid grid-cols-2 gap-y-10 gap-x-4">
              {softwareSkills.map((skill) => (
                <CircularProgress key={skill.name} value={skill.value} label={skill.name} />
              ))}
            </div>
          </motion.div>

          {/* Technical Skillset Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-serif mb-3 text-center text-white">Technical Skillset</h3>
            <p className="text-sm text-white/60 text-center mb-12 max-w-md mx-auto font-light">
              Integrating traditional structural analysis with modern AI and IoT sensors to create resilient, data-driven infrastructure.
            </p>
            
            <div className="grid grid-cols-2 gap-y-10 gap-x-4">
              {technicalSkills.map((skill) => (
                <CircularProgress key={skill.name} value={skill.value} label={skill.name} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  const visions = [
    {
      icon: Rocket,
      title: "Career Goals",
      desc: "Focus on becoming a leader in Structural Engineering and Sustainable Infrastructure, utilizing AI and Drone tech."
    },
    {
      icon: BookOpen,
      title: "Further Study",
      desc: "Outline plans for specialized certifications in Smart Construction and potential Master’s research."
    },
    {
      icon: Globe,
      title: "Continuous Improvement",
      desc: "Strategies for lifelong learning, including staying updated with Revit/Civil 3D and global engineering forums."
    }
  ];

  return (
    <section id="future" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif"
          >
            Future <span className="text-white/40">Aspirations</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-accent/30 hover:border-accent transition-colors group"
            >
              <item.icon className="w-8 h-8 text-accent mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-serif mb-4 text-white/90">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AssessmentSection() {
  const swot = [
    { title: "Strengths", items: ["Academic Performance (9.32 CGPA)", "Analytical Problem Solving", "Strong Research Interest"], icon: TrendingUp, color: "border-t-accent" },
    { title: "Weaknesses", items: ["Limited Industry Exposure", "Need for Field Experience"], icon: Target, color: "border-t-white/20" },
    { title: "Opportunities", items: ["Research Programs", "New Technologies", "Internships"], icon: Zap, color: "border-t-white/20" },
    { title: "Threats", items: ["Rapid Technological Changes", "Highly Competitive Field"], icon: Shield, color: "border-t-red-900/50" },
  ];

  return (
    <section id="assessment" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif"
          >
            Conclusion & <span className="text-white/40">Self-Assessment</span>
          </motion.h2>
        </div>

        {/* Personal Reflection Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 sm:p-12 rounded-3xl mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />
          <h3 className="text-2xl font-serif mb-6 text-accent">Personal Reflection</h3>
          <p className="text-lg text-white/80 leading-relaxed font-light mb-6">
            My journey at PDEU has been transformative, marked by a consistent academic record (9.32 CGPA) and a deepening passion for sustainable infrastructure. The rigorous curriculum and hands-on projects have not only honed my technical skills but also instilled a profound sense of ethical responsibility in engineering.
          </p>
          <p className="text-lg text-white/80 leading-relaxed font-light">
            I've learned that true engineering excellence lies in the balance between innovative design and environmental stewardship. As I look forward, I am committed to leveraging these foundational lessons to build resilient, smart, and sustainable communities.
          </p>
        </motion.div>

        {/* SWOT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {swot.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-2xl border-t-2 ${item.color} hover:bg-white/[0.03] transition-colors`}
            >
              <div className="flex items-center mb-6">
                <item.icon className="w-5 h-5 text-accent mr-3" />
                <h3 className="text-xl font-serif text-white/90">{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {item.items.map((point, i) => (
                  <li key={i} className="flex items-start text-white/60 text-sm">
                    <span className="text-accent mr-3 mt-0.5">✦</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      quote: "Deval demonstrates a rare combination of analytical rigor and a genuine commitment to sustainable engineering practices. His approach to problem-solving is both methodical and innovative.",
      author: "Dr. Manivel",
      role: "Professor, Civil Engineering Dept, PDEU",
      seed: "manivel"
    },
    {
      quote: "An exceptional student with a keen eye for detail and a strong grasp of structural mechanics. His dedication to the field and continuous pursuit of excellence is truly commendable.",
      author: "Dr. Ronak Motiani",
      role: "Professor, Civil Engineering Dept, PDEU",
      seed: "ronak"
    }
  ];

  return (
    <section id="testimonial" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-serif"
          >
            Testimonial<span className="text-white/40">s</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative glass-panel p-10 rounded-3xl flex flex-col justify-between"
            >
              <span className="absolute -top-6 left-8 text-8xl font-serif text-white/10 select-none leading-none">"</span>
              <p className="text-lg sm:text-xl font-serif leading-relaxed text-white/90 mb-10 relative z-10 italic">
                {t.quote}
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-secondary mr-4 overflow-hidden shrink-0 border border-white/10">
                  <img src={`https://picsum.photos/seed/${t.seed}/100/100?grayscale`} alt={t.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-accent font-medium tracking-wide">{t.author}</h4>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-secondary/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-serif text-accent mb-2">DP.</h3>
          <p className="text-sm text-white/60">Building sustainable solutions for the future.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-white/70">
          <a href="mailto:padaliyadeval@gmail.com" className="flex items-center hover:text-accent transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            padaliyadeval@gmail.com
          </a>
          <a href="tel:+917434851297" className="flex items-center hover:text-accent transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            +91 74348 51297
          </a>
          <a href="https://linkedin.com/in/devalpadaliya" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-accent transition-colors">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-xs text-white/40 tracking-widest uppercase">
          © 2026 Deval Padaliya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-primary text-white min-h-screen font-sans selection:bg-accent selection:text-primary">
      {/* Background Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-amber-700/10 blur-[100px] rounded-full pointer-events-none" />

      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
        <IntroSection />
        <ResumeSection />
        <ProjectsSection />
        <SkillsLeadershipSection />
        <EthicsSection />
        <MasterySection />
        <FutureSection />
        <AssessmentSection />
        <TestimonialSection />
      </main>

      <Footer />
    </div>
  );
}
