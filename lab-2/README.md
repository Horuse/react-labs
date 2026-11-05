# ЛР-2. Компоненти, дерево компонентів і пропси

Стартовий проєкт лабораторної роботи № 2 курсу «Розробка вебзастосунків на
React»: сторінка «Команда проєкту». Інструкція:

У проєкті вже є налаштування ESLint і Prettier з ЛР-1, стилі сторінки
(`src/index.css`), дані команди (`src/data.js`) і аватари
(`public/avatars/`). Компоненти ви пишете самі, у теці `src/components/`.

## Команди

`npm install` виконуйте в корені репозиторію `react-labs`, решту — у теці
`lab-2/`:

- `npm run dev`: dev-сервер на http://localhost:5173
- `npm run lint`: ESLint
- `npm run format:check`: перевірка форматування Prettier
- `npm run build`: production-збірка в `dist/`

## Дерево рендерингу

Заповніть за вкладкою **Components ⚛** у React DevTools (§4.6).

```mermaid
graph TD
    App --> Header
    App --> CardLead["Card (Тімлід)"]
    App --> CardTeam["Card (Команда)"]
    CardLead --> AvatarLead["Avatar"]
    CardTeam --> Profile1["Profile (key=1)"]
    CardTeam --> Profile2["Profile (key=2)"]
    CardTeam --> Profile3["Profile (key=3)"]
    CardTeam --> Profile4["Profile (key=4)"]
    Profile1 --> Avatar1["Avatar"]
    Profile2 --> Avatar2["Avatar"]
    Profile3 --> Avatar3["Avatar"]
    Profile4 --> Avatar4["Avatar"]
```

## Дерево залежностей модулів

Заповніть за рядками `import` у файлах `src/` (§4.6).

```mermaid
graph TD
    main["main.jsx"] --> indexCss["index.css"]
    main --> App["App.jsx"]
    App --> Header["components/Header.jsx"]
    App --> Avatar["components/Avatar.jsx"]
    App --> Profile["components/Profile.jsx"]
    App --> Card["components/Card.jsx"]
    App --> data["data.js"]
    Profile --> AvatarModule["components/Avatar.jsx"]
```
