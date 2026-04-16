"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import CoverPageForm from "@/components/CoverPageForm";
import CoverPagePreview from "@/components/CoverPagePreview";
import { CoverPageData, defaultData, pageDimensions } from "@/lib/types";

// ── SVG Icons ──
const IconPdf = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="18" x2="12" y2="12" />
    <polyline points="9 15 12 18 15 15" />
  </svg>
);
const IconImage = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);
const IconPrint = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);
const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const IconEdit = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const IconEye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function Home() {
  const [data, setData] = useState<CoverPageData>(defaultData);
  const [downloading, setDownloading] = useState(false);
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");
  const printRef = useRef<HTMLDivElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const previewInnerRef = useRef<HTMLDivElement>(null);

  // ── Auto-scale preview to fit container ──
  useEffect(() => {
    const container = previewContainerRef.current;
    const inner = previewInnerRef.current;
    if (!container || !inner) return;

    const update = () => {
      const coverPage = inner.querySelector(".cover-page");
      if (!coverPage) return;
      const cw = container.clientWidth - 40;
      const ch = container.clientHeight - 40;
      const pw = coverPage.scrollWidth;
      const ph = coverPage.scrollHeight;
      const scale = Math.min(cw / pw, ch / ph, 1);
      inner.style.transform = `scale(${scale})`;
    };

    const ro = new ResizeObserver(update);
    ro.observe(container);
    update();
    return () => ro.disconnect();
  }, [data.templateType, data.pageSize, mobileTab]);

  // ── Capture logic ──
  const captureCanvas = useCallback(async () => {
    const el = printRef.current;
    if (!el) return null;
    const coverPage = el.querySelector(".cover-page") as HTMLElement;
    if (!coverPage) return null;

    const clone = coverPage.cloneNode(true) as HTMLElement;
    clone.style.position = "fixed";
    clone.style.top = "0";
    clone.style.left = "0";
    clone.style.zIndex = "-9999";
    clone.style.transform = "none";
    clone.style.border = "none";
    clone.style.boxShadow = "none";
    document.body.appendChild(clone);
    try {
      return await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: clone.scrollWidth,
        height: clone.scrollHeight,
      });
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
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [dims.w, dims.h],
      });
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, dims.w, dims.h);
      pdf.save(`${data.title || "cover-page"}.pdf`);
    } finally {
      setDownloading(false);
    }
  }, [captureCanvas, data.pageSize, data.title]);

  const handlePrint = useCallback(() => window.print(), []);

  const actionBtn =
    "h-9 px-3.5 rounded-lg text-xs font-semibold cursor-pointer border transition-all flex items-center gap-2 disabled:opacity-40";

  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      {/* ════════ HEADER ════════ */}
      <header className="no-print bg-white border-b border-gray-200 shrink-0 z-50">
        <div className="px-3 lg:px-5 h-12 flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm">
              JU
            </div>
            <div className="hidden md:block">
              <h1 className="text-sm font-bold text-gray-900 leading-tight">
                Cover Page Generator
              </h1>
              <p className="text-[10px] text-gray-400 leading-tight">
                Jahangirnagar University
              </p>
            </div>
          </div>

          {/* Page info - desktop */}
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
            <span className="font-medium text-gray-500">
              {data.pageSize.toUpperCase()}
            </span>
            <span>·</span>
            <span>
              {pageDimensions[data.pageSize].width} x{" "}
              {pageDimensions[data.pageSize].height}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className={`${actionBtn} bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 shadow-sm`}
            >
              <IconPdf />
              <span className="hidden sm:inline">PDF</span>
            </button>
            <button
              onClick={handleDownloadImage}
              disabled={downloading}
              className={`${actionBtn} bg-white text-gray-700 border-gray-200 hover:bg-gray-50`}
            >
              <IconImage />
              <span className="hidden sm:inline">PNG</span>
            </button>
            <button
              onClick={handlePrint}
              className={`${actionBtn} bg-white text-gray-700 border-gray-200 hover:bg-gray-50`}
            >
              <IconPrint />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Divider + socials on desktop */}
            <div className="hidden lg:flex items-center gap-2 ml-1 pl-2.5 border-l border-gray-200">
              <a
                href="https://github.com/zamansheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-600 transition-colors"
              >
                <IconGithub />
              </a>
              <a
                href="https://www.facebook.com/zamansheikh.404"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transition-colors"
              >
                <IconFacebook />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ════════ MOBILE TAB BAR ════════ */}
      <div className="lg:hidden no-print bg-white border-b border-gray-200 shrink-0">
        <div className="flex">
          <button
            onClick={() => setMobileTab("edit")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
              mobileTab === "edit"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-400"
            }`}
          >
            <IconEdit />
            Edit
          </button>
          <button
            onClick={() => setMobileTab("preview")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
              mobileTab === "preview"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-400"
            }`}
          >
            <IconEye />
            Preview
          </button>
        </div>
      </div>

      {/* ════════ MAIN CONTENT ════════ */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        {/* ── Form Panel ── */}
        <div
          className={`no-print w-full lg:w-[430px] xl:w-[470px] shrink-0 lg:border-r border-gray-200 bg-white overflow-y-auto thin-scroll ${
            mobileTab === "edit" ? "flex-1 lg:flex-none" : "hidden lg:block"
          }`}
        >
          <div className="p-4 lg:p-5">
            <CoverPageForm data={data} onChange={setData} />
          </div>
          {/* Mobile credit */}
          <div className="lg:hidden flex items-center justify-center gap-3 px-4 pb-4 text-[11px] text-gray-400">
            <span>
              Built by{" "}
              <a
                href="https://github.com/zamansheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 font-medium"
              >
                zamansheikh
              </a>
            </span>
            <a href="https://github.com/zamansheikh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <IconGithub />
            </a>
            <a href="https://www.facebook.com/zamansheikh.404" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <IconFacebook />
            </a>
          </div>
        </div>

        {/* ── Preview Panel ── */}
        <div
          ref={previewContainerRef}
          className={`flex-1 min-h-0 flex items-center justify-center overflow-hidden ${
            mobileTab === "preview" ? "block" : "hidden lg:flex"
          }`}
          style={{
            background:
              "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundColor: "#f1f5f9",
          }}
        >
          <div
            ref={(el) => {
              previewInnerRef.current = el;
              if (printRef.current === null && el) {
                // noop — printRef is set via CoverPagePreview
              }
            }}
            className="origin-center"
            style={{ transform: "scale(0.5)" }}
          >
            <CoverPagePreview ref={printRef} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
