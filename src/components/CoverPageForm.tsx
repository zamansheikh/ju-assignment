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
}

export default function CoverPageForm({ data, onChange }: Props) {
  const update = (field: keyof CoverPageData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const chip = (active: boolean) =>
    `h-8 flex items-center justify-center rounded-md text-xs font-medium cursor-pointer border transition-all whitespace-nowrap ${
      active
        ? "bg-emerald-600 text-white border-emerald-600"
        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
    }`;

  return (
    <div className="space-y-3">
      {/* Template */}
      <div>
        <Label>Template</Label>
        <div className="grid grid-cols-4 gap-1">
          {(Object.keys(templateLabels) as TemplateType[]).map((type) => (
            <button
              key={type}
              onClick={() => update("templateType", type)}
              className={chip(data.templateType === type)}
            >
              {templateLabels[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Page Size + Date */}
      <div className="flex gap-3">
        <div className="flex-1">
          <Label>Page Size</Label>
          <div className="grid grid-cols-3 gap-1">
            {(Object.keys(pageSizeLabels) as PageSize[]).map((size) => (
              <button
                key={size}
                onClick={() => update("pageSize", size)}
                className={chip(data.pageSize === size)}
              >
                {pageSizeLabels[size]}
              </button>
            ))}
          </div>
        </div>
        <div className="w-36 shrink-0">
          <Field
            label="Date"
            value={data.assignmentDate}
            onChange={(v) => update("assignmentDate", v)}
            type="date"
          />
        </div>
      </div>

      <Hr />

      {/* University */}
      <Field
        label="Department"
        value={data.department}
        onChange={(v) => update("department", v)}
      />
      <div className="grid grid-cols-2 gap-2">
        <Field
          label="Program"
          value={data.program}
          onChange={(v) => update("program", v)}
        />
        <Field
          label="Title"
          value={data.title}
          onChange={(v) => update("title", v)}
        />
      </div>

      {/* Course */}
      <div className="grid grid-cols-2 gap-2">
        <Field
          label="Course Code"
          value={data.courseCode}
          onChange={(v) => update("courseCode", v)}
        />
        <Field
          label="Course Name"
          value={data.courseName}
          onChange={(v) => update("courseName", v)}
        />
      </div>

      <Hr />

      {/* Student */}
      <Field
        label="Student Name"
        value={data.studentName}
        onChange={(v) => update("studentName", v)}
      />
      <div className="grid grid-cols-2 gap-2">
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
      <div className="grid grid-cols-3 gap-2">
        <Field
          label="Enrollment"
          value={data.enrollment}
          onChange={(v) => update("enrollment", v)}
        />
        <Field
          label="Batch"
          value={data.batch}
          onChange={(v) => update("batch", v)}
          placeholder="Optional"
        />
        <Field
          label="Section"
          value={data.section}
          onChange={(v) => update("section", v)}
          placeholder="Optional"
        />
      </div>

      <Hr />

      {/* Teacher */}
      <div className="grid grid-cols-2 gap-2">
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
      </div>
    </div>
  );
}

function Hr() {
  return <div className="border-t border-gray-100" />;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium text-gray-400 mb-1 uppercase tracking-wider">
      {children}
    </p>
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
      <label className="block text-[11px] font-medium text-gray-400 mb-0.5">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-2.5 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
      />
    </div>
  );
}
