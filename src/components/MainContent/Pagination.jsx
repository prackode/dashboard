import React from "react";
import "./style.css";

export default function Pagination() {
  return (
    <div class="transaction-pagination">
      <div class="pagination-previous-next">
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.78033 0.96967C5.48744 0.676777 5.01256 0.676777 4.71967 0.96967L0.21967 5.46967C0.0790172 5.61032 -9.53674e-07 5.80109 -9.53674e-07 6C-9.53674e-07 6.19891 0.0790172 6.38968 0.21967 6.53033L4.71967 11.0303C5.01256 11.3232 5.48744 11.3232 5.78033 11.0303C6.07322 10.7374 6.07322 10.2626 5.78033 9.96967L1.81066 6L5.78033 2.03033C6.07322 1.73744 6.07322 1.26256 5.78033 0.96967Z"
            fill="#4D4D4D"
          />
        </svg>
        Previous
      </div>
      <div class="page-number">1</div>
      <div class="page-number">...</div>
      <div class="page-number-selected">10</div>
      <div class="page-number">11</div>
      <div class="page-number">12</div>
      <div class="page-number">13</div>
      <div class="page-number">14</div>
      <div class="page-number">15</div>
      <div class="page-number">16</div>
      <div class="page-number">17</div>
      <div class="page-number">18</div>
      <div class="pagination-previous-next">
        Next
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
            fill="#4D4D4D"
          />
        </svg>
      </div>
    </div>
  );
}
