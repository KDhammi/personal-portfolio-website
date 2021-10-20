// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

onst pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() { // mutates random base in the dna property
      const index = Math.floor(Math.random() * this.dna.length); // randomly selects a base in the dna property
      let newBase = returnRandBase(); // assigns a new random base to newBase
      while (this.dna[index] === newBase) { // while the random base is the same as the old base
        newBase = returnRandBase(); // keep returning random base      
      }
      this.dna[index] = newBase; // assigns new base after while loop finished
      return this.dna; // returns new dna
    },
    compareDNA(otherSpecimen) { // compares DNA to returned object
      const commonDNA = 0;
      for (i = 0; i < this.dna.length; i++) { // iterates through every dna array
        if (this.dna[i] === otherSpecimen[i]) { // if they match
          commonDNA++; // adds 1 to the commonDNA
        }
      }
      const percentShared = commonDNA/otherSpecimen.length * 100; // the percentage of shared DNA
      const percentShared2Deci = percentShared.toFixed(2); // the percentage to 2 decimal places
      console.log(`${this.specimenNum} and ${otherSpecimen.specimenNum} have ${percentShared2Deci}% DNA in common.`); // prints results
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(base => base === 'C' || base === 'G');
      if (cOrG.length/this.dna.length >= 0.6) {
        return true;
      };
    }
  }
};

const survivingSpecimen = [];
let counter = 1;

while (survivingSpecimen.length < 30) {
  let newSpecimen = pAequorFactory(counter, mockUpStrand());
  if (newSpecimen.willLikelySurvive()) {
    survivingSpecimen.push(newSpecimen);
  }
  counter++;
}

console.log(survivingSpecimen);








