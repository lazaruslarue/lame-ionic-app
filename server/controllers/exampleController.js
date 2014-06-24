module.exports = {
  example: function(req, res){
  	console.log('example running when you hit ~/example')
    res.sendfile('index.html', {root: __dirname + '/../../www/'});
  },
};
