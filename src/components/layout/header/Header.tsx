import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { useHistory } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import "../../../assets/css/Header.css";
import Example from "../genreModal/GenreModal";

const Header: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory()

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">CineBasketry</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/browse/popular/1">
                <Nav.Link>Popular</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/browse/top-rated/1">
                <Nav.Link>Top Rated</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/browse/upcoming/1">
                <Nav.Link>Upcoming</Nav.Link>
              </LinkContainer>
              <Example />
            </Nav>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                if (keyword.trim()) {
                  history.push(`/search/${keyword}/1`);
                } else {
                  history.push("/browse/error");
                }
                setKeyword('')
              }}
              inline
            >
              <FormControl
                type="text"
                placeholder="Search Movies"
                className="mr-sm-2 ml-sm-5"
                value = {keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button variant="outline-success" className="p-2" type='submit'>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
