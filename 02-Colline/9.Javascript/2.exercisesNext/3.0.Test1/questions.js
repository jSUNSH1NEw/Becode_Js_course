/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let texte =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte + texte2
}
let afficherCar5 =  (texte) => {
    return texte[4]
}
let afficher9Car =  (texte) => {
    return texte.substr(0,9)
}
let majusculeString =  (texte) => {
    return text.toUpperCase()
}
let minusculeString =  (texte) => {
    return texte.toLowerCase()
}
let SupprEspaceString =  (texte) => {
    return texte.substr(1, texte length -2)
}
let IsString =  (texte) => {
    if (texte == ""){
        return true;
    }
        
    }


let AfficherExtensionString =  (texte) => {
    return texte.substr(texte.lastIndexOf('.' + 1))
}
let NombreEspaceString =  (texte) => {
    return texte.split(' ').length - 1;
}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {

}
let valeurAbsolueArray =  (array) => {

}
let sufaceCercle =  (rayon) => {

}
let hypothenuse =  (ab, ac) => {

}
let calculIMC =  (poids, taille) => {

}
