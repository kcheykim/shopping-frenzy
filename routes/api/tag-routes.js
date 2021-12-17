const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => { //api/tags endpoint
    Tag.findAll({ //find all tags
            include: [{ //include its associated Products
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock']
            }]
        }).then(dbTagData => res.json(dbTagData))
        .catch(err => {
            // console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find a single tag by its `id`
    // be sure to include its associated Product data
});

router.post('/', (req, res) => {
    // create a new tag
});

router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
});

module.exports = router;