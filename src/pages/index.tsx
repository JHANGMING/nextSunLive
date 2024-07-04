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
import { Html5Qrcode } from 'html5-qrcode';

const BarcodeScanner: React.FC = () => {
  const [scannedData, setScannedData] = useState<string>('No result');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  const startScanning = async () => {
    // 如果已經在掃描，先停止
    if (isScanning) {
      await stopScanning();
    }

    // 重置掃描結果
    setScannedData('Scanning...');

    const html5QrCode = new Html5Qrcode('reader');
    html5QrCodeRef.current = html5QrCode;

    const qrCodeSuccessCallback = async (decodedText: string) => {
      setScannedData(decodedText);
      await stopScanning(); // 掃描到結果後停止
    };

    const qrCodeErrorCallback = (errorMessage: string) => {
      console.error(`QR Code Error: ${errorMessage}`);
    };

    const config = {
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
      setScannedData('Failed to start scanning');
    }
  };

  const stopScanning = async () => {
    if (html5QrCodeRef.current) {
      try {
        await html5QrCodeRef.current.stop();
        html5QrCodeRef.current.clear();
        html5QrCodeRef.current = null;
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
        onClick={startScanning}
        style={{ marginTop: '20px' }}>
        Start Scanning
      </button>
      <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
        Result: {scannedData}
      </p>
    </div>
  );
};

export default BarcodeScanner;