const typeData = {
    nav: {
        html: `<nav></nav>`,
        css: `.nav { 
    width: 100%; 
    height: 200px;
    padding: 30px;
}`
    },
    header: {
        html: `<header></header>`,
        css: `.header { 
    width: 100%; 
    height: 400px;
    padding: 30px;
}`
    },
    article: {
        html: `<article></article>`,
        css: `.article { 
    width: 100%; 
    height: 500px;
    padding: 30px;
}`
    },
    section: {
        html: `<section></section>`,
        css: `.section { 
    width: 100%; 
    height: 400px;
    padding: 30px;
}`
    },
    table: {
        html: `<table></table>`,
        css: `.table { 
    width: 100%; 
    height: 400px;
    padding: 30px;
}`
    },
    footer: {
        html: `<footer></footer>`,
        css: `.footer { 
    width: 100%; 
    height: 200px;
    padding: 30px;
}`
    },
    div: {
        html: `<div></div>`,
        css: `div { 
    width: 100%; 
    height: 400px;
    padding: 30px;
}`
    },
    splitDiv: {
        html: `<div class="splitDiv">
    <div>Left Content</div>
    <div>Right Content</div>        
</div>`,
        css: `.splitDiv { 
    width: 100%; 
    height: 400px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    .splitDiv > div {
        width: 50%;
    }
}`
    },
    triDiv: {
        html: `<div class="triDiv">
    <div>Left Content</div>
    <div>Center Content</div>
    <div>Right Content</div>        
</div>`,
        css: `.triDiv { 
    width: 100%; 
    height: 400px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    .triDiv > div {
        width: 30%;
    }
}`
    },
    image: {
        html: `<img></img>`,
        css: `img { 
    width: 100%; 
    height: 400px;
    padding: 30px;
    background-image: url(IMAGEURL);
}`
    },
    cta: {
        html: `<div class="cta">
    <h1>Heading Text</h1>
    <p>Description Text</p>  
    <button>Click Me!</button>      
</div>`,
        css: `.cta { 
    width: 100%; 
    height: 400px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .cta > h1{
        font-size: 20px;
        padding: 20px;
    }

    .cta > p{
        font-size: 15px;
        padding: 20px;
        margin: 10px;
    }
}`
    },
    imageText: {
        html: `<div class="imageText">
        <div class="flexLeft">Image</div>
        <div class="flexRight">
            <p>Insert Text</p>
        </div>    
    </div>`,
        css: `.imageText { 
    width: 100%; 
    height: 400px;
    padding: 30px;
    display: flex;
    justify-content: space-evently;
    align-items: center;

    .imageText > .flexLeft{
        width: 50%;
        background-image: url(URLHERE);
        height: 100%;
    }

    .imageText > .flexRight{
        width: 50%;
    }
}`
    },
    navContent: {
        html: 'code',
        css: `.navContent { 
    width: 100%; 
    height: 200px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navContent > .logo {
        width: 50px;
        height: 50px;
    }
    
    .navContent > .link {
        width: 20%;
        height: 50px;

    }
}`
    },
    footerContent: {
        html: 'code',
        css: `.footerContent { 
    width: 100%; 
    height: 200px;
    padding: 30px;
}`
    }
};

export default typeData;
