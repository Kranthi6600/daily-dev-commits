document.body.innerHTML = `
  <ul id="menu">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
`;

document.getElementById("menu").addEventListener("click", function (e) {
  console.log("Clicked:", e.target.textContent);
});
