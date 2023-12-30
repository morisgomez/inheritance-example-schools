//////SUPERCLASS FOR SCHOOL://////
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name; 
    this._level = level;
    this._numberOfStudents = numberOfStudents; //this property needs a getter and setter bc we need to be able to change the value later on. 
    //what if a school loses or gains students?
  } //closes constructor.

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") 
    {
      this._numberOfStudents = newNumberOfStudents; //notice how we change the actual property value; we want to set a new value.
    } 
    else 
    {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } //closes if else statement.
  } //closes setter method.

  quickFacts() {
    //using getter methods to get prop values.
    //can also use string interpolation, but this feels more straightforward for me.
    console.log(this.name + " educates " + this.numberOfStudents + " students at the " + this.level + " school level.");
  }

  //create static method: 
  //not getter or setter; based off class not instance.
  static pickSubstituteTeacher(substituteTeachers) { //takes in array of sub names.
  let randomNum = Math.floor(substituteTeachers.length * Math.random()); //gets random num from array.
  return substituteTeachers[randomNum]; //selects teacher.
  }
} //closes superclass.





//////SUBCLASS FOR PRIMARY://////
class PrimarySchool extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) { //don't need the level parameter bc it is set by subclass for all corresponding instances below:.
    //in this case, i decided to explicitly pass the level argument to see how it works versus the other sub classes. 
    super(name, level, numberOfStudents); //sets primary in super class.
    this._pickupPolicy = pickupPolicy; 
  } //closes constructor.

  get pickupPolicy() {
    return this._pickupPolicy;
  }
} //closes subclass.





//////SUBCLASS FOR MIDDLE://////
class MiddleSchool extends School {
  constructor(name, numberOfStudents) { //don't need the level parameter bc it is set by subclass for all corresponding instance below: 
    super(name, "middle", numberOfStudents); //sets primary in super class.
  } //closes constructor.
} //closes subclass.





//////SUBCLASS FOR HIGH://////
class HighSchool extends School {
  //note: instead of having already a "high" level value we can also pass it every time when creating instance. 
  constructor(name, numberOfStudents, sportsTeams) { //don't need the level para bc it is set by subclass for all corresponding instances below: 
    super(name, "high", numberOfStudents); //sets primary in super class.
    this._sportsTeams = sportsTeams;
  } //closes constructor.

  get sportsTeams() {
    console.log(this._sportsTeams); //no need to use getter since we are within class. getters accessed for when creating instances outside classes. 
  }
} //closes subclass.





//////////////////////////////////////
//////1) CREATE A PRIMARY INSTANCE:///
//////////////////////////////////////

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", "primary", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
console.log(lorraineHansbury);
/*logged object should look like below:
PrimarySchool {
  _name: 'Lorraine Hansbury',
  _level: 'primary',
  _numberOfStudents: 514,
  _pickupPolicy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' }
 */


//2) Call .quickFacts() on the lorraineHansbury instance:
lorraineHansbury.quickFacts();
/*
logs the following:
Lorraine Hansbury educates 514 students at the primary school level.
*/

//3) Call .pickSubstituteTeacher() static method on School, and pass the following array as an argument: syntax = class.staticMethod();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

//4) use setter method to change the numberOfStudents of middle instance:
lorraineHansbury.numberOfStudents = 3;
console.log(lorraineHansbury);
/*logged object should look like below:
PrimarySchool {
  _name: 'Lorraine Hansbury',
  _level: 'primary',
  _numberOfStudents: 3,
  _pickupPolicy: 'Students must be picked up by a parent, guardian, or a family member over the age of 13.' }
 */





//////////////////////////////////////
//////1) CREATE A HIGH INSTANCE://////
//////////////////////////////////////

const alSmith = new HighSchool("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith);
/*logged object should look like below:
HighSchool {
  _name: 'Al E. Smith',
  _level: 'high',
  _numberOfStudents: 415,
  _sportsTeams: [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ] }
 */

//2) Get the value saved to the sportsTeams property in alSmith:
alSmith.sportsTeams; 
//logs: [ 'Baseball', 'Basketball', 'Volleyball', 'Track and Field' ]

//**********END OF PROGRAM***********

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

//**********NOTE TO SELF***********
/*
1) subclass for primary need to explicitly pass level parameter.
2) subclass for middle & high do not need to pass a level parameter bc already set in super as "high" or "middle"
3) both should work fine but option 2 would be considered cleaner code.
*/
