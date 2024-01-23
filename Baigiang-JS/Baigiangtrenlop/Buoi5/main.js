//Object và array
function Dog(dogName, Weight, color, breed, type) {
    this.dogName = dogName;
    this.Weight = Weight;
    this.color = color;
    this.breed = breed;
    this.type = type;
    this.sua = function () {
        return "Gau gau";
    };
}

Dog[0] = new Dog("Jacky", 0.8, "brown", "chihuahua teacup", "short hair");
Dog[1] = new Dog("Javascrip", 1, "brown", "chihuahua mini", "long hair");
Dog[2] = new Dog("Jscript", 1, "White", "chihuahua", "long hair");

for (var x in Dog) {
    console.log(Dog[x].dogName);
}

//mảng trong Object
company = {
    companyName: "Thang ng",
    activities: ["1",
        "2", "3"],
    yearOfEstablishment: 2021
};

let activity = company.activities[1];
console.log(activity);

console.dir(Dog);
