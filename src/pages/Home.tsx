import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Advanced Face Anti-Spoofing Powered by AI
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Detect and prevent facial recognition fraud with our cutting-edge GAN-based 
                anti-spoofing technology.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/live-demo" 
                  className="flex items-center justify-center px-6 py-3 bg-white text-blue-800 font-semibold rounded-md hover:bg-blue-50 transition-colors"
                >
                  Try Live Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/technical" 
                  className="flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
                >
                  Learn How It Works
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="AI Face Recognition" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg p-6 card-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced GAN Technology</h3>
              <p className="text-gray-600">
                Leveraging state-of-the-art Generative Adversarial Networks to detect even the most sophisticated spoofing attempts.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 card-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Detection</h3>
              <p className="text-gray-600">
                Instant analysis of live video feeds to determine authenticity with high accuracy and minimal latency.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg p-6 card-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Analytics</h3>
              <p className="text-gray-600">
                Detailed insights and performance metrics to understand detection accuracy and system performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Capture</h3>
              <p className="text-gray-600">
                Live video from your camera is captured and processed frame by frame.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Analyze</h3>
              <p className="text-gray-600">
                Our GAN model analyzes facial texture, patterns, and inconsistencies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Detect</h3>
              <p className="text-gray-600">
                The system determines if the face is real or a spoof attempt.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Report</h3>
              <p className="text-gray-600">
                Results are displayed with confidence scores and visual indicators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to try it yourself?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience our cutting-edge face anti-spoofing technology with a live demonstration.
          </p>
          <Link 
            to="/live-demo" 
            className="inline-flex items-center px-6 py-3 bg-white text-blue-800 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Go to Live Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;