import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'

const Header: React.FC = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Navbar.Brand href='/'>CineBasketry</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/browse/popular'>Popular</Nav.Link>
            <Nav.Link href='/browse/top-rated'>Top Rated</Nav.Link>
            <Nav.Link href='/browse/upcoming'>Upcoming</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2 ml-sm-5'/>
            <Button variant='outline-success' className='p-2'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
