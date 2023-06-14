export const counter = (value) => {
    let numbers = []
    
    if (!value) {
      for (let index = 100; index > 0; index--) {
        numbers.push(index);
      }
    } else {
        for (let index = value; index > 0; index--){
            numbers.push(index)
        }
    }
    return numbers
}