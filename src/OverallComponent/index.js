import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

import './index.css'

import Item from '../item'

class OverallComponent extends Component {
  state = {
    overallList: [],
    website: '',
    userName: '',
    password: '',
    searchInput: '',
    checkBox: false,
  }

  deletedItem = id => {
    console.log(id)

    const {overallList} = this.state

    const data = overallList.filter(each => each.id !== id)

    this.setState({
      overallList: data,
    })
  }

  typing = event => {
    this.setState({searchInput: event.target.value})
  }

  userChange = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  websiteChange = event => {
    this.setState({
      website: event.target.value,
    })
  }

  changePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleCheckboxChange = event => {
    console.log(event.target.checked)
    this.setState({
      checkBox: event.target.checked,
    })
  }

  submit = event => {
    console.log('submitted')
    event.preventDefault()

    const {website, userName, password} = this.state

    const newObject = {
      id: uuidV4(),
      website,
      userName,
      password,
      colorNum: Math.floor(Math.random() * 7),
    }

    this.setState(each => ({
      overallList: [...each.overallList, newObject],
      website: '',
      userName: '',
      password: '',
    }))
  }

  render() {
    const {
      overallList,
      website,
      userName,
      password,
      checkBox,
      searchInput,
    } = this.state

    const lowercaseSearchInput = searchInput.toLowerCase()

    const filterList = overallList.filter(each =>
      each.website.toLowerCase().includes(lowercaseSearchInput),
    )

    // const filteredDate = this.deletedData()

    return (
      <div className="overallContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="detailsContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="imagePhoto"
            alt=""
          />
          <form onSubmit={this.submit} className="formLength">
            <h1 className="heading"> Add New Password </h1>
            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="formImages"
              />

              <input
                required
                type="text"
                className="inputEl"
                placeholder="Enter Website"
                value={website}
                onChange={this.websiteChange}
              />
            </div>

            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="formImages"
              />

              <input
                required
                type="text"
                className="inputEl"
                placeholder="Enter Username"
                value={userName}
                onChange={this.userChange}
              />
            </div>

            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="formImages"
              />

              <input
                required
                type="password"
                className="inputEl"
                placeholder="Enter Password"
                value={password}
                onChange={this.changePassword}
              />
            </div>
            <button className="button" type="submit">
              {' '}
              Add{' '}
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="passwordImage"
          />
        </div>
        <div className="detailsContainer11">
          <div className="detailsContainer1">
            <div className="bottomArrange">
              <h1 className="heading"> Your Passwords </h1>
              <p className="count"> {filterList.length} </p>
            </div>

            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="formImages"
              />

              <input
                onChange={this.typing}
                type="search"
                className="inputEl"
                placeholder="search"
              />
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="checkBox">
            <input
              id="check"
              type="checkbox"
              className="checkBox11"
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="check" className="check">
              {' '}
              Show Passwords{' '}
            </label>
          </div>
          {filterList.length !== 0 ? (
            <ul className="arrangeContainer">
              {filterList.map(each => (
                <Item
                  key={each.id}
                  deleted={this.deletedItem}
                  passTheData={each}
                  checkBoxCheck={checkBox}
                />
              ))}{' '}
            </ul>
          ) : (
            <div className="noPassword">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="noPassword1"
              />
              <p className="para" value="no passwords">
                {' '}
                No Passwords{' '}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default OverallComponent
