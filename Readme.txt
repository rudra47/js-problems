Js New Functions:

Find devisors problem: 
Math.sqrt() = find the squre root of a number
Math.ceil() = redrix number convert into a upper integer value (Ex: 12.6 = 13)
Math.floor() = redrix number convert into a lower integer value (Ex: 12.6 = 12)


Array Functions:

push() = Insert new element at the last position
unshift() = Insert new element at the first position
pop() = Delete the last element and return the element
shift() = Delete the first element and return the element
delete() = Delete individual element but index can't remove and return the element
spice() = Delete individual element and index can remove and return the element (Ex: splice(startPoint, How Many))
slice() = get some expected index from an array (Ex: slice(startPoint, EndPoint))
concat() = merge an array to another array (Ex: array1.concat(array2, array3))
split() = string to array convert. with the dalimeter. (Ex: split( dalimeter ))
join() = create array to string with a dalimeter. (Ex: join( dalimeter ))
reverse() = it can reverse an array. 

Shallow Copy : 
just copy the variable value 

Deep Copy : 
Copy everything from the variable if we want to copy an array to a value the variable can store everything from the array. not just value but memory address also. thats why when we just trying to change the second variable index then change is effected by 1st one also. if we want to avoid this we have to use ( var2 = var1.slice() ) (es6 : var2 = [...var1])

