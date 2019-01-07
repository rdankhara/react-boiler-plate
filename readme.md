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

#install react dependency by command npm i -S react react-dom prop-type
#install babel react preset using command npm i -D @babel/preset-react
#update webpack.config.js by adding react preset '@babel/preset-react'

#install html-webpack-plugin using command npm i -D html-webpack-plugin
#create template index.html and configure webpack html plugin to accept template as parameter.
#npm run build and then open dist/index.html it should render app component

#add script template to run webpack in watch mode with mode to run in development mode

#seperating webpack.config for different environments
#install webpack-merge using npm i -D webpack-merge
#rename original webpack.config.js file to webpack.config.base.js 

#install webpack dev server using command npm i -D webpack-dev-server
#update package.json to use command webpack-dev-server which does run in watch mode.
#open flag in dev command should open the html page from dist folder after compiling js

#added css loader and style loader using comman npm i -D css-loader style-loader

#using react hot loader to update changes without reseting state
#npm i -S react-hot-loader 