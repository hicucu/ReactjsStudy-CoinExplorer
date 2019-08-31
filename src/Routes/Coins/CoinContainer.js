import React from "react";
import { apis } from "../../api";
import CoinPresenter from "Routes/Coins/CoinPresenter";

export default class extends React.Component {
  state = {
    coins: null,
    error: null,
    isLoading: true
  };
  async componentDidMount() {
    try {
      const { data: coins } = await apis.coins();
      this.setState({ coins });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  render() {
    const { coins, error, isLoading } = this.state;
    return <CoinPresenter coins={coins} error={error} isLoading={isLoading} />;
  }
}
