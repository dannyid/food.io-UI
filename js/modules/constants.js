// ALL UNITS IN MICROGRAMS
export const dailyRequirements = [
  {
    name: 'Vitamin A',
    nutrNo: '320',
    amount: {
      recommended: 900,
      max: 3000
    },
    sortOrder: 7420
  },
  {
    name: 'Vitamin C',
    nutrNo: '401',
    amount: {
      recommended: 90 * 1000,
      max: 2000 * 1000
    },
    sortOrder: 6300
  },
  {
    name: 'Vitamin D',
    nutrNo: '328',
    amount: {
      recommended: 15,
      max: 100
    },
    sortOrder: 8700
  },
  {
    name: 'Vitamin E',
    nutrNo: '323',
    amount: {
      recommended: 15 * 1000,
      max: 1000 * 1000
    },
    sortOrder: 7900
  },
  {
    name: 'Vitamin K',
    nutrNo: '430',
    amount: {
      recommended: 120
    },
    sortOrder: 8800
  },
  {
    name: 'Thiamin',
    nutrNo: '404',
    amount: {
      recommended: 1.2 * 1000
    },
    sortOrder: 6400
  },
  {
    name: 'Riboflavin',
    nutrNo: '405',
    amount: {
      recommended: 1.3 * 1000
    },
    sortOrder: 6500
  },
  {
    name: 'Naicin',
    nutrNo: '406',
    amount: {
      recommended: 16 * 1000,
      max: 35 * 1000
    },
    sortOrder: 6600
  },
  {
    name: 'Vitamin B6',
    nutrNo: '415',
    amount: {
      recommended: 1.3 * 1000,
      max: 100 * 1000
    },
    sortOrder: 6800
  },
  {
    name: 'Folate',
    nutrNo: '417',
    amount: {
      recommended: 400,
      max: 1000
    },
    sortOrder: 6900
  },
  {
    name: 'Vitamin B12',
    nutrNo: '418',
    amount: {
      recommended: 2.4
    },
    sortOrder: 7300
  },
  {
    name: 'Pantothenic Acid',
    nutrNo: '410',
    amount: {
      recommended: 5 * 1000
    },
    sortOrder: 6700
  },
  {
    name: 'Biotin',
    nutrNo: undefined,
    amount: {
      recommended: 30
    },
    sortOrder: null
  },
  {
    name: 'Choline',
    nutrNo: '421',
    amount: {
      recommended: 550 * 1000,
      max: 3500 * 1000
    },
    sortOrder: 7220
  },
  {
    name: 'Calcium',
    nutrNo: '301',
    amount: {
      recommended: 1000 * 1000,
      max: 2500 * 1000
    },
    sortOrder: 5300
  },
  {
    name: 'Chromium',
    nutrNo: undefined,
    amount: {
      recommended: 35
    },
    sortOrder: null
  },
  {
    name: 'Copper',
    nutrNo: '312',
    amount: {
      recommended: 900,
      max: 10000
    },
    sortOrder: 6000
  },
  {
    name: 'Fluoride',
    nutrNo: '313',
    amount: {
      recommended: 4 * 1000,
      max: 10 * 1000
    },
    sortOrder: 6240
  },
  {
    name: 'Iodine',
    nutrNo: undefined,
    amount: {
      recommended: 150,
      max: 1100
    },
    sortOrder: null
  },
  {
    name: 'Iron',
    nutrNo: '303',
    amount: {
      recommended: 8 * 1000,
      max: 45 * 1000
    },
    sortOrder: 5400
  },
  {
    name: 'Magnesium',
    nutrNo: '304',
    amount: {
      recommended: 420 * 1000,
      max: 350 * 1000 // WTF??? How can this be higher? Look at recommended intakes PDF
    },
    sortOrder: 5500
  },
  {
    name: 'Manganese',
    nutrNo: '315',
    amount: {
      recommended: 2.3 * 1000,
      max: 11 * 1000
    },
    sortOrder: 6100
  },
  {
    name: 'Molybdenum',
    nutrNo: undefined,
    amount: {
      recommended: 45,
      max: 2000
    },
    sortOrder: null
  },
  {
    name: 'Phosphorus',
    nutrNo: '305',
    amount: {
      recommended: 700 * 1000,
      max: 4000 * 1000
    },
    sortOrder: 5600
  },
  {
    name: 'Selenium',
    nutrNo: '317',
    amount: {
      recommended: 55,
      max: 400
    },
    sortOrder: 6200
  },
  {
    name: 'Zinc',
    nutrNo: '309',
    amount: {
      recommended: 11 * 1000,
      max: 40 * 1000
    },
    sortOrder: 5900
  },
  {
    name: 'Potassium',
    nutrNo: '306',
    amount: {
      recommended: 4.7 * 1000 * 1000
    },
    sortOrder: 5700
  },
  {
    name: 'Sodium',
    nutrNo: '307',
    amount: {
      recommended: 1.5 * 1000 * 1000,
      max: 2.3 * 1000 * 1000
    },
    sortOrder: 5800
  },
  {
    name: 'Chloride',
    nutrNo: undefined,
    amount: {
      recommended: 2.3 * 1000 * 1000,
      max: 3.6 * 1000 * 1000
    },
    sortOrder: null
  },
  {
    name: 'Water',
    nutrNo: '255',
    amount: {
      recommended: 3700 * 1000 * 1000
    },
    sortOrder: 100
  },
  {
    name: 'Carbohydrate',
    nutrNo: '205',
    amount: {
      min: 45 * 1000 * 1000,
      recommended: 130 * 1000 * 1000, // ??? HOW
      max: 65 * 1000 * 1000
    },
    sortOrder: 1100
  },
  {
    name: 'Fiber',
    nutrNo: '291',
    amount: {
      recommended: 38 * 1000 * 1000
    },
    sortOrder: 1200
  },
  {
    name: 'Fat',
    nutrNo: '204',
    amount: {
      min: 20 * 1000 * 1000,
      max: 35 * 1000 * 1000
    },
    sortOrder: 800
  },
  {
    name: 'Linoleic Acid',
    nutrNo: '675',
    amount: {
      min: 5 * 1000 * 1000,
      recommended: 17 * 1000 * 1000, // HOW??
      max: 10 * 1000 * 1000
    },
    sortOrder: 13200
  },
  {
    name: 'α-Linolenic Acid',
    nutrNo: '851',
    amount: {
      min: 0.6,
      recommended: 1.6 * 1000 * 1000, // HOW??
      max: 1.2 * 1000 * 1000
    },
    sortOrder: 14000
  },
  {
    name: 'Protein',
    nutrNo: '203',
    amount: {
      min: 10 * 1000 * 1000,
      recommended: 56 * 1000 * 1000, // HOW??
      max: 35 * 1000 * 1000
    },
    sortOrder: 600
  },
  {
    name: 'Boron',
    nutrNo: undefined,
    amount: {
      max: 20 * 1000
    },
    sortOrder: null
  },
  {
    name: 'Nickel',
    nutrNo: undefined,
    amount: {
      max: 1 * 1000
    },
    sortOrder: null
  },
  {
    name: 'Vanadium',
    nutrNo: undefined,
    amount: {
      max: 1.8 * 1000
    },
    sortOrder: null
  }
];
