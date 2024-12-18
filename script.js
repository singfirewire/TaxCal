function calculatePrice() {
  const netIncome = parseFloat(document.getElementById('netIncome').value) || 0;
  const includeVat = document.getElementById('includeVat').checked;
  const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;

  let finalPrice = netIncome / (1 - (taxRate / 100));
  let vatAmount = 0;

  if (includeVat) {
    vatAmount = finalPrice * 0.07; 
    finalPrice += vatAmount;
  }

  document.getElementById('finalPrice').textContent = finalPrice.toLocaleString('th-TH', { style: 'currency', currency: 'THB' });
  document.getElementById('vatAmount').textContent = includeVat ? `VAT 7%: ${vatAmount.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}` : "";
}

// คำนวณทันทีเมื่อโหลดหน้าเว็บ
calculatePrice();

// Event listener สำหรับ input fields ทั้งหมด
const inputs = document.querySelectorAll('input, select'); 
inputs.forEach(input => {
  input.addEventListener('input', calculatePrice); 
});
