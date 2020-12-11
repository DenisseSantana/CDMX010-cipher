const cipher = {
  // ...
//    encode( offset, string)
//  {
//     let result = "";
//     const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
//     offset = (offset % 26 + 26) % 26;
 
//     if (string!=null) {
//                  //rotación de cadena, si no esta en el array se escribe tal cual
//                 for (let i = 0; i<string.length; i++){
//                   if (abc.indexOf(string[i])!=-1){
//                   let position = ((abc.indexOf(string[i])+offset)%26);
//                    result += abc[position]
//                   }
//                   else
//                   result += string[i];
//                   }                
//                 return result;
//                 }
    //  else if (!string) {
    //   throw new TypeError("Not valid");
    //  }
    //  else if (string === 0) {
    //   throw new TypeError("Not valid");
    //  }
    //  else if (string === (null, [])) {
    //   throw new TypeError("Not valid");
    //  }
    //  else if (string === (0,0)) {
    //   throw new TypeError("Not valid");
    //  }
  // },

   encode (offset, string)   
   {
    //  if (!string){
    //               return "";
    //              }
    if (!string) {
      throw new TypeError("Not valid");
     }
     else if (string === 0) {
      throw new TypeError("Not valid");
     }
     else if (string === (null, [])) {
      throw new TypeError("Not valid");
     }
     else if (string === (0,0)) {
      throw new TypeError("Not valid");
     }
     const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     offset = (offset % 26 + 26) % 26;
     return string.replace(/[A-Z]/ig, e=> abc[(abc.indexOf(e)+offset)%26]);
   },
 
   decode(offset, string){
    //  if (!string){
    //      return "";
    //  }
    //  if (!string) {
    //   throw new TypeError("User input no puede ser una string vacio");
    // }
     if (!string) {
      throw new TypeError("Not valid");
     }
     else if (string === 0) {
      throw new TypeError("Not valid");
     }
     else if (string === (null, [])) {
      throw new TypeError("Not valid");
     }
     else if (string === (0,0)) {
      throw new TypeError("Not valid");
     }
    
     const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     offset = (offset % 26 - 26) % 26;
     return string.replace(/[A-Z]/ig, e=> abc[(abc.indexOf(e)-offset)%26]);
   }  

};

export default cipher;
