import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Sep_Aminian_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { PDFObject } from 'react-pdfobject'

import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {/* <Document file={pdf}
           onLoadSuccess={onDocumentLoadSuccess}
           onDocLoadFail={onDocLoadFail}
           className="d-flex justify-content-center"
           >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
          <PDFObject url={pdf} height= "75rem" pdfOpenParams= "FitB,left"/>
         
          



        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
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
