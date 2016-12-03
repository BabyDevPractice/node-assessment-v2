
var accounts = require('./accounts.json');

module.exports={
  
  getAccounts: function(req, res, next){
    var acctParam = [];
    if (req.query.card_type) {
      for (var i = 0; i < accounts.length; i++) {
        if(accounts[i].card_type == req.query.card_type){
          acctParam.push(accounts[i])
        }
      }
      res.status(200).send(acctParam);
    }else if (req.query.first_name) {
      for (var i = 0; i < accounts.length; i++) {
        if(accounts[i].first_name == req.query.first_name){
          acctParam.push(accounts[i])
        }
      }
      res.status(200).send(acctParam);
    }else if (req.query.last_name) {
      for (var i = 0; i < accounts.length; i++) {
        if(accounts[i].last_name == req.query.last_name){
          acctParam.push(accounts[i])
        }
      }
      res.status(200).send(acctParam);
    }else if (req.query.balance) {
      for (var i = 0; i < accounts.length; i++) {
        if(accounts[i].balance == req.query.balance){
          acctParam.push(accounts[i])
        }
      }
      res.status(200).send(acctParam);
    }
    
    
    else{
      res.status(200).send(accounts);
    }
  },
  
  getAcctById: function(req, res, next){
    var acctParam = [];
    if (req.params.id) {
      for (var i = 0; i < accounts.length; i++) {
        if(accounts[i].id == req.params.id){
          acctParam.push(accounts[i])
        }
      }
      res.status(200).send(acctParam);
    }else{
      res.status(404).send('account could not be found');
    }
  },
  
  newAccount: function(req, res, next){
  var appSt = [];
  appSt.push(req.body.approved_states);
  
  var newAccount = req.body;
  newAccount.id = (accounts.length+1);
  newAccount.approved_states = appSt;
  
  accounts.push(newAccount);
  res.status(200).send(accounts);
},

  changeCardType: function(req, res, next){
    if (req.params.id) {
      console.log(req.params.id);
      for (var i = 0; i < accounts.length; i++) {
        if(accounts[i].id == req.params.id){
          
          accounts[i].card_type = req.body.card_type;
        }
      }
      res.status(200).send(accounts);
  }
},

addApprovedState: function(req, res, next){
  if (req.params.id) {
    console.log(req.body.add);
    for (var i = 0; i < accounts.length; i++) {
      if(accounts[i].id == req.params.id){
        
        accounts[i].approved_states.push(req.body.add);
      }
    }
    res.status(200).send(accounts);
}
},

banAcct: function(req, res, next){
  var exists = false;
  for(var i = 0; i < accounts.length; i++){
    if(accounts[i].id == req.params.id){
      accounts.splice(i,1);
      res.status(200).send(accounts);
    }
  }
  if(exists === false){
    res.status(404).send(accounts);
  }
},

updateAcct:function(req, res, next){
  var exists = false;
  for(var i = 0; i < accounts.length; i++){
    if(accounts[i].id == req.params.id){
      if(req.body.card_number){
        accounts[i].card_number = req.body.card_number;
      };
      if(req.body.card_type){
        accounts[i].card_type = req.body.card_type;
      };
       if(req.body.balance){
        accounts[i].balance = req.body.balance;
      };
      if(req.body.first_name){
        accounts[i].first_name = req.body.first_name;
      };
       if(req.body.last_name){
        accounts[i].last_name = req.body.last_name;
      };
       if(req.body.approved_states){
        accounts[i].approved_states= req.body.approved_states;
      }
    }res.status(200).send(accounts);
  }
  if(exists === false){
    res.status(404).send(accounts);
  }
},

removeFromStates: function(req, res, next){
  for(var i = 0; i < accounts.length; i++){
    if(accounts[i].id == req.params.id){
      for (var j = 0; j < accounts[i].approved_states.length; j++) {
        if(accounts[i].approved_states[j] == req.query.state){
          accounts[i].approved_states.splice(j,1);
        }
      }
    }res.status(200).send(accounts);
  }
  
}
    
    
// {
// "card_number":"12345678901112",
// "card_type":"visa",
// "balance":"4.00",
// "first_name":"BIG",
// "last_name":"MclargeHuge",
// "approved_states":"Delaware"
// 
// }
    

  
  
  
}