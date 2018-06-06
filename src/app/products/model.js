'use strict';

/**
 * Module dependencies.
 */
import path from 'path';
import mongoose from 'mongoose';
import CONSTANT from '../../config/constants';

/**
 * Products schema
 */
const productsSchema = mongoose.Schema({
    sku: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        required: true
    },
    brandId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productType: {
        type: Number,
        required: true
    },
    numberOfStrings: {
        type: Number,
        required: true
    },
    soldDate: {
        type: Date
    },
}, {
    timestamps: true
});

export default mongoose.model(CONSTANT.APP_CONSTANT.SCHEMA.PRODUCTS, productsSchema);
