const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let length = characters.length;
let pass1 = document.getElementById("p1");
let pass2 = document.getElementById("p2");
let password1 = "", password2 = "";

function copy1(){
    /* Select text area by id*/
    let text = pass1.innerHTML;
    console.log(text);
    navigator.clipboard.write("hello");
            // var Text = document.getElementById("p1");
  
            // /* Select the text inside text area. */
            // Text.select(pass1.textContent);
  
            // /* Copy selected text into clipboard */
            // navigator.clipboard.writeText(Text.value);
}

function generate() {
    for(let i=0; i<8; i++){
        password1 += characters[Math.floor(Math.random() * length)];
        password2 += characters[Math.floor(Math.random() * length)];
    }
    pass1.textContent = password1;
    pass2.textContent = password2;
    password1 = "";
    password2 = "";
}


 