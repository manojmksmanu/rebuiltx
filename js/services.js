let das= document.getElementById('all-services-page')

let data = fetch("./datajson/services.json")
  .then((r) => r.json())
  .then((d) => {
    let html = "";
    let services = d;
    console.log(d);
    services.forEach(({ img, title, des }) => {
      html += `
      <div id="all-services-page">
      <div class="serivces-card-page">
        <div class="serivces-card-page__thumb"><a href=""><img class="animate" src="${img}"/></a></div>
        <div class="serivces-card-page__content">
          <h2 class="serivces-card-page__title animate"><a href="javascript:;"> ${title}</a></h2>
          <p class="serivces-card-page__text"> ${des} </p>
          <button class="serivces-card-page__btn"><i class="fa-solid fa-arrow-right fa-fw"></i></button>
        </div>
      </div>
    
    </div>
  
  `;
      das.innerHTML = html;
    });
  });
