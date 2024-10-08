# Beglarian Fabrics Test

Это проект — тестовое задание для компании Beglarian Fabrics, разработанный с использованием **Next.js**, **TypeScript**, и **Zustand** для управления состоянием. Верстка полностью соответствует макету из [Figma](https://www.figma.com/design/28QcFBj4ig9VeU0hgzS9cY/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=0-1&t=DUAGGmGTemltg6iP-0).

С развернутым проектом можно ознакомиться по ссылке:  
[https://beglarian-fabrics-test.vercel.app/](https://beglarian-fabrics-test.vercel.app/)

Проект построен с использованием архитектуры **Feature-Sliced Design (FSD)**, что позволяет поддерживать масштабируемость и удобство работы с большими проектами.

## Основные функции

1. **Верстка двух страниц по макету в Figma**. Оставлено ограничение по ширине для мобильной версии.
2. **Progress Bar для пройденных вопросов** — отображает количество пройденных вопросов в виде заполненных полосок.
3. **Страница вопросов** — на ней можно отметить и снять отметку с пройденных вопросов. Состояние сохраняется при переходах между страницами.
4. **Использование Zustand для управления состоянием** — вопросы сохраняются в локальном стейте, а также поддерживается кэширование между сессиями.

## Технологии

- **Next.js** — серверный рендеринг и маршрутизация.
- **TypeScript** — строгая типизация для более безопасного и предсказуемого кода.
- **Zustand** — легкий и гибкий стейт-менеджер.
- **ESLint** и **Prettier** — линтинг и форматирование кода для поддержки консистентного стиля.
- **Husky** и **lint-staged** — проверка и форматирование кода перед коммитом для поддержания качества кода.
- **Docker** — для контейнеризации и развертывания приложения в изолированной среде.

## Установка и запуск проекта

### 1. Клонирование репозитория

```bash
git clone https://github.com/your-username/beglarian-fabrics-test.git
cd beglarian-fabrics-test
```

### 2. Установка зависимостей

Убедитесь, что у вас установлен Node.js версии 16 или выше. Затем выполните команду:

```bash
npm install
```

### 3. Запуск в режиме разработки

Запустите сервер разработки:

```bash
npm run dev
```

Приложение будет доступно по адресу [localhost](http://localhost:3000).

### 4. Сборка и запуск в production режиме

Для сборки приложения выполните команду:

```bash
npm run build
```

Запуск в production режиме:

```bash
npm run start
```

## Структура проекта

Проект реализован в соответствии с архитектурой Feature-Sliced Design:

```bash
src/
  ├── app/               # Входная точка приложения
  ├── assets/            # Статические файлы, SVG-иконки
  ├── entities/          # Сущности (Layout, Learning)
  │   ├── layout/        # Сущность Layout (компоненты заголовка и подвала)
  │   └── learning/      # Сущность Learning (карточки, вопросы и прогресс)
  ├── features/          # Фичи (основные элементы приложения)
  │   └── learning/      # Функциональные компоненты для Learning
  ├── shared/            # Переиспользуемые компоненты и утилиты
  ├── widgets/           # Комплексные компоненты, содержащие фичи и сущности
  └── pages/             # Страницы приложения (LearningPage, MainPage)
```

## Структура данных

Вопросы представлены в виде массива объектов с ID и статусом (пройден/не пройден). Прогресс вычисляется на основе количества пройденных вопросов и отображается в компоненте Loader.

Пример структуры вопросов

```json
{
  "questions": [
    { "id": 1, "passed": true },
    { "id": 2, "passed": false },
    { "id": 3, "passed": false },
    ...
    { "id": 20, "passed": false }
  ]
}
```

## Линтинг и форматирование

Проект настроен на автоматическую проверку и форматирование кода перед каждым коммитом с помощью Husky и lint-staged. Это помогает поддерживать чистоту и консистентность кода.

Запустить линтинг вручную можно командой:

```bash
npm run lint:fix
```

Для форматирования кода:

```bash
npm run format
```

## Docker

Проект поддерживает запуск в Docker. Для этого используются следующие файлы:

- Dockerfile: описывает сборку контейнера.
- docker-compose.yml: описывает конфигурацию контейнеров для разработки.

### Запуск проекта с Docker

1. Убедитесь, что у вас установлен Docker. Если не установлен, скачайте и установите его по [официальной инструкции](https://docs.docker.com/engine/install/).

2. Склонируйте проект и перейдите в его директорию:

```bash
git clone https://github.com/your-username/beglarian-fabrics-test.git
cd beglarian-fabrics-test
```

3. Запустите контейнеры с помощью Docker Compose:

```bash
docker compose up
```

После этого приложение будет доступно по адресу [http://localhost](http://localhost).
