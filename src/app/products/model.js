'use strict';

/**
 * Module dependencies.
 */
import mongoose from 'mongoose';
import CONSTANT from '../../config/constants';

/**
 * Products schema
 */
const productsSchema = mongoose.Schema({
    sku: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CONSTANT.SCHEMA.CATEGORIES,
        required: true
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CONSTANT.SCHEMA.BRANDS,
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

export default mongoose.model(CONSTANT.SCHEMA.PRODUCTS, productsSchema);
