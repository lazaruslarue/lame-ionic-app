module.exports = {
  index: function(req, res){
    res.sendfile('index.html', {root: __dirname + '/../../www/'});
  },
};
