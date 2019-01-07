#react boiler plate
# step 1 npm i --save-dev webpack webpack-cli
# step 2 add script build : webpack in package.json
# step 3 on terminal hit commnad npm run build
# way to pass mode using command npm run build -- --mode development
# create webpack.config.js

#try executing command npm run build
# and then node dist/app.bundle.js (should pring hello world)

#good blog at https://www.valentinog.com/blog/react-webpack-babel/

#by default it is not set up for es6 so node modue is not working with arrow functions.

#Next step is hit below commands to install babel loader 

# npm i -D @babel/core @babel/cli @bebel/preset-env (this should install babel as dev dependencies)

# for react execute below command
##npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
#create .babelrc and add {
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

# command line for babel preset which should transpile to compatible version
# $(npm bin)/babel src/greet.js --no-babelrc --presets=@babel/preset-env 

#install babel loader using command npm i -D babel-loader
#modify webpack.config.js to add module with preset rule