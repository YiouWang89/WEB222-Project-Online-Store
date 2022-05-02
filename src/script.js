/* Add any JavaScript you need to this file. */
let productData = [
  {
    name: 'Velvet Liquid Lipstick',
    description: '#906',
    price: 2340,
    category: 'lipstick',
    imageUrl: './images/lip1.png'
  },
  {
    name: 'Velvet Liquid Lipstick',
    description: '#904',
    price: 2340,
    category: 'lipstick',
    imageUrl: './images/lip2.png'
  },
  {
    name: 'Rouge Intense Slim Lipstick',
    description: '#a01',
    price: 3898,
    category: 'lipstick',
    imageUrl: './images/lip3.png'
  },
  {
    name: 'Rouge Intense Slim Lipstick',
    description: '#a02',
    price: 3898,
    category: 'lipstick',
    imageUrl: './images/lip4.png'
  },
  {
    name: 'Eyeshadow Pet Series',
    description: 'cat',
    price: 3898,
    category: 'eyeshadow',
    imageUrl: 'images/cat.jpeg'
  },
  {
    name: 'Eyeshadow Pet Series',
    description: 'dog',
    price: 3898,
    category: 'eyeshadow',
    imageUrl: 'images/dog.jpeg'
  },
  {
    name: 'Eyeshadow Pet Series',
    description: 'pig',
    price: 3898,
    category: 'eyeshadow',
    imageUrl: 'images/pig.jpeg'
  },
  {
    name: 'Eyeshadow Pet Series',
    description: 'panda',
    price: 3898,
    category: 'eyeshadow',
    imageUrl: 'images/panda.jpeg'
  },
  {
    name: 'Makeup Tools',
    description: 'Sponges',
    price: 1326,
    category: 'tools',
    imageUrl: 'images/Sponges.jpeg'
  },
  {
    name: 'Makeup Tools',
    description: 'Brushes Set',
    price: 1326,
    category: 'tools',
    imageUrl: 'images/Brushes.jpeg'
  }
];

function find_product(str) {
  let products = new Array();
  let re = new RegExp(str);
  for (let i = 0; i < productData.length; i++) {
    if (re.test(productData[i].category, i)) products.push(productData[i]);
  }
  return products;
}

window.onload = function() {
  let home = document.getElementById('Home');
  let lip = document.getElementById('lipstick');
  let eye = document.getElementById('eyeshadow');
  let tools = document.getElementById('makeuptools');

  function clear() {
    let parent = document.getElementById('products');
    let child1 = parent.getElementsByTagName('img');
    let child2 = parent.getElementsByTagName('p');
    for (let i = child1.length - 1; i >= 0; i--) {
      parent.removeChild(child1[i]);
    }
    for (let i = child2.length - 1; i >= 0; i--) {
      parent.removeChild(child2[i]);
    }
  }

  home.onclick = function() {
    clear();
    let p = document.createElement('p');
    let parent = document.getElementById('products');
    p.setAttribute('id', 'tagline');
    parent.appendChild(p);
    p.innerHTML = 'L o v e &nbsp&nbsp Y o u r s e l f &nbsp&nbsp E v e r y d a y';
    let img = document.createElement('img');
    img.setAttribute('id', 'image2');
    p.appendChild(img);
    img.src = './images/2.jpg';
  };

  lip.onclick = function() {
    clear();
    let lipstick = find_product('lipstic');
    let parent = document.getElementById('products');

    for (let i = 0; i < lipstick.length; i++) {
      let img = document.createElement('img');
      img.setAttribute('class', 'image_lip');
      parent.appendChild(img);
      img.src = lipstick[i].imageUrl;

      let par1 = document.createElement('p');
      par1.setAttribute('class', 'product_info');
      parent.appendChild(par1);
      par1.innerHTML = lipstick[i].name;

      let par2 = document.createElement('p');
      par2.setAttribute('class', 'product_info');
      parent.appendChild(par2);
      par2.innerHTML = lipstick[i].description;

      let price = '$' + lipstick[i].price / 100;
      let par3 = document.createElement('p');
      par3.setAttribute('class', 'product_info');
      parent.appendChild(par3);
      par3.innerHTML = price;
    }
  };

  eye.onclick = function() {
    clear();
    let eye = find_product('eyeshadow');
    let parent = document.getElementById('products');
    for (let i = 0; i < eye.length; i++) {
      let img = document.createElement('img');
      img.setAttribute('class', 'image_eye');
      parent.appendChild(img);
      img.src = eye[i].imageUrl;
      let par1 = document.createElement('p');
      par1.setAttribute('class', 'eye_info');
      parent.appendChild(par1);
      par1.innerHTML = eye[i].name;
      let par2 = document.createElement('p');
      par2.setAttribute('class', 'eye_info');
      parent.appendChild(par2);
      par2.innerHTML = eye[i].description;
      let price = '$' + eye[i].price / 100;
      let par3 = document.createElement('p');
      par3.setAttribute('class', 'eye_info');
      parent.appendChild(par3);
      par3.innerHTML = price;
    }
  };

  tools.onclick = function() {
    clear();
    let tools = find_product('tools');
    let parent = document.getElementById('products');
    for (let i = 0; i < tools.length; i++) {
      let img = document.createElement('img');
      img.setAttribute('class', 'image_tools');
      parent.appendChild(img);
      img.src = tools[i].imageUrl;
      let par1 = document.createElement('p');
      par1.setAttribute('class', 'tools_info');
      parent.appendChild(par1);
      par1.innerHTML = tools[i].name;
      let par2 = document.createElement('p');
      par2.setAttribute('class', 'tools_info');
      parent.appendChild(par2);
      par2.innerHTML = tools[i].description;
      let price = '$' + tools[i].price / 100;
      let par3 = document.createElement('p');
      par3.setAttribute('class', 'tools_info');
      parent.appendChild(par3);
      par3.innerHTML = price;
    }
  };

  let left_arror = document.getElementById('arror1');
  left_arror.onclick = function() {
    let image1 = document.getElementById('imag1');
    image1.src = './images/1.jpg';
  };

  let right_arror = document.getElementById('arror2');
  right_arror.onclick = function() {
    let image1 = document.getElementById('imag1');
    image1.src = './images/3.jpg';
  };

  let orderProblem = document.getElementById('contact-About3');
  orderProblem.onclick = function() {
    if (orderProblem.checked) {
      document.getElementById('ordernumber').style.display = 'inline';
    }
  };

  let comment = document.getElementById('contact-About2');
  comment.onclick = function() {
    if (comment.checked) {
      document.getElementById('ordernumber').style.display = 'none';
    }
  };

  let question = document.getElementById('contact-About1');
  question.onclick = function() {
    if (question.checked) {
      document.getElementById('ordernumber').style.display = 'none';
    }
  };
};

function checkValidation() {
  let postcode = document.getElementById('contact-postcode').value.trim();
  var regex = /^[A-Za-z]\d[A-Za-z][ -]*\d[A-Za-z]\d$/;
  if (!regex.test(postcode)) {
    let elem = document.getElementById('PostcodeErrorMessage');
    elem.innerHTML = 'Please Enter a valid Post code';
    return false;
  }
  return true;
}
