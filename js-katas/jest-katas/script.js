function randomLottoTicket() {
  // Add your code here
  let lottoArray = [];

  for (let i = 0; i < 6; i++) {
    lottoArray.push(Math.floor(Math.random() * 50));
  }

  console.log(lottoArray);
}
randomLottoTicket();
randomLottoTicket();
