enum videoUrlTypes {
  SHORT,
  NORMAL,
  INVALID,
}

function extractIdFromVideoUrl(url: string): string {
  var [urlType, id] = videoUrlType(url);

  if (urlType === videoUrlTypes.INVALID) {
    throw Error("Video URL is not valid");
  }

  return id;
}

function videoUrlType(url: string): [type: videoUrlTypes, id: string] {
  var urlComponents = url.split(".");
  var id = "";
  var type = videoUrlTypes.INVALID;
  if (urlComponents.length === 3) {
    var www = urlComponents[0].split("//")[1].toLowerCase();
    var youtube = urlComponents[1].toLowerCase();
    id = urlComponents[2].split("=")[1];
    if (www === "www" && youtube === "youtube") type = videoUrlTypes.NORMAL;
  } else if (urlComponents.length === 2) {
    var youtu = urlComponents[0].split("//")[1].toLowerCase();
    id = urlComponents[1].split("/")[1];
    if (youtu === "youtu") type = videoUrlTypes.SHORT;
  }
  return [type, id];
}

export { extractIdFromVideoUrl };
