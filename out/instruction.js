"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let __env = require(`./environment`);
let __context = { __text: [] };
let __serializer = __env.getSerializer();
__context['ссылка'] = function (урл, текст) {
    return `[${__serializer.serialize(текст, '\r\n')}](${__serializer.serialize(урл, '\r\n')})`;
};
__context['__text'] = [...__context['__text'], `# Storyscript. Инструкция`];
;
__context['__text'] = [...__context['__text'], `Это - краткая инструкция пользователя языка программирования [storyscript](https:\//github.com/freewebtime/storyscript) в [Microsoft Visual Studio Code](https:\//code.visualstudio.com/)`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## Начало работы`];
;
__context['__text'] = [...__context['__text'], `Самый простой способ приступить к работе - это открыть пустую папку в vscode и скопировать в нее тестовый проект`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['ссылка'](`https:\//raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/vscode_empty.png`, `пустая папка`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## Для всех (база)`];
;
__context['__text'] = [...__context['__text'], `Упрощенная инструкция затрагивает только базовый функционал.`];
;
__context['__text'] = [...__context['__text'], `Этого хватит, чтобы собрать сценарий, и предполагается, что пользователю не понадобится никаких технических знаний`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Текст истории`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Обычный текст`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Экранирование спец-символов`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Переменные`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Вставки в текст`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Импорт других файлов`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## Для программистов`];
;
__context['__text'] = [...__context['__text'], `Усложненная инстркукция. Предполагается, что без объяснений ее должны понять программисты и всякие технари`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Синтаксис`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Как это работает `];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## _`];
;
__context['__text'] = [...__context['__text'], `[Сидоренко Евгений](https:\//www.facebook.com/evgeny.sydorenko), февраль 2019`];
;
// INFO: this trick is for making this file node module
exports.default = __context;
module.exports = Object.assign({}, __context);
//# sourceMappingURL=instruction.js.map