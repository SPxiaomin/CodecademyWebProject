function addLoadEvent(t){var n=window.onload;"function"!=typeof n?window.onload=t:window.onload=function(){n(),t()}}function onmouseoverAnimation(t){for(var n=0;n<t.length;n++)t[n].onmouseover=function(){var t=1,n=this;clearInterval(n.time),n.time=setInterval(function(){n.style.width=n.offsetWidth+10+"px",t&&(n.style.textAlign="center",t=0),n.offsetWidth>=200&&clearInterval(n.time)},55)}}function onmouseoutAnimation(t){for(var n=0;n<t.length;n++)t[n].onmouseout=function(){var t=this;clearInterval(t.time),t.time=setInterval(function(){t.style.width=t.offsetWidth-10+"px",t.offsetWidth<=150&&(clearInterval(t.time),t.style.width="150px",t.style.textAlign="")},55)}}function displayNone(t,n){for(var e=0;e<t.length;e++)t[e]!==n&&(t[e].style.display="none")}function loadButton(t){for(var n=document.getElementById("welcome"),e=document.getElementById("orange"),o=[n,e],i=0;i<t.length;i++)t[i].onclick=function(t){t.preventDefault();var i=this.getAttribute("id");switch(i){case"home":displayNone(o,n),n.style.display="inline-block";break;case"submit":displayNone(o,e),e.style.display="inline-block"}}}function menuAnimation(){var t=document.getElementById("indexMenu"),n=t.getElementsByTagName("a");onmouseoverAnimation(n),onmouseoutAnimation(n),loadButton(n)}addLoadEvent(menuAnimation);