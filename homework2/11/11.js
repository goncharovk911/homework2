
var result = prompt("Введите любое количество часов дней или месяцев где количество будет числовое значение а временное изчесление будет буква (h-часы,d-дни,w-недели,m-месяца, e-годы), для приобразования их в секунды", ),number
if (result.substr(-1)==="h"){
  number = Number(result.substring(0, result.length - 1))
  sum = number*3600
  alert("В " + number+" ч. " + sum + " секунд");
}else if (result.substr(-1)==="d") {
  number = Number(result.substring(0, result.length - 1))
  sum = number*3600*24
  alert("В " + number+" д. " + sum + " секунд");
}
else if (result.substr(-1)==="w") {
  number = Number(result.substring(0, result.length - 1))
  sum = number*3600*24*7
  alert("В " + number+" н. " + sum + " секунд");
}
else if (result.substr(-1)==="m") {
  number = Number(result.substring(0, result.length - 1))
  sum = number*3600*24*7*4
  alert("В " + number+" м. " + sum + " секунд");
}
else if (result.substr(-1)==="e") {
  number = Number(result.substring(0, result.length - 1))
  sum = number*3600*24*365
  alert("В " + number+" г. " + sum + " секунд");
}
