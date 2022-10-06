function make_album(artistName, albumTitle, trackNumbers) {
  let obj = {
    artistName: { artistName },
    albumTitle: { albumTitle },
  };

  if (trackNumbers != "undefined") {
    obj.trackNumbers = { trackNumbers };
  }

  return obj;
}

var firstObj = make_album("Atif Aslam", "Tajdaar e Haram");
console.log(firstObj);

var secObj = make_album("Ali Zafar", "Chano", 5);
console.log(secObj);

var thirdObj = make_album("Mustafa Zahid", "Chano", 2);
console.log(thirdObj);
