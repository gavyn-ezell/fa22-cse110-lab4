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
12. a. student.name  
    b. student['Grad Year']  
    c. student.greeting()  
    d. student['Favorite Teacher'].name  
    e. student.courseLoad[0]  
13. a. '32' because the adding sign treats the whole expression as a string concatenation. Therefore, 2 is converted to a string  
    b.  The integer 1, because the expression is treated as number subtraction. String conversion does not take place, but a numeric conversion does.   
    c.  The integer 3. Null is numerically converted to 0, so the result is 3.  
    d.  The string '3null'. null takes a string conversion into 'null', and the strings are concatenated.  
    e.  The integer 4. The boolean takes a numeric conversion and turns into the integer 1.  
    f.  The integer 0. Both the boolean and the null are numerically convereted  
    g.  The string 3undefined. The undefined value takes a string conversion into 'undefined'  
    h.  NaN is returned (not a number). The '3' is numerically converted to integer 3, and attempts to subtract with undefined, which numerically converts to NaN. This doesn't work out, and NaN is returned    
14. a. true. '2' is numerically converted to 2, and since 2 > 1, it returns true.  
    b. false. Since we are comparing between two strings, an alphabetical comparison takes place, so '12' is technically less than '2' in an alphabetical sense.  
    c. true. The '2' is numerically converted. Simple  2 == 2 conditional takes place, which returns true.  
    d. false. Since we used === (strict equality), different typed operands are automatically treated inequal.  
    e. false. true is numerically converted to 1, and since 1 != 2, false is returned.  
    f. true. Using the boolean conversion, Boolean(), on any number besides 0, will convert it to true. Therefore true === true will return true.  
15. the == is javascript's equality operator, while === is javascript's STRICT equality operator. the regular equality operator is lenient because it allows for type conversions, while the strict equality does not allow for type conversions.
16. Answer in part2-question16.js
17. We will be returned a new array with every element from the original parameter array doubled. When we iterate through the parameter array, we additionally use the parameter function, callback, which in this case is the doSomething() function, which doubles any number passed into it.
18. Answer in part2-question18.js
19. The console will print 1, then 1 second later print 2, then will instantly print 3 and 4. 