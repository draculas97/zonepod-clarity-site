import { Button } from "@/components/ui/button";
import { Building2, Coffee, Lightbulb, Users, Wind, Zap, Shield, Wrench } from "lucide-react";
import heroPod from "@/assets/hero-pod.jpg";
import cafePod from "@/assets/cafe-pod.jpg";
import officePod from "@/assets/office-pod.jpg";
import pod1Person from "@/assets/pod-1person.jpg";
import pod2Person from "@/assets/pod-2person.jpg";
import podMeeting from "@/assets/pod-meeting.jpg";
import showcasePods from "@/assets/showcase-pods.jpg";
const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Swiss Navigation Bar */}
      <nav className="fixed top-0 w-full bg-background border-b border-border z-50">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="space-y-0">
            <div className="text-2xl font-bold tracking-tight leading-none">ZenPod</div>
            <div className="text-xs tracking-wide text-muted-foreground">by Zone by Stacia</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("cafe")} className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Café
            </button>
            <button onClick={() => scrollToSection("office")} className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Office
            </button>
            <button onClick={() => scrollToSection("models")} className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Models
            </button>
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Request Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Swiss Editorial Layout */}
      <section className="relative mt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="ZenPod productivity pod" className="w-full h-full object-cover" src="/lovable-uploads/7e2bca85-082b-4661-a34c-3b717392c027.png" />
        </div>
        <div className="relative z-10 w-full section-swiss">
          <div className="max-w-[1400px] mx-auto flex justify-end">
            <div className="max-w-xl space-y-8 pr-8">
              <div className="space-y-4">
                <h1 className="font-bold leading-none text-white">ZenPod</h1>
                <p className="text-xs tracking-widest text-white/90 uppercase">by Zone by Stacia</p>
                <h2 className="text-xl md:text-2xl font-normal text-white">Private. Sound-Controlled. Productivity Pods.</h2>
              </div>
              <p className="text-lg leading-relaxed text-white/90">
                Create focused workspaces anywhere — cafés, offices, coworking spaces, and public areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection("contact")} className="bg-primary text-black hover:bg-primary/90 font-medium px-8 py-6 text-base">
                  Request Demo
                </Button>
                <Button onClick={() => scrollToSection("models")} variant="outline" className="border-2 border-black bg-black text-white hover:bg-white font-medium px-8 py-6 text-base opacity-95 shadow rounded">
                  View Models
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Café Use Case Section */}
      <section id="cafe" className="section-swiss bg-background">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <img src={cafePod} alt="ZenPod in modern café" className="w-full h-auto" />
          </div>
          <div className="space-y-8">
            <h2 className="font-bold text-4xl md:text-5xl">Transform your café into a modern workspace.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Café customers today expect more than coffee. ZenPod allows cafés to offer premium, private working environments — increasing dwell time, revenue, and customer satisfaction.
            </p>
            <div className="grid gap-6 pt-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">World-Class Guest Experience</h3>
                <p className="text-sm text-muted-foreground">Create memorable moments with private, professional spaces.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Attract High-Value Customers</h3>
                <p className="text-sm text-muted-foreground">Professional customers pay premium rates for premium spaces.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Luxury, Functional Design</h3>
                <p className="text-sm text-muted-foreground">Architectural precision meets everyday usability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Use Case Section */}
      <section id="office" className="section-swiss bg-secondary">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="font-bold text-4xl md:text-5xl">High-productivity workspaces for modern offices.</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Today's workspaces demand private, distraction-free zones. ZenPod adds plug-and-play meeting rooms, huddle pods, and deep-work zones — without structural changes.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <div>
                  <strong className="font-bold text-sm">Instant private meeting rooms</strong>
                  <p className="text-sm text-muted-foreground">Deploy functional spaces in minutes.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <div>
                  <strong className="font-bold text-sm">Supports hybrid/remote teams</strong>
                  <p className="text-sm text-muted-foreground">Perfect for video calls and focus time.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <div>
                  <strong className="font-bold text-sm">Acoustic privacy</strong>
                  <p className="text-sm text-muted-foreground">Soundproof design eliminates distractions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <div>
                  <strong className="font-bold text-sm">Movable, modular infrastructure</strong>
                  <p className="text-sm text-muted-foreground">Reconfigure your space as needs change.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img src={officePod} alt="ZenPod in corporate office" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Product Models Grid */}
      <section id="models" className="section-swiss bg-background">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-bold mb-16 text-4xl md:text-5xl">Product Models</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <img src={pod1Person} alt="1-Person Pod" className="w-full h-80 object-cover" />
              <h3 className="text-xl font-bold">1-Person Pod</h3>
              <p className="text-sm text-muted-foreground">Compact individual workspace for deep focus.</p>
            </div>
            <div className="space-y-4">
              <img src={pod2Person} alt="2-Person Pod" className="w-full h-80 object-cover" />
              <h3 className="text-xl font-bold">2-Person Pod</h3>
              <p className="text-sm text-muted-foreground">Intimate meeting space for collaborative work.</p>
            </div>
            <div className="space-y-4">
              <img src={podMeeting} alt="Large Meeting Pod" className="w-full h-80 object-cover" />
              <h3 className="text-xl font-bold">Large Meeting Pod</h3>
              <p className="text-sm text-muted-foreground">Conference-grade space for teams of 4-6.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="section-swiss bg-secondary">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-bold mb-16 text-4xl md:text-5xl">Engineered for performance and comfort.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <Shield className="w-10 h-10" />
              <h3 className="text-lg font-bold">Soundproof Acoustic Shell</h3>
              <p className="text-sm text-muted-foreground">Advanced acoustic materials block external noise.</p>
            </div>
            <div className="space-y-3">
              <Wind className="w-10 h-10" />
              <h3 className="text-lg font-bold">Optimized Airflow</h3>
              <p className="text-sm text-muted-foreground">Silent ventilation system maintains fresh air circulation.</p>
            </div>
            <div className="space-y-3">
              <Lightbulb className="w-10 h-10" />
              <h3 className="text-lg font-bold">Ambient Lighting</h3>
              <p className="text-sm text-muted-foreground">Adjustable LED lighting mimics natural daylight cycles.</p>
            </div>
            <div className="space-y-3">
              <Zap className="w-10 h-10" />
              <h3 className="text-lg font-bold">Power + USB Connectivity</h3>
              <p className="text-sm text-muted-foreground">Integrated power outlets and USB charging ports.</p>
            </div>
            <div className="space-y-3">
              <Users className="w-10 h-10" />
              <h3 className="text-lg font-bold">High-Comfort Seating</h3>
              <p className="text-sm text-muted-foreground">Ergonomic furniture designed for extended use.</p>
            </div>
            <div className="space-y-3">
              <Building2 className="w-10 h-10" />
              <h3 className="text-lg font-bold">Modular Assembly</h3>
              <p className="text-sm text-muted-foreground">Quick installation without structural modifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="section-swiss bg-background">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Fast Assembly</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Delivered modular. Setup in under 1 hour.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Café Friendly Design</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Minimal disruption. No structural modifications.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Low Maintenance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Built with durable materials for daily use.</p>
          </div>
        </div>
      </section>

      {/* Final Showcase Section */}
      <section className="relative min-h-[80vh] flex items-end">
        <img src={showcasePods} alt="Multiple ZenPods in office environment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 section-swiss w-full bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-[1400px] mx-auto space-y-6">
            <h2 className="font-bold text-white text-5xl md:text-6xl">ZenPod</h2>
            <p className="text-xs tracking-widest text-white/80 uppercase">by Zone by Stacia</p>
            <p className="text-xl text-white/90">Private productivity pods for cafés, offices, and public spaces.</p>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary text-black hover:bg-primary/90 font-medium px-8 py-6 text-base">
              Get Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="section-swiss border-t border-border bg-background">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-bold mb-4">About ZenPod</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium productivity pods designed for modern workspaces by Zone by Stacia.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Café Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Revenue Enhancement</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Customer Experience</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Office Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Meeting Rooms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Focus Spaces</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Hybrid Work</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@zenpod.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © ZenPod by Zone by Stacia — All rights reserved.
        </div>
      </footer>
    </div>;
};
export default Index;