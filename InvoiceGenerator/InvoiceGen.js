// InvoiceGen.js
function invoice() {
  const { jsPDF } = window.jspdf;

  // get input values
  const Name = document.getElementById("Name").value.trim();
  const Surname = document.getElementById("Surname").value.trim();
  const Email = document.getElementById("Email").value.trim();
  const Mono = document.getElementById("Mono").value.trim();
  const Address = document.getElementById("Address").value.trim();
  const ProdName = document.getElementById("ProdName").value.trim();
  const ProdType = document.getElementById("ProdType").value.trim();
  const ProdQnt = parseFloat(document.getElementById("ProdQnt").value) || 0;
  const ProdPrice = parseFloat(document.getElementById("ProdPrice").value) || 0;
  const SGST = parseFloat(document.getElementById("SGST").value) || 0;
  const CGST = parseFloat(document.getElementById("CGST").value) || 0;

  // calculations
  const subtotal = +(ProdQnt * ProdPrice).toFixed(2);
  const taxPercent = SGST + CGST;
  const taxAmount = +(subtotal * taxPercent / 100).toFixed(2);
  const total = +(subtotal + taxAmount).toFixed(2);

  const invoiceNumber = `INV-${Date.now()}`;

  // create jsPDF doc
  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.text("Invoice", 14, 20);

  // Invoice info
  doc.setFontSize(11);
  doc.text(`Invoice No: ${invoiceNumber}`, 14, 30);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);

  // Client details
  doc.text("Bill To:", 14, 48);
  doc.text(`${Name} ${Surname}`, 14, 54);
  if (Address) doc.text(Address, 14, 60);
  if (Email) doc.text(`Email: ${Email}`, 14, 66);
  if (Mono) doc.text(`Mobile: ${Mono}`, 14, 72);

  // Table for product
  doc.autoTable({
    startY: 82,
    head: [["Product", "Type", "Qty", "Price", "Amount"]],
    body: [
      [
        ProdName || "—",
        ProdType || "—",
        ProdQnt,
        ProdPrice.toFixed(2),
        subtotal.toFixed(2),
      ],
    ],
  });

  // Totals
  let finalY = doc.lastAutoTable.finalY + 10;
  doc.text(`Subtotal: ₹${subtotal.toFixed(2)}`, 140, finalY);
  doc.text(`Tax (${taxPercent}%): ₹${taxAmount.toFixed(2)}`, 140, finalY + 6);
  doc.text(`Total: ₹${total.toFixed(2)}`, 140, finalY + 12);

  // Notes
  doc.setFontSize(10);
  doc.text("Thank you for your business!", 14, finalY + 25);

  // Save file
  doc.save(`${invoiceNumber}.pdf`);
}
