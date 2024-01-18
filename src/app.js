class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    let heading = document.createElement('h1');
    heading.setAttribute('id', 'blog-title');
    heading.innerHTML += this.title;
    document.getElementById('card-text').appendChild(heading);
  }
  addDescription() {
    let para = document.createElement('p');
    para.setAttribute('id', 'blog-description');
    para.innerHTML += this.detail;
    document.getElementById('card-text').appendChild(para);
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

let toggle = 'open';

function helperAddPost() {
  if (toggle == 'open') {
    document.getElementById('popupContact').style.display = 'inline';
    toggle = 'close';
    // console.log("yes", toggle);
  } else {
    document.getElementById('popupContact').style.display = 'none';
    toggle = 'open';
    // console.log("yes", toggle);
  }
}

function helperPost() {
  let title = document.getElementById('title').value;
  let description = document.getElementById('detail').value;

  let adding = new Blog(title, description);
  adding.addTitle();
  adding.addDescription();
  // console.log(adding)
}
