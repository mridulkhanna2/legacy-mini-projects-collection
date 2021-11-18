
const header = `const browser = await puppeteer.launch()
const page = await browser.newPage()`
const btn= document.getElementById('automate-form')
console.log("check",btn)
btn.onclick = Event => {
  Event.preventDefault();
  chrome.tabs.create({url : 'https://internshala.com/#automate'});
  

}
setInterval(function(){ document.getElementsByClassName("btn.btn-secondary.home_page_login_button").click(); }, 3000);
