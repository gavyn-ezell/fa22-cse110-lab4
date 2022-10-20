1. It will print 3, because the variable i increments within the for loop until it's value is NOT less than the the prices variable's length, which is 3 in this case. 
2. It will print 150. This is because the last price to be iterated over in "prices" is 300. So the last value that the variable "discountedPrice" holds is the final discounted price within the prices array, which in this case is 50% off of 300 which equals 150.
3. It will print 150. This is at the end of the for loop, the value of finalPrice is the discounted value of the last value in the "prices" array. In this specific example, it is exactly the same as discountedPrice, because the rounding just happened to have no effect.
4. It will return a new array which holds the all the final discounted prices from the prices array. In this case, discounted = [50,100,150]
5. An error will occur. This is because our variable i is defined for the for loop scope/block with the "let" keyword. Since we are trying to access i outside of it's original scope, we are met with an error, as i is not defined outside of the for loop.
6. An error will occur. Just like the variable i, the let keyword was used for variable definition within the for loop scope. Any access outside of the for loop block would be redundant, as we have already left the scope.
7. We see that 150 is printed. This is because the variable "finalPrice" has been defined with the let keyword OUTSIDE of the for loop scope. This will mean whatever value is held in "finalPrice" right before the for loop ends, will be maintained and accessible outside the for loop
8. We will get the proper array of discounted prices. The final array is a variable defined outside of the for loop, and is being modified within the for loop. By the end of the loop, we have our discounted prices in the accesible "discounted" array.
9. Because i is defined with the let keyword in the for loop block, we are unable to save its contents after the for loop block ends, making i undefined after the loop.
10. We will simply get 3, which is the length of the prices array. Nothing in the code changes the value of length between it's definitino and the line that prints it.
11. We will be returned the proper array of discounted prices. This is because although the "discounted" array is declared with the const keyword, Javascript allows us to still update and remove values within the array (Javascript does however not allow total reassignment of the array variable "discounted"). Additionally, although the const keyword is used for the "discountedPrice" variable within the for loop, the variable is being completely redefined from scratch over each iteration of the loop, making the constant declaration valid. Finally, the for loop will work as intended, and return us [50, 100, 150], the final discounted prices from the prices array.
12. [ANSWER]
13. [ANSWER]
14. [ANSWER]
15. [ANSWER]
16. [ANSWER]
17. [ANSWER]
18. [ANSWER]
19. [ANSWER]