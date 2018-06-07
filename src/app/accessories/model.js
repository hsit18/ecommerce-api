'use strict';

/**
 * Module dependencies.
 */
import mongoose from 'mongoose';
import CONSTANT from '../../config/constants';

/**
 * Accessories schema
 */
const accessoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    types: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    soldQuantity: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

export default mongoose.model(CONSTANT.SCHEMA.ACCESSORIES, accessoriesSchema);
