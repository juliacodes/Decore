const typeData = {
    nav: {
        html: `<div class="nav">Nav</div>`,
        css: `.nav {
background-color: white;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
}`,
    },
    header: {
        html: `<header class="div">Header</header>`,
        css: '',
    },
    article: {
        html: `<article class="div">Article</article>`,
        css: '',
    },
    section: {
        html: `<section class="div">Section</section>`,
        css: '',
    },
    table: {
        html: `<table class="div" style="width:100%">
        <tr>
          <th>Title</th>
          <th>Title</th> 
          <th>Title</th>
        </tr>
        <tr>
          <td>Value</td>
          <td>Value</td>
          <td>Value</td>
        </tr>
        <tr>
          <td>Value</td>
          <td>Value</td>
          <td>Value</td>
        </tr>
        <tr>
          <td>Value</td>
          <td>Value</td>
          <td>Value</td>
        </tr>
      </table>`,
        css: `th, td {
            padding: 0px 25px;
}`,
    },
    footer: {
        html: `<footer class="div">Footer</footer>`,
        css: '',
    },
    div: {
        html: `<div class="div">Div</div>`,
        css: `.div {
    background-color: white;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
          `,
    },
    splitDiv: {
        html: `<div class="split-div">
        <div class="div">Div</div>
        <div class="div">Div</div>
    </div>`,
        css: `.split-div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }
    
    .split-div > .div{
    width: 47%;
    }`,
    },
    triDiv: {
        html: `<div class="tri-div">
    <div class="div">Div</div>
    <div class="div">Div</div>
    <div class="div">Div</div>
    </div>`,
        css: `.tri-div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }
    
    .tri-div > .div{
    width: 29%;
    }`,
    },
    image: {
        html: `<div class="div image">
        <img src="https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Image-01-512.png"/>
    </div>`,
        css: `.image{
        height: auto !important;
        padding: 10px 0;
        }

        .image > img{
        height: 200px;
        }`,
    },
    cta: {
        html: `<div class="div text">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis gravida dui, sed convallis nunc commodo vel. Nulla in orci ligula. Vivamus eu aliquet magna.</p>
        <button>Click me</button>
      </div>`,
        css: `.text{
            flex-direction: column;
            height: auto;
          }
          
          .text > p{
            margin-top: 0;
            max-width: 500px;
          }
          
          button{
            margin: 10px 0 30px 0;
          }`,
    },
    imageText: {
        html: `  <div class="split-div">
        <div class="div image"><img src="https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Image-01-512.png" /></div>
        <div class="div text"><h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis gravida dui, sed convallis nunc commodo vel. Nulla in orci ligula. Vivamus eu aliquet magna.</p></div>
      </div>`,
        css: `.image{
            height: auto !important;
            padding: 10px 0;
          }
          
          .image > img{
            height: 200px;
          }`,
    },
    navContent: {
        html: `<div class="nav">
        <ul>
          <div class="left">
            <li class="logo"><a href="">Logo</a></li>
          </div>
          <div class="right">
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
          </div>
        </ul>
      </div>`,
        css: `.nav {
            background-color: white;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .nav > ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            padding: 0;
            margin: 0;
          }
          
          ul > .left,
          ul > .right {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          ul > .left {
            justify-content: flex-start;
          }
          
          ul > .right {
            justify-content: flex-end;
          }
          
          li {
            list-style-type: none;
            margin: 0 20px;
          }
          
          .logo {
            font-size: 30px;
          }`,
    },
    footerContent: {
        html: `<footer class="div nav footer">
        <ul>
          <div class="left">
            <li class="logo"><a href="">Logo</a></li>
          </div>
          <div class="right">
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
            <li><a href="">Link</a></li>
          </div>
        </ul>
      </footer>`,
        css: `.nav > ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            padding: 0;
            margin: 0;
          }
          
          ul > .left,
          ul > .right {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          ul > .left {
            justify-content: flex-start;
          }
          
          ul > .right {
            justify-content: flex-end;
          }
          
          li {
            list-style-type: none;
            margin: 0 20px;
          }
          
          .logo {
            font-size: 30px;
          }
        
        .footer > ul {
            flex-direction: column;
        }
        
        .footer > ul > .right{
          justify-content: flex-start;
        }`,
    },
};

export default typeData;
