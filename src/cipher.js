const cipher = {

  encode: function( offset, string){
    let result = "";
    // if (offset === null && string === []) {
    //         throw new TypeError("Not valid");
    //        }
    // else if (offset === 0 && string === 0 ) {
    //         throw new TypeError("Not valid");
    //        }
    if (offset == null) {
      throw new TypeError ('Not Valid');
    } else if (string == []) {
      throw new TypeError ('Not Valid');
    } else if (offset == 0) {
      throw new TypeError ('Not Valid');
    } 

    for (let i=0; i<string.length; i++){
        let string1 = string.charCodeAt(i);

        if (string1 >=97 && string1 <=122){
          result += String.fromCharCode((string1 - 97 + offset) %26 +97);
        } else if (string1 >= 65 && string1 <=90){
          result += String.fromCharCode((string1 - 65 + offset) %26 +65);       
        } else {
          result += string.charAt(i);
        }                
       }
       return result;
  },

  decode: function ( offset, string){
    let offset2 = 26 - (offset % 26);
    let result = "";
    
        // if (offset === null && string === []) {
    //         throw new TypeError("Not valid");
    //        }
    // else if (offset === 0 && string === 0 ) {
    //         throw new TypeError("Not valid");
    //        }
    if (offset == null) {
      throw new TypeError ('Not Valid');
    } else if (string == []) {
      throw new TypeError ('Not Valid');
    } else if (offset == 0) {
      throw new TypeError ('Not Valid');
    } 

    for (let i = 0; i<string.length; i++){
        let string1 = string.charCodeAt(i);

        if (string1 >= 97 && string1 <=122){
          result += String.fromCharCode((string1 - 97 + offset2) %26 +97);
        } else if (string1 >= 65 && string1 <=90){
          result += String.fromCharCode((string1 - 65 + offset2) %26 +65);       
        } else {
          result += string.charAt(i);
        }                
       }
       return result;
  },

};

export default cipher;