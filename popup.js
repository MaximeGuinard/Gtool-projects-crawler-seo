document.addEventListener("DOMContentLoaded", function() {
    var contentDiv = document.getElementById("content");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        contentDiv.innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "https://seo.gtool.fr/login", true);
    xhr.send();
  });

  setTimeout(function() {
    document.getElementById('message').style.display = 'none';
  }, 5000);