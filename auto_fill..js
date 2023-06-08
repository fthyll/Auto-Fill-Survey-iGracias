const pilihan = 1; // Pilih jawaban 1-5
const radioGroups = document.querySelectorAll("[id='radioX']");
let delay = 200; // Penundaan awal (200ms)

for (let i = 0; i < radioGroups.length; i++) {
  const radioButtons = radioGroups[i].querySelectorAll("[type='radio']");

  setTimeout(() => {
    radioButtons[pilihan - 1].checked = true;
  }, delay);

  delay += 200; // Tambahkan 200ms penundaan setiap kali
}