const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

showTheseVehicles(vehicles);

/* øvelse 1 */
/* const allElectricArr = vehicles.filter(isVehicleElectric);
showTheseVehicles(allElectricArr);

function isVehicleElectric(vehicle){
if(vehicle.isElectric) {
  return true;
}
}   */

/* øvelse 2 */
/* const allPassenger = vehicles.filter(isPassenger);
console.log (allPassenger);
showTheseVehicles(allPassenger);

function isPassenger(passenger){
if(passenger.passengers > 2) {
  return true;
}
}  */

/* øvelse 3 */
/* const allElectricArr = vehicles.filter(isVehicleElectric);
showTheseVehicles(allElectricArr);

function isVehicleElectric(vehicle){
if(vehicle.ownedBy === `Jonas` && vehicle.isElectric); 
  {
  return true;
}
}  */

/* øvelse 4 */
/* const allPassenger = vehicles.filter(isPassenger);
console.log (allPassenger);
showTheseVehicles(allPassenger);

function isPassenger(passenger){
if(passenger.passengers > 1 && passenger.fuel === `Rugbrød`) {
  return true;
}
}  */


function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  ${each.stops ? `<td>${each.stops}</td>`: `<td> - </td>` }
  <td>${each.ownedBy}</td>
  ${each.isElectric ? `<td>${each.isElectric}</td>`: `<td> - </td>` }
  ${each.isTandem ? `<td>${each.isTandem}</td>`: `<td> - </td>` }
</tr>`;
  });
}


/* if(each.stops){`<td>${each.stops}</td>`}else{`<td>-</td>`} */