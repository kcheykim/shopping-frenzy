const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => { //api/categories endpoint
    Category.findAll({ //find all categories
            include: [{ //include its associated Products
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock']
            }]
        }).then(dbCatData => res.json(dbCatData))
        .catch(err => {
            // console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Category.findOne({ // find one category by its `id` value
        attributes: { exclude: ['passowrd'] },
        where: { id: req.params.id },
        include: [{
            model: Product,
            attributes: ['id', 'prodcut_name', 'price', 'stock']
        }]
    }).then(dbCatData => {
        if (!dbCatData) {
            res.status(404).json({ message: 'No category with this id' });
            return;
        }
        res.json(dbCatData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    // create a new category
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;