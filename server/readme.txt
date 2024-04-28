
src innehåller all kod för din applikation

controllers håller logiken för att hantera förfrågningar och svar

models innehåller Mongoosemodelleer som definieras scheman för dina dokument

routes definerar express rutter och kopplar dem till lämliga controllers 

app.js entrépunk för din applikation där express-appen konfigureras och startas

middlewares innehåller filer som defineras olika middlewares för din express-app tillexempel auth.middleware kan innehålla autentisering och validaton.middleware.js kan  innehlla en middleware 
för validering av inkommande förfrågningar

.env fil för att lagra miljövaribler som API-nycklar databass-URI och andra konfigurationparametrar

node_modules innehåller installerade node.jsmoduler

package.json filen som innehåller metadata om din projekt och dess beroenden

readme.md dokumation för din project
project-root
|-- src
|   |-- controllers
|   |   |-- author.controller.js
|   |   |-- book.controller.js
|   |-- middlewares
|   |   |-- auth.middleware.js
|   |   |-- validation.middleware.js
|   |-- models
|   |   |-- author.model.js
|   |   |-- book.model.js
|   |-- routes
|   |   |-- authors.route.js
|   |   |-- books.route.js
|   |-- app.js
|-- .env
|-- node_modules
|-- package.json
|-- README.mdgg