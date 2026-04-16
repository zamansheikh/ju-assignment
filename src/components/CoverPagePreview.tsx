"use client";

import { CoverPageData } from "@/lib/types";
import AssignmentTemplate from "./templates/AssignmentTemplate";
import LabReportTemplate from "./templates/LabReportTemplate";
import ProjectTemplate from "./templates/ProjectTemplate";
import QuizTemplate from "./templates/QuizTemplate";
import PresentationTemplate from "./templates/PresentationTemplate";
import ElegantTemplate from "./templates/ElegantTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import AcademicTemplate from "./templates/AcademicTemplate";
import { forwardRef } from "react";

const CoverPagePreview = forwardRef<HTMLDivElement, { data: CoverPageData }>(
  function CoverPagePreview({ data }, ref) {
    const renderTemplate = () => {
      switch (data.templateType) {
        case "lab-report":
          return <LabReportTemplate data={data} />;
        case "project":
          return <ProjectTemplate data={data} />;
        case "quiz":
          return <QuizTemplate data={data} />;
        case "presentation":
          return <PresentationTemplate data={data} />;
        case "elegant":
          return <ElegantTemplate data={data} />;
        case "minimal":
          return <MinimalTemplate data={data} />;
        case "academic":
          return <AcademicTemplate data={data} />;
        default:
          return <AssignmentTemplate data={data} />;
      }
    };

    return (
      <div ref={ref} id="cover-page-root">
        {renderTemplate()}
      </div>
    );
  }
);

export default CoverPagePreview;
