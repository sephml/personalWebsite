import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Sep_Aminian_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';
import { useRef, useEffect } from "react";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(600); // default width
  const containerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Responsive PDF width
  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setPageWidth(width > 600 ? 600 : width - 16); // 600px max, with some padding
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="justify-content-center" style={{ position: "relative", zIndex: 2 }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="w-100 w-md-auto mb-3"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <section className="resume" ref={containerRef}>
          <Document
            file={pdf}
            pageLayout="oneColumn"
            onLoadSuccess={onDocumentLoadSuccess}
            className="resume-doc-display justify-content-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={pageWidth}
                className="page-resume"
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        </section>

        <Row className="justify-content-center" style={{ position: "relative", zIndex: "2"}}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="w-100 w-md-auto mt-3"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
