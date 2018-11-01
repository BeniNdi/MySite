/*function add(nbr1,nbr2){
	let sum=nbr1+nbr2;
	console.log(`sum= ${sum}`);
	let mult=nbr1*nbr2;
}

function mult(nbr1,nbr2){
	console.log(`product=${mult}`);
}

add(5,6);*/
function check(){
let a=prompt('enter the first number');
let b=prompt('enter the second number');
let c=prompt('enter the third number');

if(a==b && b==c && a==c)
{
	console.log(30) ;
}
else if(a!=b && b!=c && a!=c){

	console.log(40);
}
else
	console.log(20);

}
check(); 



function convert(nbr){
	nbr= prompt('enter the number to convert');

    let hrs=Math.floor(nbr/60);
	let min=nbr%60;
	let sec=(hrs*3600)+(min*60);

	console.log(`${hrs}hours and ${min}minutes`);
	console.log(`It is equal to ${sec} seconds`);
    
	

	
	}
convert();
	

