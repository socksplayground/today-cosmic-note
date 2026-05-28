const ASSET_DIR = "./assets/tarot/";
const CARD_BACK = `${ASSET_DIR}CARD_BACK_SIMPLE.webp`;

const CARD_FILES = [
  "00_THE_FOOL.webp",
  "01_THE_MAGICIAN.webp",
  "02_THE_HIGH_PRIESTESS.webp",
  "03_THE_EMPRESS.webp",
  "04_THE_EMPEROR.webp",
  "05_THE_HIEROPHANT.webp",
  "06_THE_LOVERS.webp",
  "07_THE_CHARIOT.webp",
  "08_STRENGTH.webp",
  "09_THE_HERMIT.webp",
  "10_WHEEL_OF_FORTUNE.webp",
  "11_JUSTICE.webp",
  "12_THE_HANGED_MAN.webp",
  "13_DEATH.webp",
  "14_TEMPERANCE.webp",
  "15_THE_DEVIL.webp",
  "16_THE_TOWER.webp",
  "17_THE_STAR.webp",
  "18_THE_MOON.webp",
  "19_THE_SUN.webp",
  "20_JUDGEMENT.webp",
  "21_THE_WORLD.webp",
  "CUPS_01_ACE_OF_CUPS.webp",
  "CUPS_02_TWO_OF_CUPS.webp",
  "CUPS_03_THREE_OF_CUPS.webp",
  "CUPS_04_FOUR_OF_CUPS.webp",
  "CUPS_05_FIVE_OF_CUPS.webp",
  "CUPS_06_SIX_OF_CUPS.webp",
  "CUPS_07_SEVEN_OF_CUPS.webp",
  "CUPS_08_EIGHT_OF_CUPS.webp",
  "CUPS_09_NINE_OF_CUPS.webp",
  "CUPS_10_TEN_OF_CUPS.webp",
  "CUPS_11_PAGE_OF_CUPS.webp",
  "CUPS_12_KNIGHT_OF_CUPS.webp",
  "CUPS_13_QUEEN_OF_CUPS.webp",
  "CUPS_14_KING_OF_CUPS.webp",
  "PENTACLES_01_ACE_OF_PENTACLES.webp",
  "PENTACLES_02_TWO_OF_PENTACLES.webp",
  "PENTACLES_03_THREE_OF_PENTACLES.webp",
  "PENTACLES_04_FOUR_OF_PENTACLES.webp",
  "PENTACLES_05_FIVE_OF_PENTACLES.webp",
  "PENTACLES_06_SIX_OF_PENTACLES.webp",
  "PENTACLES_07_SEVEN_OF_PENTACLES.webp",
  "PENTACLES_08_EIGHT_OF_PENTACLES.webp",
  "PENTACLES_09_NINE_OF_PENTACLES.webp",
  "PENTACLES_10_TEN_OF_PENTACLES.webp",
  "PENTACLES_11_PAGE_OF_PENTACLES.webp",
  "PENTACLES_12_KNIGHT_OF_PENTACLES.webp",
  "PENTACLES_13_QUEEN_OF_PENTACLES.webp",
  "PENTACLES_14_KING_OF_PENTACLES.webp",
  "SWORDS_01_ACE_OF_SWORDS.webp",
  "SWORDS_02_TWO_OF_SWORDS.webp",
  "SWORDS_03_THREE_OF_SWORDS.webp",
  "SWORDS_04_FOUR_OF_SWORDS.webp",
  "SWORDS_05_FIVE_OF_SWORDS.webp",
  "SWORDS_06_SIX_OF_SWORDS.webp",
  "SWORDS_07_SEVEN_OF_SWORDS.webp",
  "SWORDS_08_EIGHT_OF_SWORDS.webp",
  "SWORDS_09_NINE_OF_SWORDS.webp",
  "SWORDS_10_TEN_OF_SWORDS.webp",
  "SWORDS_11_PAGE_OF_SWORDS.webp",
  "SWORDS_12_KNIGHT_OF_SWORDS.webp",
  "SWORDS_13_QUEEN_OF_SWORDS.webp",
  "SWORDS_14_KING_OF_SWORDS.webp",
  "WANDS_01_ACE_OF_WANDS.webp",
  "WANDS_02_TWO_OF_WANDS.webp",
  "WANDS_03_THREE_OF_WANDS.webp",
  "WANDS_04_FOUR_OF_WANDS.webp",
  "WANDS_05_FIVE_OF_WANDS.webp",
  "WANDS_06_SIX_OF_WANDS.webp",
  "WANDS_07_SEVEN_OF_WANDS.webp",
  "WANDS_08_EIGHT_OF_WANDS.webp",
  "WANDS_09_NINE_OF_WANDS.webp",
  "WANDS_10_TEN_OF_WANDS.webp",
  "WANDS_11_PAGE_OF_WANDS.webp",
  "WANDS_12_KNIGHT_OF_WANDS.webp",
  "WANDS_13_QUEEN_OF_WANDS.webp",
  "WANDS_14_KING_OF_WANDS.webp",
];

