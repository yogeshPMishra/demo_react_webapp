const SidebarArr = [
    {   
        id:1,
        fontawsome: "fas fa-fw fa-user",
        title: "About Us",
        links :[
            { 
                title: "Add About Us",
                route : '/demo_react_webapp/add-aboutus'
            },
            {
                title: "View About Us",
                route : '/demo_react_webapp/get-aboutus'
            },
            { 
                title:"Add Core Values",
                route :'/demo_react_webapp'
            },
            {
                title:"view Core Values",
                route :"/demo_react_webapp"
            }
        ],
        show:{
            collapse: "collapsed",
            components: "show",
        }
    },
    {   
        id:2,
        fontawsome: "fas fa-fw fa-rss",
        title: "Blogs",
        links :[
            { 
                title:"Add Blogs",
                route :"/demo_react_webapp"
            },
            { 
                title : "View Blogs",
                route :"/demo_react_webapp"
            }
        ] ,
        show:{
            collapse: "collapsed",
            components: "show",
        }
    },
    {  
        id:3,
        fontawsome: "fas fa-fw fa-graduation-cap",
        title: "Manage Carrer",
        links :[
            {title:"Add A Job",route :""},
            {title:"View Jobs",route :""},
            {title:"View Applied Candidates",route :""},
        ] ,
        show:{
            collapse: "collapsed",
            components: "show",
        }
    },
    {   
        id:4,
        fontawsome: "fab fa-product-hunt",
        title: "Product Categories",
        links :[
            {title:"Add Categories",route:""},
            {title:"View Categories",route:""},
        ],
        show:{
            collapse: "collapsed",
            components: "show",
        } 
    },
    {   
        id: 5,
        fontawsome: "fab fa-product-hunt",
        title: "Product Subcategories",
        links :[
            {title:"Add Subcategories",route:""},
            {title:"View Subcategories",route:""},
        ],
        show:{
            collapse: "collapsed",
            components: "show",
        }
    },
    {   
        id:6,
        fontawsome: "fab fa-product-hunt",
        title: "Product Management",
        links :[
           {title: "Add Product",route:""},
           {title:"View Product",route:""},
        ],
        show:{
            collapse: "collapsed",
            components: "show",
        }
    },
    {   
        id:7,
        fontawsome: "fas fa-video",
        title: "Promotional Video",
        links :[
            {title:"Add Video",route:"" },
            {title:"View Video",route:""}
        ],
        show:{
            collapse: "collapsed",
            components: "show",
        }
    },
    {   
        id:8,
        fontawsome: "fas fa-bullhorn",
        title: "Promotional Section",
        links :[
             {title:"Add Promotional Section",route:""},
             {title:"View Promotional Section",route:""}
        ],
        route:[
            
        ],
        show:{
            collapse: "collapsed",
            components: "show",
        }
    },
    {   
        id:9,
        fontawsome: "fa fa-image",
        title: "Banner",
        links :[
            {title:"Add Banner Section slider",route:""},
            {title:"View Banner Section slider",route:""}
        ],
        show:{
            collapse: "collapsed",
            components: "show",
        }
    },
    {   
        id:10,
        fontawsome: "fa fa-users",
        title: "Manage Team",
        links :[
            {title:"Add Team Member",route:""},
            {title:"View Members",route:""}
        ],
        show:{
            collapse: "collapsed",
            components: "show",
        }
    }
]

export {SidebarArr};
