
@set /p userInput=Enter a message for commit:
@git add .
@git commit -m "%userInput%"
@git checkout main
git merge dev
git branch -d dev
git pull
git push
git checkout -b dev

