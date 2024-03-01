//Utilisation de fonction de callback
//Fonction secondaire
//Calcul de la circonférence d'un cercle (périmètre du cercle) PI*D
function circonference(D) {
  return Math.PI * D;
}

//Calcul de l'aire d'un cercle (surface d'un cercle) ((PI*D)*D/4)
function surface(D) {
  return (Math.PI * Math.pow(D, 2)) / 4;
}

//Calcul du volume d'un cône
function volumeCone(r, H) {
  return (Math.PI * Math.pow(r, 2) * H) / 3;
}

//Fonction principale
//Le calculateur
function calculateur(D, callback, h) {
  return console.log(callback(D, h));
}

calculateur(1, volumeCone, 1);
