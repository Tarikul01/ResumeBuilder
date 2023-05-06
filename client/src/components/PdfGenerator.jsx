import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
const PdfGenerator = ({ children }) => {
  const generatePdf = () => {
    const input = document.getElementById("pdf-generator");
    html2canvas(input)
      .then((canvas) => {
        try {
          const imgData = canvas.toDataURL("image/png");

          const pdf = new jsPDF("p", "pt", "a4");
          // pdf.text(20, 20, "Hello world!");
          // pdf.text(20, 30, "This is client-side Javascript, pumping out a PDF.");

          pdf.addImage(imgData, "PNG");
          pdf.save("download.pdf");
        } catch (err) {
          console.log(err);
        }
        // pdf.html(
        //   input,
        //   {
        //     callback: (pdf) => {
        //       pdf.save("download.pdf");
        //     },
        //   },
        //   10,
        //   10
        // );
        // pdf.addPage();
        // pdf.addImage(imgData, "PNG", 0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="mt-10 px-8 py-4 bg-gray-800 text-white"
        onClick={() => generatePdf()}
      >
        Download PDF
      </button>

      <div>{children}</div>
    </div>
  );
};

export default PdfGenerator;
