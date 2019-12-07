'use strict';
const express = require('express');

//App
const app = express();

app.use(express.static('./public'));

app.get('/jabinSmiles', function(req, res){
  console.log('Jabin smiles bright like a diamond');
  res.send({personality:'He is adorable',
    gender: 'male',
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  // res.send('you made it!')
  console.log(`app is up on ${PORT} 3000`);
});


// app.listen(PORT, () => {
//   console.log(`app is up on port : ${PORT}`);
// })
