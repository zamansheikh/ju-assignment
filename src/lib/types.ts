export type TemplateType =
  | "assignment"
  | "lab-report"
  | "project"
  | "quiz"
  | "presentation"
  | "elegant"
  | "minimal"
  | "academic";
export type PageSize = "a4" | "letter" | "legal";

export interface CoverPageData {
  // University info
  department: string;
  program: string;

  // Document info
  templateType: TemplateType;
  pageSize: PageSize;
  title: string;
  courseCode: string;
  courseName: string;
  assignmentDate: string;

  // Student info
  studentName: string;
  roll: string;
  regNo: string;
  enrollment: string;
  batch: string;
  section: string;

  // Teacher info
  teacherName: string;
  teacherDesignation: string;
}

export const defaultData: CoverPageData = {
  department: "Department of Computer Science & Engineering",
  program: "PMSCS Spring 2026",
  templateType: "assignment",
  pageSize: "a4",
  title: "Classification Algorithms and its Application in Data Mining",
  courseCode: "PMSCS 666",
  courseName: "Data Mining",
  assignmentDate: new Date().toISOString().split("T")[0],
  studentName: "Md. Shamsuzzaman",
  roll: "CSE202601026",
  regNo: "4252",
  enrollment: "Spring-2026",
  batch: "40",
  section: "",
  teacherName: "Prof. Dr. Md. Humayun Kabir",
  teacherDesignation: "Professor",
};

export const templateLabels: Record<TemplateType, string> = {
  assignment: "Assignment",
  "lab-report": "Lab Report",
  project: "Project",
  quiz: "Quiz",
  presentation: "Presentation",
  elegant: "Elegant",
  minimal: "Minimal",
  academic: "Academic",
};

export const pageSizeLabels: Record<PageSize, string> = {
  a4: "A4",
  letter: "Letter",
  legal: "Legal",
};

// Exact page dimensions in mm
export const pageDimensions: Record<
  PageSize,
  { width: string; height: string }
> = {
  a4: { width: "210mm", height: "297mm" },
  letter: { width: "215.9mm", height: "279.4mm" },
  legal: { width: "215.9mm", height: "355.6mm" },
};
