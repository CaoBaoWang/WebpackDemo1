yarn build &&
git checkout gh-pages &&
rm -rf src *.sh *.html *.css *.js *.png *.json *.lock &&
mv dist/*  ./ &&
rm -rf dist ;

git add . &&
git commit -m 'update' &&
git push &&
git checkout -

