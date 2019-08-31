import React from "react";
import { apis } from "../../api";
import ExchangesPresenter from "./ExchangesPresenter";

export default class extends React.Component {
  state = {
    exchanges: null,
    error: null,
    isLoading: true
  };
  async componentDidMount() {
    try {
      const { data: exchanges } = await apis.exchanges();
      this.setState({ exchanges });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  render() {
    const { exchanges, error, isLoading } = this.state;
    return (
      <ExchangesPresenter
        exchanges={exchanges}
        error={error}
        isLoading={isLoading}
      />
    );
  }
}
