self.onmessage = function (e) {
  // Simulate heavy operation. It could be a complex price calculation.
  for (let i = 0; i < 10000000; i++) {
    const temp = Math.sqrt(i) * Math.sqrt(i);
  }

  // 작업 완료 신호 전송
  self.postMessage("calculation_complete");
};
