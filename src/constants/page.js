export const schemes = [
  {
    id: 1,
    title: "Asangathit Karmakar Gambhir Bimari Chikitsa Sahayata Yojana",
    location: "Chhattisgarh",
    description:
      'Chhattisgarh State Government started a scheme "Asangathit Karmakar Gambhir Bimari Chikitsa Sahayata Yojana" for unorganized workers on 28 April 2012.',
    tags: ["Financial Assistance", "Medical Treatment", "Serious Illness"],
    application: {
      unregistered: [
        "All the applicant have to visit the official website Chhattisgarh Labour Department.",
        "On the home page click on 'Apply' under 'Chhattisgarh Unorganized Workers State Social Security Board'.",
        "Enter the following details: 1. Select Group Name: 'Asangathit Marmakaar Mandal', 2. Select Service: 'Asangathit Shramik Panjikaran', 3. What do you want to do: 'Aavedan', 4. Click next.",
        "Check the eligibility criteria for registration in Chhattisgarh Unorganized Workers State Social Security Board and click next.",
        "Fill out the online 'Registration form'.",
        "Submit.",
      ],
      registered: [
        "All the applicant have to visit the official website Chhattisgarh Labour Department.",
        "On the home page click on 'Apply' under 'Chhattisgarh Unorganized Workers State Social Security Board'.",
        "Enter the following details: 1. Select Group Name: 'Asangathit Marmakaar Mandal', 2. Select Service: 'Yojana', 3. What do you want to do: 'Aavedan', 4. Click next.",
        "Select your district name and provide old/new registration number and click next.",
        "Select the scheme name.",
        "Click next.",
      ],
    },
    documents: [
      "Aadhaar Card.",
      "Registration Card.",
      "Disease details by Vikas khand Adhikari / Surgeon / Chief medical officer/ Heath Officer.",
      "A approximate expenses details by related Medical officer.",
    ],
    faq: [
      "What is this scheme?",
      "What is the objective of the scheme?",
      "What are the benefits?",
      "Who can get the benefits?",
      "What is the required age to get the benefits?",
      "How long must a applicant be registered with the State Board before I am eligible for the scheme?",
      "What is the procedure to apply for the scheme?",
      "How can applicant register under Chhattisgarh Unorganized Workers State Social Security Board?",
      "How to apply for the scheme?",
    ],
  },
  {
    id: 2,
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
    id: 3,
    title: "Atal Mission For Rejuvenation And Urban Transformation",
    location: "Ministry Of Housing & Urban Affairs",
    description:
      "Providing basic services (e.g. water supply, sewerage, urban transport) to households and building amenities in cities which will improve the quality of life for all, especially the poor and the disadvantaged is a national priority.",
    tags: ["Urban", "Infrastructure", "Water Supply", "Affordable Housing"],
  },
  {
    id: 4,
    title: "Assam Arogya Nidhi Scheme",
    location: "Assam",
    description:
      "The scheme “Assam Arogya Nidhi Scheme” is a yearly Financial Assistance Scheme provided as reimbursement to members of families whose yearly income is less than ₹5.00 lakhs for treatment of serious diseases including accident cases.",
    tags: [
      "Accidental Case",
      "Diseases",
      "Financial Assistance",
      "Hospital",
      "Treatment",
    ],
  },
  {
    id: 5,
    title:
      "Theka Shramik Evan Hamaal Shramik Baahy Rogi Chikitsa Sahaayata Yojana",
    location: "Chhattisgarh",
    description:
      'Chhattisgarh State Government started a scheme "Theka Shramik Evan Hamaal Shramik Baahy Rogi Chikitsa Sahaayata Yojana" for unorganized worker on 11 March 2015.',
    tags: ["Financial Assistance", "Health", "Treatment"],
  },
  {
    id: 6,
    title: "Swachh Bharat Mission – Urban 2.0",
    location: "Ministry Of Housing & Urban Affairs",
    description:
      "A sanitation scheme for the construction of Individual Household Latrines (IHHL) for urban households.",
    tags: ["Sanitation", "Toilet"],
  },
  {
    id: 7,
    title:
      "Grant of Financial Assistance to Poor Scheduled Caste Pregnant & Lactating Women",
    location: "Puducherry",
    description:
      "The scheme “Grant of Financial Assistance to Poor Scheduled Caste Pregnant & Lactating Women” was introduced by the Adi Dravidar Welfare Department, Government of Puducherry. The objective of the scheme is to provide assistance for the well-being of Pregnant and Lactating mothers and their children.",
    tags: [
      "Child",
      "Financial Assistance",
      "Hospital",
      "Infant",
      "Pregnant",
      "Scheduled Caste",
      "Woman",
    ],
  },
  {
    id: 8,
    title: "Thayi Bhagya Scheme (comprehensive Maternal Healthcare)",
    location: "Karnataka",
    description:
      "The Thayi Bhagya Scheme, started by Karnataka Government (Health and Family Welfare) for pregnant women, provides free delivery services, medicines, and all other facilities from the point of admission to discharge for pregnant women belonging to BPL families, in registered private hospitals.",
    tags: [],
  },
  {
    id: 9,
    title: "Aswasakiranam",
    location: "Kerala",
    description:
      "Aswasakiranam Scheme envisages assisting the caregivers of physically and mentally disabled bedridden patients, who are their family members or relatives. All those who have been providing caregiving service to patients since 02/08/10 will be paid monthly assistance with retrospective effect.",
    tags: [
      "Financial Assistance",
      "Mentally Disabled",
      "Money Assistance",
      "Physically Disabled",
    ],
  },
  {
    id: 10,
    title: "Nirmaan Shramik Mrtyu Evan Divyaang Sahaayata Yojana",
    location: "Chhattisgarh",
    description:
      'Chhattisgarh State Government started "Nirmaan Shramik Mrtyu Evan Divyaang Sahaayata Yojana" for Building and other construction workers.',
    tags: ["Death Benefits", "Disability Benefits", "Financial Assistance"],
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
