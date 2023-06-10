// your code here
document.addEventListener("DOMContentLoaded", function() {
      var form = document.getElementById("myForm");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        updateURL();
      });
    });

    function updateURL() {
      var name = document.getElementById("name").value;
      var year = document.getElementById("year").value;
      var url = "https://localhost:8080/?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);
      document.getElementById("url").textContent = url;
    }