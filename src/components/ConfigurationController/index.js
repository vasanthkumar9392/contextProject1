import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContextState = event => {
        onToggleShowContent(event.target.value)
      }
      const onChangeLeftNavState = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavState = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <nav className="nav-container">
          <div className="nav-context-container">
            <h1 className="nav-heading">Layout</h1>
            <ul className="nav-checkboxes-lists-container">
              <li className="checkbox-container">
                <input
                  id="context"
                  type="checkbox"
                  className="input-box"
                  value={showContent}
                  checked
                  onChange={onChangeContextState}
                />
                <label className="label-text" htmlFor="context">
                  Content
                </label>
              </li>
              <li className="checkbox-container">
                <input
                  id="leftNavbar"
                  type="checkbox"
                  className="input-box"
                  value={showLeftNavbar}
                  checked
                  onClick={onChangeLeftNavState}
                />
                <label className="label-text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </li>
              <li className="checkbox-container">
                <input
                  id="rigthNavbar"
                  type="checkbox"
                  className="input-box"
                  value={showRightNavbar}
                  checked
                  onChange={onChangeRightNavState}
                />
                <label className="label-text" htmlFor="rigthNavbar">
                  Right Navbar
                </label>
              </li>
            </ul>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
