// import Layout from '@/common/Layout';
// import LandingPage from '@/modules/LandingPage';

// export default function Home() {
//   return (
//     <Layout pageCategory="landingPage">
//       <LandingPage />
//     </Layout>
//   );
// }
import React, { useState, useRef } from 'react';
import {
  Html5Qrcode,
} from 'html5-qrcode';

const BarcodeScanner: React.FC = () => {
  const [scannedData, setScannedData] = useState<string>('No result');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  const startScanning = async () => {
    const html5QrCode = new Html5Qrcode('reader');
    html5QrCodeRef.current = html5QrCode;

    const qrCodeSuccessCallback = (
      decodedText: any,
      decodedResult: any
    ) => {
      setScannedData(decodedText);
      stopScanning(); // 偵測到一次條碼後自動停止掃描
    };

    const qrCodeErrorCallback = (errorMessage: any) => {
      console.error(`QR Code Error: ${errorMessage}`);
    };

    const config= {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    };

    try {
      await html5QrCode.start(
        { facingMode: 'environment' },
        config,
        qrCodeSuccessCallback,
        qrCodeErrorCallback
      );
      setIsScanning(true);
    } catch (err) {
      console.error('Failed to start html5QrCode', err);
    }
  };

  const stopScanning = async () => {
    if (html5QrCodeRef.current) {
      try {
        await html5QrCodeRef.current.stop();
        await html5QrCodeRef.current.clear();
        setIsScanning(false);
      } catch (err) {
        console.error('Failed to stop html5QrCode', err);
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <h1>Barcode Scanner</h1>
      <div
        id="reader"
        style={{
          width: '500px',
          height: '500px',
          display: isScanning ? 'block' : 'none',
        }}></div>
      <button
        className="bg-slate-400 p-4 rounded-md hover:text-white"
        onClick={isScanning ? stopScanning : startScanning}
        style={{ marginTop: '20px' }}>
        {isScanning ? 'Stop Scanning' : 'Start Scanning'}
      </button>
      <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
        {scannedData}
      </p>
    </div>
  );
};

export default BarcodeScanner;