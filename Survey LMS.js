const radioGroups = document.querySelectorAll("[id='radioX']");
let delay = 200; // Penundaan awal (200ms)

for (let i = 0; i < radioGroups.length; i++) {
  const radioButtons = radioGroups[i].querySelectorAll("[type='radio']");
  const jumlahPilihan = radioButtons.length;

  // Pilih pilihan pertama jika hanya ada 2 pilihan
  const pilihan = jumlahPilihan === 2 ? 1 : Math.min(4, jumlahPilihan); 

  setTimeout(() => {
    radioButtons[pilihan - 1].checked = true;
  }, delay);

  delay += 200; // Tambahkan 200ms penundaan setiap kali
}
