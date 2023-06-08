//program ini hanya memilih netral-puas-sangat puas secara random
const radioGroups = document.querySelectorAll("[id='radioX']");
let delay = 500; // Penundaan awal (500ms)

for (let i = 0; i < radioGroups.length; i++) {
  const radioButtons = radioGroups[i].querySelectorAll("[type='radio']");
  const randomOption = Math.floor(Math.random() * 3) + 3;

  setTimeout(() => {
    radioButtons[randomOption - 1].checked = true;
  }, delay);

  delay += 500; // Tambahkan 500ms penundaan setiap kali
}
