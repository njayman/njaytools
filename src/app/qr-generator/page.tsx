"use client";
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Layout from "@njaytools/components/Layout";

export default function QRGenerator() {
  const [text, setText] = useState("https://tools.njayman.com");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    downloadLink.click();
  };

  return (
    <Layout
      title="QR Code Generator"
      description="Create QR codes instantly for links, text, or any message."
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">QR Code Generator</h1>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
          placeholder="Enter URL or text"
        />

        <div className="flex flex-col items-center gap-4 py-6">
          <QRCodeCanvas
            ref={canvasRef}
            value={text || " "}
            size={200}
            bgColor="#FFFFFF"
            fgColor="#000000"
            includeMargin
          />

          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            Download PNG
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center">
          This QR code updates live as you type.
        </p>
      </div>
    </Layout>
  );
}
