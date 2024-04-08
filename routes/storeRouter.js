const express = require('express')
const router = express.Router()

const store = [
    {
        name: "apple",
        price: 1.5
    }
]

router.get('/', (req, res)=>{
    res.json(store)
})

router.get('/get-all-products', (req, res)=>{
    let allProducts = []
    for(let obj of store){
        allProducts.push(obj.name)
    }
    res.json(allProducts)
})

router.get('/get-product/:name', (req,res)=>{
    let find = req.params
    let searchItem
    for(let item of store){
        console.log(find.name)
        if(find.name === item.name){
            searchItem = item.name
        }
    }
    if(!searchItem){
        res.end('Item not found')
    }else{
        res.json(searchItem)
    }
})

router.get('/create-product', (req, res)=>{
    let exsistingItem
    for(let obj of store){
        if(obj.name === req.body.name){
            exsistingItem = true
            break
        }
    }
    if(exsistingItem){
        res.end('exsisting item found')
    }else{
        store.push({
            name: req.body.name,
            price: req.body.price
        })
        res.json({
            data: store,
            message: "Product added"
        })
    }
})


module.exports = router