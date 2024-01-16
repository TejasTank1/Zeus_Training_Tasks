async function init() {
  const req = await fetch("./data.json");
  let data = await req.json();
  data = data.data;
  let third = document.querySelector(".third");

  for (let ele of data) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    if (ele.expired == true) {
      let exp = document.createElement("div");
      exp.setAttribute("class", "badge");
      exp.innerText = "EXPIRED";
      card.appendChild(exp);
    }

    let f = document.createElement("div");
    f.setAttribute("class", "f");

    let s = document.createElement("div");
    s.setAttribute("class", "s");

    let t = document.createElement("div");
    t.setAttribute("class", "t");

    // for first
    let img = document.createElement("div");
    img.setAttribute("class", "img");

    let imgtag = document.createElement("img");
    imgtag.setAttribute("src", ele.imageurl);

    img.appendChild(imgtag);

    let content = document.createElement("div");
    content.setAttribute("class", "content");

    let cp = document.createElement("p");
    if (ele.isimp) {
      cp.innerHTML =
        ele.title +
        '<span                     ><svg                       id="favourite"                       xmlns="http://www.w3.org/2000/svg"                       width="24"                       height="24"                       viewBox="0 0 24 24"                     >                       <path                         id="Path_3678"                         data-name="Path 3678"                         d="M0,0H24V24H0Z"                         fill="none"                       />                       <path                         id="Path_3679"                         data-name="Path 3679"                         d="M12,17.27,18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z"                         fill="#edc900"                       />                       <path                         id="Path_3680"                         data-name="Path 3680"                         d="M0,0H24V24H0Z"                         fill="none"                       />                     </svg>                   </span>';
    } else {
      cp.innerHTML =
        ele.title +
        '<span                     ><svg                       id="favourite"                       xmlns="http://www.w3.org/2000/svg"                       width="24"                       height="24"                       viewBox="0 0 24 24"                     >                       <path                         id="Path_3678"                         data-name="Path 3678"                         d="M0,0H24V24H0Z"                         fill="none"                       />                       <path                         id="Path_3679"                         data-name="Path 3679"                         d="M12,17.27,18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z"                         fill="#eeeeee"                       />                       <path                         id="Path_3680"                         data-name="Path 3680"                         d="M0,0H24V24H0Z"                         fill="none"                       />                     </svg>                   </span>';
    }
    content.appendChild(cp);
    f.appendChild(img);

    let ul1 = document.createElement("ul");
    ul1.setAttribute("class", "spec");
    let li1 = document.createElement("li");
    li1.setAttribute("class", "ff");
    li1.innerText = ele.tags[0];
    let li2 = document.createElement("li");
    li2.innerText = ele.tags[1] + " +2";
    ul1.appendChild(li1);
    ul1.appendChild(li2);

    content.appendChild(ul1);

    if (ele.expired == false) {
      let ul2 = document.createElement("ul");
      ul2.setAttribute("class", "not");

      let li11 = document.createElement("li");
      let sp1 = document.createElement("span");
      sp1.innerText = ele.detail[0];
      li11.appendChild(sp1);
      li11.innerHTML = li11.innerHTML + " Units";

      let li12 = document.createElement("li");
      let sp2 = document.createElement("span");
      sp2.innerText = ele.detail[1];
      li12.appendChild(sp2);
      li12.innerHTML = li12.innerHTML + " lessons";

      let li13 = document.createElement("li");
      let sp3 = document.createElement("span");
      sp3.innerText = ele.detail[2];
      li13.appendChild(sp3);
      li13.innerHTML = li13.innerHTML + " topics";

      ul2.appendChild(li11);
      ul2.appendChild(li12);
      ul2.appendChild(li13);

      content.appendChild(ul2);
    }

    let select = document.createElement("select");
    let option = document.createElement("option");
    option.innerText = ele.op;
    select.appendChild(option);

    content.appendChild(select);

    let ul2 = document.createElement("ul");
    ul2.setAttribute("class", "spec");
    if (ele.student != undefined) {
      let lil1 = document.createElement("li");
      lil1.setAttribute("class", "ff");
      lil1.innerText = ele.student + " Student";
      ul2.appendChild(lil1);
      if (ele.date.length == 0) {
        lil1.setAttribute("class", "br0");
      }
    }
    if (ele.date.length != 0) {
      let lil2 = document.createElement("li");
      lil2.innerText = ele.date[0] + " - " + ele.date[1];
      ul2.appendChild(lil2);
    }
    content.appendChild(ul2);

    f.appendChild(content);
    card.appendChild(f);

    s.innerHTML = `<svg             class=${
      ele.blur[0] == true ? "op-0" : ""
    }         id="view"                 xmlns="http://www.w3.org/2000/svg"                 width="24"                 height="24"                 viewBox="0 0 24 24"               >                 <path                   id="Path_3678"                   data-name="Path 3678"                   d="M0,0H24V24H0Z"                   fill="none"                 />                 <path                   id="Path_3679"                   data-name="Path 3679"                   d="M12,4.5A11.827,11.827,0,0,0,1,12a11.817,11.817,0,0,0,22,0A11.827,11.827,0,0,0,12,4.5ZM12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"                   fill="#1f7a54"                 />               </svg>`;
    s.innerHTML =
      s.innerHTML +
      `<svg      class=${
        ele.blur[1] == true ? "op-0" : ""
      }                xmlns="http://www.w3.org/2000/svg"                 width="18"                 height="20"                 viewBox="0 0 18 20"               >                 <path                   id="Path_1958"                   data-name="Path 1958"                   d="M17,12H12v5h5ZM16,1V3H8V1H6V3H5A1.991,1.991,0,0,0,3.01,5L3,19a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5a2.006,2.006,0,0,0-2-2H18V1Zm3,18H5V8H19Z"                   transform="translate(-3 -1)"                   fill="#1f7a54"                 />               </svg>`;
    s.innerHTML =
      s.innerHTML +
      `              <svg   class=${
        ele.blur[2] == true ? "op-0" : ""
      }                   xmlns="http://www.w3.org/2000/svg"                 width="18"                 height="19.999"                 viewBox="0 0 18 19.999"               >                 <path                   id="evaluate"                   d="M19,4H14.8A2.927,2.927,0,0,0,11,2.2,3.187,3.187,0,0,0,9.2,4H5A2.006,2.006,0,0,0,3,6H3V20a2.051,2.051,0,0,0,2,2H19a1.816,1.816,0,0,0,1.4-.6A1.974,1.974,0,0,0,21,20V6A2.006,2.006,0,0,0,19,4Zm-7.7.3a.967.967,0,0,1,1.4,0h0A.908.908,0,0,1,13,5a.908.908,0,0,1-.3.7.967.967,0,0,1-1.4,0h0A.967.967,0,0,1,11.3,4.3Zm4,14.8L12,17,8.7,19.1l.9-3.9L6.7,12.6l3.8-.3L12,8.7l1.5,3.6,3.8.3-2.9,2.6Z"                   transform="translate(-3 -2.001)"                   fill="#1f7a54"                   fill-rule="evenodd"                 />               </svg>`;
    s.innerHTML =
      s.innerHTML +
      ` <svg    class=${
        ele.blur[3] == true ? "op-0" : ""
      }                  id="reports"                 xmlns="http://www.w3.org/2000/svg"                 width="24"                 height="24"                 viewBox="0 0 24 24"               >                 <path                   id="Path_3679"                   data-name="Path 3679"                   d="M19,3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3ZM9,17H7V10H9Zm4,0H11V7h2Zm4,0H15V13h2Z"                   fill="#1f7a54"                 />                 <path                   id="Path_3680"                   data-name="Path 3680"                   d="M0,0H24V24H0Z"                   fill="none"                 />               </svg>`;

    card.appendChild(s);

    third.appendChild(card);
  }
}

