// Used to download images from
// https://www.pokemon.com/us/pokedex



//Used to click the button at the end of the page to load all the pokemon. 
//(Note: There is no reason to do this since all the images are loaded at this url
// https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png
// from numbers 001 to 1025)
let count = 0;
function clickButton() {
    document.getElementsByClassName("button-lightblue")[1].click();
    count++;
    if (count < 100) {
        setTimeout(clickButton, 500);
    }
}
clickButton();


// Gets image urls and pokemon names [Good to have for Debbug]
// for(let i =0;i<1025;i++){
//     let a = document.getElementsByClassName("animating")[i].children[0].children[0].currentSrc
//     let b= document.getElementsByClassName("animating")[i].children[1].children[1].innerHTML
//     console.log(a,b)
// }



// Download fuction for files. Give it the image url for the pokemon and the name of the pokemon
async function downloadImage(imageSrc,name) {
  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)

  const link = document.createElement('a')
  link.href = imageURL
  link.download = name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


//
let count_number = 0;
function Get_Download() {
    downloadImage(document.getElementsByClassName("animating")[count_number].children[0].children[0].currentSrc,document.getElementsByClassName("animating")[count_number].children[1].children[1].innerHTML)
    document.getElementsByClassName("button-lightblue")[1].click();
    count_number++;
    if (count_number < 1020) {
        setTimeout(Get_Download, 500);
    }
}
Get_Download();