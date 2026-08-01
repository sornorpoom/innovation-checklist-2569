function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('แบบประเมินตนเองนวัตกรรมการศึกษา ปี 2569')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
