const game = {
  team1: "Bayer Munich",
  team2: "Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Muller"],
  date: "01/01/2024",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Lab1.1

// 1. Tạo mảng cầu thủ
const [player1, player2] = game.players;
console.log(player1, player2);

// 2. Danh sách cầu thủ
const [gk1, ...fieldPlayers1] = player1;
console.log(gk1, fieldPlayers1);
const [gk2, ...fieldPlayers2] = player2;
console.log(gk2, fieldPlayers2);

// 3. Danh sách tất cả các cầu thủ
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// 4. Hiển thị danh sách cầu thủ của Bayer
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5. Cấu trúc lại thuộc tính odds
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Hiển thị tên các cầu thủ ghi bàn
const printGoals = function (...player) {
  console.log(player);
};

printGoals(...game.scored);

// Lab 1.2

// 1. Hiển thị cầu thủ ghi bàn

for (const [i, player] of game.scored.entries()) {
  console.log(`Bàn ${i + 1}: ${player}`);
}

// 2. Tính tỉ lệ chấp trung bình

const odds = Object.values(game.odds);
let sum = 0;

for (const item of odds) {
  sum += item;
}

console.log(`Tỉ lệ chấp trung bình: ${sum / odds.length}`);

// 3. Hiển thị lại tỉ lệ thắng

const odds1 = Object.entries(game.odds);

for (const [team, odd] of odds1) {
  let str = team == "x" ? "hòa của draw" : "thắng của ${game[team]}";
  console.log(`Tỉ lệ ${str}: ${odd}`);
}

// 4. Hiển thị số bàn thắng mà cầu thủ ghi được
const scorers = {};
const scored = game.scored;
console.log(scored);
for (let i = 0; i < scored.length; i++) {
  count = 0;
  for (let j = 0; j < scored.length; j++) {
    if (scored[i] == scored[j]) {
      count++;
    }
  }
  scorers[scored[i]] = count;
}
console.log(scorers);

// Lab2.1
// Tạo sự kiện
const gameevent = new Map([
  [5, "Phạt góc"],
  [8, "Ghi bàn"],
  [15, "Thẻ vàng"],
  [20, "Phạt góc"],
  [30, "Thẻ vàng"],
  [40, "Ghi bàn"],
  [50, "Phạt góc"],
  [60, "Thay người"],
  [64, "Thẻ vàng"],
  [70, "Ghi bàn"],
  [80, " Thay người"],
  [85, " Ghi bàn"],
  [90, " Phạt góc"],
  [95, " Thay người"],
]);
console.log(gameevent);
// 1. Tạo mảng sự kiện khác nhau
const events1 = [...gameevent.values()];
const events2 = [...new Set(gameevent.values())];
// console.log(events1);
console.log(events2);
// 2. Xóa sự kiện phút 64
gameevent.delete(64);
console.log(gameevent);

// 3. Hiển thị thời gian trung bình sự kiện diễn ra
// console.log('Trung bình sau mỗi', $(event.size)/time.length,'phút sẽ có sự kiện xảy ra');
const time = [...gameevent.keys()];
console.log(time[time.length - 1]);
console.log(
  `Trung bình sau mỗi
  ${time[time.length - 1] / time.length}
  phút sẽ có sự kiện xảy ra`
);
// 4. Hiển thị số lượng sự kiện diễn ra trong hiệp 1 và 2
for (const [min, event] of gameevent) {
  let hiep = min <= 45 ? "1" : "2";
  console.log(`[Hiệp ${hiep}] ${min} : ${event}`);
}

// Lab 2.2
document.querySelector("body").innerHTML =
  '<textarea name="" id="" cols="30" rows="8"></textarea><br><button>Click</button>';
let button = document.querySelector("button");
button.addEventListener("click", function () {
  let text = document.querySelector("textarea").value;
  console.log(text);
  const rows = text.split("\n");
  console.log(rows);
  for (const row of rows) {
    // const logFrom = row.toLowerCase().trim().split(':');
    const [str1, str2] = row.toLowerCase().trim().split(":");
    let output = `${str1}${str2.replace(str2[0], str2[0].toUpperCase())}`;
    console.log(output);
  }
});
