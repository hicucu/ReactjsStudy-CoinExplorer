import React from "react";
import { apis } from "../../api";
import PricePresenter from "./PricesPresenter";

export default class extends React.Component {
  state = {
    prices: null,
    error: null,
    isLoading: true
  };
  async componentDidMount() {
    try {
      const { data: prices } = await apis.tickers();
      this.setState({ prices });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  render() {
    const { prices, error, isLoading } = this.state;
    return (
      <PricePresenter prices={prices} error={error} isLoading={isLoading} />
    );
  }
}
