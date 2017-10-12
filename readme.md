# node-school-testing-workshop2

Покрыть тестами функцию `countExpressions` двумя способами:
callback (done), promise (chai-as-promised).
Файл для проверки `./test/script`.

По одному тесту на успех и на ошибку. В тесте на успех проверить, что нашлось нужное количество совпадений. В тесте на ошибку проверить, что ошибка - instance объекта Error и содержит правильный текст.

Документация:

`mocha async` - https://mochajs.org/#asynchronous-code

`chai-as-promised` - https://github.com/domenic/chai-as-promised
