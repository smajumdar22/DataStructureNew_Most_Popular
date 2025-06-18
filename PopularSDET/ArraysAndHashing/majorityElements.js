const majorityElements = (nums) =>{

    let map = new Map();
    for (let i=0; i<nums.length; i++){
        if (map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let maxKey = null;
    let maxValue = -Infinity;
    for (let [key, value] of map) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }
    return maxKey
}
// Example usage
const nums = [1, 2, 2, 4, 5, 6, 2, 8, 9];
console.log(majorityElements(nums));