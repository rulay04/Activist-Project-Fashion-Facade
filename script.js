/* .js files add interaction to your website */

var factList = [
  "One in six people work in some part of the global fashion industry, making it the most labour-dependent industry.", /*0*/
  "80% of apparel is made by young women between the ages of 18 and 24.", /*1*/
  "Fashion production comprises 10% of total global carbon emissions, which is as much as the European Union.",
  "85% of all textiles go to dumps each year.",
  "Washing clothes releases 500,000 tons of microfibers into the ocean each year, which is the same as 50 billion plastic bottles.",
  "Fiber production has the largest impact on freshwater withdrawal, being the second largest contributor.",
  "Dyeing and finishing, yarn preparation and fiber production all contribute to resource depletion since they rely on fossil fuels.",
  "Emissions from textile manufacturing alone are projected to skyrocket by 60% by 2030.",
  "The average American throws away around 81 pounds of clothing yearly.",
  "It takes about 700 gallons to produce one cotton shirt and 2,000 gallons of water to produce a pair of jeans.",
  "93% of brands surveyed by the Fashion Checker aren’t paying garment workers a living wage.",
  "Textile dyeing is the world’s second-largest polluter of water, since the water leftover from the dyeing process is often dumped into ditches, streams or rivers.",
  "More than $500 billion of value is lost every year due to clothing underutilization and the lack of recycling.",
  "35% of microplastics in the ocean are from synthetic fibers like polyester, nylon and acrylic, which take hundreds of years to biodegrade.",
  "The population consumes around 80 billion new pieces of clothing every year, 400% more than the consumption twenty years ago.",
];

console.log(factList);


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;



if (myButton) {
myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count = count+1;
  if (count == factList.length){
    count=0;
  }
}