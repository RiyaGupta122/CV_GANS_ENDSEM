import { useState } from 'react';
import { Info, Network, Database, Server, ChevronDown, ChevronUp } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Technical = () => {
  const [openSection, setOpenSection] = useState('architecture');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const performanceData = {
    labels: ['Print Attack', 'Replay Attack', '3D Mask', 'Deepfake'],
    datasets: [
      {
        label: 'Detection Accuracy (%)',
        data: [99.7, 98.5, 97.2, 96.8],
        backgroundColor: 'rgba(37, 99, 235, 0.8)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Detection Accuracy by Attack Type',
      },
    },
    scales: {
      y: {
        min: 90,
        max: 100,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Technical Details</h1>
          <p className="text-xl text-gray-600">
            An in-depth look at our GAN-based face anti-spoofing technology.
          </p>
        </div>
        
        {/* Architecture Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <button 
            className="w-full flex justify-between items-center p-6 bg-blue-800 text-white"
            onClick={() => toggleSection('architecture')}
          >
            <div className="flex items-center">
              <Network className="mr-2" />
              <h2 className="text-xl font-semibold">Architecture</h2>
            </div>
            {openSection === 'architecture' ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {openSection === 'architecture' && (
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">GAN-based Approach</h3>
                  <p className="text-gray-700 mb-4">
                    Our system uses a modified GAN architecture where the generator creates synthetic spoof
                    examples, while the discriminator learns to distinguish between real and spoofed faces.
                    This adversarial training leads to a robust detection model.
                  </p>
                  
                  <h4 className="font-semibold mt-4 mb-2">Key Components:</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Feature Extraction Network (ResNet-50)</li>
                    <li>Multi-head Attention Mechanism</li>
                    <li>Depth Estimation Module</li>
                    <li>Temporal Consistency Analyzer</li>
                    <li>Classification Head</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                    alt="Neural Network Architecture" 
                    className="rounded-lg shadow-md w-full"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Visualization of our GAN architecture for face anti-spoofing.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Processing Pipeline</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-3">
                  <li>
                    <span className="font-medium">Input Processing:</span> Face detection, alignment, and 
                    normalization are performed on the input image or video frame.
                  </li>
                  <li>
                    <span className="font-medium">Feature Extraction:</span> A deep CNN extracts 
                    multi-scale features from the facial image.
                  </li>
                  <li>
                    <span className="font-medium">Depth Estimation:</span> For 3D mask detection, a 
                    depth estimation module analyzes facial geometry.
                  </li>
                  <li>
                    <span className="font-medium">Texture Analysis:</span> Specially designed filters 
                    detect micro-texture patterns that differ between real and spoofed faces.
                  </li>
                  <li>
                    <span className="font-medium">Multi-modal Fusion:</span> Features from different 
                    modalities are fused using attention mechanisms.
                  </li>
                  <li>
                    <span className="font-medium">Classification:</span> The final layer outputs a 
                    binary classification (real/fake) and a confidence score.
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
        
        {/* Dataset Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <button 
            className="w-full flex justify-between items-center p-6 bg-blue-800 text-white"
            onClick={() => toggleSection('dataset')}
          >
            <div className="flex items-center">
              <Database className="mr-2" />
              <h2 className="text-xl font-semibold">Dataset</h2>
            </div>
            {openSection === 'dataset' ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {openSection === 'dataset' && (
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Our model was trained on a combination of public datasets and our own proprietary dataset, 
                covering a wide range of spoofing attack types and environmental conditions.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Training Data</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Dataset
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subjects
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Attack Types
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Samples
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CASIA-FASD</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Print, Replay</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">600</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Replay-Attack</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Print, Digital Replay</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,300</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">MSU-MFSD</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Print, Phone, Tablet</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">440</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">OULU-NPU</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">55</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Print, Display</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5,940</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proprietary</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3D Mask, Deepfake, Silicone</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-lg font-semibold mt-8 mb-3">Data Augmentation</h3>
              <p className="text-gray-700 mb-4">
                To improve model robustness, we applied various data augmentation techniques:
              </p>
              <ul className="list-disc pl-5 text-gray-700 grid md:grid-cols-2 gap-x-4 gap-y-2">
                <li>Brightness and contrast variations</li>
                <li>Random rotation (±15°)</li>
                <li>Gaussian noise addition</li>
                <li>Color jittering</li>
                <li>Random occlusions</li>
                <li>Compression artifacts</li>
                <li>Blur variations</li>
                <li>Lighting condition simulation</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Performance Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <button 
            className="w-full flex justify-between items-center p-6 bg-blue-800 text-white"
            onClick={() => toggleSection('performance')}
          >
            <div className="flex items-center">
              <Server className="mr-2" />
              <h2 className="text-xl font-semibold">Performance Metrics</h2>
            </div>
            {openSection === 'performance' ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {openSection === 'performance' && (
            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Detection Accuracy</h3>
                <div className="h-64">
                  <Bar data={performanceData} options={chartOptions} />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Metrics</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-700">Average Accuracy:</span>
                      <span className="font-medium">98.2%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">False Acceptance Rate:</span>
                      <span className="font-medium">0.8%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">False Rejection Rate:</span>
                      <span className="font-medium">1.2%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Equal Error Rate:</span>
                      <span className="font-medium">0.95%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">Average Processing Time:</span>
                      <span className="font-medium">115ms</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cross-Dataset Performance</h4>
                  <p className="text-gray-700 mb-2">
                    Our model demonstrates strong generalization capability when tested on unseen datasets:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-700">CASIA → Replay:</span>
                      <span className="font-medium">96.1%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">OULU → MSU:</span>
                      <span className="font-medium">95.3%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-700">SiW → 3DMAD:</span>
                      <span className="font-medium">97.8%</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex">
                  <Info className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">Deployment Considerations</h4>
                    <p className="text-blue-700 text-sm">
                      The model can be optimized for different platforms. For web deployment, we use TensorFlow.js
                      with model quantization to reduce size and improve inference speed, while maintaining 
                      accuracy above 97%. For mobile deployments, additional optimizations like pruning and 
                      weight clustering are applied.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Future Work */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <button 
            className="w-full flex justify-between items-center p-6 bg-blue-800 text-white"
            onClick={() => toggleSection('future')}
          >
            <div className="flex items-center">
              <Info className="mr-2" />
              <h2 className="text-xl font-semibold">Future Work & Research</h2>
            </div>
            {openSection === 'future' ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {openSection === 'future' && (
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Our research team is continually working to improve the FaceGuard AI system. Here are some of
                the areas we're currently focusing on:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Ongoing Research</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-3">
                    <li>
                      <span className="font-medium">Multi-modal Integration:</span> Combining visible light, 
                      infrared, and depth sensing for enhanced detection accuracy.
                    </li>
                    <li>
                      <span className="font-medium">Zero-shot Learning:</span> Developing models that can 
                      detect previously unseen attack types without specific training.
                    </li>
                    <li>
                      <span className="font-medium">Efficient Architectures:</span> Designing lightweight 
                      models that can run efficiently on edge devices with limited computational resources.
                    </li>
                    <li>
                      <span className="font-medium">Adversarial Defenses:</span> Strengthening the model 
                      against adversarial attacks aimed at bypassing detection.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Upcoming Features</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-3">
                    <li>
                      <span className="font-medium">Mobile SDK:</span> A lightweight SDK for Android and 
                      iOS applications with offline detection capabilities.
                    </li>
                    <li>
                      <span className="font-medium">Enterprise API:</span> Scalable cloud-based solution 
                      for high-volume processing with detailed analytics.
                    </li>
                    <li>
                      <span className="font-medium">Enhanced Reporting:</span> Detailed attack classification 
                      with specifics about the type of spoofing attempt detected.
                    </li>
                    <li>
                      <span className="font-medium">Integration Tools:</span> Plugins for popular 
                      authentication and identity verification platforms.
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Research Collaboration</h3>
                <p className="text-yellow-700">
                  We're actively seeking collaboration with academic and industry partners to advance 
                  the state of the art in face anti-spoofing technology. If you're interested in collaborating 
                  or have ideas for improvements, please reach out to our research team.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technical;