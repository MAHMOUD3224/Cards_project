// // Card Selector
let numberCard = document.querySelector(".front-card .number");
let month_year = document.querySelector(".month-year");
let userName = document.querySelector(".name");
let cvcNumber = document.querySelector(".back-card");
// Form Selector
let card_form = document.querySelector("#card_form");
let inpName = document.getElementById("cardName");
let inpNum = document.getElementById("cardNumber");
let inpMonth = document.querySelector('[name="month"]');
let inpYear = document.querySelector('[name="year"]');
let inpCvc = document.querySelector('[name="cvc"]');
let allInput = document.querySelectorAll(".inputs");
// complete state
let complete = document.querySelector(".complete");

inpNum.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, ""); // إزالة أي أحرف غير رقمية
  value = value.match(/.{1,4}/g)?.join(" ") || ""; // تقسيم كل 4 أرقام بمسافة
  e.target.value = value; // تحديث قيمة الإدخال
  numberCard.textContent = value || "0000 0000 0000 0000"; // تحديث الرقم المعروض
});

card_form.addEventListener("submit", function (ele) {
  if (
    inpName.value.trim() !== "" &&
    inpNum.value.trim() !== "" &&
    inpMonth.value.trim() !== "" &&
    inpYear.value.trim() !== "" &&
    inpCvc.value.trim() !== ""
  ) {
    userName.textContent = inpName.value.trim();
    month_year.textContent = `${inpMonth.value}/${inpYear.value}`;
    cvcNumber.style.setProperty("--before-content", `"${inpCvc.value.trim()}"`);
    complete.style.display = "flex";
    card_form.style.display = "none";
  } else {
    normal();
  }
  allInput.forEach((empty) => {
    empty.value = ``;
  });
  ele.preventDefault(); // منع إعادة تحميل الصفحة
});
let btn = document.querySelector(".button");

btn.onclick = normal;

function normal() {
  complete.style.display = "none";
  card_form.style.display = "block";
  userName.textContent = "Jane Appleseed";
  month_year.textContent = "00/00";
  cvcNumber.style.setProperty("--before-content", `"000" `);
  numberCard.textContent = "0000 0000 0000 0000";
}

