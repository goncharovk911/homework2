

var hous, porch,apartment
hous=Number(prompt("Which apartment are you interested in?"))
porch =Math.ceil(hous/36)
apartment = Math.ceil((hous-(36*--porch))/4)//Тут конечно много скобок можно и покрасивее сделать но времени не хватало и в этом коде мне самому ненравится как я использавл инкремент и декремент я думаю можно и покрасивее сделать
alert("Ваша квартира находится в " + (++porch) + " подъезде" + " на " + apartment + " этаже!")
