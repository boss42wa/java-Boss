/* // ` ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
function inchTofeet(feet) {
  const inche = feet * 12;

  return inche;
}
const inche = inchTofeet(2);
console.log(inche);
 */
/* 
? ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

function centimeterToMeter(centiMeter) {
  const meter = centiMeter / 100;
  return meter;
}
const result = centimeterToMeter(350);
console.log(result);
 */

// * ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।
/* * 
এইবার ভালো করে খেয়াল করো। 
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে 
কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

 */

// ? ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।

// function bestFrirnd(names) {
//   let word = [];
//   for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     if (element.length > word.length) {
//       word = element;
//     }
//   }
//   return word;
// }

// const names = ["sajib", "lallu", "kuddus", "joyyyyy", "imrulllllll", "shuvo"];
// const result = bestFrirnd(names);
// console.log(result);
// // // !

// ! ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
// function getOddNumberOfAnArray(numbers) {
//   const oddnumber = [];
//   const positive = [];

//   for (let i = 0; i < numbers.length; i++) {
//     const indexFind = i;
//     const elementFind = numbers[indexFind];
//     if (elementFind % 2 !== 0) {
//       //   console.log(indexFind, elementFind);
//       oddnumber.push(elementFind);
//     } else if (elementFind % 2 === ) {
//       positive.push(elementFind);
//     }
//   }
//   return oddnumber, positive;
// }

// const boroChoto = [32, 45, 34, 67, 875, 141, 980];
// const oddnumber = getOddNumberOfAnArray(boroChoto);
// console.log(oddnumber);

// !
function getpositiveNegative(numbers) {
  let positive = [];
  let negative = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);
    if (element % 2 === 1) {
      negative.push(element);
    } else {
      positive.push(element);
    }
  }
  return positive, negative;
}

const vhai = [32, 45, 34, 67, 875, 141, 980];
const chad = getpositiveNegative(vhai);
console.log(chad);
