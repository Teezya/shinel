const points = [
  { title: 'Департамент', subtitle: 'Место службы Акакия Акакиевича', kicker: 'Точка 1 · Начало пути', x: 21, y: 25, symbol: '▥', question: 'Какие детали внешности и отношения сослуживцев показывают беззащитность Акакия Акакиевича перед лицом бездушного чиновничьего коллектива?', answers: ['Молодые чиновники смеялись над ним, сыпали на голову бумажки и говорили, что он женится', 'Сослуживцы уважали его за выдающиеся интеллектуальные способности', 'Директор департамента назначил его своим главным заместителем'], explanation: 'Молодые чиновники не уважали его и позволяли себе злые шутки, показывая жестокость среды.' },
  { title: 'Дом Башмачкина', subtitle: 'Бедная комната героя в петербургской глуши', kicker: 'Точка 2 · Частная жизнь', x: 28, y: 51.5, symbol: '⌂', question: 'Какие детали быта помогают понять характер Акакия Акакиевича?', answers: ['Аскетизм, полное отсутствие материальных претензий и зацикленность на переписывании', 'Страсть к коллекционированию антиквариата и роскошной мебели', 'Желание обустроить уютный дом для семьи и гостей'], explanation: 'Его аскетизм подчеркивает полное отсутствие личных амбиций, кроме радости от выписывания букв.' },
  { title: 'Портной Петрович', subtitle: 'Мастерская портного', kicker: 'Точка 3 · Преображение', x: 38, y: 63, symbol: '✂', tailor: true },
  { title: 'Магазин ткани', subtitle: 'Выбор сукна и коленкора', kicker: 'Точка 4 · Замысел шинели', x: 47, y: 38.5, symbol: '▤', question: 'Почему выбор сукна стал для героя важнейшим событием жизни?', answers: ['Потому что шинель стала воплощением его мечты, духовной опоры и новой ступени самоуважения', 'Потому что он планировал перепродать сукно дороже на рынке', 'Потому что его заставил это сделать начальник департамента'], explanation: 'Шинель превратилась в одушевленного друга и главную цель жизни.' },
  { title: 'Невский проспект', subtitle: 'Зимний Невский проспект — парадный фасад Петербурга', kicker: 'Точка 5 · Образ города', x: 58, y: 29, symbol: '♧', question: 'Почему Петербург в повести можно назвать не только местом действия, но и самостоятельным художественным образом?', answers: ['Потому что город враждебен, холоден и безразличен к судьбе маленького человека, давя его морозом и ветром', 'Потому что в повести подробно описаны все архитектурные памятники столицы', 'Потому что город помогает герою подняться по карьерной лестнице'], explanation: 'Петербург у Гоголя — живое демоническое начало, управляющее судьбами людей.' },
  { title: 'Вечер у чиновников', subtitle: 'Праздничный вечер', kicker: 'Точка 6 · Мнимое признание', x: 68, y: 41, symbol: '♨', question: 'Что на самом деле изменилось в этой сцене: сам Акакий Акакиевич или отношение общества к нему?', answers: ['Изменилось лишь внешнее оформление (статус новой шинели), а сам герой остался прежним беззащитным существом', 'Акакий Акакиевич стал уверенным в себе светским человеком', 'Общество искренне полюбило внутренний мир героя'], explanation: 'Общество оценивает человека по внешнему статусу (шинели), а не по его человеческой душе.' },
  { title: 'Место ограбления', subtitle: 'Темная пустынная площадь ночью', kicker: 'Точка 7 · Кульминация', x: 80, y: 67, symbol: '♟', dark: true, question: 'Почему потеря шинели становится для Акакия Акакиевича абсолютной трагедией?', answers: ['Потому что шинель была смыслом его жизни, заменой семьи и тепла в враждебном мире', 'Потому что в кармане шинели лежали все его сбережения', 'Потому что без шинели его уволили со службы'], explanation: 'Шинель была его единственной опорой и «другом».' },
  { title: 'Дом «значительного лица»', subtitle: 'Кабинет петербургского генерала', kicker: 'Точка 8 · Последняя инстанция', x: 71.5, y: 78.5, symbol: '⚜', question: 'Как Гоголь показывает бесчеловечность бюрократического общества через сцену с генералом?', answers: ['Через показ абсолютной черствости чиновников, для которых чин важнее человеческой жизни', 'Через исправление генерала и его душевное раскаяние', 'Через бунт других чиновников против произвола генерала'], explanation: 'Бюрократическая система подавляет все человеческое, приводя к гибели слабого.' }
];

