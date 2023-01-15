import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Container from './LayoutStyles'

const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main>
     <Footer/>
    </Container>
  )
}

export default Layout;