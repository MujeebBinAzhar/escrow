"use client";

import Countdown from "react-countdown";

const TransTimer = () => {
  const fixedEndingDate = new Date("2024-09-19T00:00:00").getTime();
  return (
    <>
      <Countdown date={fixedEndingDate} />
    </>
  );
};

export default TransTimer;
