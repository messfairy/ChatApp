/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
    "newsTags": [
        {name: 'tag 0'},
        {name: 'tag 1'},
        {name: 'tag 2'}
    ],
    "newsPosts": [
        {
            "tagId": 0,
            "title": "Lorem ipsum",
            "imgUrl": "http://lorempixel.com/400/300/",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "tagId": 1,
            "title": "Sed egestas",
            "imgUrl": "http://lorempixel.com/400/300/",
            "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
        },
        {
            "tagId": 2,
            "title": "Sed egestas",
            "imgUrl": "http://lorempixel.com/400/300/",
            "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
        },
        {
            "tagId": 0,
            "title": "Sed egestas",
            "imgUrl": "http://lorempixel.com/400/300/",
            "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
        },
        {
            "tagId": 1,
            "title": "Sed egestas",
            "imgUrl": "http://lorempixel.com/400/300/",
            "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
        }


    ]
};


exports.getAFriend = function (req, res) {
    res.json();
};

exports.friends = function (req, res) {
    res.json([{
        name: 'wasd1',
        id:'1231'
    },{
        name: 'wasd2',
        id:'1232'
    },{
        name: 'wasd3',
        id:'1233'
    }]);
};

exports.newsPost = function (req, res) {

    console.log(req.params)
    var id = req.params.postId;
    if (id >= 0 && id < data.newsPosts.length) {
        res.json({
            post: data.newsPosts[id]
        });
    } else {
        res.json(false);
    }
};