const MAJOR_NAMES = {
  "00_THE_FOOL.webp": "愚者",
  "01_THE_MAGICIAN.webp": "魔術師",
  "02_THE_HIGH_PRIESTESS.webp": "女祭司",
  "03_THE_EMPRESS.webp": "皇后",
  "04_THE_EMPEROR.webp": "皇帝",
  "05_THE_HIEROPHANT.webp": "教皇",
  "06_THE_LOVERS.webp": "戀人",
  "07_THE_CHARIOT.webp": "戰車",
  "08_STRENGTH.webp": "力量",
  "09_THE_HERMIT.webp": "隱者",
  "10_WHEEL_OF_FORTUNE.webp": "命運之輪",
  "11_JUSTICE.webp": "正義",
  "12_THE_HANGED_MAN.webp": "吊人",
  "13_DEATH.webp": "死神",
  "14_TEMPERANCE.webp": "節制",
  "15_THE_DEVIL.webp": "惡魔",
  "16_THE_TOWER.webp": "高塔",
  "17_THE_STAR.webp": "星星",
  "18_THE_MOON.webp": "月亮",
  "19_THE_SUN.webp": "太陽",
  "20_JUDGEMENT.webp": "審判",
  "21_THE_WORLD.webp": "世界",
};

const SUIT_NAMES = {
  CUPS: "聖杯",
  PENTACLES: "錢幣",
  SWORDS: "寶劍",
  WANDS: "權杖",
};

const RANK_NAMES = {
  "01": "一",
  "02": "二",
  "03": "三",
  "04": "四",
  "05": "五",
  "06": "六",
  "07": "七",
  "08": "八",
  "09": "九",
  "10": "十",
  "11": "侍者",
  "12": "騎士",
  "13": "皇后",
  "14": "國王",
};

const POSITION_COPY = [
  {
    label: "現在",
    prompt: "你此刻帶著的能量與狀態。",
  },
  {
    label: "課題",
    prompt: "這件事裡需要被看見、整理或面對的核心。",
  },
  {
    label: "指引",
    prompt: "接下來最值得採取的態度或行動方向。",
  },
];

const MAJOR_MEANINGS = {
  愚者: "新的起點正在打開，允許自己用比較輕盈的方式嘗試，但也要留意準備是否足夠。",
  魔術師: "資源已經在手邊，關鍵是把想法轉成清楚的行動，讓意圖有落地的形式。",
  女祭司: "答案可能還沒有完全浮現，先信任直覺，觀察細節與沉默中的訊息。",
  皇后: "滋養、創造與感受力正在增強，適合照顧關係、身體與正在萌芽的計畫。",
  皇帝: "需要秩序、界線與承諾。把規則立清楚，事情會更容易推進。",
  教皇: "傳統、學習或可信任的引導會提供幫助，也提醒你確認自己的信念從何而來。",
  戀人: "選擇與連結是主題。回到價值觀，看看哪個方向真正與你一致。",
  戰車: "意志力正在聚焦。只要方向明確，就能把分散的力量收束成前進的動能。",
  力量: "溫柔的堅定比硬碰硬更有效。耐心處理情緒，力量會變得穩。",
  隱者: "先退一步獨處、研究或沉澱，真正的答案需要一點安靜的空間。",
  命運之輪: "局勢正在變動，某些轉折不是靠控制完成，而是靠敏銳地順勢調整。",
  正義: "需要誠實、平衡與清楚的判斷。把事實攤開，結果才會站得住腳。",
  吊人: "暫停不是停滯，而是換視角。放下舊方法後，新解法才會出現。",
  死神: "某個階段正在結束，清理不再適合的部分，才能讓新的生命力進來。",
  節制: "整合與調和是關鍵。慢慢試比例，不急著走極端。",
  惡魔: "留意依附、恐懼或慣性牽制你。看清束縛，就是鬆動它的第一步。",
  高塔: "舊結構可能被迫動搖。雖然不舒服，但它會揭露更真實的基礎。",
  星星: "希望與療癒正在恢復，保持真誠，讓願景慢慢帶你往前。",
  月亮: "情緒、未知與投射很多。先不要急著定論，確認資訊再行動。",
  太陽: "清晰、活力與被看見的機會增加。把事情攤在陽光下，會更順。",
  審判: "一個重新回應人生召喚的時刻。誠實回顧後，你會知道該做什麼。",
  世界: "循環接近完成，整合成果並準備跨入下一個階段。",
};

