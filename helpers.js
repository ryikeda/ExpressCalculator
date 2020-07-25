const getMean = (nums) => {
  if (nums.length === 0) return 0;
  return nums.reduce((acc, next) => acc + next) / nums.length;
};

const getMedian = (nums) => {
  nums.sort((a, b) => a - b);

  let middleIdx = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIdx] + nums[middleIdx - 1]) / 2;
  } else {
    median = nums[middleIdx];
  }

  return median;
};

const getMode = (nums) => {
  const freqObj = nums.reduce((acc, next) => {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});

  let count = 0;
  let mostFreq;

  for (let key in freqObj) {
    if (freqObj[key] > count) {
      mostFreq = key;
      count = freqObj[key];
    }
  }
  return parseInt(mostFreq);
};

const strToArr = (str) => {
  const strArr = str.split(",");
  let numsArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let valToNumber = Number(strArr[i]);

    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${strArr[i]}' at index ${i} is not a valid number.`
      );
    }

    numsArr.push(valToNumber);
  }
  return numsArr;
};

module.exports = {
  strToArr,
  getMean,
  getMedian,
  getMode,
};
