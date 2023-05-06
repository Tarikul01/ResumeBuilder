import React from "react";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import PdfGenerator from "../../components/PdfGenerator";
import Template0 from "../../templates/Template0";

const PreviewPage = () => {
  return (
    <DashboardLayout>
      <PdfGenerator>
        <Template0 />
      </PdfGenerator>
    </DashboardLayout>
  );
};

export default PreviewPage;
