import { useState, useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Camera, RefreshCw, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockDetection } from '../utils/mockModel';

const LiveDemo = () => {
  const webcamRef = useRef<Webcam>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectionResult, setDetectionResult] = useState<null | {
    isReal: boolean;
    confidence: number;
    processingTime: number;
  }>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    
    setIsProcessing(true);
    const imageSrc = webcamRef.current.getScreenshot();
    
    // Simulating processing with the mock detection function
    setTimeout(() => {
      const result = mockDetection();
      setDetectionResult(result);
      setIsProcessing(false);
    }, 1500);
  }, [webcamRef]);

  const handleCameraError = (error: string | DOMException) => {
    setCameraError(typeof error === 'string' ? error : error.message);
    setHasPermission(false);
  };

  useEffect(() => {
    // Check if user has already granted camera permission
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setHasPermission(true))
      .catch((error) => {
        handleCameraError(error);
      });
  }, []);

  const resetDetection = () => {
    setDetectionResult(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Live Face Anti-Spoofing Demo</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 bg-blue-800 text-white">
            <h2 className="text-xl font-semibold flex items-center">
              <Camera className="mr-2" /> 
              Live Detection
            </h2>
            <p className="text-blue-100">
              Position your face in the camera view and click "Analyze" to check for spoofing.
            </p>
          </div>
          
          <div className="p-6">
            {hasPermission === false ? (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-red-700">Camera Access Denied</h3>
                <p className="text-red-600 mb-2">
                  {cameraError || "Please allow camera access to use the live demo."}
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3">
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    {isProcessing && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg z-10">
                        <div className="text-white text-center">
                          <RefreshCw className="w-12 h-12 mx-auto mb-2 animate-spin" />
                          <p className="text-lg">Analyzing...</p>
                        </div>
                      </div>
                    )}
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      videoConstraints={{
                        width: 640,
                        height: 480,
                        facingMode: "user"
                      }}
                      onUserMediaError={handleCameraError}
                      className="w-full rounded-lg"
                    />
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <motion.button
                      onClick={detectionResult ? resetDetection : capture}
                      className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                        detectionResult
                          ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {detectionResult ? (
                        <>
                          <RefreshCw className="inline w-5 h-5 mr-2" />
                          Try Again
                        </>
                      ) : (
                        <>
                          <Camera className="inline w-5 h-5 mr-2" />
                          Analyze Face
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
                
                <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Detection Results</h3>
                  
                  {detectionResult ? (
                    <div>
                      <div className={`text-center p-4 rounded-lg mb-4 ${
                        detectionResult.isReal ? 'detection-status-real' : 'detection-status-fake'
                      }`}>
                        <p className="text-2xl font-bold">
                          {detectionResult.isReal ? 'REAL FACE' : 'FAKE DETECTED'}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Confidence</p>
                          <p className="text-lg font-semibold">{detectionResult.confidence.toFixed(2)}%</p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${detectionResult.isReal ? 'bg-green-600' : 'bg-red-600'}`}
                              style={{ width: `${detectionResult.confidence}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-500">Processing Time</p>
                          <p className="text-lg font-semibold">{detectionResult.processingTime.toFixed(2)} ms</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500 py-8">
                      <p>Click "Analyze Face" to begin detection</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">How to Use</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Ensure you're in a well-lit environment.</li>
            <li>Position your face clearly in the camera view.</li>
            <li>Click "Analyze Face" to start the detection process.</li>
            <li>Results will show whether your face is real or spoofed.</li>
            <li>Try different scenarios like holding up a photo or a digital screen to test the detection.</li>
          </ol>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <h3 className="text-lg font-semibold text-yellow-800">Note</h3>
            <p className="text-yellow-700">
              This is a demonstration using simulated results. In a production environment, 
              our full GAN-based model would provide more accurate anti-spoofing detection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;