const SUIT_MEANINGS = {
  聖杯: "情感、關係、直覺與內在需求是焦點。",
  錢幣: "現實資源、工作、身體與長期累積需要被重視。",
  寶劍: "思考、溝通、真相與界線正在主導局面。",
  權杖: "熱情、行動、創意與意志力帶來推進。",
};

const RANK_MEANINGS = {
  一: "新的可能剛開始，需要給它一個明確出口。",
  二: "正在權衡兩股力量，平衡比速度重要。",
  三: "合作、表達與初步成果開始成形。",
  四: "穩定與休整是主題，也要避免停得太久。",
  五: "摩擦或失落帶來提醒，調整方法會比硬撐有用。",
  六: "支持、回饋與重新校準讓事情回到較和諧的位置。",
  七: "選擇變多，請分辨真正有價值的方向。",
  八: "行動、練習與持續投入會帶來突破。",
  九: "接近完成但仍有敏感處，照顧自己的承受度。",
  十: "一個循環抵達高點，也提醒你整理負擔。",
  侍者: "以學習者的心態接近它，新的訊息正在抵達。",
  騎士: "動能很強，行動前先確認節奏與目標。",
  皇后: "成熟的接納與滋養力能讓事情自然生長。",
  國王: "主導權、責任與清楚決策會穩住全局。",
};

const state = {
  deck: [],
  currentIndex: 0,
  selected: [],
  pickedIndexes: new Set(),
  isAnimating: false,
  lastWheelAt: 0,
};

const $ = (selector) => document.querySelector(selector);

const introScreen = $("#introScreen");
const drawScreen = $("#drawScreen");
const readingScreen = $("#readingScreen");
const floatingDeck = $("#floatingDeck");
const deckWindow = $("#deckWindow");
const selectedRow = $("#selectedRow");
const drawStatus = $("#drawStatus");
const readingGrid = $("#readingGrid");
const summaryPanel = $("#summaryPanel");
const readingModal = $("#readingModal");
const modalImage = $("#modalImage");
const modalPosition = $("#modalPosition");
const modalTitle = $("#modalTitle");
const modalText = $("#modalText");
const introCardButton = $("#introCardButton");
const sparkleBurst = $("#sparkleBurst");
const questionInput = $("#questionInput");
let draggedCardIndex = null;

