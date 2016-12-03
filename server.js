// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var bodyParser = require('body-parser');

// CONTROLLERS
// ============================================================
var mainCtrl = require('./mainCtrl');

// INITILIZE APP
// ============================================================
var app = express();

// INITILIZE DEPENDENCIES
// ============================================================
app.use(bodyParser.json());
var users = require('./accounts.json');

// ENDPOINTS
// ============================================================
app.get('/api/accounts', mainCtrl.getAccounts);
//http://localhost:3000/api/accounts?cardtype=visa
app.get('/api/accounts/:id', mainCtrl.getAcctById);
// http://localhost:3000/api/accounts/12
app.post('/api/accounts', mainCtrl.newAccount);
app.post('/api/accounts/card_type/:id', mainCtrl.changeCardType);
// http://localhost:3000/api/accounts/card_type/1
app.post('/api/accounts/approvedstates/:id', mainCtrl.addApprovedState);
// http://localhost:3000/api/accounts/approvedstates/1
app.delete('/api/accounts/:id', mainCtrl.banAcct);
// http://localhost:3000/api/accounts/2
app.delete('/api/accounts/approvedstates/:id', mainCtrl.removeFromStates);

app.put('/api/accounts/:id', mainCtrl.updateAcct);


// VARIABLES
// ============================================================
var port = 3000;


// LISTEN
// ============================================================
app.listen(port, function() {
  console.log('listening on port ', port);
});

module.exports = app;