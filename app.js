const text = [
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. `,
  `ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`,
  `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
  `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
  `Aenean congue cursus lorem eleifend pretium. Nulla vulputate elit eros, ultrices tempor arcu dignissim at. Phasellus ut ultricies urna. Donec cursus magna non placerat lacinia. Morbi dapibus ornare odio non fermentum. Curabitur aliquam ligula vitae cursus molestie. Aliquam imperdiet sollicitudin elit vel efficitur. Mauris suscipit magna at posuere lacinia. Ut tristique orci a cursus efficitur. Ut congue erat massa, nec blandit ipsum iaculis id. Nullam faucibus ante ac laoreet luctus. Ut ut feugiat enim. Pellentesque et ex fringilla, vestibulum ante eget, feugiat turpis. Maecenas porttitor consectetur tempor.`,
  `Vestibulum dignissim ut est eu placerat. Proin porttitor hendrerit nunc id malesuada. Vivamus sodales vel nunc nec pharetra. Quisque non pulvinar eros, eget eleifend mauris. Cras gravida odio ac ipsum tincidunt lacinia. Nam felis dui, consectetur quis arcu at, rhoncus aliquam tellus. Donec porttitor efficitur augue. Aenean urna lacus, pretium nec diam in, pellentesque gravida turpis. In ullamcorper feugiat interdum. Nullam venenatis et lorem at pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ullamcorper massa ligula, sit amet sagittis lectus maximus ut. `,
  `Mauris non nibh quis quam egestas rhoncus. Curabitur pretium pellentesque ex, eget lacinia lectus facilisis sed. Donec congue lorem sapien, eu ultrices velit egestas quis. Nullam sed orci sed orci rhoncus gravida id id velit. Morbi ornare tellus vel elit aliquam, eget ultricies dolor semper. Curabitur nunc justo, dignissim vitae tellus id, facilisis ultricies libero. Sed viverra leo et purus viverra, maximus venenatis nibh efficitur. Morbi quam mauris, porttitor ac augue at, ornare facilisis sem. Vivamus dictu`,
  `Praesent maximus pellentesque lorem, eget euismod ligula tincidunt vel. Sed quis semper nulla. Ut id commodo mi, quis pulvinar velit. Pellentesque pulvinar leo sed rhoncus faucibus. Nullam ac sodales urna. Morbi vel eros quis elit varius condimentum eu sit amet sem. Aliquam suscipit vehicula pretium. Duis et sodales tortor`,
];

const form = document.querySelector(".lorem-form");
const amount = document.querySelector("#amount");
const result = document.querySelector(".lorem-text");

//submit evet - form
form.addEventListener("submit", function (e) {
  e.preventDefault(); //submit için çevrdk
  const value = parseInt(amount.value); //değeri alma ve Int yapma

  //olmaması gerekenler- alert verebiliriz
  //empty- isNaN
  //-number
  //bigger than 9
  if (isNaN(value)) {
    window.alert("Lütfen bir rakam giriniz");
  } else if (value < 0 || value > 9) {
    window.alert("1 ile 9 arasında bir rakam giriniz");
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
