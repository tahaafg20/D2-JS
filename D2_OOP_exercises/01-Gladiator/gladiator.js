class Gladiator {
    constructor(name, weapon) {
      this.name = name;
      if (["Spear", "Club", "Trident"].includes(weapon)){
      this.weapon = weapon
      }else{
        throw new Error("InvalidArgument - NO SUCH WEAPON!!!!");
      }
    }
  }

  class Arena {
      constructor(name){
          this.name = name.charAt(0).toUpperCase() + name.slice(1);
          this.gladiators = new Array;
      }
        addGladiator(gladiatorObjectName) {
            if (this.gladiators.length < 2){
            (this.gladiators).push(gladiatorObjectName);
        }else{
            throw new Error("More than capacity - THIS ARENA IS ALREADY FULL!!!!");
        }
        }
        fight(){
            if(this.gladiators.length === 2){
                var first = this.gladiators[0].weapon;
                var second = this.gladiators[1].weapon;
                for (var i =0; i < this.gladiators.length; i++)
                if (this.gladiators[i].name === "Maximus") {
                    this.gladiators = [this.gladiators[i]];
                } else if (first === second) {
                    this.gladiators = [];
                } else if (first === "Trident" && second === "Spear") {
                    this.gladiators.pop();
                } else if (first === "Trident" && second === "Club") {
                    this.gladiators.shift();
                } else if (first === "Spear" && second === "Club") {
                    this.gladiators.pop();
                } else if (first === "Club" && second === "Trident") {
                    this.gladiators.pop();
                } else if (first === "Spear" && second === "Trident") {
                    this.gladiators.shift();
                } else if (first === "Club" && second === "Spear") {
                    this.gladiators.shift();
                } else if (first === "Club" && second === "Trident") {
                    this.gladiators.shift();
                }
            }
        }
            removeGladiator(name){
                for (var i =0; i < this.gladiators.length; i++)
                if (this.gladiators[i].name === name) {
                    this.gladiators.splice(i,1);
                    break;
                }
              }
                entertained(){
                for (var i =0; i < this.gladiators.length; i++)
                if (this.gladiators[i].name === "Maximus") {
                    return true;
                }
                return false;
            }
        }   