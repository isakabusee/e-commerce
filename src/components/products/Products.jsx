import React from 'react'
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const Products = () => {
    const products = [
        { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5'},
        { id: 2, name: 'MacBook', description: 'Apple macbook.', price: '$10'}

    ];
     
    return (
    <main>
        <Grid container justifyContent="center" spacing={4}>
    {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product />
        </Grid>
    ))}
        </Grid>
    </main>
    )
}

export default Products;