function encode() {
  const eI = document.getElementById("encodeInput").value;
  const p = document.getElementById("pattern").value;
  let e = encodeValsRule(p, eI);

  document.getElementById("encodeOutput").value = e;
}

function encodeClear() {
  const eI = document.getElementById("encodeInput");
  const eO = document.getElementById("encodeOutput");

  // Set to blank
  eI.value = "";
  eI.textContent = "";
  eO.value = "";
  eO.textContent = "";
}

function decode() {
  const dI = document.getElementById("decodeInput").value;
  const p = document.getElementById("pattern").value;
  let d = decodeValsRule(p, dI);

  document.getElementById("decodeOutput").value = d;
}

function decodeClear() {
  const dI = document.getElementById("decodeInput");
  const dO = document.getElementById("decodeOutput");

  // Set to blank
  dI.value = "";
  dI.textContent = "";
  dO.value = "";
  dO.textContent = "";
}