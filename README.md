# Friend Finder
[Check out the demo](https://simple-friend-finder.herokuapp.com/)
## About
**Tools used:**
 - Node.js with Express
 - mySQL
 - jQuery

This application allows the user to fill out a personality survey. It then takes the results of that survey & selects a best friend for the user. 
**How it works:**

 1. The user fills in the ten question survey. Each question has five possible answers which are stored numerically in an array from 1-5.
 2. Once the user submits the survey, we get an array of answers such as below:
```javascript
//example
const score = [5,4,2,1,2,1,5,3,3,2];
```
 3. When a survey is submitted, this `score` array is stored in the heroku server & compared against the `scores`. 
 ```javascript
 //example
 const userScore = [5,4,2,1,2,1,5,3,3,2];
 const potentialFriendScores = [
	[5, 1, 4, 4, 5, 1, 2, 5, 4, 1],
	[3, 1, 2, 1, 5, 2, 5, 1, 3, 3],
	//etc..
];
//each 'difference' shares the same index as the scores
//being compared
let differencesArray = [];
//we loop through each of the potential friend scores
//and check which person has the lowest difference
//between the user's score
potentialFriendScores.forEach(score=> {
	differenceArray.push(
		compare(userScore, score, differencesArray);
	);
});
//we then loop through the individuals' score arrays
//and store the differences in the differenceArray
function compare(user, potential, scoreDiff) {
	let difference = 0;
	let i = 0;
	user.forEach(num => {
		if (num < potential[i]) {
			difference +=  potential[i] - num;
		} else  if (num >  potential[i]) {
			difference +=  num -  potential[i];
		}
	}
	return  difference;
}
```
	
 4. The person with the lowest difference in sc
