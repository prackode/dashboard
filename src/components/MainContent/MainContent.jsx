import React from "react";
import TopBar from "./TopBar";
import Overview from "./Overview";
import TransactionData from "./TransactionData";
import TransactionHead from "./TransactionHead";
import Pagination from "./Pagination";
import "./style.css";

export default function MainContent() {
  const sampleTransactionData = () => {
    let content = [];
    for (let i = 0; i < 19; i++) {
      content.push(<TransactionData />);
    }
    return content;
  };

  return (
    <div class="main-content">
      <TopBar />
      <div className="content">
        <Overview />

        <div class="transaction">
          <div class="transaction-text">Transactions | This Month</div>
          <div class="transaction-view">
            <TransactionHead />
            {sampleTransactionData()}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
