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
    // name: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // categoryId: {
    //     type: String,
    //     required: true
    // },
    // BrandId: {
    //     type: String,
    //     required: true
    // },
    // price: {
    //     type: String,
    //     required: true
    // },
    // productType: {
    //     type: String,
    //     required: true
    // },
    // numberOfStrings: {
    //     type: String,
    //     required: true
    // },
    // soldDate: {
    //     type: String,
    //     required: true
    // },
}, {
    timestamps: true
});

export default mongoose.model(CONSTANT.APP_CONSTANT.SCHEMA.PRODUCTS, productsSchema);
