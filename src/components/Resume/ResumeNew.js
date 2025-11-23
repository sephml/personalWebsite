import React, { useState, useRef, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/Sep_Aminian_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(600);
  const containerRef = useRef(null);

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
    <div className="relative min-h-screen py-20">
      <Particle />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Resume</span>
          </h1>
          
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <AiOutlineDownload className="text-xl" />
            Download CV
          </a>
        </div>

        <div ref={containerRef} className="flex flex-col items-center gap-6">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex flex-col items-center gap-6"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div 
                key={`page_${index + 1}`}
                className="glass-effect p-4 rounded-xl shadow-2xl"
              >
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  className="rounded-lg overflow-hidden"
                />
              </div>
            ))}
          </Document>
        </div>

        <div className="text-center mt-12">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <AiOutlineDownload className="text-xl" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
