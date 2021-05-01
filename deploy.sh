yarn build &&
git checkout gh-pages &&
rm -rf src *.sh *.html *.css *.js *.png *.json *.lock &&
move dist/*  ./ &&
move dist ;

git add . &&
git commit -m 'update' &&
git push

