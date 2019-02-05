//function to obfuscate string, not to read from argv directly
function obfuscate(char){
  if(char.toLowerCase() == 'a'){
    return 4;
  }
  else if(char.toLowerCase() == 'e'){
    return 3;
  }
  else if(char.toLowerCase() == 'o'){
    return 0;
  }
  else if(char.toLowerCase() == 'l'){
    return 1;
  }
  else{
    return char;
  }
}

//read from argv and pass to obfuscate
function read(){
  var args = process.argv;
  var final = "";

  for(var i = 0; i < args[2].length; i++){
    final += obfuscate(args[2].charAt(i));
  }

  return final;
}

console.log(read());