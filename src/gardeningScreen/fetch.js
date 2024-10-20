export default async function fetching(){
	let result = await fetch("https://trefle.io/api/v1/plants?token=V5PgAvwMFiT4HgzQ_nGB82k4o2RshE6uP2_vZc4obdo&filter[common_name]=beach%20strawberry");
	if(!result.ok){
		throw "something went wrong";
	}
	let json = await result.json();
	console.log(json);
}