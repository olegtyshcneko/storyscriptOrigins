"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let __env = require(`./environment`);
let __context = { __text: [] };
let __serializer = __env.getSerializer();
__context['system'] = require('./system');
__context = Object.assign({}, __context, __context['system'], { __text: __context['__text'] });
;
__context['__text'] = [...__context['__text'], `# Storyscript. Инструкция`];
;
__context['__text'] = [...__context['__text'], `Актуально для версий 1.4.x. Примите во внимание, что Storyscript работает в экспериментальном режиме, и некоторые правила могут быть в дальнейшем изменены`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Это - краткая инструкция пользователя языка программирования ${__serializer.serialize(__context['ссылка'](`https:\//github.com/freewebtime/storyscript`, `storyscript`), '\r\n')} в ${__serializer.serialize(__context['ссылка'](`https:\//code.visualstudio.com/`, `Microsoft Visual Studio Code`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## Начало работы`];
;
__context['__text'] = [...__context['__text'], `Установите ${__serializer.serialize(__context['ссылка'](`https:\//code.visualstudio.com/`, `Microsoft Visual Studio Code`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`vscode_new.png`, `vscode`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Установите ${__serializer.serialize(__context['ссылка'](`https:\//marketplace.visualstudio.com/items?itemName=jackstorytailor.storyscript-vscode`, `Storyscript плагин для vscode`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`install_extension.png`, `пустая папка`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Начинаем`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Самый простой способ приступить к работе - это открыть пустую папку в vscode и скопировать в нее тестовый проект`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Откройте пустую папку`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`vscode_empty.png`, `пустая папка`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Кликните правой клавишей мыши в корне проекта и выберите из выпадающего меню "Initialize example project in a working root"`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`init_example_project.png`, `скопировать тестовый проект в корневую папку`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Эта операция скопирует в корневую папку тестовый проект. Учтите, что если в корневой папке уже есть такие файлы, то они будут перетерты. Подтверждайте копирование`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`confirm_init_example_project.png`, `подтвердить копирование`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Тестовый проект скопирован в корневую папку. Примерно так должна выглядеть файловая структура проекта`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`example_project_created.png`, `тестовый проект создан`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Обновите node-модули. Для этого`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Откройте терминал`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`open_terminal.png`, `npm install в терминале`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Вбейте комманду "npm install" или "npm i" и нажмите "ENTER"`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`npm_install.png`, `npm install в терминале`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `node-модули обновлены`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`node_modules_created.png`, `npm install в терминале`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `терминал можно закрыть`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`close_terminal.png`, `закрыть терминал`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Исходные файлы истории хранятся в папке story (\*.sts)`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`story_source_files.png`, `исходники истории`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Подготовка проекта завершена. Это его рабочее состояние`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Теперь выполним сборку тестового проекта. `];
;
__context['__text'] = [...__context['__text'], `Откройте файл с исходниками истории. Например, story/index.sts`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Открывайте Command Palette (Меню View -> Command Palette или комбинация клавиш Ctrl+Shift+P) `];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`command_palette.png`, `command palette`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`command_palette_openned.png`, `command palette openned`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Выбирайте комманду "Compile: Compile and show preview" (по-умолчанию Ctrl+Alt+P)`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`compile_and_show_preview.png`, `compile and show preview`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `В папке src сохраняется история на typescript. В папке out будет эта история на javascript`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`compiled_story.png`, `compiled story`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Когда сборка истории завершена, открывается предпросмотр`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`preview_story.png`, `compiled story`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Окно предпросмотра можно размещать как удобно`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`layout_2.png`, `compiled story`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`layout_3.png`, `compiled story`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Текст, показанный в окне предпросмотра, сохраняется в файл "story output.txt" в корне проекта`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`story_output.png`, `story output`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
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
__context['__text'] = [...__context['__text'], `Давайте удалим все содержимое файла story/index.sts и начнем историю с чистого листа`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Обычный текст`];
;
__context['__text'] = [...__context['__text'], `Обычный текст попадает в финальную сборку "как есть", без изменений`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`simple_text.png`, `simple text`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Комментарии`];
;
__context['__text'] = [...__context['__text'], `Комментарии - это фрагмент текста, который не пойдет в финальную сборку. Комментарии нужны для самих разработчиков истории. Весь текст от символов /\/ и до конца строки будет считаться комментарием`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`comments.png`, `comments`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Спец-символы (перенос строки, табуляция)`];
;
__context['__text'] = [...__context['__text'], `Есть три спец-символа, которые попадают в финальную сборку нестандартно. `];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Это символ переноса строки`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`endline_symbol.png`, `endline symbol`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Символы конца строки и табуляции`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`endline_and_tab.png`, `endline and tab symbols`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Экранирование спец-символов`];
;
__context['__text'] = [...__context['__text'], `Экранирование спец-символов - это маркировка этих символов таким образом, чтобы компилятор не считал их спец-символами. Вот пример:`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`escaped_symbols.png`, `escaped symbols`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Переменные`];
;
__context['__text'] = [...__context['__text'], `Если оформить текст в виде списка, то элементы этого списка можно будет вставлять в других местах истории`];
;
__context['__text'] = [...__context['__text'], `Переменная пишется так (отступ из пробелов, потом звездочка, потом пробел, потом название переменной):`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t\* Название Переменной`];
;
__context['__text'] = [...__context['__text'], `\t  Содержание переменной пишется`];
;
__context['__text'] = [...__context['__text'], `\t  с новой строки и отступом от края `];
;
__context['__text'] = [...__context['__text'], `\t  на 2 (два) пробела больше, чем у названия`];
;
__context['__text'] = [...__context['__text'], `\t  `];
;
__context['__text'] = [...__context['__text'], `\t  * Подпеременная`];
;
__context['__text'] = [...__context['__text'], `\t    Содержание подпеременной`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Вот пример объявленной переменной`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`outer_variable.png`, `outer variables`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Вставки в текст`];
;
__context['__text'] = [...__context['__text'], `А вот переменная вставлена в текст, и что из этого получается:`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`outer_variable_inserted.png`, `outer variables inserted`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Многоуровневые переменные`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`outer_variables_hierarchy.png`, `outer variables hierarchy`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t\// если содержание переменной задается через знак "=", то у нее не может быть вложенных переменных:`];
;
__context['__text'] = [...__context['__text'], `\t`];
;
__context['__text'] = [...__context['__text'], `\t* Переменная = 100500`];
;
__context['__text'] = [...__context['__text'], `\t  * Подпеременная \// Ошибка! Значение переменной "Переменная" - цифра, у нее не может быть вложенных переменных`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Вставка в текст мат. выражения`];
;
__context['__text'] = [...__context['__text'], `А вот переменная вставлена в текст, и что из этого получается:`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`include_expression.png`, `include expression`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Операции над данными`];
;
__context['__text'] = [...__context['__text'], `А вот так можно между строк совершать операции над данными:`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`insert_operations.png`, `insert operations`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Импорт других файлов`];
;
__context['__text'] = [...__context['__text'], `Мы работаем в файле story/index.sts`];
;
__context['__text'] = [...__context['__text'], `Давайте посмотрим, что у нас еще есть в папке story:`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`external_file.png`, `external file`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Импортируем этот файл к нам`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`import_characters.png`, `import characters`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `И вставим персонажа из того файла в наш текст`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`inserted_imported_character.png`, `inserted imported characters`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## Для программистов`];
;
__context['__text'] = [...__context['__text'], `Усложненная инструкция. Предполагается, что без объяснений ее должны понять программисты и всякие технари`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Идея`];
;
__context['__text'] = [...__context['__text'], `Storyscript задуман как диалект javascript по аналогии с ${__serializer.serialize(__context['ссылка'](`https:\//www.typescriptlang.org/`, `typescript`), '\r\n')}.`];
;
__context['__text'] = [...__context['__text'], `Каждый sts модуль из папки projectRoot/story компилируется в соответствующий .ts файл и складывается это все в папке projectRoot/src. После чего typescript компилирует содержимое папки projectRoot/src в projectRoot/out - это уже javascript файлы. `];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`storyscript_compiled_to_typescript.png`, `compiled typescript`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`storyscript_compiled_to_javascript.png`, `compiled javascript`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Как это работает`];
;
__context['__text'] = [...__context['__text'], `строка формата (звездочка, пробел, скоп с инструкциями "{}")`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t-> storyscript`];
;
__context['__text'] = [...__context['__text'], `\t* {`];
;
__context['__text'] = [...__context['__text'], `\t  instructions;`];
;
__context['__text'] = [...__context['__text'], `\t}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `компилируется как скоп с инструкциями`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t-> typescript`];
;
__context['__text'] = [...__context['__text'], `\t{`];
;
__context['__text'] = [...__context['__text'], `\t  instructions;`];
;
__context['__text'] = [...__context['__text'], `\t}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Строка без спец-символов компилируется как инструкция:`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> storyscript:`];
;
__context['__text'] = [...__context['__text'], `\t  строка без спец-символов`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> typescript`];
;
__context['__text'] = [...__context['__text'], `\t  __context['__text'] = [...__context['__text'], \`строка без спец-символов\`];`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Строка с вставкой:`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> storyscript`];
;
__context['__text'] = [...__context['__text'], `\t  строка с \*Переменная;`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> typescript`];
;
__context['__text'] = [...__context['__text'], `\t  __context['__text'] = [...__context['__text'], \`строка с \${__serializer.serialize( __context['Переменная'], '\\r\\n' )} \`];`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Переменная`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> storyscript`];
;
__context['__text'] = [...__context['__text'], `\t  * Переменная`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> typescript`];
;
__context['__text'] = [...__context['__text'], `\t  __context['Переменная'] = __context['Переменная'] || { __text: [] };`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `№2`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> storyscript`];
;
__context['__text'] = [...__context['__text'], `\t  * Переменная = 100500`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> typescript`];
;
__context['__text'] = [...__context['__text'], `\t  __context['Переменная'] = 100500;`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Raw-переменная (с префиксом "@")`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> storyscript`];
;
__context['__text'] = [...__context['__text'], `\t  * { @Переменная = 100500; }`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  -> typescript`];
;
__context['__text'] = [...__context['__text'], `\t  Переменная = 100500;`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Синтаксис`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Переменные`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Строки, числа, булевые`];
;
__context['__text'] = [...__context['__text'], `Строка`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t "Содержание строки"`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Строка с инклудами (инклуд пишется так: звездочка, потом без пробела экспрешн, а в конце перенос строки или точка с запятой: \*includeExpression;)`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t "Содержание строки \*include1; \*include2;"`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Число`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t 100500`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Булевые`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\t  true false`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Операторы`];
;
__context['__text'] = [...__context['__text'], `\t  \+`];
;
__context['__text'] = [...__context['__text'], `\t  \-`];
;
__context['__text'] = [...__context['__text'], `\t  \/`];
;
__context['__text'] = [...__context['__text'], `\t  \*`];
;
__context['__text'] = [...__context['__text'], `\t  \= `];
;
__context['__text'] = [...__context['__text'], `\t  \=\=`];
;
__context['__text'] = [...__context['__text'], `\t  \=\=\=`];
;
__context['__text'] = [...__context['__text'], `\t  \!`];
;
__context['__text'] = [...__context['__text'], `\t  \!\= `];
;
__context['__text'] = [...__context['__text'], `\t  \!\=\=`];
;
__context['__text'] = [...__context['__text'], `\t  \<`];
;
__context['__text'] = [...__context['__text'], `\t  \>`];
;
__context['__text'] = [...__context['__text'], `\t  \<\=`];
;
__context['__text'] = [...__context['__text'], `\t  \>\=`];
;
__context['__text'] = [...__context['__text'], `\t  \|`];
;
__context['__text'] = [...__context['__text'], `\t  \|\|`];
;
__context['__text'] = [...__context['__text'], `\t  \&`];
;
__context['__text'] = [...__context['__text'], `\t  \&\&`];
;
__context['__text'] = [...__context['__text'], `\t  \+\+`];
;
__context['__text'] = [...__context['__text'], `\t  \-\-`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Функции`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tvarname = function (params) {`];
;
__context['__text'] = [...__context['__text'], `\t  instruction1;`];
;
__context['__text'] = [...__context['__text'], `\t  ...`];
;
__context['__text'] = [...__context['__text'], `\t  instruction2;`];
;
__context['__text'] = [...__context['__text'], `\t}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Объекты, массивы`];
;
__context['__text'] = [...__context['__text'], `Объекты`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tlet obj = {`];
;
__context['__text'] = [...__context['__text'], `\t  ...otherObj,`];
;
__context['__text'] = [...__context['__text'], `\t  fieldName: "fieldValue",`];
;
__context['__text'] = [...__context['__text'], `\t  otherVariable,`];
;
__context['__text'] = [...__context['__text'], `\t  "fieldName2": 100500,`];
;
__context['__text'] = [...__context['__text'], `\t  "isTrue": false`];
;
__context['__text'] = [...__context['__text'], `\t}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Конструктор`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tlet obj = new Object(prototype);`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Массивы`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tlet array = [`];
;
__context['__text'] = [...__context['__text'], `\t  ...otherArray,`];
;
__context['__text'] = [...__context['__text'], `\t  newValue`];
;
__context['__text'] = [...__context['__text'], `\t] `];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Инструкции`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Import`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\timport * as varname from './module/Path'`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `If`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tif (condition) {`];
;
__context['__text'] = [...__context['__text'], `\t  instructions;`];
;
__context['__text'] = [...__context['__text'], `\t} else if (condition2) {`];
;
__context['__text'] = [...__context['__text'], `\t  instructions2;`];
;
__context['__text'] = [...__context['__text'], `\t} else {`];
;
__context['__text'] = [...__context['__text'], `\t  instructions3`];
;
__context['__text'] = [...__context['__text'], `\t}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `For`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tfor (var i; @i < 10; @i++) {`];
;
__context['__text'] = [...__context['__text'], `\t instructions;  `];
;
__context['__text'] = [...__context['__text'], `\t}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `For In`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tfor (let key in obj) {`];
;
__context['__text'] = [...__context['__text'], `\t  instructions;`];
;
__context['__text'] = [...__context['__text'], `\t}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `While`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\twhile (condition) {`];
;
__context['__text'] = [...__context['__text'], `\t  instructions;`];
;
__context['__text'] = [...__context['__text'], `\t}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Do while`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tdo {`];
;
__context['__text'] = [...__context['__text'], `\t  instructions;`];
;
__context['__text'] = [...__context['__text'], `\t} while (condition)`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Switch case`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tswitch (condition) {`];
;
__context['__text'] = [...__context['__text'], `\t`];
;
__context['__text'] = [...__context['__text'], `\t  case condition: `];
;
__context['__text'] = [...__context['__text'], `\t    instructions;`];
;
__context['__text'] = [...__context['__text'], `\t  break;`];
;
__context['__text'] = [...__context['__text'], `\t`];
;
__context['__text'] = [...__context['__text'], `\t  default:`];
;
__context['__text'] = [...__context['__text'], `\t    instructions;`];
;
__context['__text'] = [...__context['__text'], `\t  break;`];
;
__context['__text'] = [...__context['__text'], `\t`];
;
__context['__text'] = [...__context['__text'], `\t}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Delete`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `\tdelete obj.field;`];
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