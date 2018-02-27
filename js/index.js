var mods = ["277582380406145024", "288785195702812673", "284447796323418113", "294425180938305538"]


var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://discordapp.com/api/guilds/410243567827681290/widget.json", false );
xmlHttp.send( null );
var discordData = JSON.parse(xmlHttp.responseText);

function getHumans(data) {
  var members = data.members
  var humans = []
  for (var i=0; i<members.length; i++) {
    if (members[i].bot != true) {
      humans.push(members[i])
    }
  }
  return humans
}

document.getElementById("usersOnline").innerHTML = getHumans(discordData).length

for (var i=0; i<getHumans(discordData).length; i++) {
  if (mods.includes(getHumans(discordData)[i].id)) {
      document.getElementById(getHumans(discordData)[i].id).innerHTML = "Online";
  }
}

window.customElements.define('flex-item', class extends HTMLElement {...});