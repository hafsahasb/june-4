//Task 1:Find a Number in a Sorted Array
function binarySearch(sortedArray, target){
    let start = 0;
    let end = sortedArray.length - 1;
    
    while(start <= end){
        mid = Math.floor((start + end) / 2)
        midNumber = sortedArray[mid]

        if (midNumber === target){
            return mid 
        }else if (midNumber < target){
            start = mid + 1 
        }else {
            end = mid - 1
        }
    }

    return -1
}
console.log(binarySearch([1, 3, 5, 7, 9], 5)) 
console.log(binarySearch([1, 3, 5, 7, 9], 9))   


//Task 2. Check If Value Exists
function exists(sortedArray,target){
    let start = 0;
    let end = sortedArray.length -1;

    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        midNumber = sortedArray[mid]

        if ( midNumber == target){
            return true;
        }else if (midNumber < target){
            start = mid + 1;
        }else{
            end = mid -1
        }
    }
    return false;
 }
console.log (exists([2, 4, 6, 8, 10], 8))
console.log (exists([1, 3, 5], 5) ) 

/*
//Task 3. Find First Occurrence
In a sorted array with duplicates, return the first index where a value occurs.
firstOccurrence([1, 2, 2, 2, 3], 2)   1➞


//Task 4. Find Last Occurrence
In a sorted array with duplicates, return the last index of a given value.
lastOccurrence([1, 2, 2, 2, 3], 2)   3➞


//Task 5. Find Insert Position
Given a sorted array, return the index where a number should be inserted to keep the array sorted (like 
lower_bound).
insertPosition([1, 3, 5, 6], 5)   2  ➞
insertPosition([1, 3, 5, 6], 2)   1➞


//Task 6. Search a Word in a Dictionary
Search for a word in a sorted list of words. Return index or -1.
findWord(["apple", "banana", "cherry"], "banana")   1➞


//Task 7. Guess the Number (between 1 and N)
You have a hidden number between 1 and N. Use binary search logic to guess it using a simulated 
isTooHigh() and isTooLow() API.
// findSecretNumber(1, 100, secret = 42)   42➞


//Task 8. Find Smallest Number ≥ Target
Return the index of the smallest number in the array that is greater than or equal to the target (ceiling).
findCeiling([1, 3, 5, 7], 4)   2  // 5 is the ceiling➞


//Task 9. Find Largest Number ≤ Target
Return the index of the largest number in the array that is less than or equal to the target (floor).
findFloor([1, 3, 5, 7], 4)   1  // 3 is the floor➞


//Task 10. Square Root (Integer Part Only)
Use binary search to find the integer part of the square root of a positive number.
sqrtFloor(16)   4  ➞
sqrtFloor(20)   4  ➞
sqrtFloor(1)   1➞


 Reinforce These Key Concepts:
•Why binary search only works on sorted data
-it works only on sorted data because else 
•What changes between returning index vs. value vs. boolean
returning index 
•How to update low, high, and mid carefully
•How edge cases behave (e.g., empty arrays, all duplicates, target not found)
*/