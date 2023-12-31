var dataList=document.querySelector("#destination-detail-form");
dataList.addEventListener('submit', function handleDataFormat(event){
    event.preventDefault();
    var height=document.getElementById('adjestment');
    var destName=event.target.elements['name'].value;
    var destLocation=event.target.elements['location'].value;
    var destPhoto=event.target.elements['photo'].value;
    var destDesc=event.target.elements['description'].value;
    var description=document.getElementById("description");
    var destinationCont=document.getElementById("destination-container");
    for(var i=0;i<dataList.length;i++){
        dataList.elements[i].value =null;
    }
    var destCard=createDestinationCard(destName,destLocation,destPhoto,destDesc);
 var wishListContainer=document.querySelector("#destination-body");
if( wishListContainer.children.length===0){
  document.getElementById("title").innerHTML="My wish List";
  height.style.marginTop="1em";
  destinationCont.style.paddingBottom="5px";
  height.style.height="560px";
  height.style.overflow="scroll";
}
document.querySelector('#destination-container').appendChild(destCard);
});
function createDestinationCard(name,location,photoUrl,description){
var card=document.createElement('div');
card.className='all-destination-container';
var image=document.createElement('img');
image.className="dest-image";
image.setAttribute('alt',name);
var constUrl="cut (13).jpg";
if(photoUrl.length===0){
    image.setAttribute('src',constUrl);
}
else{
    image.setAttribute('src',photoUrl);
}
card.appendChild(image);
var cardBody=document.createElement('div');
cardBody.className="destination-body";
var cardTitle=document.createElement('h3');
cardTitle.className="destination-name"
cardTitle.innerText=name;
cardBody.appendChild(cardTitle);
var cardSubTitle=document.createElement('h4');
cardSubTitle.className="destination-location";
cardSubTitle.innerText=location;
cardBody.appendChild(cardSubTitle);
if(description.length!==0){
    var cardText=document.createElement('p');
    cardText.innerText=description;
    cardText.className="destination-description"
    cardBody.appendChild(cardText);
   
}
var removeBtn=document.createElement('button');
removeBtn.className="destination-remove";
removeBtn.innerText="remove";
removeBtn.addEventListener('click',removeDestination);
cardBody.appendChild(removeBtn);
card.appendChild(cardBody);
return card;
}
function removeDestination(event){
var card=event.target.parentElement.parentElement;
card.remove();
}