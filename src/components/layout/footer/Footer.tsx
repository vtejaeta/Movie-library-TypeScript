import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    // footer credits
    <footer className="mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            Made with 🧡 by{" "}
            <a
              href="https://github.com/vtejaeta"
              target="_blank"
              rel="noopener noreferrer"
            >
              vtejaeta
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
