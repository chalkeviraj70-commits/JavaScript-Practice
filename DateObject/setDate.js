
console.log("----- DATE SET METHODS -----");

let today = new Date();

console.log("Original Date:", today);

// Set methods
today.setFullYear(2027);
console.log("Set Year:", today);

today.setMonth(5);
console.log("Set Month:", today);

today.setDate(15);
console.log("Set Date:", today);

today.setHours(10);
console.log("Set Hours:", today);

today.setMinutes(30);
console.log("Set Minutes:", today);

today.setSeconds(45);
console.log("Set Seconds:", today);

today.setMilliseconds(500);
console.log("Set Milliseconds:", today);

today.setTime(0);
console.log("Set Timestamp:", today);

// UTC Set methods
today.setUTCFullYear(2026);
console.log("Set UTC Year:", today);

today.setUTCMonth(9);
console.log("Set UTC Month:", today);

today.setUTCDate(18);
console.log("Set UTC Date:", today);

today.setUTCHours(12);
console.log("Set UTC Hours:", today);

today.setUTCMinutes(20);
console.log("Set UTC Minutes:", today);

today.setUTCSeconds(30);
console.log("Set UTC Seconds:", today);

today.setUTCMilliseconds(100);
console.log("Set UTC Milliseconds:", today);
