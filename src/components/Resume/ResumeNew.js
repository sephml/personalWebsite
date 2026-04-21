import React, { useState, useRef, useEffect } from "react";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker - use CDN for better compatibility with AWS Amplify
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(600);
  const containerRef = useRef(null);
  
  // Reference PDF from public folder - works for both dev and production deployment
  const pdf = `${import.meta.env.BASE_URL}Sep_Aminian_CV.pdf`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Responsive PDF width
  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setPageWidth(width > 600 ? 600 : width - 16);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Particle />

      <div className="container-custom" style={{ position: "relative", zIndex: 10, paddingTop: "100px", paddingBottom: "80px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }} className="animate-fade-in">
          <div className="section-label" style={{ marginBottom: "12px" }}>CV</div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#f0f0f0",
              margin: "0 0 28px",
              lineHeight: 1.05,
            }}
          >
            My <span className="gradient-text">Resume</span>
          </h1>

          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <AiOutlineDownload style={{ fontSize: "1.1rem" }} />
            Download CV
          </a>
        </div>

        <div ref={containerRef} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div
                key={`page_${index + 1}`}
                style={{
                  background: "#0f0f0f",
                  border: "1px solid #252525",
                  borderRadius: "12px",
                  padding: "16px",
                  overflow: "hidden",
                }}
              >
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </div>
            ))}
          </Document>
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <AiOutlineDownload style={{ fontSize: "1.1rem" }} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
