import { Product, User } from "./models"
import { connectToDB } from "./utils"

// Escape function
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const fetchUsers = async (q, page)=>{
    const sanitizedQuery = escapeRegex(q);
    const regex = new RegExp(sanitizedQuery,"i");

    const ITEM_PER_PAGE = 2

    try{
        connectToDB();
        const count = await User.countDocuments({ username: { $regex: regex } }); // Ganti `count` dengan `countDocuments`
        const users = await User.find({username: {$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,users};
    } catch (err){
        console.log(err)
        throw new Error("failed to fetch users!")
    }
};

export const fetchUser = async (id)=>{
    console.log(id)

    try{
        connectToDB();
        const user = await User.findById(id)
        return user;
    } catch (err){
        console.log(err)
        throw new Error("failed to fetch users!")
    }
};

export const fetchProducts = async (q, page)=>{
    const sanitizedQuery = escapeRegex(q);
    const regex = new RegExp(sanitizedQuery,"i");

    const ITEM_PER_PAGE = 2

    try{
        connectToDB();
        const count = await Product.countDocuments({ title: { $regex: regex } }); // Ganti `count` dengan `countDocuments`
        const products = await Product.find({title: {$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,products};
    } catch (err){
        console.log(err)
        throw new Error("failed to fetch products!")
    }
};

export const fetchProduct = async (id)=>{

    try{
        connectToDB();
        const product = await Product.findById(id)
        return product;
    } catch (err){
        console.log(err)
        throw new Error("failed to fetch product!")
    }
};