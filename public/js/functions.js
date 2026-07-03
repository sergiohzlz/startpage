async function loadHN() {
    const response = await fetch("/api/feed_hn.php");
    const news = await response.json();

    const ul = document.getElementById("hn-feed");

    ul.innerHTML = "";
    
    news.slice(0,10).forEach(item => {
        const li = document.createElement("li");
        const a  = document.createElement("a");

        a.href        = item.liga;
        a.target      = "_blank";
        a.textContent = item.titulo;

        li.appendChild(a);
        ul.appendChild(li);

    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadHN()
});
