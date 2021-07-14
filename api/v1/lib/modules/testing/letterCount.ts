interface accumulator {[key: string]: number}

const letterCount=(char: string, string: string): number =>{
  let lettersMap: accumulator = string.split('').reduce((acc: accumulator,currentLetter: string) => {
      if(acc[currentLetter]){
          acc[currentLetter]+=1
      }
      else{
          acc[currentLetter]=1
      }
      return acc
  },{})
  return lettersMap[char]
}