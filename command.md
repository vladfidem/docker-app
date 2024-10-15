## Команды:

### Работа с образом:
`docker login` - залогиниться в Docker <br>
`docker pull <name>` - загрузить образ с Docker Hub <br>
`docker push <name>` - загрузить образ в Docker Hub <br>
`docker images` - посмотреть список всех образов <br>
`docker image rm  <id | name>` или `docker rmi  <id | name>` - удалить образ <br>
`docker rmi  <id | name> <id | name> <id | name>` - удалить несколько образов
---

### Работа с контейнером:
`docker ps` - посмотреть список запущенных контейнеров <br>
`docker ps -a` - посмотреть список всех контейнеров <br>
`docker run <id | name>` - запустить контейнер <br>
`docker run -d <id | name>` - запустить контейнер в фоновом режиме <br>
`docker run -it <id | name>` - запустить контейнер в интерактивном режиме <br>
`docker stop <id | name>` - остановить контейнер <br>
`docker start <id | name>` - запустить заново уже существующий контейнер <br>
`docker rm <id | name>` - удалить контейнер <br>
`docker rm -f <id | name>` - удалить проблемный контейнер (зависший)
---

### Сборка образа:
`docker build -t <name> <path to dockerfile>` - создать образ <br>
`docker build -t <name>:<tag> <path to dockerfile>` - создать тэгированный образ (с версией)
---

### Запуск контейнера:
`docker run --name <container name> -p 3001:3000 <image name>` - запустить контейнер с именем "container name", на основании образа "image name", в контейнере открыть порт 3001 <br>
`docker run --name <container name> -p 3001:3000 <image name> -v <local path>:<container path>` - запустить контейнер с именем "container name", на основании образа "image name", в контейнере открыть порт 3001 и добавить том
---

### Работа с Docker Compose:
`docker compose version` - получить версию Docker Compose <br>
`docker compose up` - запустить контейнер через Docker Compose <br>
`docker compose down` - остановить запущенный контейнер <br>
`docker compose down --rmi all` - остановить запущенный контейнер и удалить созданный образ
---

### Дополнительно:
`docker system prune -a` - удаление образов, остановка и удаление контейнеров, очистка кэша

---
