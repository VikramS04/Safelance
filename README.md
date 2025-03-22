import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PaymentPlatform />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-6 bg-black">
      <div className="text-white font-bold text-lg px-4 py-2 bg-gray-800 rounded-lg">BRAND</div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-white text-sm">Home</a>
        <a href="#" className="text-white text-sm">Features</a>
        <a href="#" className="text-white text-sm">Testimonial</a>
      </div>
      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Request Demo</Button>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">Empowering Freelance Finance</h1>
      <p className="text-gray-400 mt-4 max-w-md mx-auto">
        We provide a secure, transparent platform ensuring freelancers receive fair, timely payments.
      </p>
      <Button className="bg-blue-500 mt-6 px-6 py-3 text-lg font-medium rounded-lg">Get Started</Button>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-gray-900 text-white py-20 px-6 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img src="/about-image.png" alt="Freelancer working" className="rounded-lg" />
      </div>
      <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
        <h2 className="text-4xl font-bold">About Our Platform</h2>
        <p className="text-gray-400 mt-4">
          We champion transparent transactions, ensuring freelancers are valued and paid fairly.
        </p>
        <Button className="bg-blue-500 mt-6 px-6 py-3 text-lg font-medium rounded-lg">Learn More</Button>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold">Our Projects</h2>
      <div className="flex space-x-6 mt-8">
        <div className="bg-gray-800 p-6 rounded-lg">Mobile App</div>
        <div className="bg-gray-800 p-6 rounded-lg">Website Design</div>
        <div className="bg-gray-800 p-6 rounded-lg">Data Analysis</div>
      </div>
    </div>
  );
}

function PaymentPlatform() {
  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold">Secure Payment Platform</h2>
      <p className="text-gray-400 mt-4">Ensuring fair and transparent transactions for freelancers.</p>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="text-center py-20 bg-blue-600">
      <h2 className="text-4xl font-bold">Connect With Us</h2>
      <form className="mt-6 space-y-4">
        <input type="email" placeholder="Enter email" className="p-2 rounded-lg w-full" />
        <input type="text" placeholder="Your name" className="p-2 rounded-lg w-full" />
        <textarea placeholder="Your message" className="p-2 rounded-lg w-full"></textarea>
        <Button className="bg-black text-white px-4 py-2 rounded-lg">Register Now</Button>
      </form>
    </div>
  );
}

function FAQSection() {
  return (
    <div className="bg-gray-900 text-white py-20">
      <h2 className="text-4xl font-bold text-center">FAQ</h2>
      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gray-800 rounded-lg">How does it work?</div>
        <div className="p-4 bg-gray-800 rounded-lg">Is my data secure?</div>
        <div className="p-4 bg-gray-800 rounded-lg">Can I get support?</div>
        <div className="p-4 bg-gray-800 rounded-lg">What if I disagree?</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-center py-6 bg-black text-gray-400">
      <p>&copy; 2025 CodeDesigns. All rights reserved.</p>
      <p>Privacy Policy | Terms of Use</p>
    </footer>
  );
}# Safelance
