let data = [
  {
    img: "https://images.ctfassets.net/5de70he6op10/iMM14RuhLCVUGYVmrKvc9/b97a6a1d371ca72bbc1ae9aaf4a11f26/LS_M1a.jpg?w=1302&q=80&fm=webp",
    price: 50,
  },
  {
    img: "https://images.ctfassets.net/5de70he6op10/6YcDf5MI12J4gw9cOaz9WP/70f858a9574c2e0ff43b2b7bdc6e61af/LS_M4.jpg?w=2641&q=80&fm=webp",
    price: 60,
  },
];
let arr = JSON.parse(localStorage.getItem("cart"));
function getdata(data) {
  data.forEach((ele) => {
    console.log(data);
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.img;

    let btn = document.createElement("button");
    btn.innerText = "Shop with kerry";

    div.append(img, btn);
    document.querySelector("#card").append(div);
  });
}
getdata(data);

let data1 = [
  {
    img: "https://images.ctfassets.net/5de70he6op10/3w8rGkLqypJyMI94W5jAz6/b1a47476e9fa52841b06bcbf50e8c337/LS_M2a.jpg?w=856&q=80&fm=webp",
  },
  {
    img: "https://images.ctfassets.net/5de70he6op10/4dc0UZzh9jWMuJPdVGcr2v/8a7ace4023132337f5e9a81d4ac819f4/LS_M2b.jpg?w=856&q=80&fm=webp",
  },
  {
    img: "https://images.ctfassets.net/5de70he6op10/28WqNdcNbssmLjzWncssjE/a9ef1a745783404fb8f054796735b3b1/LS_M2c.jpg?w=856&q=80&fm=webp",
  },
];
function getdata1(data1) {
  data1.forEach((ele) => {
    console.log(data);
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.img;

    let btn = document.createElement("button");
    btn.innerText = "Shop with kerry";

    div.append(img, btn);
    document.querySelector("#card1").append(div);
  });
}
getdata1(data1);
let data2 = [
  {
    img: "https://images.ctfassets.net/5de70he6op10/75ZPqT2FH1d40ogSLKj1cD/8aa17217c14653cb853d13a31f77ca54/6UP_Tops.jpg?w=856&q=80&fm=webp",
  },
  {
    img: "https://images.ctfassets.net/5de70he6op10/6U1u2B6KWtGqFHdH99XgUW/32687a17d03dd1d8926b8f12c81cd7be/6UP_Dresses.jpg?w=856&q=80&fm=webp",
  },
];
function getdata2(data2) {
  data2.forEach((ele) => {
    console.log(data);
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.img;

    let btn = document.createElement("button");
    btn.innerText = "Shop with kerry";

    div.append(img, btn);
    document.querySelector("#card2").append(div);
  });
}
getdata2(data2);

let data3 = [
  {
    img: "https://images.ctfassets.net/5de70he6op10/7fzJY7mnX3XvCv1RNf6mTp/79d5f396c261126621d9a105c88faaf3/RR_Kitchen_Dining.jpg?w=856&q=80&fm=webp",
  },
  {
    img: "https://images.ctfassets.net/5de70he6op10/6qpsukHAAtvED0Tc12y84m/645098d9a2f3d0da07fc3ad86e11a228/RR_Bedding.jpg?w=856&q=80&fm=webp",
  },
  {
    img: "https://images.ctfassets.net/5de70he6op10/7xfJSO2og2DDZa4IpAilFz/882783ed4607343a932d4d975fe22be6/RR_Furniture.jpg?w=856&q=80&fm=webp",
  },
];
function getdata3(data3) {
  data3.forEach((ele) => {
    console.log(data);
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.img;

    let btn = document.createElement("button");
    btn.innerText = "Shop with kerry";

    div.append(img, btn);
    document.querySelector("#card3").append(div);
  });
}
getdata3(data3);

let data4 = [
  {
    img: "https://images.urbndata.com/is/image/Anthropologie/69903672_099_b2?$an-category$&qlt=80&fit=constrain",
  },
  {
    img: "https://images.urbndata.com/is/image/Anthropologie/63754501_020_b?$an-category$&qlt=80&fit=constrain",
  },
  {
    img: "https://images.urbndata.com/is/image/Anthropologie/40522195_072_b14?$an-category$&qlt=80&fit=constrain",
  },
  {
    img: "https://images.urbndata.com/is/image/Anthropologie/39336847_095_b2?$an-category$&qlt=80&fit=constrain",
  },
  {
    img: "https://images.urbndata.com/is/image/Anthropologie/39336862_051_b2?$an-category$&qlt=80&fit=constrain",
  },
];
function getdata4(data4) {
  data4.forEach((ele) => {
    console.log(data);
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.img;

    let btn = document.createElement("button");
    btn.innerText = "Shop with kerry";

    div.append(img, btn);
    document.querySelector("#card4").append(div);
  });
}
getdata4(data4);

let data5 = [
  {
    img: "https://images.urbndata.com/is/image/Anthropologie/57660680_011_b1?$an-category$&qlt=80&fit=constrain",
    name: "Jenny You Lowrence Gown",
  },
  {
    img: "https://images.urbndata.com/is/image/Anthropologie/57485781_000_b2?$an-category$&qlt=80&fit=constrain",
    name: "Foux Pine Garland",
  },
  {
    img: "https://images.urbndata.com/is/image/Anthropologie/67546762_011_b1?$an-category$&qlt=80&fit=constrain",
    name: "Amour Apholia Skirt",
  },
  {
    img: "https://images.urbndata.com/is/image/Anthropologie/69058378_001_b2?$an-category$&qlt=80&fit=constrain",
    name: "Bryson Boots",
  },
];
function getdata5(data5) {
  data5.forEach((ele) => {
    console.log(data);
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.img;

    let name = document.createElement("p");
    name.innerText = ele.name;

    let btn = document.createElement("button");
    btn.innerText = "Shop with kerry";

    div.append(img, name, btn);
    document.querySelector("#card5").append(div);
  });
}
getdata5(data5);
