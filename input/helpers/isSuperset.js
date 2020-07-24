
let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let digits = '0123456789'
export const notSymbols = new Set([...chars, ...digits])

export const isSuperset = (setA, setB) => {
    for (let item of setB.values()) {
      if (!setA.has(item)) {
        return false
      }
    }
  
    return true
  }



