import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'
import './index.css'

const Layout = () => {
  console.log('helo')
  return (
    <div className="layout-container">
      <div className="layout-inner-container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
