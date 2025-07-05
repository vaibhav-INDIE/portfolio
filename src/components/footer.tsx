import { Github, Linkedin, Mail, Code, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/vaibhav-INDIE', // ✅ your GitHub URL
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vaibhav-jain-3b7422204/', // ✅ your LinkedIn URL
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:vaibhavtarun52@gmail.com', // ✅ your email address
    },
  ];

 return (
    <footer className="relative bg-black border-t border-[rgba(38,38,38,1)] overflow-hidden">
      {/* ✨ Aurora Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-aurora bg-[radial-gradient(circle_at_center,_rgba(var(--primary-rgb),0.1)_0%,_rgba(var(--primary-rgb),0)_50%)]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
            {/* Left Side: Name and Animated Title */}
            <div className="text-center md:text-left">
            {/* The h3 is now the container for the hover effect */}
            <h3 className="relative group text-2xl font-bold w-fit mx-auto md:mx-0 overflow-hidden">
                {/* The visible text */}
                <span className="text-white">
                Vaibhav Jain
                </span>
                
                {/* The Shimmer Element */}
                <span
                className="absolute top-0 left-0 h-full w-full
                            bg-gradient-to-r from-transparent via-white/80 to-transparent
                            transform -translate-x-full transition-transform duration-500 ease-in-out
                            group-hover:translate-x-full"
                aria-hidden="true"
                />
            </h3>
            
            <p className="text-sm text-[rgba(255,255,255,0.5)] mt-1">
                AI Innovator & Full-Stack Developer
            </p>
            </div>

          {/* Right Side: Social Links with Enhanced Hover */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-sm font-semibold tracking-wider text-[rgba(255,255,255,0.7)] uppercase">
              Get in Touch
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group"
                >
                  <div className="p-3 rounded-full bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.6)] 
                                  hover:bg-[rgba(var(--primary-rgb),0.1)] hover:text-primary 
                                  hover:scale-110 hover:-translate-y-1 
                                  transition-all duration-300 ease-in-out
                                  shadow-lg shadow-transparent hover:shadow-[rgba(var(--primary-rgb),0.2)]">
                    <link.icon size={22} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(38,38,38,1)] to-transparent my-8"></div>

        {/* Bottom Section: Copyright and Built With */}
        <div className="text-center text-sm text-[rgba(255,255,255,0.5)] space-y-2">
          <p>
            © {new Date().getFullYear()} Vaibhav Jain. All Rights Reserved.
          </p>
          <div className="flex justify-center items-center gap-1.5">
            <span>Built with</span> <Heart size={14} className="text-primary" /> <span>and</span> <Code size={14} /> <span>using Next.js & Tailwind CSS.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
