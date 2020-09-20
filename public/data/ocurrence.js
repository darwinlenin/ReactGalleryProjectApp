const arr = [2,3,4,3,2,1], ent = 3, result = ocurrence(arr, ent);
function ocurrence (arr, ent){
    let count = 1;
    return arr.filter((ocurrence) => (ocurrence == 3) ? count++ : 0).length;
}
console.log(result);
//https://git-rba.hackerrank.com/git/b0892cd3-38f6-482c-97a2-92b699a416a0