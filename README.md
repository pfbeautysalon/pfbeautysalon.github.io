# pfbeautysalon

A humble beauty store in Bukit Panjang.

# Local build
Run ```jekyll serve --livereload --host 0.0.0.0 --baseurl=""``` to have use the localhost on your phone as well. To run on mobile, find the config using this command ```ifconfig | grep "inet " | grep -v 127.0.0.1``` for mac.

# Deployment issues
By deploying tailwind with jekyll on github pages, you will have errors with the CSS. Somehow, the original github actions will build in such a way that the Tailwind CSS wont be accessible. To overcome this, I used [this tutorial](https://jekyll.ohsostatic.com/devops/how-to-use-tailwind-css-with-jekyll-on-github-pages)'s github action instead. It requires my github token which I was lazy to set. Hence I added 
```
permissions:
  contents: write
```
Important thing to note about the tutorial is that you will also need to follow the comment at the bottom if you're deploying to a custom domain.