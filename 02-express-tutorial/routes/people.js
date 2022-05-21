const express = require('express')
const router = express.Router()

const {

    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson

} = require('../controllers/people.js')

// router.get('/',getPeople)

// router.post('/',createPerson)

// router.post('/api/postman/check',createPersonPostman)

// router.put('/:id',updatePerson)

// router.delete('/:id',deletePerson)


router.route('./').get(getPeople).post(createPerson);
router.route('/api/postman/check').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);


module.exports = router;