const taskSets = [
  [
    { type: 'choice', label: 'Анализ', question: points[0].question, answers: points[0].answers, correct: 0, explanation: points[0].explanation },
    { type: 'identity', label: 'Кто это?', question: 'Кто такой Акакий Акакиевич?', prompt: 'Тихий чиновник-переписчик, всю жизнь занятый служебными бумагами и почти незаметный для окружающих.', answers: ['Акакий Акакиевич', 'Петрович', 'Значительное лицо'], correct: 0, explanation: 'Акакий Акакиевич — маленький чиновник-переписчик, чья скромная жизнь становится центром повести.' }
  ],
  [
    { type: 'choice', label: 'Анализ быта', question: 'Какие детали быта помогают понять характер Акакия Акакиевича?', answers: ['Аскетизм, полное отсутствие материальных претензий и зацикленность на переписывании', 'Страсть к коллекционированию антиквариата и роскошной мебели', 'Желание обустроить уютный дом для семьи и гостей'], correct: 0, explanation: 'Его аскетизм подчеркивает полное отсутствие личных амбиций, кроме радости от выписывания букв.' },
    { type: 'truth', label: 'Правда / ложь', question: 'Отметьте, какие утверждения соответствуют образу жизни героя.', statements: [{ text: 'Акакий Акакиевич жил скромно и почти не тратил на себя.', correct: true }, { text: 'Он стремился к власти и карьерному росту.', correct: false }, { text: 'Переписывание бумаг приносило ему тихую радость.', correct: true }, { text: 'Он любил роскошные приемы и шумные компании.', correct: false }], explanation: 'Правда: скромность и переписывание. Ложь: власть, роскошь и светская жизнь.' }
  ],
  [
    { type: 'tailor', label: 'Собери шинель' },
    { type: 'matching', label: 'Сопоставление', question: 'Соотнесите героя и его роль.', pairs: [{ left: 'Акакий Акакиевич', right: 'чиновник-переписчик' }, { left: 'Петрович', right: 'портной' }, { left: 'Значительное лицо', right: 'высокопоставленный начальник' }], explanation: 'Каждый персонаж занимает свою роль в системе: переписчик, портной и начальник.' }
  ],
  [
    { type: 'choice', label: 'Понимание', question: 'Почему выбор сукна стал для героя важнейшим событием жизни?', answers: ['Потому что шинель стала воплощением его мечты, духовной опоры и новой ступени самоуважения', 'Потому что он планировал перепродать сукно дороже на рынке', 'Потому что его заставил это сделать начальник департамента'], correct: 0, explanation: 'Шинель превратилась в одушевленного друга и главную цель жизни.' },
    { type: 'multi', label: 'Выбор деталей', question: 'Выберите элементы, необходимые для новой шинели.', options: ['сукно', 'воротник', 'пуговицы', 'подкладка', 'карьерный чин'], correct: [0, 1, 2, 3], explanation: 'Для шинели нужны четыре детали: сукно, воротник, пуговицы и подкладка.' }
  ],
  [
    { type: 'choice', label: 'Образ города', question: 'Почему Петербург в повести можно назвать не только местом действия, но и самостоятельным художественным образом?', answers: ['Потому что город враждебен, холоден и безразличен к судьбе маленького человека, давя его морозом и ветром', 'Потому что в повести подробно описаны все архитектурные памятники столицы', 'Потому что город помогает герою подняться по карьерной лестнице'], correct: 0, explanation: 'Петербург у Гоголя — живое демоническое начало, управляющее судьбами людей.' },
    { type: 'map', label: 'Найди на карте', question: 'Найдите на карте место, где герой служил.', options: ['Департамент', 'Место ограбления', 'Дом значительного лица'], correct: 0, explanation: 'Департамент — отправная точка маршрута Акакия Акакиевича.' },
    { type: 'truth', label: 'Правда / ложь', question: 'Что верно об образе Петербурга?', statements: [{ text: 'Город холоден и безразличен к маленькому человеку.', correct: true }, { text: 'Петербург помогает герою сделать карьеру.', correct: false }, { text: 'Мороз и ветер усиливают ощущение враждебности.', correct: true }], explanation: 'Город становится самостоятельной силой, давящей на героя холодом и равнодушием.' }
  ],
  [
    { type: 'choice', label: 'Анализ сцены', question: 'Что на самом деле изменилось в этой сцене: сам Акакий Акакиевич или отношение общества к нему?', answers: ['Изменилось лишь внешнее оформление (статус новой шинели), а сам герой остался прежним беззащитным существом', 'Акакий Акакиевич стал уверенным в себе светским человеком', 'Общество искренне полюбило внутренний мир героя'], correct: 0, explanation: 'Общество оценивает человека по внешнему статусу (шинели), а не по его человеческой душе.' },
    { type: 'matching', label: 'До / после', question: 'Сопоставьте состояние героя и отношение к нему.', pairs: [{ left: 'До новой шинели', right: 'его не замечают и унижают' }, { left: 'После новой шинели', right: 'его замечают по внешнему статусу' }], explanation: 'Меняется не душа героя, а внешний взгляд общества на него.' }
  ],
  [
    { type: 'choice', label: 'Кульминация', question: 'Почему потеря шинели становится для Акакия Акакиевича абсолютной трагедией?', answers: ['Потому что шинель была смыслом его жизни, заменой семьи и тепла в враждебном мире', 'Потому что в кармане шинели лежали все его сбережения', 'Потому что без шинели его уволили со службы'], correct: 0, explanation: 'Шинель была его единственной опорой и «другом».' },
    { type: 'order', label: 'Восстанови путь', question: 'Расставьте ключевые события второй половины сюжета по порядку.', items: ['вечер у чиновников', 'ограбление', 'обращение к значительному лицу', 'болезнь', 'смерть героя'], explanation: 'После вечера происходит ограбление, затем безуспешное обращение к начальству, болезнь и смерть.' }
  ],
  [
    { type: 'choice', label: 'Итоговый вопрос', question: 'Как Гоголь показывает бесчеловечность бюрократического общества через сцену с генералом?', answers: ['Через показ абсолютной черствости чиновников, для которых чин важнее человеческой жизни', 'Через исправление генерала и его душевное раскаяние', 'Через бунт других чиновников против произвола генерала'], correct: 0, explanation: 'Бюрократическая система подавляет все человеческое, приводя к гибели слабого.' },
    { type: 'identity', label: 'Кто это?', question: 'О ком идет речь?', prompt: 'Высокопоставленный начальник, к которому герой обращается за помощью, но получает лишь холодный отпор.', answers: ['Значительное лицо', 'Петрович', 'Акакий Акакиевич'], correct: 0, explanation: 'Значительное лицо воплощает систему, в которой чин важнее человеческой жизни.' },
    { type: 'order', label: 'Финальный маршрут', question: 'Восстановите весь путь Акакия Акакиевича.', items: ['старая шинель приходит в негодность', 'обращение к Петровичу', 'изготовление новой шинели', 'вечер у чиновников', 'ограбление', 'обращение к значительному лицу', 'болезнь', 'смерть героя'], explanation: 'Так выстроен полный трагический маршрут героя от ветхой шинели к смерти.' }
  ]
];

