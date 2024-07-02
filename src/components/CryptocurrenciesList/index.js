// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedList = data.map(eachList => ({
      id: eachList.id,
      currencyLogo: eachList.currency_logo,
      currencyName: eachList.currency_name,
      usdValue: eachList.usd_value,
      euroValue: eachList.euro_value,
    }))
    this.setState({cryptoCurrencyList: updatedList, isLoading: false})
  }

  renderCurrencyList = () => {
    const {cryptoCurrencyList} = this.state
    return (
      <div className="cryptocurrency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="top-image"
        />
        <ul className="list-container">
          <li className="list-heading-container">
            <p className="heading-name">Coin Type</p>
            <div className="amount-container">
              <p className="heading-name">USD</p>
              <p className="heading-name">EURO</p>
            </div>
          </li>

          {cryptoCurrencyList.map(eachListItem => (
            <CryptocurrencyItem
              currencyList={eachListItem}
              key={eachListItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrencyList()
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
