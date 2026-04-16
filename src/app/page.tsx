"use client";

import { useCallback, useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import CoverPageForm from "@/components/CoverPageForm";
import CoverPagePreview from "@/components/CoverPagePreview";
import { CoverPageData, defaultData, pageDimensions } from "@/lib/types";

export default function Home() {
  const [data, setData] = useState<CoverPageData>(defaultData);
  const [downloading, setDownloading] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const captureCanvas = useCallback(async () => {
    const el = printRef.current;
    if (!el) return null;

    const coverPage = el.querySelector(".cover-page") as HTMLElement;
    if (!coverPage) return null;

    // Clone the cover page into a hidden full-size container for clean capture
    const clone = coverPage.cloneNode(true) as HTMLElement;
    clone.style.position = "fixed";
    clone.style.top = "0";
    clone.style.left = "0";
    clone.style.zIndex = "-9999";
    clone.style.transform = "none";
    clone.style.opacity = "1";
    clone.style.border = "none";
    clone.style.boxShadow = "none";
    document.body.appendChild(clone);

    try {
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: clone.scrollWidth,
        height: clone.scrollHeight,
      });
      return canvas;
    } finally {
      document.body.removeChild(clone);
    }
  }, []);

  const handleDownloadImage = useCallback(async () => {
    setDownloading(true);
    try {
      const canvas = await captureCanvas();
      if (!canvas) return;

      const link = document.createElement("a");
      link.download = `${data.title || "cover-page"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setDownloading(false);
    }
  }, [captureCanvas, data.title]);

  const handleDownloadPDF = useCallback(async () => {
    setDownloading(true);
    try {
      const canvas = await captureCanvas();
      if (!canvas) return;

      const dims = pageDimensions[data.pageSize];
      const printWindow = window.open("", "_blank");
      if (!printWindow) return;

      const imgData = canvas.toDataURL("image/png");
      printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
<title>${data.title || "Cover Page"}</title>
<style>
  @page { size: ${dims.width} ${dims.height}; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: ${dims.width}; height: ${dims.height}; }
  img { width: 100%; height: 100%; display: block; object-fit: fill; }
</style>
</head>
<body>
<img src="${imgData}" />
<script>
  window.onload = function() {
    setTimeout(function() { window.print(); window.close(); }, 400);
  };
<\/script>
</body>
</html>`);
      printWindow.document.close();
    } finally {
      setDownloading(false);
    }
  }, [captureCanvas, data.pageSize, data.title]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 no-print sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            JU
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900">
              JU Cover Page Generator
            </h1>
            <p className="text-xs text-gray-500">
              Jahangirnagar University &mdash; Assignment, Lab Report & More
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form Panel */}
          <div className="w-full lg:w-96 shrink-0 no-print">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <CoverPageForm
                data={data}
                onChange={setData}
                onDownloadImage={handleDownloadImage}
                onDownloadPDF={handleDownloadPDF}
                downloading={downloading}
              />
            </div>
          </div>

          {/* Preview Panel */}
          <div className="flex-1 min-w-0">
            <div className="no-print mb-3 flex items-center justify-between">
              <p className="text-sm text-gray-500">Live Preview</p>
              <p className="text-xs text-gray-400">
                {data.pageSize.toUpperCase()} &middot;{" "}
                {pageDimensions[data.pageSize].width} &times;{" "}
                {pageDimensions[data.pageSize].height}
              </p>
            </div>
            <div className="overflow-x-auto pb-8">
              <div
                className="origin-top-left"
                style={{ transform: "scale(0.55)" }}
              >
                <CoverPagePreview ref={printRef} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
