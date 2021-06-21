
const express=require('express');

const router=express.Router();

router.get('/', (req, res) => {
    res.send('root');
});

router.get('/les/bear', (req, res) => {
    res.send('les_bear');
});

module.exports = router;