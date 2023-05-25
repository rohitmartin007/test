const foodItem= [
    {
    id: 1,
    name: 'Ambur Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 13,
    img: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Ambur_Star_Chicken_Biryani_Recipe_.jpg',
    quantity: 1
},
{
    id: 2,
    name: 'Hyderabadi Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg',
    quantity: 1
},
{
    id: 3,
    name: 'Egg Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 18,
    img: 'https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe.jpg',
    quantity: 1
},
{
    id: 4,
    name: 'Goan Fish Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/fish-biryani-500x375.jpg',
    quantity: 1
},
{
    id: 5,
    name: 'Mutton Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 10,
    img: 'https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp',
    quantity: 1
},
{
    id: 6,
    name: 'Kamrupi Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 12,
    img: 'https://indiafoodnetwork.in/wp-content/uploads/2017/06/9Y2A07661.jpg',
    quantity: 1
},
{
    id: 7,
    name: 'Kashmiri Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 13,
    img: 'https://cdn.shopify.com/s/files/1/0108/8867/5428/articles/10_12_22_Diaspora_Recipes_MelatiCitrawireja_-3_2_1200x1200.jpg?v=1666274108',
    quantity: 1
},
{
    id: 8,
    name: 'Memoni Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 20,
    img: 'https://flavoredbyfatima.com/wp-content/uploads/2021/01/13-768x530.jpg',
    quantity: 1
},
{
    id: 9,
    name: 'Mughlai Biryani',
    category : 'biryani',
    rating : 4.3,
    price: 15,
    img: 'images/biryani/mughlai-biryani.jpg',
    quantity: 1
},
{
    id: 10,
    name: 'Chicken Roast',
    category : 'chicken',
    rating : 4.3,
    price: 11,
    img: 'https://spoonsofflavor.com/wp-content/uploads/2020/10/Spicy-Chicken-Roast-Recipe.jpg',
    quantity: 1
},
{
    id: 11,
    name: 'Chicken Curry',
    category : 'chicken',
    rating : 4.3,
    price: 10,
    img: 'images/chicken/Chicken-Curry.jpg',
    quantity: 1
},
{
    id: 12,
    name: 'Chicken Do Pyaza',
    category : 'chicken',
    rating : 4.3,
    price: 14,
    img: 'https://maunikagowardhan.co.uk/wp-content/uploads/2017/12/IMG_9563-700x467.jpg',
    quantity: 1
},
{
    id: 13,
    name: 'Chicken Masala',
    category : 'chicken',
    rating : 4.3,
    price: 12,
    img: 'https://www.whiskaffair.com/wp-content/uploads/2021/01/Chicken-Masala-2-3-1.jpg',
    quantity: 1
},
{
    id: 14,
    name: 'Handi Chicken',
    category : 'chicken',
    rating : 4.3,
    price: 17,
    img: 'https://tiffinandteaofficial.com/wp-content/uploads/2020/10/IMG_7510-1-scaled-e1603875066218.jpg',
    quantity: 1
},
{
    id: 15,
    name: 'Murgh Musallam',
    category : 'chicken',
    rating : 4.3,
    price: 20,
    img: 'https://myheartbeets.com/wp-content/uploads/2019/12/instant-pot-murgh-musallam-whole-indian-chicken-500x375.jpg',
    quantity: 1
},
{
    id: 16,
    name: 'Matar Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'images/paneer/Matar-Paneer.jpg',
    quantity: 1

},
{
    id: 17,
    name: 'Palak Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 10,
    img: 'https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg',
    quantity: 1
},
{
    id: 18,
    name: 'Paneer Butter Masala',
    category : 'paneer',
    rating : 4.3,
    price: 15,
    img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg',
    quantity: 1

},
{
    id: 19,
    name: 'Paneer Do Pyaza',
    category : 'paneer',
    rating : 4.3,
    price: 12,
    img: 'images/paneer/Paneer-Do-Pyaza.jpg',
    quantity: 1

},
{
    id: 20,
    name: 'Hyderabadi Paneer',
    category : 'paneer',
    rating : 4.3,
    price: 8,
    img: 'https://magictadka.com/wp-content/uploads/2017/07/IMG_20170725_133417.jpg',
    quantity: 1
},
{
    id: 21,
    name: 'Paneer Lababdar',
    category : 'paneer',
    rating : 4.3,
    price: 7,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/paneer-lababdar.jpg',
    quantity: 1
},
{
    id: 22,
    name: 'Shahi Paneer',
    age: '32',
    category : 'paneer',
    rating : 4.3,
    price: 5,
    img: 'images/paneer/shahi-paneer.jpg',
    quantity: 1
},
{
    id: 23,
    name: 'Navratan Korma',
    category : 'vegetable',
    rating : 4.3,
    price: 8,
    img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2012/03/navratan-korma-recipe-1.jpg',
    quantity: 1
},
{
    id: 24,
    name: 'Veg Jalfrezi',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/vegetable-jalfrezi-swasthi.jpg',
    quantity: 1
},
{
    id: 25,
    name: 'Veg Biryani',
    category : 'vegetable',
    rating : 4.3,
    price: 5,
    img: 'images/vegetable/vegetable-biryani.jpg',
    quantity: 1
},
{
    id: 26,
    name: 'Veg Curry',
    category : 'vegetable',
    rating : 4.3,
    price: 7,
    img: 'https://www.cookwithmanali.com/wp-content/uploads/2021/09/Vegetable-Chickpea-Coconut-Curry.jpg',
    quantity: 1
},
{
    id: 27,
    name: 'Veg Kolhapur',
    category : 'vegetable',
    rating : 4.3,
    price: 10,
    img: 'https://i1.wp.com/ahappytreat.com/wp-content/uploads/2020/06/DSC_0297.jpg?fit=6000%2C4000&ssl=1',
    quantity: 1
},
{
    id: 28,
    name: 'Veg Masala',
    category : 'vegetable',
    rating : 4.3,
    price: 4,
    img: 'images/vegetable/vegetable-masala.jpg',
    quantity: 1
},
{
    id: 29,
    name: 'Veg Pakora',
    category : 'vegetable',
    rating : 4.3,
    price: 4,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg',
    quantity: 1
},
{
    id: 30,
    name: 'Momos',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg',
    quantity: 1
},
{
    id: 31,
    name: 'Chicken Manchurian',
    category : 'chinese',
    rating : 4.3,
    price: 7,
    img: 'https://pupswithchopsticks.com/wp-content/uploads/chicken-manchurian-tn.jpg',
    quantity: 1
},
{
    id: 32,
    name: 'Chili Chicken',
    category : 'chinese',
    rating : 4.3,
    price: 5,
    img: 'https://pupswithchopsticks.com/wp-content/uploads/chilli-chicken-thumbnail-500x500.jpg',
    quantity: 1
},
{
    id: 33,
    name: 'Chowmein',
    category : 'chinese',
    rating : 4.3,
    price: 16,
    img: 'images/chinese/chowmin.jpg',
    quantity: 1
},
{
    id: 34,
    name: 'Spring Roll',
    category : 'chinese',
    rating : 4.3,
    price: 14,
    img: 'images/chinese/spring-rolls.jpg',
    quantity: 1
},
{
    id: 35,
    name: 'Szechuan Chicken',
    category : 'chinese',
    rating : 4.3,
    price: 10,
    img: 'images/chinese/szechuan-chicken.jpg',
    quantity: 1
},
{
    id: 36,
    name: 'Fried Rice',
    category : 'chinese',
    rating : 4.3,
    price: 8,
    img: 'images/chinese/veg-fried-rice.jpg',
    quantity: 1
},
{
    id: 37,
    name: 'Butter Masala Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 18,
    img: 'https://www.cookwithkushi.com/wp-content/uploads/2021/12/IMG_5804e.jpg',
    quantity: 1
},
{
    id: 38,
    name: 'Idli',
    category : 'south indian',
    rating : 4.3,
    price: 20,
    img: 'https://artofpalate.com/wp-content/uploads/2016/08/idli-with-rice-flour.jpg',
    quantity: 1
},
{
    id: 39,
    name: 'Masala Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 12,
    img: 'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg',
    quantity: 1
},
{
    id: 40,
    name: 'Mysore Bonda',
    category : 'south indian',
    rating : 4.3,
    price: 10,
    img: 'https://www.sharmispassions.com/wp-content/uploads/2015/03/MysoreBonda3-e1668478322219.jpg',
    quantity: 1
},
{
    id: 41,
    name: 'Onion Uttapam',
    category : 'south indian',
    rating : 4.3,
    price: 15,
    img: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/uttapam-recipe-swasthi-500x500.jpg',
    quantity: 1
},
{
    id: 42,
    name: 'Plain Dosa',
    category : 'south indian',
    rating : 4.3,
    price: 40,
    img: 'https://vegrecipebook.com/wp-content/uploads/2021/12/Crispy-Plain-Dosa-Recipe-750x650.jpg',
    quantity: 1
},
{
    id: 43,
    name: 'Rava Uttapam',
    category : 'south indian',
    rating : 4.3,
    price: 25,
    img: 'https://www.flavouroffood.com/wp-content/uploads/2021/03/Instant-Rava-Uttapam-1.jpg',
    quantity: 1
},
{
    id: 44,
    name: 'Sambhar Vada',
    category : 'south indian',
    rating : 4.3,
    price: 34,
    img: 'https://www.nehascookbook.com/wp-content/uploads/2022/09/Medu-vada-with-sambar-WS-1.jpg',
    quantity: 1
},
]

export {foodItem};