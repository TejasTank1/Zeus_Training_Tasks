"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var req, data, third, _i, data_1, ele, card, exp, f, s, t, img, imgtag, content, cp, ul1, li1, li2, ul2_1, li11, sp1, li12, sp2, li13, sp3, select, option, ul2, lil1, lil2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./data.json")];
                case 1:
                    req = _a.sent();
                    return [4 /*yield*/, req.json()];
                case 2:
                    data = _a.sent();
                    data = data.data;
                    third = document.querySelector(".third");
                    for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                        ele = data_1[_i];
                        card = document.createElement("div");
                        card.setAttribute("class", "card");
                        if (ele.expired == true) {
                            exp = document.createElement("div");
                            exp.setAttribute("class", "badge");
                            exp.innerText = "EXPIRED";
                            card.appendChild(exp);
                        }
                        f = document.createElement("div");
                        f.setAttribute("class", "f");
                        s = document.createElement("div");
                        s.setAttribute("class", "s");
                        t = document.createElement("div");
                        t.setAttribute("class", "t");
                        img = document.createElement("div");
                        img.setAttribute("class", "img");
                        imgtag = document.createElement("img");
                        imgtag.setAttribute("src", ele.imageurl);
                        img.appendChild(imgtag);
                        content = document.createElement("div");
                        content.setAttribute("class", "content");
                        cp = document.createElement("p");
                        if (ele.isimp) {
                            cp.innerHTML =
                                ele.title +
                                    '<span                     ><svg                       id="favourite"                       xmlns="http://www.w3.org/2000/svg"                       width="24"                       height="24"                       viewBox="0 0 24 24"                     >                       <path                         id="Path_3678"                         data-name="Path 3678"                         d="M0,0H24V24H0Z"                         fill="none"                       />                       <path                         id="Path_3679"                         data-name="Path 3679"                         d="M12,17.27,18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z"                         fill="#edc900"                       />                       <path                         id="Path_3680"                         data-name="Path 3680"                         d="M0,0H24V24H0Z"                         fill="none"                       />                     </svg>                   </span>';
                        }
                        else {
                            cp.innerHTML =
                                ele.title +
                                    '<span                     ><svg                       id="favourite"                       xmlns="http://www.w3.org/2000/svg"                       width="24"                       height="24"                       viewBox="0 0 24 24"                     >                       <path                         id="Path_3678"                         data-name="Path 3678"                         d="M0,0H24V24H0Z"                         fill="none"                       />                       <path                         id="Path_3679"                         data-name="Path 3679"                         d="M12,17.27,18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z"                         fill="#eeeeee"                       />                       <path                         id="Path_3680"                         data-name="Path 3680"                         d="M0,0H24V24H0Z"                         fill="none"                       />                     </svg>                   </span>';
                        }
                        content.appendChild(cp);
                        f.appendChild(img);
                        ul1 = document.createElement("ul");
                        ul1.setAttribute("class", "spec");
                        li1 = document.createElement("li");
                        li1.setAttribute("class", "ff");
                        li1.innerText = ele.tags[0];
                        li2 = document.createElement("li");
                        li2.innerText = ele.tags[1] + " +2";
                        ul1.appendChild(li1);
                        ul1.appendChild(li2);
                        content.appendChild(ul1);
                        if (ele.expired == false) {
                            ul2_1 = document.createElement("ul");
                            ul2_1.setAttribute("class", "not");
                            li11 = document.createElement("li");
                            sp1 = document.createElement("span");
                            sp1.innerText = ele.detail[0];
                            li11.appendChild(sp1);
                            li11.innerHTML = li11.innerHTML + " Units";
                            li12 = document.createElement("li");
                            sp2 = document.createElement("span");
                            sp2.innerText = ele.detail[1];
                            li12.appendChild(sp2);
                            li12.innerHTML = li12.innerHTML + " lessons";
                            li13 = document.createElement("li");
                            sp3 = document.createElement("span");
                            sp3.innerText = ele.detail[2];
                            li13.appendChild(sp3);
                            li13.innerHTML = li13.innerHTML + " topics";
                            ul2_1.appendChild(li11);
                            ul2_1.appendChild(li12);
                            ul2_1.appendChild(li13);
                            content.appendChild(ul2_1);
                        }
                        select = document.createElement("select");
                        option = document.createElement("option");
                        option.innerText = ele.op;
                        select.appendChild(option);
                        content.appendChild(select);
                        ul2 = document.createElement("ul");
                        ul2.setAttribute("class", "spec");
                        if (ele.student != undefined) {
                            lil1 = document.createElement("li");
                            lil1.setAttribute("class", "ff");
                            lil1.innerText = ele.student + " Student";
                            ul2.appendChild(lil1);
                            if (ele.date.length == 0) {
                                lil1.setAttribute("class", "br0");
                            }
                        }
                        if (ele.date.length != 0) {
                            lil2 = document.createElement("li");
                            lil2.innerText = ele.date[0] + " - " + ele.date[1];
                            ul2.appendChild(lil2);
                        }
                        content.appendChild(ul2);
                        f.appendChild(content);
                        card.appendChild(f);
                        s.innerHTML = "<svg             class=".concat(ele.blur[0] == true ? "op-0" : "", "         id=\"view\"                 xmlns=\"http://www.w3.org/2000/svg\"                 width=\"24\"                 height=\"24\"                 viewBox=\"0 0 24 24\"               >                 <path                   id=\"Path_3678\"                   data-name=\"Path 3678\"                   d=\"M0,0H24V24H0Z\"                   fill=\"none\"                 />                 <path                   id=\"Path_3679\"                   data-name=\"Path 3679\"                   d=\"M12,4.5A11.827,11.827,0,0,0,1,12a11.817,11.817,0,0,0,22,0A11.827,11.827,0,0,0,12,4.5ZM12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z\"                   fill=\"#1f7a54\"                 />               </svg>");
                        s.innerHTML =
                            s.innerHTML +
                                "<svg      class=".concat(ele.blur[1] == true ? "op-0" : "", "                xmlns=\"http://www.w3.org/2000/svg\"                 width=\"18\"                 height=\"20\"                 viewBox=\"0 0 18 20\"               >                 <path                   id=\"Path_1958\"                   data-name=\"Path 1958\"                   d=\"M17,12H12v5h5ZM16,1V3H8V1H6V3H5A1.991,1.991,0,0,0,3.01,5L3,19a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5a2.006,2.006,0,0,0-2-2H18V1Zm3,18H5V8H19Z\"                   transform=\"translate(-3 -1)\"                   fill=\"#1f7a54\"                 />               </svg>");
                        s.innerHTML =
                            s.innerHTML +
                                "              <svg   class=".concat(ele.blur[2] == true ? "op-0" : "", "                   xmlns=\"http://www.w3.org/2000/svg\"                 width=\"18\"                 height=\"19.999\"                 viewBox=\"0 0 18 19.999\"               >                 <path                   id=\"evaluate\"                   d=\"M19,4H14.8A2.927,2.927,0,0,0,11,2.2,3.187,3.187,0,0,0,9.2,4H5A2.006,2.006,0,0,0,3,6H3V20a2.051,2.051,0,0,0,2,2H19a1.816,1.816,0,0,0,1.4-.6A1.974,1.974,0,0,0,21,20V6A2.006,2.006,0,0,0,19,4Zm-7.7.3a.967.967,0,0,1,1.4,0h0A.908.908,0,0,1,13,5a.908.908,0,0,1-.3.7.967.967,0,0,1-1.4,0h0A.967.967,0,0,1,11.3,4.3Zm4,14.8L12,17,8.7,19.1l.9-3.9L6.7,12.6l3.8-.3L12,8.7l1.5,3.6,3.8.3-2.9,2.6Z\"                   transform=\"translate(-3 -2.001)\"                   fill=\"#1f7a54\"                   fill-rule=\"evenodd\"                 />               </svg>");
                        s.innerHTML =
                            s.innerHTML +
                                " <svg    class=".concat(ele.blur[3] == true ? "op-0" : "", "                  id=\"reports\"                 xmlns=\"http://www.w3.org/2000/svg\"                 width=\"24\"                 height=\"24\"                 viewBox=\"0 0 24 24\"               >                 <path                   id=\"Path_3679\"                   data-name=\"Path 3679\"                   d=\"M19,3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3ZM9,17H7V10H9Zm4,0H11V7h2Zm4,0H15V13h2Z\"                   fill=\"#1f7a54\"                 />                 <path                   id=\"Path_3680\"                   data-name=\"Path 3680\"                   d=\"M0,0H24V24H0Z\"                   fill=\"none\"                 />               </svg>");
                        card.appendChild(s);
                        third.appendChild(card);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function initannouncement() {
    return __awaiter(this, void 0, void 0, function () {
        var req, data, anfirst, _i, data_2, ele, f, fir, p, img, p1, down, p2, p3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./data.json")];
                case 1:
                    req = _a.sent();
                    return [4 /*yield*/, req.json()];
                case 2:
                    data = _a.sent();
                    data = data.announcement;
                    anfirst = document.querySelector(".anfirst");
                    for (_i = 0, data_2 = data; _i < data_2.length; _i++) {
                        ele = data_2[_i];
                        f = document.createElement("div");
                        f.setAttribute("class", "f");
                        console.log(ele.up);
                        fir = document.createElement("div");
                        fir.setAttribute("class", "fir");
                        p = document.createElement("p");
                        p.innerText = ele.up;
                        fir.appendChild(p);
                        img = document.createElement("img");
                        img.setAttribute("src", ele.iconpath);
                        fir.appendChild(img);
                        f.appendChild(fir);
                        p1 = document.createElement("p");
                        p1.setAttribute("class", "sec");
                        p1.innerText = ele.title;
                        f.appendChild(p1);
                        down = document.createElement("div");
                        down.setAttribute("class", "down");
                        p2 = document.createElement("p");
                        p2.setAttribute("class", "ff1");
                        p3 = document.createElement("p");
                        p3.setAttribute("class", "ff2");
                        p2.innerText = ele.lef;
                        p3.innerText = ele.right;
                        down.appendChild(p2);
                        down.appendChild(p3);
                        f.appendChild(down);
                        f.style.backgroundColor = ele.bg;
                        anfirst.appendChild(f);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function initnotification() {
    return __awaiter(this, void 0, void 0, function () {
        var req, data, antt, _i, data_3, ele, f, hh, head, img, mid, mid, last;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./data.json")];
                case 1:
                    req = _a.sent();
                    return [4 /*yield*/, req.json()];
                case 2:
                    data = _a.sent();
                    data = data.notification;
                    antt = document.querySelector(".noti");
                    for (_i = 0, data_3 = data; _i < data_3.length; _i++) {
                        ele = data_3[_i];
                        f = document.createElement("div");
                        f.setAttribute("class", "f");
                        f.style.backgroundColor = ele.bg;
                        hh = document.createElement("div");
                        hh.setAttribute("class", "hh");
                        head = document.createElement("p");
                        head.setAttribute("class", "head");
                        head.innerText = ele.title;
                        hh.appendChild(head);
                        img = document.createElement("img");
                        img.setAttribute("src", ele.iconpath);
                        hh.appendChild(img);
                        f.appendChild(hh);
                        if (ele.course != "") {
                            mid = document.createElement("p");
                            mid.setAttribute("class", "mid");
                            mid.innerText = "course: " + ele.course;
                            f.appendChild(mid);
                        }
                        if (ele.class != "") {
                            mid = document.createElement("p");
                            mid.setAttribute("class", "mid");
                            mid.innerText = "class: " + ele.class;
                            f.appendChild(mid);
                        }
                        last = document.createElement("p");
                        last.setAttribute("class", "last");
                        last.innerText = ele.date;
                        f.appendChild(last);
                        antt.appendChild(f);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
init();
initannouncement();
initnotification();
function toggle() {
    var ele = document.querySelector(".forsm");
    var anou = document.querySelector(".announcement");
    var noti = document.querySelector(".notifications");
    if (ele.style.display == "none") {
        if (noti.style.display != "none") {
            noti.style.display = "none";
        }
        if (anou.style.display != "none") {
            anou.style.display = "none";
        }
        ele.style.display = "block";
    }
    else {
        ele.style.display = "none";
    }
}
function toggleanouncement() {
    var ele = document.querySelector(".announcement");
    var noti = document.querySelector(".notifications");
    var forsm = document.querySelector(".forsm");
    if (ele.style.display != "none") {
        ele.style.display = "none";
    }
    else {
        if (noti.style.display != "none") {
            noti.style.display = "none";
        }
        if (forsm.style.display != "none") {
            forsm.style.display = "none";
        }
        ele.style.display = "block";
    }
}
function shownotification() {
    var ele = document.querySelector(".notifications");
    var anou = document.querySelector(".announcement");
    var forsm = document.querySelector(".forsm");
    if (ele.style.display != "none") {
        ele.style.display = "none";
    }
    else {
        if (anou.style.display != "none") {
            anou.style.display = "none";
        }
        if (forsm.style.display != "none") {
            forsm.style.display = "none";
        }
        ele.style.display = "block";
    }
}
function ccchange(classname) {
    var ele = document.querySelector("." + classname);
    console.log(ele.style);
    if (ele.style.display != "none") {
        ele.style.display = "none";
    }
    else {
        ele.style.display = "flex";
    }
}
