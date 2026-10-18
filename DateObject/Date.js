
console.log("----- DATE OBJECT -----");

// 1. Current date and time
let today = new Date();
console.log("Current Date:", today);

// 2. Create a specific date
let date1 = new Date("2026-10-18");
console.log("Specific Date:", date1);

// 3. Date using year, month, day
let date2 = new Date(2026, 9, 18);
console.log("Custom Date:", date2);

// 4. Date using milliseconds
let date3 = new Date(0);
console.log("Timestamp Date:", date3);

// 5. Convert date into string
console.log("Date String:", today.toDateString());

// 6. Convert time into string
console.log("Time String:", today.toTimeString());

// 7. Convert full date into string
console.log("Full String:", today.toString());

// 8. Convert to ISO format
console.log("ISO String:", today.toISOString());

// 9. Convert to UTC string
console.log("UTC String:", today.toUTCString());

// 10. Get timestamp in milliseconds
console.log("Timestamp:", today.getTime());

// 11. Compare dates
let firstDate = new Date("2026-01-01");
let secondDate = new Date("2026-12-31");

console.log("First date is earlier:", firstDate < secondDate);

// 12. Check data type
console.log("Type:", typeof today);
console.log("Is Date Object:", today instanceof Date);
