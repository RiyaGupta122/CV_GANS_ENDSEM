import { Shield, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About FaceGuard AI</h1>
          <p className="text-xl text-gray-600">
            A cutting-edge solution for face anti-spoofing using advanced generative adversarial networks.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At FaceGuard AI, we're dedicated to developing robust security solutions that protect biometric 
            authentication systems from increasingly sophisticated presentation attacks. Our mission is to stay 
            ahead of spoofing techniques by leveraging the latest advancements in generative adversarial networks 
            and computer vision.
          </p>
          
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img 
                src="https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Security technology" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">The Growing Threat</h3>
              <p className="text-gray-700">
                As facial recognition becomes increasingly prevalent in security systems, from smartphone 
                authentication to border control, the incentive for attackers to defeat these systems grows. 
                Traditional anti-spoofing methods struggle to keep pace with advanced attack techniques like 
                3D masks, deepfakes, and high-quality printed photos.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
          <p className="text-gray-700 mb-6">
            FaceGuard AI takes a fundamentally different approach by using generative adversarial networks (GANs) 
            to detect the subtle artifacts and inconsistencies present in spoofed facial presentations. Our 
            system is constantly learning and improving, making it increasingly difficult for attackers to 
            circumvent.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6">Key Advantages</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">High Accuracy</h3>
                <p className="text-gray-700">
                  Our GAN-based approach achieves over 99% accuracy in detecting various types of presentation attacks.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-time Processing</h3>
                <p className="text-gray-700">
                  Optimized for speed, our models can perform detection in milliseconds on standard hardware.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-700">
                  Our models continuously improve by learning from new attack vectors and spoofing techniques.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cross-platform</h3>
                <p className="text-gray-700">
                  Deploy on mobile, web, or embedded systems with consistent performance across platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Project Background</h2>
          
          <p className="text-gray-700 mb-4">
            This project is based on the open-source work by Kashish on GitHub, which implements a GAN-based
            face anti-spoofing system. We've extended this work with optimizations, additional features, and a
            user-friendly interface.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Original Repository</h3>
            <p className="text-gray-700 mb-2">
              The core technology is derived from the Cv_gans repository by Codewithkashish.
            </p>
            <a 
              href="https://github.com/Codewithkashish/Cv_gans" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              https://github.com/Codewithkashish/Cv_gans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;