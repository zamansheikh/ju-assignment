"use client";

import {
  CoverPageData,
  TemplateType,
  PageSize,
  templateLabels,
  pageSizeLabels,
} from "@/lib/types";

interface Props {
  data: CoverPageData;
  onChange: (data: CoverPageData) => void;
  onDownloadImage: () => void;
  onDownloadPDF: () => void;
  downloading: boolean;
}

export default function CoverPageForm({
  data,
  onChange,
  onDownloadImage,
  onDownloadPDF,
  downloading,
}: Props) {
  const update = (field: keyof CoverPageData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const btnBase =
    "px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border";
  const btnActive =
    "bg-emerald-600 text-white border-emerald-600 shadow-sm";
  const btnInactive =
    "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300";

  return (
    <div className="space-y-5">
      {/* Template Type */}
      <Section title="Template">
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(templateLabels) as TemplateType[]).map((type) => (
            <button
              key={type}
              onClick={() => update("templateType", type)}
              className={`${btnBase} ${data.templateType === type ? btnActive : btnInactive}`}
            >
              {templateLabels[type]}
            </button>
          ))}
        </div>
      </Section>

      {/* Page Size */}
      <Section title="Page Size">
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(pageSizeLabels) as PageSize[]).map((size) => (
            <button
              key={size}
              onClick={() => update("pageSize", size)}
              className={`${btnBase} ${data.pageSize === size ? btnActive : btnInactive}`}
            >
              {pageSizeLabels[size]}
            </button>
          ))}
        </div>
      </Section>

      {/* University Info */}
      <Section title="University">
        <Field
          label="Department"
          value={data.department}
          onChange={(v) => update("department", v)}
        />
        <Field
          label="Program"
          value={data.program}
          onChange={(v) => update("program", v)}
        />
      </Section>

      {/* Document Info */}
      <Section title="Document">
        <Field
          label="Title"
          value={data.title}
          onChange={(v) => update("title", v)}
        />
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="Course Code"
            value={data.courseCode}
            onChange={(v) => update("courseCode", v)}
          />
          <Field
            label="Date"
            value={data.assignmentDate}
            onChange={(v) => update("assignmentDate", v)}
            type="date"
          />
        </div>
        <Field
          label="Course Name"
          value={data.courseName}
          onChange={(v) => update("courseName", v)}
        />
      </Section>

      {/* Student Info */}
      <Section title="Student">
        <Field
          label="Name"
          value={data.studentName}
          onChange={(v) => update("studentName", v)}
        />
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="Roll No"
            value={data.roll}
            onChange={(v) => update("roll", v)}
          />
          <Field
            label="Reg No"
            value={data.regNo}
            onChange={(v) => update("regNo", v)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field
            label="Enrollment"
            value={data.enrollment}
            onChange={(v) => update("enrollment", v)}
          />
          <Field
            label="Batch"
            value={data.batch}
            onChange={(v) => update("batch", v)}
          />
        </div>
        <Field
          label="Section"
          value={data.section}
          onChange={(v) => update("section", v)}
          placeholder="Optional"
        />
      </Section>

      {/* Teacher Info */}
      <Section title="Teacher">
        <Field
          label="Course Teacher"
          value={data.teacherName}
          onChange={(v) => update("teacherName", v)}
        />
        <Field
          label="Designation"
          value={data.teacherDesignation}
          onChange={(v) => update("teacherDesignation", v)}
        />
      </Section>

      {/* Download buttons */}
      <div className="space-y-2 pt-2">
        <button
          onClick={onDownloadPDF}
          disabled={downloading}
          className={`w-full py-3 rounded-lg font-semibold transition-colors cursor-pointer border ${
            downloading
              ? "bg-gray-100 text-gray-400 border-gray-200"
              : "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {downloading ? "Generating..." : "Download PDF"}
        </button>
        <button
          onClick={onDownloadImage}
          disabled={downloading}
          className={`w-full py-3 rounded-lg font-semibold transition-colors cursor-pointer border ${
            downloading
              ? "bg-gray-100 text-gray-400 border-gray-200"
              : "bg-white text-emerald-700 border-emerald-600 hover:bg-emerald-50"
          }`}
        >
          {downloading ? "Generating..." : "Download Image (PNG)"}
        </button>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
      />
    </div>
  );
}
