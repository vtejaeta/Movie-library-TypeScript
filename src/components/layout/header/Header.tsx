import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../../../assets/css/Header.css'

const Header: React.FC = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='/'>CineBasketry</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/browse/popular/1'>
                <Nav.Link>Popular</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/browse/top-rated/1'>
                <Nav.Link>Top Rated</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/browse/upcoming/1'>
                <Nav.Link>Upcoming</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2 ml-sm-5'
              />
              <Button variant='outline-success' className='p-2'>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
