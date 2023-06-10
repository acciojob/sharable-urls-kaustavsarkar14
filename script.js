// your code here
 function updateURL() {
      var name = document.getElementById("name").value;
      var year = document.getElementById("year").value;
      var url = "https://localhost:8080/?name=" + name + "&year=" + year;
      document.getElementById("url").textContent = url;
    }