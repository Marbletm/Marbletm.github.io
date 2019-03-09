  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + ", ";
  }
  
var fh = fopen("data.txt", 3); // Open the file for writing

if(fh!=-1) // If the file has been successfully opened

var str = "\n" + "text";

fwrite(fh, str); // Write the string to a file

fclose(fh); // Close the file
