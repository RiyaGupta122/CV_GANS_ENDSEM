import { Shield, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="w-6 h-6 text-blue-800 mr-2" />
            <span className="text-lg font-semibold text-blue-800">FaceGuard AI</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Codewithkashish/Cv_gans" 
               className="text-gray-600 hover:text-blue-800 transition-colors"
               target="_blank" 
               rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:contact@faceguard.ai" 
               className="text-gray-600 hover:text-blue-800 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} FaceGuard AI. All rights reserved.</p>
          <p className="mt-1">Based on the work by <a href="https://github.com/Codewithkashish/Cv_gans" className="text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">Codewithkashish</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;