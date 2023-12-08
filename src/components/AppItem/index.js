import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  state = {
    isClickedIt: false,
    enterValue: '',
  }

  onOneChanged = event => {
    this.setState({enterValue: event.target.value})
  }

  onClickStart = () => {
    this.setState(prevState => ({isClickedIt: !prevState.isClickedIt}))
  }

  render() {
    const {isClickedIt, enterValue} = this.state
    return (
      <div className="app-container">
        <div className="app-section">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="input-items">
            {isClickedIt === true ? (
              <div className="p-container">
                <p className="paragraph">{enterValue}</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickStart}
                >
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={enterValue}
                  className="input-container"
                  onChange={this.onOneChanged}
                />
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickStart}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default AppItem
