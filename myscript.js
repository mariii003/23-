html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
body {
  background: #000;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.js-transitions-disabled * {
  transition: none !important;
}
.carousel {
  position: relative;
  height: 100%;
  overflow: hidden;
  perspective: 50vw;
  perspective-origin: 50% 50%;
}
.carousel__control {
  position: absolute;
  height: 160px;
  width: 40px;
  background: #fff;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
}
.carousel__control a {
  position: relative;
  display: block;
  width: 100%;
  padding-top: 75%;
  box-sizing: border-box;
}
.carousel__control a:hover:before {
  background-color: rgba(0, 0, 0, 0.4);
}
.carousel__control a.active:before,
.carousel__control a.active:hover:before {
  background-color: rgba(0, 0, 0, 0.6);
}
.carousel__control a:first-child {
  margin-top: 15px;
}
.carousel__control a:before {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;
  padding-top: 25%;
  width: 25%;
  background: rgba(0, 0, 0, 0.2);
  content: "";
  display: block;
  margin-top: -12.5%;
}
.carousel__stage {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  margin: auto;
  transform-style: preserve-3d;
  transform: translateZ(calc(-50vh + 20px));
}
.spinner {
  position: absolute;
  width: calc(50vw - (20px));
  height: calc(100vh - 40px);
  top: 0;
  left: 0;
  right: auto;
  bottom: 0;
  margin: auto;
  transform-style: preserve-3d;
  transition: transform 1s;
  backface-visibility: hidden;
  transform-origin: 50% 50%;
  transform: rotateX(0);
}
.js-spin-fwd .spinner {
  transform: rotateX(-90deg);
}
.js-spin-bwd .spinner {
  transform: rotateX(90deg);
}
.js-spin-fwd .spinner--right {
  transform: rotateX(90deg);
}
.js-spin-bwd .spinner--right {
  transform: rotateX(-90deg);
}
.spinner--right {
  right: 0;
  left: auto;
}
.spinner__face {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.spinner__face.js-next {
  display: block;
  transform: rotateX(90deg) translateZ(calc(50vh - 20px));
}
.spinner--right .spinner__face.js-next {
  transform: rotateX(270deg) translateZ(calc(50vh - 20px));
}
.js-spin-bwd .spinner__face.js-next {
  transform: rotateX(-90deg) translateZ(calc(50vh - 20px));
}
.js-spin-bwd .spinner--right .spinner__face.js-next {
  transform: rotateX(-270deg) translateZ(calc(50vh - 20px));
}
.js-active {
  display: block;
  transform: translateZ(calc(50vh - 20px));
}
.content {
  position: absolute;
  width: 200%;
  height: 100%;
  left: 0;
}
.spinner--right .content {
  left: -100%;
}
.content__left,
.content__right {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
}
.content__right {
  right: 0;
  left: auto;
}
.content__left {
  background-repeat: no-repeat;
  background-size: cover;
}
.content__left:after {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}
.content__left h1 {
  position: absolute;
  top: 50%;
  margin-top: -3vw;
  text-align: center;
  font-family: oswald;
  font-size: 5vw;
  height: 10vw;
  opacity: 1;
  color: #fff;
  width: 100%;
  letter-spacing: 0.15em;
  line-height: 0.6;
}
.content__left span {
  font-size: 1vw;
  font-weight: 300;
  letter-spacing: 0.2em;
  opacity: 0.9;
  font-family: Merriweather;
}
.content__right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content__right .content__main {
  position: absolute;
  font-family: Merriweather, serif;
  text-align: left;
  color: #fff;
  font-size: 1.3vw;
  padding: 0 8vw;
  line-height: 1.65;
  font-weight: 300;
  margin: 0;
  opacity: 0.8;
}
.content__right .content__main p:last-child {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85em;
}
.content__right .content__index {
  font-size: 30vh;
  position: absolute;
  right: -1vh;
  top: 35vh;
  opacity: 0.04;
  font-family: oswald;
  color: #fff;
}
[data-type="iceland"] .content__left {
  background-image: url("https://avatars.mds.yandex.net/get-entity_search/5488405/791100154/orig");
}
.spinner--right [data-type="iceland"] .content__left {
  background-image: none;
}
[data-type="china"] .content__left {
  background-image: url("https://i.pinimg.com/originals/49/8b/6f/498b6fc749c7154cf2b89887536f33d9.jpg");
}
.spinner--right [data-type="china"] .content__left {
  background-image: none;
}
[data-type="usa"] .content__left {
  background-image: url("https://fikiwiki.com/uploads/posts/2022-02/1644858876_8-fikiwiki-com-p-krasivie-kartinki-ameriki-9.jpg");
}
.spinner--right [data-type="usa"] .content__left {
  background-image: none;
}
[data-type="peru"] .content__left {
  background-image: url("https://catherineasquithgallery.com/uploads/posts/2021-02/1613706047_24-p-fon-dlya-prezentatsii-peru-32.jpg");
}
.spinner--right [data-type="peru"] .content__left {
  background-image: none;
}
