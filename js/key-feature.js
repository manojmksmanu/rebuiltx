let container = document.getElementById("swiper-container");

let data = fetch("datajson/key-feature.json")
  .then((r) => r.json())
  .then((d) => {
    let html = "";
    let da = d;
    console.log(d);
    da.forEach(({ img, title, des }) => {
      html += `
    <div class="swiper-slide" id="">
    <img src="${img}"alt="" />
    <h1>
    ${title}
    </h1>
    <p>
  ${des}
    </p>
  </div>
    
    `;
      container.innerHTML = html;
    });
  });
