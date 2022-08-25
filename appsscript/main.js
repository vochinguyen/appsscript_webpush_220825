function doGet(e) {
  var file = e.parameter.file;
  if (file == "sw.js") {
    Logger.log("sw");
    return ContentService.createTextOutput(
      HtmlService.createHtmlOutputFromFile("sw.js").getContent()
    ).setMimeType(ContentService.MimeType.JAVASCRIPT);
  } else {
    return HtmlService.createHtmlOutputFromFile("index").setXFrameOptionsMode(
      HtmlService.XFrameOptionsMode.ALLOWALL
    );
  }
}
