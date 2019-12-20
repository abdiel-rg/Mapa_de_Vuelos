$.getJSON("https://ip.nf/me.json",function(){map=L.map("map",{preferCanvas:!0}).setView([0,0],3).setMaxBounds([[-90,-180],[90,180]]),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{minZoom:3,noWrap:!0}).addTo(map),markers=[],mapping=()=>{$.getJSON("https://opensky-network.org/api/states/all",a=>{for(let b in markers)map.removeLayer(markers[b]);markers.length=0;for(let b=0;b<a.states.length;b++)if(!1===a.states[b][8]&&null!==a.states[b][6]&&null!==a.states[b][5]&&null!==a.states[b][1]&&""!==a.states[b][1]){let c=Math.floor(Math.random()*16777216),d=c.toString(16).toUpperCase();6>d.length&&(d="0"+d),d="#"+d;let e=L.circleMarker([a.states[b][6],a.states[b][5]],{radius:4,opacity:1,color:d}).addTo(map).bindPopup(` <style> table, th, td { border: 1px solid black; border-collapse: collapse; text-align: center; padding: 0px; font-size: 87.5%; } </style> <table> <tr> <th>ICAO24</th> <th>${a.states[b][0]}</th> </tr> <tr> <th>Callsign</th> <th>${a.states[b][1]}</th> </tr> <tr> <th>Longitude</th> <th>${a.states[b][5]}</th> </tr> <tr> <th>Latitude</th> <th>${a.states[b][6]}</th> </tr> <tr> <th>Baro_Altitude</th> <th>${Math.round(a.states[b][7]*(1250/381))} ft</th> </tr> <tr> <th>Geo_Altitude</th> <th>${Math.round(a.states[b][13]*(1250/381))} ft</th> </tr> <tr> <th>On_Ground</th> <th>${a.states[b][8]}</th> </tr> <tr> <th>Velocity</th> <th>${Math.round(a.states[b][9]*(900/463))} kts</th> </tr> <tr> <th>True_Track</th> <th>${a.states[b][10]}°</th> </tr> <tr> <th>Vertical_Rate</th> <th>${Math.round(a.states[b][11]*(25e3/127))} fpm</th> </tr> <tr> <th>Squawk</th> <th>${a.states[b][14]}</th> </tr> <tr> <th>SPI</th> <th>${a.states[b][15]}</th> </tr> <tr> <th>Position_Source</th> <th>${a.states[b][16]}</th> </tr> <tr> <th colspan="2"><a href='https://flightradar24.com/${a.states[b][1]}' target='_blank' rel='noopener noreferrer'>https://flightradar24.com/${a.states[b][1]}</a></th> </tr> </table> `);markers.push(e)}})},mapping()});
