function highlight() {
    //Write your code here
	const strongtags=document.querySelectorAll("strong")
	console.log(strongtags)
	for(let x of strongtags){
	x.style.color="green"
	}


}


function return_normal() {
    //Write your code here
const strongtags=document.querySelectorAll("strong")
	for(let x of strongtags){
	x.style.color="black"
	}
    
}
