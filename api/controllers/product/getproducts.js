import asyncHandler from 'express-async-handler';
import { productModel } from '../../models/product/index.js';

export const getProducts = asyncHandler(async (req, res) => {
    const queries = { ...req.query }
    const excludeFields = ['limit', 'sort', 'page', 'fields']
    excludeFields.forEach(el => delete queries[el])

    let queryString = JSON.stringify(queries)
    queryString = queryString.replace(/\b(gte|gt|lt|lte)\b/g, matchedEl => `$${matchedEl}`)
    const formattedQueries = JSON.parse(queryString)

    if (queries?.name) {
        const nameRegex = new RegExp(`\\b${queries.name}\\b`, 'i');
        formattedQueries.name = nameRegex;
    }

    let queryCommand = productModel.find(formattedQueries)

    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join(' ')
        queryCommand = queryCommand.sort(sortBy)
        console.log('Formatted Queries:', formattedQueries);
        console.log('Sort By:', sortBy);
    }

    const response = await queryCommand.exec();

    if (response) {
        const counts = await productModel.find(formattedQueries).countDocuments();
        return res.status(200).json(response);
    } else {
        return res.status(500).json({
            success: false,
            message: 'Cannot get products'
        });
    }
});

export default getProducts;
