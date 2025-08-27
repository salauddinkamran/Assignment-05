// header heart count
let count = 0;
const historyData = [];
function getHeaerHeadertCount(id) {
  const headerHeartCount = document.getElementById(id);
  count++;
  headerHeartCount.innerText = count;
}

const headerBtns = document.getElementsByClassName("heart-btn");
for (let headerBtn of headerBtns) {
  headerBtn.addEventListener("click", function () {
    getHeaerHeadertCount("header-heart-count");
  });
}

// header coin count
let coinCount = 100;
function getHeaderCoin(id) {
  const HeaderCallCoin = document.getElementById(id);
  if (coinCount <= 0) {
    alert("Your account coin is not available!");
    return;
  }
  coinCount -= 20;
  HeaderCallCoin.innerText = coinCount;
}

const headerCallBtns = document.getElementsByClassName("call-btn");
for (let headerCallBtn of headerCallBtns) {
  headerCallBtn.addEventListener("click", function () {
    getHeaderCoin("header-coin");
    const card = headerCallBtn.closest(".card");
    const cardTilet = card.querySelector(".card-title").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;
    alert(`Calling ${cardTilet } ${serviceNumber}`)

    const data = {
      name: cardTilet,
      number: serviceNumber,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);
    getHistoryItems(data);
  });
}

function getHistoryItems(data) {
  const historyContainer = document.getElementById("history-container");
  const div = document.createElement("div");
  div.innertext = "";
  div.innerHTML = `
      <div class="flex items-center justify-between p-4 bg-gray-100 rounded-lg mb-3">
        <div>
          <h2 class="font-semibold">${data.name}</h2>
          <p class="text-gray-500">${data.number}</p>
        </div>
        <p class="text-gray-500">${data.date}</p>
      </div>
  `;
  historyContainer.appendChild(div);
}

document.getElementById("clear-btn").addEventListener("click", function() {
  document.getElementById("history-container").innerHTML = " "
})

// header copy count
let copyCount = 0;
function getHeaderCopyCount(id) {
  const headerCopyCount = document.getElementById(id);
  copyCount++;
  headerCopyCount.innerText = copyCount;
}

const headerCopyCounts = document.getElementsByClassName("copy-btn");
for (let headerCopyCount of headerCopyCounts) {
  headerCopyCount.addEventListener("click", function () {
    getHeaderCopyCount("header-copy-count");
    const card = headerCopyCount.closest(".card");
    const serviceNumber = card.querySelector(".service-number").innerText;
    navigator.clipboard.writeText(serviceNumber);
    alert(`Copy the number : ${serviceNumber}`);
  });
}
