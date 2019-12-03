
var i=1
while(i>0){
var hour= Number(prompt("Введите количество нужных часов: "))

if (isNaN(hour) == false) {
  alert( "В "+hour+"ч. "+ hour*3600 +" секунд.")
  break
}else {


alert('Нужно ввести часы в числовом значении!')}
}
