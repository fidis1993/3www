import Homepage from './pages/Homepage.js'
import Links from './pages/Links.js'
// import Photos from './pages/Photos.js'
// import Administration from './pages/Administration.js'
// import Plays from './pages/Plays.js'
import Biography from './pages/Biography.js'

const t1 = gsap.timeline({defaults: {ease:'power2.out'} });
t1.to('.slider', {y: "-100%", duration:1.2},"-=1");
t1.to('#Homepage', {y: "0%", duration:1.2},"-=1");

const navigateTo = url =>{

    history.pushState(null,null,url);
    router();
};

const router = async () => {
    const route = [
        {
            path: "/",
            view: Homepage
        },
{
    path: "/Biography",
        view: Biography
},
{
    path: "/Links",
        view: Links
},

{
    path: "/Plays",
        view: Plays
},
{
    path: "/Photos",
        view: Photos
},
{
    path: "/Administration",
        view: Administration
}



    ];

    // test each route for match
    const checkMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path // we get a boolean value
        };
    });
    
    
    
    let match = checkMatches.find(checkMatch => checkMatch.isMatch);


    if (!match) {
        match = {
            route: routes[0]
        };
    }

    // console.log(match.route.view);

    const view = new match.route.view();

    document.querySelector("#Homepage").innerHTML = await view.getHtml();


};



window.addEventListener('popstate',router);




document.addEventListener('DOMContentLoaded', () => {
    


    document.body.addEventListener('click', e=> {
        e.preventDefault();
        t1.to('.slider', {y:"100%", duration:0});

        if(e.target.matches('[data-link]')){
            
            t1.to('.slider', {y:"-100%",duration:1.2});
            t1.fromTo('#Homepage',{opacity:0},{opacity:1, duration:0.5});
            navigateTo(e.target.href);
        }
    })


    router();
})
