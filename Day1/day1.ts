/*
Playwright vs Selenium
----------------------------
Speed
 Playwright is much faster than selenium(2-3times)
Auto waits
 Playwright has auto waits, waits need not be declared. Selenium waits need to be declared.
Assertion-validation point
 Playwright has built in assertion library. Selenium depends on third party libraries for assertion. eg.testng.
Reporting
 Playwright has many built in reporters(html, json, list, etc). Selenium depends on third party libraries for reporting. eg.testng,cucumber.
API Automation
 Playwright supports API Automation. Selenium does not support API Automation.
video, tracing
 Playwright has video, tracing of test cases. Selenium only has screenshot.
test retries
 Playwright has retry feature which runs the failed test cases again without stopping the execution.
workers
 Playwright has workers which run test cases in parallel and reduce the execution time. Selenium does not have such concept.
Futuristic
 Playwright has built in mcp server, test agents. Selenium does not provide any built in support for ai.
Community
 Selenium has a very large community. Playwright has growing community.


Typescript
--------------------------------------------------------------------
It is a programming language that compiles to Javascript.
Typescript code is written in file with extension .ts.
Typescript compiler(tsc) is used to convert typescript code into javascript code.

Different between Javascript and Typescript
--------------------------------------------------
Javascript is a scripting language that runs in browser and node.js.
typescript is superset of javascript that adds static typing and other features.

Javascript is dynamically typed programming language.
Typescript is Statically typed programming language.

Typescript is suitable for Large projects as it can show the errors and warn.
Javascript is not suitable for large projects.

Requirement
----------------------
VS Code
node js
typescript compiler(tsc)
typescript executor(tsx)

error in vscode
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

install tsc: npm install --save-dev typescript
install tsx: npm install -g tsx

*/