const markerLayer = document.querySelector('#markerLayer');
const mapStage = document.querySelector('#mapStage');
const overlay = document.querySelector('#overlay');
const taskCard = document.querySelector('#taskCard');
const taskNumber = document.querySelector('#taskNumber');
const taskTitle = document.querySelector('#taskTitle');
const cardKicker = document.querySelector('#cardKicker');
const cardLocation = document.querySelector('#cardLocation');
const taskContent = document.querySelector('#taskContent');
const result = document.querySelector('#result');
const checkButton = document.querySelector('#checkButton');
const continueButton = document.querySelector('#continueButton');
const closeCard = document.querySelector('#closeCard');
const progressBar = document.querySelector('#progressBar');
const progressText = document.querySelector('#progressText');
const finishNote = document.querySelector('#finishNote');
let completedTasks = JSON.parse(localStorage.getItem('shiniel-tasks') || '[]');
let activeIndex = null;
let activeTaskIndex = 0;
let view = { x: 0, y: 0, zoom: 1 };
let savedView = null;
const pointers = new Map();
let gesture = null;
let viewFrame = 0;

function applyView() {
  mapStage.style.setProperty('--pan-x', `${view.x}px`);
  mapStage.style.setProperty('--pan-y', `${view.y}px`);
  mapStage.style.setProperty('--map-zoom', view.zoom.toFixed(3));
}

