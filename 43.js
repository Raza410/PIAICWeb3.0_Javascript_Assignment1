topMegecians = ["Raza", "Talha", "Usman"];

function greatOne(magics) {
  let greatWalayMegicians = [];
  for (i = 0; i < magics.length; i++) {
    greatWalayMegicians.push(`Great ${magics[i]}`);
  }

  return greatWalayMegicians;
}

let greatWalayMegicians = greatOne(topMegecians);

function revealMegician(magics, greatMagecians) {
  for (i = 0; i < magics.length; i++) {
    console.log(`${magics[i]}, ${greatMagecians[i]}`);
  }
}

revealMegician(topMegecians, greatWalayMegicians);
