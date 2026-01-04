/**
 * Design Philosophy: Organic Intelligence Gradient Flow
 * - Fluid, organic shapes mirroring biological systems and neural networks
 * - Gradient-heavy aesthetic representing continuous data transformation
 * - Soft, approachable forms contrasting with precise technical information
 * - Nature-inspired patterns suggesting growth, adaptation, and evolution
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Network, 
  Workflow, 
  Database, 
  Shield, 
  Zap, 
  Activity, 
  GitBranch, 
  Layers, 
  CheckCircle2,
  ArrowRight,
  Target,
  Lightbulb,
  Rocket,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--color-teal-deep)] to-[var(--color-coral)] flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold">Agentic AI Healthcare</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#overview" className="text-sm font-medium hover:text-primary transition-colors">Overview</a>
              <a href="#architecture" className="text-sm font-medium hover:text-primary transition-colors">Architecture</a>
              <a href="#implementation" className="text-sm font-medium hover:text-primary transition-colors">Implementation</a>
              <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Benefits</a>
            </div>
            <Button className="rounded-full px-6">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-gradient-flow.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"></div>
        </div>
        
        <div className="container relative z-10 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 px-4 py-2 text-sm rounded-full bg-accent/20 text-accent-foreground border-accent/30">
              Next-Generation Healthcare AI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Agentic AI Ecosystem for{" "}
              <span className="bg-gradient-to-r from-[var(--color-teal-deep)] via-[var(--color-coral)] to-[var(--color-purple-accent)] bg-clip-text text-transparent">
                Clinical Workflow Automation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Transform your healthcare operations with intelligent agents that leverage existing APIs, services, and data to automate, track, monitor, and optimize clinical referral processing workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 text-lg">
                Explore Architecture
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg">
                View Implementation Plan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gradient-subtle-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What is Agentic AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Agentic AI represents autonomous intelligent systems that can perceive their environment, make decisions, and take actions to achieve specific goals—transforming healthcare workflow management through intelligent automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Autonomous Decision-Making",
                description: "AI agents independently analyze clinical data, prioritize tasks, and execute workflows without constant human intervention."
              },
              {
                icon: Network,
                title: "Seamless Integration",
                description: "Leverage your existing web application APIs, services, and databases to create a unified intelligent ecosystem."
              },
              {
                icon: Activity,
                title: "Real-Time Monitoring",
                description: "Continuous tracking and evaluation of workflow execution, task completion, and system performance with adaptive optimization."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg rounded-3xl">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-teal-deep)] to-[var(--color-coral)] flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Use Case Highlight */}
          <Card className="border-2 border-primary/20 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 flex flex-col justify-center">
                <Badge className="w-fit mb-4 rounded-full">Healthcare Use Case</Badge>
                <h3 className="text-3xl font-display font-bold mb-4">
                  Clinical Referral Processing
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our Agentic AI ecosystem specializes in automating the complex workflows involved in clinical referral management. From initial referral intake to specialist assignment, appointment scheduling, and follow-up tracking—intelligent agents handle the entire lifecycle with precision and efficiency.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated referral triage and prioritization",
                    "Intelligent specialist matching based on expertise and availability",
                    "Real-time status tracking and notification management",
                    "Predictive analytics for bottleneck identification"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[400px] bg-muted">
                <img 
                  src="/images/ai-healthcare-applications.png" 
                  alt="Healthcare AI Applications" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              High-Level Solution Architecture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive eight-layer architecture designed to create intelligent, autonomous agents that seamlessly integrate with your existing healthcare infrastructure.
            </p>
          </motion.div>

          {/* Architecture Visualization */}
          <div className="mb-16 rounded-3xl overflow-hidden border-2 border-border">
            <img 
              src="/images/architecture-visualization.png" 
              alt="Agentic AI Architecture" 
              className="w-full"
            />
          </div>

          {/* Architecture Layers */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Layers,
                layer: "Layer 1",
                title: "Agent Core",
                description: "The foundational intelligence layer housing the Large Language Model (LLM) that powers reasoning, decision-making, and natural language understanding. This core processes clinical context and determines optimal actions."
              },
              {
                icon: GitBranch,
                layer: "Layer 2",
                title: "Task Management",
                description: "Orchestrates complex multi-step workflows by breaking down clinical processes into manageable tasks, managing dependencies, and coordinating execution across multiple agents and systems."
              },
              {
                icon: Database,
                layer: "Layer 3",
                title: "Knowledge Base",
                description: "Centralized repository of medical knowledge, clinical guidelines, historical referral data, and institutional policies. Enables agents to make informed decisions based on comprehensive domain expertise."
              },
              {
                icon: Network,
                layer: "Layer 4",
                title: "API Integration Layer",
                description: "Connects to your existing healthcare web application APIs, EHR systems, scheduling services, and third-party integrations. Provides seamless data exchange and action execution capabilities."
              },
              {
                icon: Workflow,
                layer: "Layer 5",
                title: "Workflow Engine",
                description: "Defines, executes, and manages clinical workflow patterns. Handles state transitions, conditional logic, error recovery, and ensures compliance with healthcare regulations and protocols."
              },
              {
                icon: Activity,
                layer: "Layer 6",
                title: "Monitoring & Analytics",
                description: "Real-time observability into agent activities, workflow execution, and system performance. Provides dashboards, alerts, and detailed audit trails for compliance and optimization."
              },
              {
                icon: Shield,
                layer: "Layer 7",
                title: "Security & Compliance",
                description: "Ensures HIPAA compliance, data encryption, access control, and audit logging. Implements role-based permissions and maintains patient data privacy throughout all operations."
              },
              {
                icon: Zap,
                layer: "Layer 8",
                title: "User Interface & APIs",
                description: "Provides intuitive interfaces for clinicians, administrators, and patients to interact with the AI system. Exposes RESTful APIs for external integrations and custom applications."
              }
            ].map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 rounded-3xl border-2 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-sage)] to-[var(--color-teal-medium)] flex items-center justify-center flex-shrink-0">
                        <layer.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 rounded-full">{layer.layer}</Badge>
                        <CardTitle className="text-xl">{layer.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{layer.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Approach Section */}
      <section className="py-20 bg-gradient-subtle-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Design Approach & Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our design methodology ensures scalability, reliability, and seamless integration with your existing healthcare infrastructure.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="rounded-3xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  Modular Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  Each layer operates independently with well-defined interfaces, allowing for incremental implementation, easy maintenance, and flexible scaling. Components can be upgraded or replaced without disrupting the entire system.
                </p>
                <Separator />
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Microservices-based architecture for independent scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Event-driven communication between components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Containerized deployment for consistency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Network className="w-5 h-5 text-primary" />
                  </div>
                  API-First Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  Leverage your existing web application APIs as the primary integration point. The system acts as an intelligent orchestration layer on top of your current infrastructure, minimizing disruption and maximizing value.
                </p>
                <Separator />
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>RESTful and GraphQL API support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Webhook-based real-time event handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Secure authentication and authorization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  Security & Compliance First
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  Healthcare data demands the highest security standards. Our architecture incorporates HIPAA compliance, end-to-end encryption, comprehensive audit logging, and role-based access control from the ground up.
                </p>
                <Separator />
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>HIPAA-compliant data handling and storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>End-to-end encryption for data in transit and at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Comprehensive audit trails for all actions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  Human-in-the-Loop Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  While AI agents automate routine tasks, critical decisions remain under human oversight. The system provides recommendations and handles execution, but clinicians maintain ultimate control and can intervene at any point.
                </p>
                <Separator />
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Configurable approval workflows for critical actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Transparent AI decision explanations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Manual override capabilities at all stages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Plan Section */}
      <section id="implementation" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Implementation Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A phased approach to implementing the Agentic AI ecosystem, from initial discovery to full-scale deployment and continuous optimization.
            </p>
          </motion.div>

          {/* Implementation Journey Visual */}
          <div className="mb-16 rounded-3xl overflow-hidden border-2 border-border">
            <img 
              src="/images/implementation-roadmap.png" 
              alt="Implementation Journey" 
              className="w-full"
            />
          </div>

          {/* Implementation Phases */}
          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Planning",
                duration: "4-6 weeks",
                icon: Target,
                color: "from-[var(--color-teal-deep)] to-[var(--color-teal-medium)]",
                objectives: [
                  "Conduct stakeholder workshops to identify pain points and opportunities",
                  "Map existing clinical referral workflows and data flows",
                  "Define success metrics and KPIs for measuring AI impact",
                  "Assess current API capabilities and integration requirements",
                  "Select initial use case for MVP development"
                ],
                deliverables: [
                  "Detailed workflow documentation and process maps",
                  "Technical architecture specification",
                  "Integration requirements document",
                  "Project roadmap and resource plan"
                ]
              },
              {
                phase: "Phase 2",
                title: "MVP Development",
                duration: "8-12 weeks",
                icon: Rocket,
                color: "from-[var(--color-sage)] to-[var(--color-sage-light)]",
                objectives: [
                  "Develop core agentic architecture (Agent Core, Task Management, Knowledge Base)",
                  "Integrate with essential APIs from existing healthcare system",
                  "Build monitoring and logging infrastructure",
                  "Create user interface for agent interaction and oversight",
                  "Implement security and compliance measures"
                ],
                deliverables: [
                  "Functional MVP for single use case",
                  "API integration layer",
                  "Basic monitoring dashboard",
                  "Security and compliance documentation"
                ]
              },
              {
                phase: "Phase 3",
                title: "Pilot & Evaluation",
                duration: "6-8 weeks",
                icon: BarChart3,
                color: "from-[var(--color-coral)] to-[var(--color-coral-light)]",
                objectives: [
                  "Deploy MVP in controlled pilot environment with limited users",
                  "Monitor agent performance, accuracy, and efficiency",
                  "Gather user feedback from clinicians and administrators",
                  "Identify edge cases and areas for improvement",
                  "Measure against defined KPIs and success metrics"
                ],
                deliverables: [
                  "Pilot evaluation report with performance metrics",
                  "User feedback analysis and recommendations",
                  "Refined system based on pilot learnings",
                  "Go/no-go decision for scaled rollout"
                ]
              },
              {
                phase: "Phase 4",
                title: "Scaled Rollout & Iteration",
                duration: "Ongoing",
                icon: Zap,
                color: "from-[var(--color-purple-accent)] to-[var(--color-coral)]",
                objectives: [
                  "Gradually expand to additional departments and user groups",
                  "Continuously monitor system performance and user satisfaction",
                  "Iterate on features based on real-world usage data",
                  "Expand to additional use cases and workflows",
                  "Optimize AI models based on accumulated data"
                ],
                deliverables: [
                  "Full production deployment",
                  "Continuous improvement pipeline",
                  "Expanded feature set",
                  "Long-term performance analytics"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="rounded-3xl border-2 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                    <div className={`p-8 bg-gradient-to-br ${phase.color} text-white flex flex-col justify-center`}>
                      <Badge className="w-fit mb-4 bg-white/20 text-white border-white/30 rounded-full">
                        {phase.duration}
                      </Badge>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                          <phase.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-medium opacity-90">{phase.phase}</div>
                          <h3 className="text-2xl font-display font-bold">{phase.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          Key Objectives
                        </h4>
                        <ul className="space-y-2">
                          {phase.objectives.map((objective, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Separator className="my-6" />
                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-subtle-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Expected Benefits & Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Implementing an Agentic AI ecosystem delivers measurable improvements across operational efficiency, clinical outcomes, and patient satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                metric: "60-80%",
                title: "Reduction in Manual Processing Time",
                description: "Automated referral intake, triage, and routing eliminates repetitive manual tasks."
              },
              {
                metric: "40-50%",
                title: "Faster Referral Processing",
                description: "Intelligent prioritization and automated workflows accelerate time-to-specialist."
              },
              {
                metric: "95%+",
                title: "Accuracy in Task Execution",
                description: "AI-driven decision-making reduces human errors in data entry and routing."
              },
              {
                metric: "24/7",
                title: "Continuous Operation",
                description: "Agents work around the clock, processing referrals and managing workflows without breaks."
              },
              {
                metric: "30-40%",
                title: "Improved Resource Utilization",
                description: "Optimized specialist allocation and reduced administrative overhead."
              },
              {
                metric: "Enhanced",
                title: "Patient Experience",
                description: "Faster response times, proactive communication, and reduced wait times."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full text-center p-8 rounded-3xl border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl font-display font-bold text-primary mb-3">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Considerations */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Technical Implementation Guidance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Key technical considerations and best practices for successful implementation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="rounded-3xl border-2 p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Technology Stack Recommendations</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Agent Core & LLM</h4>
                  <p className="text-muted-foreground mb-2">OpenAI GPT-4, Anthropic Claude, or open-source alternatives like LLaMA 2 for reasoning and decision-making.</p>
                  <Badge variant="outline" className="mr-2 rounded-full">LangChain</Badge>
                  <Badge variant="outline" className="mr-2 rounded-full">LlamaIndex</Badge>
                  <Badge variant="outline" className="rounded-full">AutoGPT</Badge>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Workflow Orchestration</h4>
                  <p className="text-muted-foreground mb-2">Temporal, Apache Airflow, or Prefect for managing complex multi-step workflows.</p>
                  <Badge variant="outline" className="mr-2 rounded-full">Temporal</Badge>
                  <Badge variant="outline" className="mr-2 rounded-full">Airflow</Badge>
                  <Badge variant="outline" className="rounded-full">Prefect</Badge>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Knowledge Base</h4>
                  <p className="text-muted-foreground mb-2">Vector databases for semantic search and retrieval-augmented generation (RAG).</p>
                  <Badge variant="outline" className="mr-2 rounded-full">Pinecone</Badge>
                  <Badge variant="outline" className="mr-2 rounded-full">Weaviate</Badge>
                  <Badge variant="outline" className="rounded-full">ChromaDB</Badge>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Monitoring & Observability</h4>
                  <p className="text-muted-foreground mb-2">Comprehensive logging, tracing, and performance monitoring.</p>
                  <Badge variant="outline" className="mr-2 rounded-full">Datadog</Badge>
                  <Badge variant="outline" className="mr-2 rounded-full">Prometheus</Badge>
                  <Badge variant="outline" className="rounded-full">Grafana</Badge>
                </div>
              </div>
            </Card>

            <Card className="rounded-3xl border-2 p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Integration Best Practices</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "API Versioning & Backward Compatibility",
                    description: "Maintain stable API contracts and version endpoints to prevent breaking changes as the system evolves."
                  },
                  {
                    title: "Rate Limiting & Throttling",
                    description: "Implement intelligent rate limiting to prevent overwhelming existing systems while maximizing throughput."
                  },
                  {
                    title: "Error Handling & Retry Logic",
                    description: "Build robust error handling with exponential backoff and circuit breakers for resilient operations."
                  },
                  {
                    title: "Data Validation & Sanitization",
                    description: "Validate all data at integration boundaries to ensure data quality and prevent security vulnerabilities."
                  },
                  {
                    title: "Asynchronous Processing",
                    description: "Use message queues and event-driven architecture for non-blocking, scalable operations."
                  },
                  {
                    title: "Comprehensive Testing",
                    description: "Implement unit, integration, and end-to-end tests with special focus on edge cases and failure scenarios."
                  }
                ].map((practice, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{practice.title}</h4>
                      <p className="text-sm text-muted-foreground">{practice.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-teal-deep)] via-[var(--color-teal-medium)] to-[var(--color-sage)] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Healthcare Workflows?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Start your journey toward intelligent, autonomous clinical workflow management. Our team is ready to help you design, implement, and optimize your Agentic AI ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[var(--color-teal-deep)] hover:bg-white/90 rounded-full px-8 text-lg">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 text-lg">
                Download Architecture Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--color-teal-deep)] to-[var(--color-coral)] flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold">Agentic AI Healthcare</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2026 Agentic AI Healthcare Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
