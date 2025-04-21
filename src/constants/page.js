export const schemes = [
  {
    title: "Asangathit Karmakar Gambhir Bimari Chikitsa Sahayata Yojana",
    location: "Chhattisgarh",
    description:
      'Chhattisgarh State Government started a scheme "Asangathit Karmakar Gambhir Bimari Chikitsa Sahayata Yojana" for unorganized workers on 28 April 2012.',
    tags: ["Financial Assistance", "Medical Treatment", "Serious Illness"],
  },
  {
    title: "Distress Relief Fund For The Differently Abled (Medical Treatment)",
    location: "Kerala",
    description:
      'The scheme "Distress Relief Fund for the Differently Abled (Medical Treatment)" was launched by the Department of Social Justice, Government of Kerala.',
    tags: [
      "BPL",
      "Differently Abled",
      "Distress",
      "Financial Assistance",
      "Handicap",
      "Medical Treatment",
      "PwD",
    ],
  },
  {
    title: "Atal Mission For Rejuvenation And Urban Transformation",
    location: "Ministry Of Housing & Urban Affairs",
    description:
      "Providing basic services (e.g. water supply, sewerage, urban transport) to households and building amenities in cities which will improve the quality of life for all, especially the poor and the disadvantaged is a national priority.",
    tags: ["Urban", "Infrastructure", "Water Supply", "Affordable Housing"],
  },
];
export const filters = [
  {
    key: "state",
    label: "State",
    options: [
      "Chhattisgarh",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Delhi",
    ],
  },
  {
    key: "gender",
    label: "Gender",
    options: ["Male", "Female", "Other"],
  },
  {
    key: "age",
    label: "Age",
    options: ["Below 18", "18-35", "35-60", "60+"],
  },
  {
    key: "caste",
    label: "Caste",
    options: ["General", "OBC", "SC", "ST"],
  },
  {
    key: "ministry",
    label: "Ministry Name",
    options: [
      "Social Justice",
      "Housing & Urban Affairs",
      "Health",
      "Education",
    ],
  },
  {
    key: "disabilityPercentage",
    label: "Disability Percentage",
    options: ["Less than 40%", "40%-60%", "Above 60%"],
  },
];

export const mockStores = [
  {
    id: 1,
    name: "Jan Aushadhi Store - MP Nagar",
    distance: 1.2,
    pin: "462011",
    medicine: "Paracetamol",
    price: "₹10",
  },
  {
    id: 2,
    name: "Jan Aushadhi Store - Arera Colony",
    distance: 2.5,
    pin: "462016",
    medicine: "Paracetamol",
    price: "₹9",
  },
  {
    id: 3,
    name: "Jan Aushadhi Store - BHEL Area",
    distance: 3.8,
    pin: "462022",
    medicine: "Paracetamol",
    price: "₹11",
  },
  {
    id: 4,
    name: "Jan Aushadhi Store - New Market",
    distance: 4.2,
    pin: "462003",
    medicine: "Paracetamol",
    price: "₹10",
  },
  {
    id: 5,
    name: "Jan Aushadhi Store - Kolar Road",
    distance: 5.6,
    pin: "462042",
    medicine: "Paracetamol",
    price: "₹10",
  },
];

export const upiTransactions = [
  { id: 1, to: "Apollo Hospital", amount: "₹500" },
  { id: 2, to: "Medico Pharmacy", amount: "₹200" },
  { id: 3, to: "City Clinic", amount: "₹350" },
];

export const userData = {
  name: "Keshav Maheshwari",
  email: "xyz@gmail.com",
  aadhaar: "",
  income: "",
  address: "",
  language: "English",
};

export const orders = [
  {
    id: 1,
    medicine: "Paracetamol",
    quantity: 10,
    date: "2025-04-10",
    total: "₹100",
  },
  {
    id: 2,
    medicine: "Ibuprofen",
    quantity: 5,
    date: "2025-04-15",
    total: "₹75",
  },
];

export const medicines = [
  { id: 1, name: "Paracetamol", price: "₹10", stock: 50 },
  { id: 2, name: "Ibuprofen", price: "₹15", stock: 30 },
];

export const languages = ["English", "Hindi"];
