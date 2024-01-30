import './index.css'

const Item = props => {
  const {deleted, passTheData, checkBoxCheck} = props

  const {id, website, userName, password, colorNum} = passTheData

  const click = () => {
    deleted(id)
  }

  const colors = [
    '#7683cb',
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#14b8a6',
    '#b91c1c',
    '#0ea5e9',
  ]

  const letter = website[0]

  const colorPic = colors[colorNum]

  console.log(colorPic)

  return (
    <li className="container">
      <div className="circle" style={{background: colorPic}}>
        {letter}
      </div>

      <div className="paras">
        <p> {website} </p>
        <p> {userName} </p>
        {checkBoxCheck ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="password"
          />
        )}
      </div>
      <button
        data-testid="delete"
        className="delButton"
        onClick={click}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delImage"
        />
      </button>
    </li>
  )
}

export default Item
