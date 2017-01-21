// import Fluffy from 'fluffy'

class Spork {
	constructor(type){
		this.type = type
		console.log(this.toString())
	}
	toString(){
		return `${type} spork`
	}
}

const spork = new Spork('sparkly')
new Fluffy(spork.toString())