async function initannouncement() {
  const req = await fetch("./data.json");
  let data = await req.json();
  data = data.announcement;

  let anfirst = document.querySelector(".anfirst");

  for (let ele of data) {
    let f = document.createElement("div");
    f.setAttribute("class", "f");
    console.log(ele.up);

    let fir = document.createElement("div");
    fir.setAttribute("class", "fir");

    let p = document.createElement("p");
    p.innerText = ele.up;

    fir.appendChild(p);

    let img=document.createElement("img");
    img.setAttribute("src",ele.iconpath);
    
    fir.appendChild(img);

    f.appendChild(fir);

    let p1 = document.createElement("p");
    p1.setAttribute("class", "sec");
    p1.innerText = ele.title;

    f.appendChild(p1);

    let down = document.createElement("div");
    down.setAttribute("class", "down");

    let p2 = document.createElement("p");
    p2.setAttribute("class", "ff1");

    let p3 = document.createElement("p");
    p3.setAttribute("class", "ff2");

    p2.innerText = ele.lef;
    p3.innerText = ele.right;
    down.appendChild(p2);
    down.appendChild(p3);

    f.appendChild(down);
    f.style.backgroundColor = ele.bg;
    anfirst.appendChild(f);
  }
}

init();

initannouncement();

function toggle() {
  let ele = document.querySelector(".forsm");
  if (ele.style.display == "none") {
    ele.style.display = "block";
  } else {
    ele.style.display = "none";
  }
}

function toggleanouncement(){
  let ele=document.querySelector(".announcement");

  if(ele.style.display!="none")
  {
    ele.style.display="none";
  }else{
    ele.style.display="block";
  }
}

function ccchange(classname) {
  let ele = document.querySelector("." + classname);
  console.log(ele.style);

  if (ele.style.display != "none") {
    ele.style.display = "none";
  } else {
    ele.style.display = "flex";
  }
}
