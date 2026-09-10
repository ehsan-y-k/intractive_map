/*
  بيانات وهمية (Mock Data) لأغراض العرض التقديمي والنموذج الأولي فقط
  لا يوجد اتصال بأي قاعدة بيانات حقيقية
*/

const GOVERNORATES = ["اللاذقية", "طرطوس", "حمص", "حماة", "دمشق", "حلب"];
const PROPERTY_TYPES = ["مبنى إداري", "مستودع", "محطة ركاب", "مبنى سكني تابع", "مرآب صيانة"];
const LEGAL_STATUSES = ["مملوك بالكامل", "مستملك", "قيد نقل الملكية", "متنازع عليه جزئياً"];

const SAMPLE_PROPERTIES = [
  {
    code: "MOT-LTK-014",
    entity: "المؤسسة العامة للطرق والجسور",
    governorate: "اللاذقية",
    type: "مبنى إداري",
    zone: "المنطقة العقارية - الشيخ ضاهر",
    area: 1250,
    legalStatus: "مملوك بالكامل",
    operational: true,
    lat: 35.5317, lng: 35.7915,
    violations: false,
    markings: false,
    images: [
      "https://picsum.photos/seed/mot1/480/320",
      "https://picsum.photos/seed/mot1b/480/320"
    ],
    proposals: [
      "تحويل الطابق الأرضي إلى معارض تجارية مع إبقاء الطوابق العلوية إدارية",
      "تأجير المبنى بالكامل لصالح شركة قطاع خاص بعقد طويل الأمد"
    ]
  },
  {
    code: "MOT-TRT-027",
    entity: "الشركة العامة للنقل البري",
    governorate: "طرطوس",
    type: "مستودع",
    zone: "المنطقة الصناعية - الحاووز",
    area: 3400,
    legalStatus: "مستملك",
    operational: false,
    lat: 34.8886, lng: 35.8869,
    violations: true,
    markings: false,
    images: ["https://picsum.photos/seed/mot2/480/320"],
    proposals: [
      "تحويل المستودع إلى مركز لوجستي لتوزيع البضائع",
      "إقامة مجمع تجاري صغير بعد إزالة المخالفات القائمة"
    ]
  },
  {
    code: "MOT-HMS-009",
    entity: "المؤسسة العامة للخطوط الحديدية",
    governorate: "حمص",
    type: "محطة ركاب",
    zone: "المنطقة العقارية - باب هود",
    area: 2100,
    legalStatus: "مملوك بالكامل",
    operational: true,
    lat: 34.7324, lng: 36.7137,
    violations: false,
    markings: true,
    images: [
      "https://picsum.photos/seed/mot3/480/320",
      "https://picsum.photos/seed/mot3b/480/320",
      "https://picsum.photos/seed/mot3c/480/320"
    ],
    proposals: ["استثمار المبنى التراثي كمركز ثقافي مع الحفاظ على الواجهة الأصلية"]
  },
  {
    code: "MOT-HMA-003",
    entity: "المؤسسة العامة للطرق والجسور",
    governorate: "حماة",
    type: "مرآب صيانة",
    zone: "طريق حلب الدولي",
    area: 1800,
    legalStatus: "قيد نقل الملكية",
    operational: false,
    lat: 35.1318, lng: 36.7578,
    violations: false,
    markings: false,
    images: ["https://picsum.photos/seed/mot4/480/320"],
    proposals: [
      "إعادة تأهيل المرآب كمحطة خدمة ووقود على الطريق الدولي",
      "تأجيره كموقف شاحنات مجهز"
    ]
  },
  {
    code: "MOT-DAM-051",
    entity: "الشركة العامة للنقل البري",
    governorate: "دمشق",
    type: "مبنى سكني تابع",
    zone: "منطقة كفرسوسة",
    area: 960,
    legalStatus: "متنازع عليه جزئياً",
    operational: false,
    lat: 33.4913, lng: 36.2649,
    violations: true,
    markings: true,
    images: ["https://picsum.photos/seed/mot5/480/320", "https://picsum.photos/seed/mot5b/480/320"],
    proposals: ["تسوية الوضع القانوني ثم طرحه للاستثمار السكني/التجاري المشترك"]
  },
  {
    code: "MOT-ALP-033",
    entity: "المؤسسة العامة للخطوط الحديدية",
    governorate: "حلب",
    type: "مبنى إداري",
    zone: "المنطقة العقارية - الجميلية",
    area: 1500,
    legalStatus: "مملوك بالكامل",
    operational: true,
    lat: 36.1913, lng: 37.1637,
    violations: false,
    markings: false,
    images: ["https://picsum.photos/seed/mot6/480/320"],
    proposals: [
      "تحويل جزء من المبنى إلى فندق إداري قصير الإقامة",
      "شراكة استثمارية لإنشاء مركز مؤتمرات"
    ]
  }
];

const TYPE_COLORS = {
  "مبنى إداري": "#14707E",
  "مستودع": "#C9962C",
  "محطة ركاب": "#0F3644",
  "مبنى سكني تابع": "#3E7C4A",
  "مرآب صيانة": "#B3413B"
};
