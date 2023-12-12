export default class Client {
    constructor(firstname, lastname, night, room, breakfast){
        this.firstname = firstname; //this.firstname pourrait s'appeler this.prenom
        this.lastname = lastname;
        this.night = night;
        this.room = room;
        this.breakfast = breakfast;
    }

    totalPrice(){ 
        let totalBreakfast = this.room * this.night;
        //return peut être utilisé parce que nous sommes dans une méthode  
        if (this.breakfast) {
            return totalBreakfast + 7 * this.night;
        } else {
            return totalBreakfast;
        } 
    }

}