function shuffle(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function getCardInfo(file) {
  if (MAJOR_NAMES[file]) {
    const name = MAJOR_NAMES[file];
    return {
      file,
      name,
      path: `${ASSET_DIR}${file}`,
      meaning: MAJOR_MEANINGS[name],
    };
  }

  const [suitKey, rankKey] = file.split("_");
  const suit = SUIT_NAMES[suitKey];
  const rank = RANK_NAMES[rankKey];
  return {
    file,
    name: `${suit}${rank}`,
    path: `${ASSET_DIR}${file}`,
    meaning: `${SUIT_MEANINGS[suit]}${RANK_MEANINGS[rank]}`,
  };
}

function showScreen(screen) {
  [introScreen, drawScreen, readingScreen].forEach((item) => item.classList.remove("is-active"));
  screen.classList.add("is-active");
  window.scrollTo(0, 0);
}

function resetReadingSlots() {
  selectedRow.querySelectorAll(".selected-slot").forEach((slot) => {
    slot.innerHTML = "";
  });
}

function startDraw() {
  state.deck = shuffle(CARD_FILES).map(getCardInfo);
  state.currentIndex = Math.floor(state.deck.length / 2);
  state.selected = [];
  state.pickedIndexes = new Set();
  state.isAnimating = false;
  resetReadingSlots();
  renderDeck();
  updateStatus();
  showScreen(drawScreen);
}

function goHome() {
  state.deck = [];
  state.currentIndex = 0;
  state.selected = [];
  state.pickedIndexes = new Set();
  state.isAnimating = false;
  questionInput.value = "";
  floatingDeck.innerHTML = "";
  resetReadingSlots();
  readingGrid.innerHTML = "";
  summaryPanel.innerHTML = "";
  closeReadingModal();
  showScreen(introScreen);
}

function renderDeck() {
  floatingDeck.innerHTML = "";
  state.deck.forEach((card, index) => {
    const button = document.createElement("button");
    button.className = "tarot-card";
    button.type = "button";
    button.draggable = true;
    button.setAttribute("aria-label", `選擇第 ${index + 1} 張牌`);
    button.dataset.index = String(index);
    button.innerHTML = `
      <span class="card-face back"><img src="${CARD_BACK}" alt="" draggable="false"></span>
      <span class="card-face front"><img src="${card.path}" alt="${card.name}" draggable="false"></span>
    `;
    button.addEventListener("click", () => chooseIndex(index));
    button.addEventListener("dragstart", (event) => {
      if (state.isAnimating || state.pickedIndexes.has(index) || state.selected.length >= 3) {
        event.preventDefault();
        return;
      }
      draggedCardIndex = index;
      button.classList.add("is-dragging-card");
      selectedRow.classList.add("is-drop-ready");
      getNextSlot()?.classList.add("is-drop-target");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", String(index));
    });
    button.addEventListener("dragend", () => {
      button.classList.remove("is-dragging-card");
      clearDropState();
    });
    floatingDeck.appendChild(button);
  });
  layoutDeck();
}

function getNextSlot() {
  return selectedRow.querySelectorAll(".selected-slot")[state.selected.length] ?? null;
}

function clearDropState() {
  draggedCardIndex = null;
  selectedRow.classList.remove("is-drop-ready");
  selectedRow.querySelectorAll(".selected-slot").forEach((slot) => {
    slot.classList.remove("is-drop-target", "is-drop-hover");
  });
}

function layoutDeck() {
  const cards = [...floatingDeck.querySelectorAll(".tarot-card")];
  const available = cards.filter((card) => !card.classList.contains("is-picked"));
  if (!available.length) return;

  cards.forEach((card) => {
    const index = Number(card.dataset.index);
    if (state.pickedIndexes.has(index)) {
      card.classList.remove("is-selected");
      card.classList.add("is-picked");
      card.style.opacity = "0";
      card.style.pointerEvents = "none";
      return;
    }

    let offset = index - state.currentIndex;
    if (offset > state.deck.length / 2) offset -= state.deck.length;
    if (offset < -state.deck.length / 2) offset += state.deck.length;

    const abs = Math.abs(offset);
    const visible = abs <= 6;
    const x = offset * 76;
    const y = Math.pow(abs, 1.4) * 6;
    const rotate = offset * 4.6;
    const scale = offset === 0 ? 1.08 : Math.max(0.68, 1 - abs * 0.045);
    const z = 100 - abs;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.style.setProperty("--r", `${rotate}deg`);
    card.style.setProperty("--s", String(scale));
    card.style.zIndex = String(z);
    card.style.opacity = visible ? "1" : "0";
    card.style.pointerEvents = visible ? "auto" : "none";
    card.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px) rotateZ(${rotate}deg) rotateY(0deg) scale(${scale})`;
    card.classList.toggle("is-selected", offset === 0);
  });
}

function chooseIndex(index) {
  if (state.isAnimating || state.selected.length >= 3) return;

  if (index !== state.currentIndex) {
    state.currentIndex = index;
    layoutDeck();
    return;
  }

  drawCurrentCard();
}

function moveSelection(direction) {
  if (state.isAnimating) return;
  const nextIndex = findNextAvailable(state.currentIndex, direction);
  if (nextIndex !== null) {
    state.currentIndex = nextIndex;
    layoutDeck();
  }
}

function findNextAvailable(fromIndex, direction) {
  for (let step = 1; step <= state.deck.length; step += 1) {
    const index = (fromIndex + direction * step + state.deck.length) % state.deck.length;
    if (!state.pickedIndexes.has(index)) return index;
  }
  return null;
}

function drawCurrentCard(index = state.currentIndex) {
  const pickedIndex = index;
  if (state.isAnimating || state.pickedIndexes.has(pickedIndex)) return;

  const selectedElement = floatingDeck.querySelector(`[data-index="${pickedIndex}"]`);
  if (!selectedElement) return;

  const card = state.deck[pickedIndex];
  state.isAnimating = true;
  state.pickedIndexes.add(pickedIndex);
  selectedElement.classList.add("is-flipping");

  const finishDraw = (event) => {
    if (event.target !== selectedElement) return;
    selectedElement.removeEventListener("animationend", finishDraw);

    const slot = selectedRow.querySelectorAll(".selected-slot")[state.selected.length];
    const image = document.createElement("img");
    image.src = card.path;
    image.alt = card.name;
    slot.innerHTML = "";
    slot.appendChild(image);
    state.selected.push(card);

    selectedElement.classList.remove("is-flipping", "is-selected");
    selectedElement.classList.add("is-picked");
    state.currentIndex = findNextAvailable(pickedIndex, 1) ?? pickedIndex;
    state.isAnimating = false;
    updateStatus();
    layoutDeck();
    window.scrollTo(0, 0);

    if (state.selected.length === 3) {
      window.setTimeout(showReading, 720);
    }
  };

  selectedElement.addEventListener("animationend", finishDraw);
}

function drawCardByIndex(index) {
  if (
    !Number.isInteger(index) ||
    state.isAnimating ||
    state.selected.length >= 3 ||
    state.pickedIndexes.has(index)
  ) {
    return;
  }
  drawCurrentCard(index);
}

function updateStatus() {
  const count = state.selected.length;
  if (count >= 3) {
    drawStatus.textContent = "三張牌已完成";
    return;
  }
  drawStatus.textContent = `第 ${count + 1} 張：${POSITION_COPY[count].prompt}`;
}

function showReading() {
  readingGrid.innerHTML = "";
  state.selected.forEach((card, index) => {
    const position = POSITION_COPY[index];
    const article = document.createElement("article");
    article.className = "reading-card";
    article.tabIndex = 0;
    article.setAttribute("role", "button");
    article.setAttribute("aria-label", `放大查看 ${position.label}：${card.name}`);
    article.innerHTML = `
      <img src="${card.path}" alt="${card.name}">
      <div>
        <p class="position">${position.label}</p>
        <h2>${card.name}</h2>
        <p>${position.prompt}${card.meaning}</p>
      </div>
    `;
    article.addEventListener("click", () => openReadingModal(card, position));
    article.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openReadingModal(card, position);
      }
    });
    readingGrid.appendChild(article);
  });

  const names = state.selected.map((card) => card.name).join("、");
  summaryPanel.innerHTML = `
    <h2>整體訊息</h2>
    <p>${names} 共同指出：先辨認目前真正牽動你的核心，再把注意力放回能被你掌握的下一步。這組牌不急著替你定義答案，而是邀請你用更誠實、更清醒的方式回到自己的選擇。</p>
  `;
  showScreen(readingScreen);
}

function openReadingModal(card, position) {
  modalImage.src = card.path;
  modalImage.alt = card.name;
  modalPosition.textContent = position.label;
  modalTitle.textContent = card.name;
  modalText.textContent = `${position.prompt}${card.meaning}`;
  readingModal.classList.add("is-open");
  readingModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("#modalClose").focus();
}

function closeReadingModal() {
  readingModal.classList.remove("is-open");
  readingModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function popIntroSparkles() {
  const buttonRect = introCardButton.getBoundingClientRect();
  const visualRect = introScreen.getBoundingClientRect();
  sparkleBurst.style.left = `${buttonRect.left - visualRect.left + buttonRect.width / 2}px`;
  sparkleBurst.style.top = `${buttonRect.top - visualRect.top + buttonRect.height / 2}px`;
  introCardButton.classList.remove("is-sparkling");
  sparkleBurst.innerHTML = "";
  window.requestAnimationFrame(() => {
    introCardButton.classList.add("is-sparkling");
    const colors = ["#ffd978", "#ff9aa2", "#79b8e8", "#4aa8a2", "#ffffff"];
    for (let index = 0; index < 14; index += 1) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      const angle = (Math.PI * 2 * index) / 14;
      const distance = 34 + (index % 4) * 12;
      sparkle.style.setProperty("--spark-x", `${Math.cos(angle) * distance}px`);
      sparkle.style.setProperty("--spark-y", `${Math.sin(angle) * distance}px`);
      sparkle.style.background = colors[index % colors.length];
      sparkle.style.animationDelay = `${(index % 3) * 35}ms`;
      sparkleBurst.appendChild(sparkle);
    }

    window.setTimeout(() => {
      introCardButton.classList.remove("is-sparkling");
      sparkleBurst.innerHTML = "";
    }, 880);
  });
}

let dragStartX = 0;
let dragRemainder = 0;
const DRAG_STEP = 130;
const WHEEL_COOLDOWN = 260;

selectedRow.addEventListener("dragover", (event) => {
  if (draggedCardIndex === null || state.isAnimating || state.selected.length >= 3) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  getNextSlot()?.classList.add("is-drop-hover");
});

selectedRow.addEventListener("dragleave", (event) => {
  if (selectedRow.contains(event.relatedTarget)) return;
  getNextSlot()?.classList.remove("is-drop-hover");
});

selectedRow.addEventListener("drop", (event) => {
  event.preventDefault();
  const index = Number(event.dataTransfer.getData("text/plain") || draggedCardIndex);
  clearDropState();
  drawCardByIndex(index);
});

deckWindow.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.target.closest(".tarot-card")) return;
  dragStartX = event.clientX;
  dragRemainder = 0;
  deckWindow.classList.add("is-dragging");
  deckWindow.setPointerCapture(event.pointerId);
});

deckWindow.addEventListener("pointermove", (event) => {
  if (!deckWindow.classList.contains("is-dragging")) return;
  const delta = event.clientX - dragStartX;
  dragStartX = event.clientX;
  dragRemainder += delta;

  if (Math.abs(dragRemainder) >= DRAG_STEP) {
    moveSelection(dragRemainder < 0 ? 1 : -1);
    dragRemainder = 0;
  }
});

deckWindow.addEventListener("pointerup", (event) => {
  deckWindow.classList.remove("is-dragging");
  deckWindow.releasePointerCapture(event.pointerId);
});

deckWindow.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    const now = Date.now();
    if (now - state.lastWheelAt < WHEEL_COOLDOWN) return;
    state.lastWheelAt = now;
    moveSelection(event.deltaY > 0 || event.deltaX > 0 ? 1 : -1);
  },
  { passive: false },
);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && readingModal.classList.contains("is-open")) {
    closeReadingModal();
    return;
  }
  if (!drawScreen.classList.contains("is-active")) return;
  if (event.key === "ArrowLeft") moveSelection(-1);
  if (event.key === "ArrowRight") moveSelection(1);
  if (event.key === "Enter" || event.key === " ") drawCurrentCard();
});

$("#enterButton").addEventListener("click", startDraw);
$("#prevButton").addEventListener("click", () => moveSelection(-1));
$("#nextButton").addEventListener("click", () => moveSelection(1));
$("#drawButton").addEventListener("click", () => drawCurrentCard());
$("#shuffleButton").addEventListener("click", startDraw);
$("#restartButton").addEventListener("click", startDraw);
$("#homeButton").addEventListener("click", goHome);
introCardButton.addEventListener("click", popIntroSparkles);
$("#modalBackdrop").addEventListener("click", closeReadingModal);
$("#modalClose").addEventListener("click", closeReadingModal);
