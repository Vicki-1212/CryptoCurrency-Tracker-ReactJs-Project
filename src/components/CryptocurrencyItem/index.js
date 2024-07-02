// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyList} = props
  const {id, currencyLogo, currencyName, usdValue, euroValue} = currencyList
  return (
    <li className="list-item-container">
      <div className="currency-info-container">
        <img src={currencyLogo} alt={currencyName} className="image-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
