export const SCHOOLS = [
  {
    id: "hubt",
    name: "Đại học Kinh doanh và Công nghệ Hà Nội",
    shortName: "HUBT",
    image: "image/schools/hubt.jpg",
  },
  {
    id: "epu",
    name: "Đại học Điện Lực",
    shortName: "EPU",
    image: "image/schools/epu.jpg",
  },
  {
    id: "uneti",
    name: "Đại Học Kinh Tế - Kỹ Thuật Công Nghiệp",
    shortName: "UNETI",
    image: "image/schools/uneti.jpg",
  },
  {
    id: "vmu",
    name: "Trường Đại học Y khoa Vinh",
    shortName: "VMU",
    image: "image/schools/vmu.jpg",
  },
];

// Các bộ đề cũ mặc định thuộc HUBT; đề mới có thể khai báo schoolId.
export const getSchoolSets = (sets, schoolId) =>
  sets.filter((s) => (s.schoolId || "hubt") === schoolId);

// schoolId: "hust",