function scheduleView() {
  if (viewFrame) return;
  viewFrame = requestAnimationFrame(() => {
    viewFrame = 0;
    applyView();
  });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function distanceBetween(first, second) {
  return Math.hypot(first.clientX - second.clientX, first.clientY - second.clientY);
}

function beginMapGesture(event) {
  if (!taskCard.hidden || event.target.closest('.marker') || event.target.closest('.map-title, .map-key, .compass, .map-caption, .finish-note')) return;
  pointers.set(event.pointerId, event);
  mapStage.classList.add('dragging');
  mapStage.setPointerCapture(event.pointerId);
  if (pointers.size === 1) {
    gesture = { startX: event.clientX, startY: event.clientY, startViewX: view.x, startViewY: view.y, moved: false };
  } else if (pointers.size === 2) {
    const [first, second] = [...pointers.values()];
    gesture = { startDistance: distanceBetween(first, second), startZoom: view.zoom, startViewX: view.x, startViewY: view.y, startX: (first.clientX + second.clientX) / 2, startY: (first.clientY + second.clientY) / 2, moved: true };
  }
}

function moveMapGesture(event) {
  if (!pointers.has(event.pointerId) || !gesture || !taskCard.hidden) return;
  pointers.set(event.pointerId, event);
  const current = [...pointers.values()];
  if (current.length === 1) {
    view.x = gesture.startViewX + event.clientX - gesture.startX;
    view.y = gesture.startViewY + event.clientY - gesture.startY;
    gesture.moved = Math.abs(event.clientX - gesture.startX) + Math.abs(event.clientY - gesture.startY) > 5;
  } else {
    const [first, second] = current;
    const scale = distanceBetween(first, second) / gesture.startDistance;
    view.zoom = clamp(gesture.startZoom * scale, 1, 2.4);
    const midX = (first.clientX + second.clientX) / 2;
    const midY = (first.clientY + second.clientY) / 2;
    view.x = gesture.startViewX + midX - gesture.startX;
    view.y = gesture.startViewY + midY - gesture.startY;
  }
  const limit = Math.max(90, Math.min(window.innerWidth, window.innerHeight) * (view.zoom - 1) * 1.4 + 110);
  view.x = clamp(view.x, -limit, limit);
  view.y = clamp(view.y, -limit, limit);
  scheduleView();
}

function endMapGesture(event) {
  pointers.delete(event.pointerId);
  if (pointers.size === 0) {
    gesture = null;
    mapStage.classList.remove('dragging');
    applyView();
  }
}

function taskKey(pointIndex, taskIndex) {
  return `${pointIndex}-${taskIndex}`;
}

function isTaskDone(pointIndex, taskIndex) {
  return completedTasks.includes(taskKey(pointIndex, taskIndex));
}

function isLocationDone(pointIndex) {
  return taskSets[pointIndex].every((_, index) => isTaskDone(pointIndex, index));
}

function renderMarkers() {
  markerLayer.innerHTML = points.map((point, index) => {
    const isDone = isLocationDone(index);
    const isActive = index === 0 || isLocationDone(index - 1);
    const state = isDone ? 'done' : isActive ? 'active' : 'locked';
    const label = isDone ? '✓' : isActive ? '●' : '○';
    return `<button class="marker ${state}" data-index="${index}" style="left:${point.x}%;top:${point.y}%" aria-label="${point.title}. ${point.subtitle}" ${state === 'locked' ? 'disabled' : ''}><span class="marker-dot"><span class="symbol">${isDone ? '✓' : point.symbol}</span></span><span class="marker-number">${label} ${index + 1}</span><span class="marker-label">${point.title}</span></button>`;
  }).join('');
  markerLayer.querySelectorAll('.marker:not([disabled])').forEach(marker => marker.addEventListener('click', () => openTask(Number(marker.dataset.index))));
  const finishedLocations = points.filter((_, index) => isLocationDone(index)).length;
  progressBar.style.width = `${finishedLocations / points.length * 100}%`;
  progressText.textContent = `${finishedLocations} из 8 мест`;
  mapStage.classList.toggle('has-progress', finishedLocations > 0);
  finishNote.classList.toggle('show', finishedLocations === points.length);
}

function openTask(index) {
  activeIndex = index;
  const point = points[index];
  activeTaskIndex = taskSets[index].findIndex((_, taskIndex) => !isTaskDone(index, taskIndex));
  if (activeTaskIndex < 0) activeTaskIndex = 0;
  const task = taskSets[index][activeTaskIndex];
  savedView = { ...view };
  mapStage.style.setProperty('--focus-x', `${point.x}%`);
  mapStage.style.setProperty('--focus-y', `${point.y}%`);
  view.zoom = Math.max(view.zoom, 1.08);
  applyView();
  mapStage.classList.add('focused');
  taskNumber.textContent = `ЗАДАНИЕ ${String(activeTaskIndex + 1).padStart(2, '0')} / ${String(taskSets[index].length).padStart(2, '0')}`;
  taskTitle.textContent = point.title;
  cardKicker.textContent = `${task.label} · ${point.kicker}`;
  cardLocation.textContent = point.subtitle;
  result.hidden = true;
  checkButton.hidden = true;
  checkButton.disabled = false;
  continueButton.hidden = true;
  taskContent.innerHTML = taskMarkup(task);
  overlay.hidden = false;
  taskCard.hidden = false;
  requestAnimationFrame(() => { overlay.classList.add('visible'); taskCard.classList.add('visible'); });
  setupTask(task);
}

function taskMarkup(task) {
  if (task.type === 'tailor') return `<p class="task-content-label">Что нужно сделать</p><p class="task-instruction">Нажмите на все 5 деталей, из которых состоит шинель.</p><div class="coat-parts"><button class="part" data-part="Сукно"><span>▥</span>Сукно</button><button class="part" data-part="Воротник"><span>⌒</span>Воротник</button><button class="part" data-part="Подкладка"><span>▤</span>Подкладка</button><button class="part" data-part="Пуговицы"><span>⠿</span>Пуговицы</button><button class="part" data-part="Рукава"><span>∩</span>Рукава</button></div><p class="coat-status" id="coatStatus">Выбрано: 0 из 5</p>`;
  if (task.type === 'choice' || task.type === 'identity') return `<p class="question-label">Вопрос</p><p class="question">${task.question}</p>${task.type === 'identity' ? `<p class="clue"><strong>Подсказка:</strong> ${task.prompt}</p>` : ''}<p class="task-content-label">Выберите один ответ</p><div class="answers">${task.answers.map((answer, index) => `<button class="answer" data-answer="${index}" data-index="${index + 1}">${answer}</button>`).join('')}</div>`;
  if (task.type === 'multi') return `<p class="question-label">Вопрос</p><p class="question">${task.question}</p><p class="task-content-label">Выберите все подходящие варианты</p><div class="multi-options">${task.options.map((option, index) => `<label class="multi-option"><input type="checkbox" value="${index}">${option}</label>`).join('')}</div>`;
  if (task.type === 'truth') return `<p class="question-label">Вопрос</p><p class="question">${task.question}</p><p class="task-content-label">Для каждого утверждения выберите «Правда» или «Ложь»</p><div class="truth-list">${task.statements.map((statement, index) => `<div class="truth-item"><span>${statement.text}</span><select data-truth="${index}" aria-label="Правда или ложь для утверждения ${index + 1}"><option value="">Выберите</option><option value="true">Правда</option><option value="false">Ложь</option></select></div>`).join('')}</div>`;
  if (task.type === 'matching') return `<p class="question-label">Задание</p><p class="question">${task.question}</p><p class="task-content-label">Для каждого имени выберите подходящую роль</p><div class="matching-grid">${task.pairs.map((pair, index) => `<div class="matching-row"><strong>${pair.left}</strong><select data-match="${index}" aria-label="Роль: ${pair.left}"><option value="">Выберите роль</option>${task.pairs.map((choice, choiceIndex) => `<option value="${choiceIndex}">${choice.right}</option>`).join('')}</select></div>`).join('')}</div>`;
  if (task.type === 'order') { const displayItems = [...task.items].reverse(); return `<p class="question-label">Задание</p><p class="question">${task.question}</p><p class="task-content-label">Используйте стрелки: ↑ — раньше, ↓ — позже</p><div class="order-list">${displayItems.map((item, index) => `<div class="order-item" data-order-index="${index}"><span>${item}</span><span class="order-controls"><button type="button" data-move="up" aria-label="Переместить событие раньше">↑</button><button type="button" data-move="down" aria-label="Переместить событие позже">↓</button></span></div>`).join('')}</div>`; }
  if (task.type === 'map') return `<p class="question-label">Задание</p><p class="map-find">${task.question}</p><p class="task-content-label">Нажмите на один вариант</p><div class="map-choice-list">${task.options.map((option, index) => `<button class="map-choice" data-map-answer="${index}">${option}</button>`).join('')}</div>`;
  return '';
}

function setupTask(task) {
  if (task.type === 'tailor') {
    const selected = new Set();
    document.querySelectorAll('.part').forEach(button => button.addEventListener('click', () => { selected.add(button.dataset.part); button.classList.add('selected'); button.disabled = true; document.querySelector('#coatStatus').textContent = `Выбрано: ${selected.size} из 5`; if (selected.size === 5) showResult(true, 'Шинель готова. Теперь у героя есть надежда выдержать петербургский холод.'); }));
    return;
  }
  if (task.type === 'order') {
    document.querySelectorAll('.order-controls button').forEach(button => button.addEventListener('click', () => { const item = button.closest('.order-item'); const sibling = button.dataset.move === 'up' ? item.previousElementSibling : item.nextElementSibling; if (sibling) item.parentElement.insertBefore(button.dataset.move === 'up' ? item : sibling, button.dataset.move === 'up' ? sibling : item); }));
  }
  if (task.type === 'choice' || task.type === 'identity') document.querySelectorAll('.answer').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.answer').forEach(answer => answer.classList.remove('selected')); button.classList.add('selected'); checkButton.hidden = false; }));
  if (task.type === 'map') document.querySelectorAll('.map-choice').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.map-choice').forEach(choice => choice.classList.remove('selected')); button.classList.add('selected'); checkButton.hidden = false; }));
  if (task.type === 'multi' || task.type === 'truth' || task.type === 'matching' || task.type === 'order') checkButton.hidden = false;
  if (task.type === 'multi') {
    checkButton.disabled = true;
    document.querySelectorAll('.multi-option input').forEach(input => input.addEventListener('change', () => { checkButton.disabled = !document.querySelector('.multi-option input:checked'); }));
  }
  if (task.type === 'truth' || task.type === 'matching') {
    checkButton.disabled = true;
    const selector = task.type === 'truth' ? '[data-truth]' : '[data-match]';
    document.querySelectorAll(selector).forEach(input => input.addEventListener('change', () => { checkButton.disabled = [...document.querySelectorAll(selector)].some(field => !field.value); }));
  }
  checkButton.onclick = () => {
    let correct = false;
    if (task.type === 'choice' || task.type === 'identity') { const selected = document.querySelector('.answer.selected'); correct = selected && Number(selected.dataset.answer) === task.correct; if (selected) selected.classList.add(correct ? 'correct' : 'wrong'); }
    if (task.type === 'map') { const selected = document.querySelector('.map-choice.selected'); correct = selected && Number(selected.dataset.mapAnswer) === task.correct; if (selected) selected.classList.add(correct ? 'correct' : 'wrong'); }
    if (task.type === 'multi') { const selected = [...document.querySelectorAll('.multi-option input:checked')].map(input => Number(input.value)).sort(); correct = JSON.stringify(selected) === JSON.stringify([...task.correct].sort()); }
    if (task.type === 'truth') correct = task.statements.every((statement, index) => document.querySelector(`[data-truth="${index}"]`).value === String(statement.correct));
    if (task.type === 'matching') correct = task.pairs.every((_, index) => Number(document.querySelector(`[data-match="${index}"]`).value) === index);
    if (task.type === 'order') correct = [...document.querySelectorAll('.order-item span:first-child')].every((item, index) => item.textContent === task.items[index]);
    showResult(Boolean(correct), task.explanation);
  };
}

function showResult(isCorrect, explanation) {
  result.hidden = false;
  result.className = `result ${isCorrect ? 'correct' : 'incorrect'}`;
  result.innerHTML = `<strong>${isCorrect ? 'ВЕРНО' : 'НЕВЕРНО'}</strong>${explanation}`;
  checkButton.hidden = true;
  checkButton.disabled = false;
  continueButton.hidden = false;
  if (!isCorrect) { taskCard.classList.remove('shake'); requestAnimationFrame(() => taskCard.classList.add('shake')); }
}

function closeTask() {
  overlay.classList.remove('visible');
  taskCard.classList.remove('visible');
  mapStage.classList.remove('focused');
  if (savedView) view = savedView;
  applyView();
  setTimeout(() => { overlay.hidden = true; taskCard.hidden = true; }, 300);
}

continueButton.addEventListener('click', () => {
  const key = taskKey(activeIndex, activeTaskIndex);
  if (!completedTasks.includes(key)) completedTasks.push(key);
  localStorage.setItem('shiniel-tasks', JSON.stringify(completedTasks));
  renderMarkers();
  closeTask();
});
closeCard.addEventListener('click', closeTask);
overlay.addEventListener('click', closeTask);
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !taskCard.hidden) closeTask(); });
mapStage.addEventListener('pointerdown', beginMapGesture);
mapStage.addEventListener('pointermove', moveMapGesture);
mapStage.addEventListener('pointerup', endMapGesture);
mapStage.addEventListener('pointercancel', endMapGesture);
applyView();
renderMarkers();
