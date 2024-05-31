import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const leftNavJsx = () => (
    <div className="left-and-right-nav-container">
      <h1 className="left-nav-heading">Left NavBar Menu</h1>
      <ul className="un-lists">
        <li className="list-text">Item 1</li>
        <li className="list-text">Item 2</li>
        <li className="list-text">Item 3</li>
        <li className="list-text">Item 4</li>
      </ul>
    </div>
  )
  const middleContextJsx = () => (
    <div className="content-container">
      <h1 className="left-nav-heading">Content</h1>
      <p className="content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )
  const rightNavJsx = () => (
    <div className="left-and-right-nav-container">
      <h1 className="left-nav-heading">Right Navbar</h1>
      <div className="tight-nav-inner-container">
        <p className="add-text">Ad 1</p>
      </div>
      <div className="tight-nav-inner-container">
        <p className="add-text">Ad 2</p>
      </div>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        console.log(showContent)
        return (
          <div className="body-container">
            {showLeftNavbar ? leftNavJsx() : null}
            {showContent ? middleContextJsx() : null}
            {showRightNavbar ? rightNavJsx() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
