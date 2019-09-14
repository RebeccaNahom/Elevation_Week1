const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let genes2 = []

genes2 = genes.splice(0,2);

console.log(genes)
console.log(genes2)

const rlf = genes.splice(0,1);
const cryz = genes.splice(genes.length-1,1);

genes2.push(...cryz,...rlf);
genes2.push(...genes,...genes)
genes2.unshift("FXT")

console.log(genes)
console.log(genes2)


// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// const newStrand = []

// const firstTwo = genes.splice(0, 2)
// const lastGene = genes.splice(genes.length - 1)

// newStrand.push(...firstTwo)
// newStrand.push(...lastGene)
// newStrand.push(genes[0]) //remember we spliced the first 2, so now "RLF" is first
// newStrand.push(genes[genes.length - 1], genes[genes.length - 1]) //again, since we spliced the last one, "AZIN2" is now last
// newStrand.unshift("FXT")

// console.log(newStrand)