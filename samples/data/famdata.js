﻿var simpleRombus = {
  cursorItem: 1,
  annotations: [],
  items: [
    { id: 1, title: "David Dalton", isAlive: false, groupTitle: "1", label: "David Dalton", dates: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4169e1" },
    { id: 2, parents: [1, 101, 102, 103], title: "Steven Lacombe", groupTitle: "2", label: "Steven Lacombe", dates: "2, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" },
    { id: 3, parents: [1, 101, 102, 103], title: "Nancy Smith", label: "Nancy Smith", dates: "3, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 4, parents: [2, 3], title: "Ann Smith", label: "Nancy Smith", dates: "4, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" }
  ]
};

var simpleFamily = {
  cursorItem: 1,
  annotations: [],
  items: [
    { id: 1, title: "David Dalton", label: "David Dalton", dates: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4169e1" },
    { id: 2, title: "Steven Lacombe", label: "Steven Lacombe", dates: "2, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" },
    { id: 3, title: "Ann Smith", label: "Ann Smith", dates: "3, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 4, parents: [1, 2], title: "Kelly Smith", label: "Ann Smith", dates: "6, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 5, parents: [2, 3], title: "Sally Smith", label: "Ann Smith", dates: "7, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" }
  ]
};


var simpleSandClock = {
  cursorItem: 5,
  annotations: [],
  items: [
    { id: 1, title: "David Dalton", label: "David Dalton", dates: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4169e1" },
    { id: 2, title: "Steven Lacombe", label: "Steven Lacombe", dates: "2, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" },
    { id: 3, parents: [1, 2], title: "Nancy Smith", label: "Nancy Smith", dates: "3, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 4, parents: [3], title: "Ann Smith", label: "Nancy Smith", dates: "4, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 5, parents: [3], title: "Ella Smith", label: "Nancy Smith", dates: "5, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" }
  ]
};

var wFamily = {
  cursorItem: 5,
  annotations: [],
  items: [
    { id: 10, title: "Roger Dalton", label: "David Dalton", dates: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4169e1" },
    { id: 11, title: "Bill Dalton", label: "David Dalton", dates: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4169e1" },
    { id: 1, parents: [11], title: "David Dalton", label: "David Dalton", dates: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4169e1" },
    { id: 2, title: "Steven Lacombe", label: "Steven Lacombe", dates: "2, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" },
    { id: 3, parents: [10], title: "Ann Smith", label: "Ann Smith", dates: "3, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 4, parents: [2], title: "Nancy Smith", label: "Nancy Smith", dates: "4, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 5, parents: [2], title: "Helly Smith", label: "Ann Smith", dates: "5, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 6, parents: [1, 4], title: "Kelly Smith", label: "Ann Smith", dates: "6, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 7, parents: [5, 3], title: "Sally Smith", label: "Ann Smith", dates: "7, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" }
  ]
};


var famdata = {
  cursorItem: 5,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 5,
      toItem: 81,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    },
    {
      annotationType: primitives.AnnotationType.Background,
      items: [81, 82, 83, 84, 85],
      borderColor: "#f8e5f9",
      fillColor: "#e5f9f8",
      lineWidth: 2,
      selectItems: true,
      lineType: primitives.LineType.Dotted
    },
    {
      annotationType: primitives.AnnotationType.Shape,
      items: [5],
      label: "<span class=\"badge bg-danger\">3</span> Cross Out shape annotation",
      labelSize: { width: 120, height: 50 }, //new primitives.Size(120, 50)
      shapeType: primitives.ShapeType.CrossOut,
      borderColor: primitives.Colors.Red,
      offset: { left: 6, top: 3, right: 6, bottom: 6 }, //new primitives.Thickness(6, 3, 6, 6)
      lineWidth: 2,
      selectItems: false,
      lineType: primitives.LineType.Dashed
    },
    {
      annotationType: primitives.AnnotationType.Shape,
      items: [81],
      label: "<span class=\"badge bg-danger\">4</span> Oval shape annotation",
      labelSize: new primitives.Size(100, 50), //new primitives.Size(100, 50)
      shapeType: primitives.ShapeType.Oval,
      borderColor: primitives.Colors.Red,
      offset: 14,
      lineWidth: 2,
      selectItems: true,
      lineType: primitives.LineType.Dashed,
      fillColor: null
    }
  ],
  items: [
    { id: 3, title: "James Holt 2", label: "James Holt", dates: "3, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    { id: 4, title: "Thomas Williams 2", label: "Thomas Williams", dates: "4, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 5, title: "David Kirby 2", label: "David Kirby", dates: "5, AGM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 6, title: "Lynette Maloney 2", label: "Lynette Maloney", dates: "6, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },
    { id: 7, parents: [1, 2], title: "Glen Zeigler", label: "Glen Zeigler", dates: "7, GM, Core Infrastructure Solutions", phone: "920-665-7222", email: "glenzeig@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#4b0082" },
    { id: 8, title: "Ione Gallegos", label: "Ione Gallegos", dates: "8, GM, Patterns & Practices", phone: "478-322-5539", email: "ionegall@name.com", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 10, parents: [3, 4], title: "Heather Simmons", label: "Heather Simmons", dates: "10, GM, Name Learning", phone: "620-368-3620", email: "heatsimm@name.com", avatar: "../images/photos/p.png", itemTitleColor: "#4b0082" },
    { id: 11, parents: [3, 4], title: "Steven Lacombe", label: "Steven Lacombe", dates: "11, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" },
    { id: 12, parents: [5, 6], title: "Nancy Smith", label: "Nancy Smith", dates: "12, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 13, parents: [5, 6], title: "Jean Kendall", label: "Jean Kendall", dates: "13, GM, DML Server Marketing", phone: "949-453-0415", email: "jeankend@name.com", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 14, parents: [5, 6], title: "Brad Whitt", label: "Brad Whitt", dates: "14, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082" },
    { id: 15, parents: [5, 6], title: "Sara Kemp", label: "Sara Kemp", dates: "15, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 16, title: "Brian Cruz", label: "Brian Cruz", dates: "16, GM, Systems Management Server", phone: "320-833-9024", email: "briacruz@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082" },
    { id: 17, title: "John Drake", label: "John Drake", dates: "17, GM, Software Management", phone: "469-644-8543", email: "johndrak@name.com", avatar: "../images/photos/j.png", itemTitleColor: "#4b0082" },
    { id: 18, parents: [8, 13], title: "Patrick Perry", label: "Patrick Perry", dates: "18, GM, Storage Platforms & Solutions", phone: "781-515-5949", email: "patrperr@name.com", avatar: "../images/photos/k.png", itemTitleColor: "#4b0082" },
    { id: 180, parents: [18], title: "Patrick Perry Jr.", label: "Patrick Perry Jr.", dates: "180, GM, Storage Platforms & Solutions", phone: "781-515-5949", email: "patrperr@name.com", avatar: "../images/photos/k.png", itemTitleColor: "#4b0082" },
    { id: 19, parents: [8, 13], title: "Mary Spencer", label: "Mary Spencer", dates: "19, GM, Manageability and Deployment", phone: "605-892-8662", email: "maryspen@name.com", avatar: "../images/photos/l.png", itemTitleColor: "#4b0082" },
    { id: 20, parents: [8, 13], title: "Thomas Dixon", label: "Thomas Dixon", dates: "20, GM, Operations Manager", phone: "651-249-4047", email: "thomdixo@name.com", avatar: "../images/photos/z.png", itemTitleColor: "#4b0082" },
    { id: 21, parents: [7, 12], title: "George Duong", label: "George Duong", dates: "21, Sr. VP, Software Server System", phone: "434-406-2189", email: "georduon@name.com", avatar: "../images/photos/x.png", itemTitleColor: "#4b0082" },
    { id: 22, parents: [11, 14], title: "Ralph Mercer", label: "Ralph Mercer", dates: "22, GM, DML Server Strategy", phone: "814-327-5895", email: "ralpmerc@name.com", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },
    { id: 23, parents: [11, 14], title: "Howard Williams", label: "Howard Williams", dates: "23, GM, User Experience", phone: "703-740-8612", email: "howawill@name.com", avatar: "../images/photos/v.png", itemTitleColor: "#4b0082" },
    { id: 24, parents: [11, 14], title: "Nathalie Escobedo", label: "Nathalie Escobedo", dates: "24, GM, DML Server Business Intelligence", phone: "504-555-8165", email: "nathesco@name.com", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 25, parents: [15, 16, 72, 90, 92, 94], title: "Ashley Rue", label: "Ashley Rue", dates: "25, VP, Developer Division", phone: "515-324-4969", email: "ashlrue@name.com", avatar: "../images/photos/n.png", itemTitleColor: "#4b0082" },
    { id: 26, parents: [15, 16], title: "Joan Whitham", label: "Joan Whitham", dates: "26, VP, .ORG Developer Platform Team", phone: "914-614-5020", email: "joanwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 27, parents: [15, 16], title: "Janella Cannon", label: "Janella Cannon", dates: "27, GM, Web and UI Development Platform", phone: "484-870-9064", email: "janecann@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4b0082" },
    { id: 28, parents: [15, 16], title: "Roger Greenlee", label: "Roger Greenlee", dates: "28, GM, Visual Studio", phone: "847-510-2148", email: "rogegree@name.com", avatar: "../images/photos/w.png", itemTitleColor: "#4b0082" },
    { id: 29, title: "Edna Garner", label: "Edna Garner", dates: "29, GM, Office System and Applications Developer Tools", phone: "620-873-1915", email: "ednagarn@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    { id: 30, parents: [17, 22], title: "Brent Holston", label: "Brent Holston", dates: "30, GM, Visual Studio Team System", phone: "925-386-2127", email: "brenhols@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 31, parents: [17, 22], title: "Mary Russ", label: "Mary Russ", dates: "31, GM, Visual Studio Language and Data Tools", phone: "443-271-9086", email: "maryruss@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 32, parents: [17, 22], title: "Stanley Weathers", label: "Stanley Weathers", dates: "32, Managing Dir., India Development Center", phone: "734-482-1633", email: "stanweat@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },
    { id: 33, parents: [18, 21], title: "Melvin White", label: "Melvin White", dates: "33, GM, Real Time Collaboration & Home Entertainment Products", phone: "785-631-8548", email: "melvwhit@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#4b0082" },
    { id: 34, parents: [23, 28], title: "Bonnie Wedel", label: "Bonnie Wedel", dates: "34, VP, Enterprise Access and Security Products Division (EASP)", phone: "412-265-2782", email: "bonnwede@name.com", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 35, parents: [23, 28], title: "Norman Dalton", label: "Norman Dalton", dates: "35, GM, Haifa R&D Center", phone: "316-334-6273", email: "normdalt@name.com", avatar: "../images/photos/o.png", itemTitleColor: "#4b0082" },
    { id: 36, parents: [23, 28], title: "Melissa Houser", label: "Melissa Houser", dates: "36, GM, Core File Solutions", phone: "630-887-1188", email: "melihous@name.com", avatar: "../images/photos/p.png", itemTitleColor: "#4b0082" },
    { id: 37, parents: [23, 28], title: "Abbie Lawson", label: "Abbie Lawson", dates: "37, GM, Software Server Solutions Group", phone: "530-322-6413", email: "abbilaws@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" },
    { id: 38, parents: [27, 29], title: "Ernest Putnam", label: "Ernest Putnam", dates: "38, GM, Connected Systems Division", phone: "626-831-0555", email: "erneputn@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 39, parents: [27, 29], title: "Robert Lemieux", label: "Robert Lemieux", dates: "39, GM, Connected Framework", phone: "662-787-2600", email: "robelemi@name.com", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 40, parents: [27, 29], title: "Arthur Wood", label: "Arthur Wood", dates: "40, GM, XML Enterprise Services", phone: "630-677-5265", email: "arthwood@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082" },
    { id: 390, parents: [27, 29], title: "Jonathan Hitt 2", label: "Jonathan Hitt 2", dates: "390, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 400, parents: [27, 29], title: "Celestina Crum 2", label: "Celestina Crum 2", dates: "400, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082" },
    { id: 41, title: "Jonathan Hitt", label: "Jonathan Hitt", dates: "41, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 42, parents: [65], title: "Celestina Crum", label: "Celestina Crum", dates: "42, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082" },
    { id: 43, parents: [30, 33], title: "Cindy Turner", label: "Cindy Turner", dates: "43, GM, Pricing", phone: "530-934-4295", email: "cindturn@name.com", avatar: "../images/photos/j.png", itemTitleColor: "#4b0082" },
    { id: 44, parents: [30, 33], title: "Victoria Sequeira", label: "Victoria Sequeira", dates: "44, GM, Worldwide Licensing", phone: "973-883-9137", email: "victsequ@name.com", avatar: "../images/photos/k.png", itemTitleColor: "#4b0082" },
    { id: 45, parents: [30, 33], title: "James Workman", label: "James Workman", dates: "45, GM, Name Financing", phone: "713-624-6200", email: "jamework@name.com", avatar: "../images/photos/l.png", itemTitleColor: "#4b0082" },
    { id: 46, parents: [32, 40], title: "Gil Adams", label: "Gil Adams", dates: "46, GM, WW Licensing Programs", phone: "313-630-8717", email: "giladam@name.com", avatar: "../images/photos/z.png", itemTitleColor: "#4b0082" },
    { id: 47, parents: [32, 40], title: "Norma Moore", label: "Norma Moore", dates: "47, GM, WW Licensing Solutions", phone: "334-496-5203", email: "normmoor@name.com", avatar: "../images/photos/x.png", itemTitleColor: "#4b0082" },
    { id: 48, parents: [35, 36], title: "Carlos Cardenas", label: "Carlos Cardenas", dates: "48, GM, Marketing and Readiness", phone: "775-999-3630", email: "carlcard@name.com", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },
    { id: 49, parents: [37, 39], title: "John Green", label: "John Green", dates: "49, Sr. VP, Software Core Operating System Division", phone: "937-475-8106", email: "johngree@name.com", avatar: "../images/photos/v.png", itemTitleColor: "#4b0082" },
    { id: 50, parents: [37, 39], title: "Richard Morales", label: "Richard Morales", dates: "50, VP, Core OS Development", phone: "650-729-6483", email: "richmora@name.com", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 51, parents: [37, 39], title: "Carolyn Jones", label: "Carolyn Jones", dates: "51, VP, Software Architecture and Kernel", phone: "903-859-0477", email: "carojone@name.com", avatar: "../images/photos/n.png", itemTitleColor: "#4b0082" },
    { id: 52, parents: [41, 42], title: "Charlotte White", label: "Charlotte White", dates: "52, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 53, parents: [41, 42, 60], title: "Elizabeth Zito", label: "Elizabeth Zito", dates: "53, GM, Software Device Experience Group", phone: "307-201-4036", email: "elizzito@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4b0082" },
    { id: 54, parents: [41, 42], title: "Edna Cavazos", label: "Edna Cavazos", dates: "54, GM, Software Device Experience", phone: "337-977-6357", email: "ednacava@name.com", avatar: "../images/photos/w.png", itemTitleColor: "#4b0082" },
    { id: 55, parents: [44, 48], title: "Debra Mayers", label: "Debra Mayers", dates: "55, GM, Core Networking and Collaboration", phone: "334-538-2338", email: "debrmaye@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    { id: 56, parents: [44, 48], title: "Gerald Castonguay", label: "Gerald Castonguay", dates: "56, GM, Cableless & Mobility", phone: "706-541-8969", email: "geracast@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 57, parents: [47, 49], title: "Kevin Carico", label: "Kevin Carico", dates: "57, GM, Network Infrastructure Servers", phone: "530-452-7085", email: "kevicari@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 58, parents: [50, 53], title: "Robert Morgan", label: "Robert Morgan", dates: "58, VP, Security Technology Unit (STU)", phone: "308-532-6548", email: "robemorg@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },
    { id: 59, parents: [50, 53], title: "Susan Haines", label: "Susan Haines", dates: "59, VP", phone: "937-738-0077", email: "susahain@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#4b0082" },
    { id: 60, title: "Susan Zito", label: "Susan Zito", dates: "60, VP", phone: "937-738-0077", email: "susahain@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#4b0082" },

    { id: 61, parents: [65], title: "Jonathan Hitt", label: "Jonathan Hitt", dates: "61, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 62, parents: [66], title: "Celestina Crum", label: "Celestina Crum", dates: "62, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082" },
    { id: 63, parents: [61, 62], title: "Carolyn Jones", label: "Carolyn Jones", dates: "63, VP, Software Architecture and Kernel", phone: "903-859-0477", email: "carojone@name.com", avatar: "../images/photos/n.png", itemTitleColor: "#4b0082" },
    { id: 64, parents: [61, 62], title: "Charlotte White", label: "Charlotte White", dates: "64, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 65, title: "Natalia Kudinova", label: "Natalia Kudinova", dates: "65, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },

    { id: 66, title: "Natalia Kudinova", label: "Natalia Kudinova", dates: "66, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 67, parents: [66], title: "Jonathan Hitt", label: "Jonathan Hitt", dates: "67, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 68, title: "Celestina Crum", label: "Celestina Crum", dates: "68, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082" },
    { id: 69, parents: [67, 68], title: "Carolyn Jones", label: "Carolyn Jones", dates: "69, VP, Software Architecture and Kernel", phone: "903-859-0477", email: "carojone@name.com", avatar: "../images/photos/n.png", itemTitleColor: "#4b0082" },
    { id: 70, parents: [67, 68], title: "Charlotte White", label: "Charlotte White", dates: "70, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 71, parents: [67, 68], title: "Charlotte White", label: "Charlotte White", dates: "71, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },

    { id: 73, parents: [38, 390, 400], title: "Test Node 1", label: "Test Node 1", dates: "73, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 74, parents: [38, 390, 400], title: "Test Node 2", label: "Test Node 2", dates: "74, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 75, parents: [38, 390, 400], title: "Test Node 3", label: "Test Node 3", dates: "75, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 76, parents: [38, 390, 400], title: "Test Node 4", label: "Test Node 4", dates: "76, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 77, parents: [19, 20], title: "Test Node 5", label: "Test Node 5", dates: "77, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 78, parents: [19, 20], title: "Test Node 6", label: "Test Node 6", dates: "78, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },

    { id: 81, parents: [3], title: "Ext Node 81", label: "Ext Node 81", dates: "81, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 82, parents: [81], title: "Ext Node 82", label: "Ext Node 82", dates: "82, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 85, parents: [81, 3], title: "Ext Node 85", label: "Ext Node 85", dates: "85, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 83, parents: [82, 3], title: "Ext Node 83", label: "Ext Node 83", dates: "83, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },
    { id: 84, parents: [82, 3], title: "Ext Node 84", label: "Ext Node 84", dates: "84, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },

    { id: 103, title: "James Holt", label: "James Holt", dates: "103, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    { id: 104, title: "Thomas Williams", label: "Thomas Williams", dates: "104, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 105, title: "David Kirby", label: "David Kirby", dates: "105, GM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 106, title: "Lynette Maloney", label: "Lynette Maloney", dates: "106, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },

    { id: 109, title: "Jose Clark", label: "Jose Clark", dates: "109, GM, TechNet and MSDN", phone: "401-218-3019", email: "joseclar@name.com", avatar: "../images/photos/o.png", itemTitleColor: "#4b0082" },

    { id: 112, parents: [103, 104, 3], title: "Nancy Smith", label: "Nancy Smith", dates: "112, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 113, parents: [103, 104], title: "Jean Kendall", label: "Jean Kendall", dates: "113, GM, DML Server Marketing", phone: "949-453-0415", email: "jeankend@name.com", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 114, parents: [103, 104], title: "Brad Whitt", label: "Brad Whitt", dates: "114, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082" },

    { id: 115, parents: [105, 106], title: "Sara Kemp", label: "Sara Kemp", dates: "115, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 116, parents: [105, 106], title: "Brian Cruz", label: "Brian Cruz", dates: "116, GM, Systems Management Server", phone: "320-833-9024", email: "briacruz@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082" },
    { id: 117, parents: [105, 106], title: "John Drake", label: "John Drake", dates: "117, GM, Software Management", phone: "469-644-8543", email: "johndrak@name.com", avatar: "../images/photos/j.png", itemTitleColor: "#4b0082" },

    { id: 118, title: "Patrick Perry", label: "Patrick Perry", dates: "118, GM, Storage Platforms & Solutions", phone: "781-515-5949", email: "patrperr@name.com", avatar: "../images/photos/k.png", itemTitleColor: "#4b0082" },

    { id: 119, parents: [109, 112], title: "Mary Spencer", label: "Mary Spencer", dates: "119, GM, Manageability and Deployment", phone: "605-892-8662", email: "maryspen@name.com", avatar: "../images/photos/l.png", itemTitleColor: "#4b0082" },
    { id: 120, parents: [109, 112], title: "Thomas Dixon", label: "Thomas Dixon", dates: "120, GM, Operations Manager", phone: "651-249-4047", email: "thomdixo@name.com", avatar: "../images/photos/z.png", itemTitleColor: "#4b0082" },

    { id: 121, parents: [114], title: "George Duong", label: "George Duong", dates: "121, Sr. VP, Software Server System", phone: "434-406-2189", email: "georduon@name.com", avatar: "../images/photos/x.png", itemTitleColor: "#4b0082" },
    { id: 122, parents: [114], title: "Ralph Mercer", label: "Ralph Mercer", dates: "122, GM, DML Server Strategy", phone: "814-327-5895", email: "ralpmerc@name.com", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },

    { id: 123, parents: [116], title: "Howard Williams", label: "Howard Williams", dates: "123, GM, User Experience", phone: "703-740-8612", email: "howawill@name.com", avatar: "../images/photos/v.png", itemTitleColor: "#4b0082" },

    { id: 124, parents: [117, 118], title: "Nathalie Escobedo", label: "Nathalie Escobedo", dates: "124, GM, DML Server Business Intelligence", phone: "504-555-8165", email: "nathesco@name.com", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },

    { id: 125, title: "Ashley Rue", label: "Ashley Rue", dates: "125, VP, Developer Division", phone: "515-324-4969", email: "ashlrue@name.com", avatar: "../images/photos/n.png", itemTitleColor: "#4b0082" },
    { id: 126, title: "Joan Whitham", label: "Joan Whitham", dates: "126, VP, .ORG Developer Platform Team", phone: "914-614-5020", email: "joanwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" },

    { id: 127, parents: [120], title: "Edna Garner", label: "Edna Garner", dates: "127, GM, Office System and Applications Developer Tools", phone: "620-873-1915", email: "ednagarn@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    { id: 128, title: "Roger Greenlee", label: "Roger Greenlee", dates: "128, GM, Visual Studio", phone: "847-510-2148", email: "rogegree@name.com", avatar: "../images/photos/w.png", itemTitleColor: "#4b0082" },
    { id: 129, title: "Janella Cannon", label: "Janella Cannon", dates: "129, GM, Web and UI Development Platform", phone: "484-870-9064", email: "janecann@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4b0082" },

    { id: 130, parents: [129, 128, 149], title: "Natalia Kudinova", label: "Natalia Kudinova", dates: "130, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 131, parents: [130, 132], title: "Mary Russ", label: "Mary Russ", dates: "131, GM, Visual Studio Language and Data Tools", phone: "443-271-9086", email: "maryruss@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 132, parents: [127], title: "Stanley Weathers", label: "Stanley Weathers", dates: "132, Managing Dir., India Development Center", phone: "734-482-1633", email: "stanweat@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },
    { id: 133, parents: [127], title: "Melvin White", label: "Melvin White", dates: "133, GM, Real Time Collaboration & Home Entertainment Products", phone: "785-631-8548", email: "melvwhit@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#4b0082" },
    { id: 134, parents: [133, 135, 43], title: "Bonnie Wedel", label: "Bonnie Wedel", dates: "134, VP, Enterprise Access and Security Products Division (EASP)", phone: "412-265-2782", email: "bonnwede@name.com", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 135, parents: [136, 137], title: "Norman Dalton", label: "Norman Dalton", dates: "135, GM, Haifa R&D Center", phone: "316-334-6273", email: "normdalt@name.com", avatar: "../images/photos/o.png", itemTitleColor: "#4b0082" },
    { id: 136, parents: [120], isActive: false, title: "Brent Holston", label: "Brent Holston", dates: "136, GM, Visual Studio Team System", phone: "925-386-2127", email: "brenhols@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 137, title: "Abbie Lawson", label: "Abbie Lawson", dates: "137, GM, Software Server Solutions Group", phone: "530-322-6413", email: "abbilaws@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" },

    { id: 138, parents: [122], title: "Ernest Putnam", label: "Ernest Putnam", dates: "138, GM, Connected Systems Division", phone: "626-831-0555", email: "erneputn@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 139, parents: [122, 123], title: "Robert Lemieux", label: "Robert Lemieux", dates: "139, GM, Connected Framework", phone: "662-787-2600", email: "robelemi@name.com", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },

    { id: 140, parents: [139], title: "Arthur Wood", label: "Arthur Wood", dates: "140, GM, XML Enterprise Services", phone: "630-677-5265", email: "arthwood@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082" },
    { id: 141, parents: [139], title: "Jonathan Hitt", label: "Jonathan Hitt", dates: "141, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },

    { id: 142, parents: [124], title: "Celestina Crum", label: "Celestina Crum", dates: "142, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082" },
    { id: 143, parents: [124], title: "Cindy Turner", label: "Cindy Turner", dates: "143, GM, Pricing", phone: "530-934-4295", email: "cindturn@name.com", avatar: "../images/photos/j.png", itemTitleColor: "#4b0082" },
    { id: 144, parents: [124], title: "Victoria Sequeira", label: "Victoria Sequeira", dates: "144, GM, Worldwide Licensing", phone: "973-883-9137", email: "victsequ@name.com", avatar: "../images/photos/k.png", itemTitleColor: "#4b0082" },

    { id: 145, parents: [144], title: "James Workman", label: "James Workman", dates: "145, GM, Name Financing", phone: "713-624-6200", email: "jamework@name.com", avatar: "../images/photos/l.png", itemTitleColor: "#4b0082" },
    { id: 146, parents: [144], title: "Gil Adams", label: "Gil Adams", dates: "146, GM, WW Licensing Programs", phone: "313-630-8717", email: "giladam@name.com", avatar: "../images/photos/z.png", itemTitleColor: "#4b0082" },

    { id: 147, parents: [149, 128, 129], title: "Norma Moore", label: "Norma Moore", dates: "147, GM, WW Licensing Solutions", phone: "334-496-5203", email: "normmoor@name.com", avatar: "../images/photos/x.png", itemTitleColor: "#4b0082" },
    { id: 148, parents: [146, 147], title: "Carlos Cardenas", label: "Carlos Cardenas", dates: "48, GM, Marketing and Readiness", phone: "775-999-3630", email: "carlcard@name.com", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },

    { id: 149, parents: [125, 126], title: "John Green", label: "John Green", dates: "149, Sr. VP, Software Core Operating System Division", phone: "937-475-8106", email: "johngree@name.com", avatar: "../images/photos/v.png", itemTitleColor: "#4b0082" }
  ]
};

var famdata2 = {
  cursorItem: 5,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 1,
      toItem: 15,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, title: "David Dalton", label: "David Dalton", dates: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#4169e1" },
    { id: 2, title: "Jeanna White", label: "Jeanna White", dates: "2, Co-Presidents, Platform Products & Services Division", phone: "505-791-1689", email: "jeanwhit@name.com", avatar: "../images/photos/w.png", itemTitleColor: "#4b0082" },
    { id: 4, title: "Thomas Williams", label: "Thomas Williams", dates: "4, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 5, title: "David Kirby", label: "David Kirby", dates: "5, GM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 6, title: "Lynette Maloney", label: "Lynette Maloney", dates: "6, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },

    { id: 11, title: "Steven Lacombe", label: "Steven Lacombe", dates: "11, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082", parents: [1, 2] },
    { id: 12, title: "Nancy Smith", label: "Nancy Smith", dates: "12, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082", parents: [1, 2] },

    { id: 13, title: "Jean Kendall", label: "Jean Kendall", dates: "13, GM, DML Server Marketing", phone: "949-453-0415", email: "jeankend@name.com", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082", parents: [4, 5] },
    { id: 14, title: "Brad Whitt", label: "Brad Whitt", dates: "14, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082", parents: [4, 5] },

    { id: 15, title: "Sara Kemp", label: "Sara Kemp", dates: "15, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082", parents: [5, 6] },
    { id: 16, title: "Brian Cruz", label: "Brian Cruz", dates: "16, GM, Systems Management Server", phone: "320-833-9024", email: "briacruz@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082", parents: [5, 6] },
    { id: 17, title: "John Drake", label: "John Drake", dates: "17, GM, Software Management", phone: "469-644-8543", email: "johndrak@name.com", avatar: "../images/photos/j.png", itemTitleColor: "#4b0082", parents: [5, 6] },

    { id: 18, title: "Thomas Dixon", label: "Thomas Dixon", dates: "18, GM, Operations Manager", phone: "651-249-4047", email: "thomdixo@name.com", avatar: "../images/photos/z.png", itemTitleColor: "#4b0082", parents: [11, 13] },
    { id: 19, title: "George Duong", label: "George Duong", dates: "19, Sr. VP, Software Server System", phone: "434-406-2189", email: "georduon@name.com", avatar: "../images/photos/x.png", itemTitleColor: "#4b0082", parents: [11, 13] },

    { id: 20, title: "Ralph Mercer", label: "Ralph Mercer", dates: "20, GM, DML Server Strategy", phone: "814-327-5895", email: "ralpmerc@name.com", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082", parents: [12, 15] },
    { id: 21, title: "Howard Williams", label: "Howard Williams", dates: "21, GM, User Experience", phone: "703-740-8612", email: "howawill@name.com", avatar: "../images/photos/v.png", itemTitleColor: "#4b0082", parents: [12, 15] },

    { id: 22, title: "Nathalie Escobedo", label: "Nathalie Escobedo", dates: "22, GM, DML Server Business Intelligence", phone: "504-555-8165", email: "nathesco@name.com", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082", parents: [14, 17] },
    { id: 23, title: "Ashley Rue", label: "Ashley Rue", dates: "23, VP, Developer Division", phone: "515-324-4969", email: "ashlrue@name.com", avatar: "../images/photos/n.png", itemTitleColor: "#4b0082", parents: [14, 17] }
  ]
};

var sideBySide = {
  cursorItem: 5,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 36,
      toItem: 16,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, title: "David Dalton", label: "David Dalton", dates: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#ff0000" },
    { id: 2, title: "Jeanna White", label: "Jeanna White", dates: "2, Co-Presidents, Platform Products & Services Division", phone: "505-791-1689", email: "jeanwhit@name.com", avatar: "../images/photos/w.png", itemTitleColor: "#ff0000" },
    { id: 3, title: "James Holt", label: "James Holt", dates: "3, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#ff0000" },
    { id: 4, title: "Thomas Williams", label: "Thomas Williams", dates: "4, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#ff0000" },
    { id: 5, title: "David Kirby", label: "David Kirby", dates: "5, GM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#ff0000" },
    { id: 6, title: "Lynette Maloney", label: "Lynette Maloney", dates: "6, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#ff0000" },
    { id: 7, title: "Glen Zeigler", label: "Glen Zeigler", dates: "7, GM, Core Infrastructure Solutions", phone: "920-665-7222", email: "glenzeig@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#ff0000" },
    { id: 8, title: "Ione Gallegos", label: "Ione Gallegos", dates: "8, GM, Patterns & Practices", phone: "478-322-5539", email: "ionegall@name.com", avatar: "../images/photos/i.png", itemTitleColor: "#ff0000" },

    { id: 9, title: "Jose Clark", label: "Jose Clark", dates: "9, GM, TechNet and MSDN", phone: "401-218-3019", email: "joseclar@name.com", avatar: "../images/photos/o.png", itemTitleColor: "#4b0082", parents: [1, 2] },
    { id: 10, title: "Heather Simmons", label: "Heather Simmons", dates: "10, GM, Name Learning", phone: "620-368-3620", email: "heatsimm@name.com", avatar: "../images/photos/p.png", itemTitleColor: "#4b0082", parents: [1, 2] },
    { id: 11, title: "Steven Lacombe", label: "Steven Lacombe", dates: "11, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082", parents: [1, 2] },

    { id: 12, title: "Nancy Smith", label: "Nancy Smith", dates: "12, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082", parents: [3, 4] },
    { id: 13, title: "Jean Kendall", label: "Jean Kendall", dates: "13, GM, DML Server Marketing", phone: "949-453-0415", email: "jeankend@name.com", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082", parents: [3, 4] },
    { id: 14, title: "Brad Whitt", label: "Brad Whitt", dates: "14, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082", parents: [3, 4, 5] },

    { id: 15, title: "Sara Kemp", label: "Sara Kemp", dates: "15, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082", parents: [5, 6] },
    { id: 16, title: "Brian Cruz", label: "Brian Cruz", dates: "16, GM, Systems Management Server", phone: "320-833-9024", email: "briacruz@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082", parents: [5, 6] },
    { id: 17, title: "John Drake", label: "John Drake", dates: "17, GM, Software Management", phone: "469-644-8543", email: "johndrak@name.com", avatar: "../images/photos/j.png", itemTitleColor: "#4b0082", parents: [5, 6] },

    { id: 18, title: "Patrick Perry", label: "Patrick Perry", dates: "18, GM, Storage Platforms & Solutions", phone: "781-515-5949", email: "patrperr@name.com", avatar: "../images/photos/k.png", itemTitleColor: "#4b0082", parents: [7, 8] },

    { id: 19, title: "Mary Spencer", label: "Mary Spencer", dates: "19, GM, Manageability and Deployment", phone: "605-892-8662", email: "maryspen@name.com", avatar: "../images/photos/l.png", itemTitleColor: "#4b0082", parents: [9, 12] },
    { id: 20, title: "Thomas Dixon", label: "Thomas Dixon", dates: "20, GM, Operations Manager", phone: "651-249-4047", email: "thomdixo@name.com", avatar: "../images/photos/z.png", itemTitleColor: "#4b0082", parents: [9, 12] },

    { id: 21, title: "George Duong", label: "George Duong", dates: "21, Sr. VP, Software Server System", phone: "434-406-2189", email: "georduon@name.com", avatar: "../images/photos/x.png", itemTitleColor: "#4b0082", parents: [14] },
    { id: 22, title: "Ralph Mercer", label: "Ralph Mercer", dates: "22, GM, DML Server Strategy", phone: "814-327-5895", email: "ralpmerc@name.com", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082", parents: [14] },

    { id: 23, title: "Howard Williams", label: "Howard Williams", dates: "23, GM, User Experience", phone: "703-740-8612", email: "howawill@name.com", avatar: "../images/photos/v.png", itemTitleColor: "#4b0082", parents: [16] },

    { id: 24, title: "Nathalie Escobedo", label: "Nathalie Escobedo", dates: "24, GM, DML Server Business Intelligence", phone: "504-555-8165", email: "nathesco@name.com", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082", parents: [17, 18] },

    { id: 25, title: "Ashley Rue", label: "Ashley Rue", dates: "25, Root item, it is placed close to its children.", phone: "515-324-4969", email: "ashlrue@name.com", avatar: "../images/photos/n.png", itemTitleColor: "#ff0000" },
    { id: 26, title: "Joan Whitham", label: "Joan Whitham", dates: "26, Root item, it is placed close to its children.", phone: "914-614-5020", email: "joanwhit@name.com", avatar: "../images/photos/m.png", itemTitleColor: "#ff0000" },

    { id: 27, title: "Edna Garner", label: "Edna Garner", dates: "27, GM, Office System and Applications Developer Tools", phone: "620-873-1915", email: "ednagarn@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082", parents: [20] },
    { id: 28, title: "Roger Greenlee", label: "Roger Greenlee", dates: "28, Root item, it is placed close to its children.", phone: "847-510-2148", email: "rogegree@name.com", avatar: "../images/photos/w.png", itemTitleColor: "#ff0000" },
    { id: 29, title: "Janella Cannon", label: "Janella Cannon", dates: "29, Root item, it is placed close to its children.", phone: "484-870-9064", email: "janecann@name.com", avatar: "../images/photos/q.png", itemTitleColor: "#ff0000" },

    { id: 30, title: "Natalia Kudinova", label: "Natalia Kudinova", dates: "65, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082", parents: [29, 28] },
    { id: 31, title: "Mary Russ", label: "Mary Russ", dates: "31, GM, Visual Studio Language and Data Tools", phone: "443-271-9086", email: "maryruss@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082", parents: [30, 32] },
    { id: 32, title: "Stanley Weathers", label: "Stanley Weathers", dates: "32, Managing Dir., India Development Center", phone: "734-482-1633", email: "stanweat@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082", parents: [27] },
    { id: 33, title: "Melvin White", label: "Melvin White", dates: "33, GM, Real Time Collaboration & Home Entertainment Products", phone: "785-631-8548", email: "melvwhit@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#4b0082", parents: [27] },
    { id: 34, title: "Bonnie Wedel", label: "Bonnie Wedel", dates: "34, VP, Enterprise Access and Security Products Division (EASP)", phone: "412-265-2782", email: "bonnwede@name.com", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082", parents: [33, 35] },
    { id: 35, title: "Norman Dalton", label: "Norman Dalton", dates: "35, GM, Haifa R&D Center", phone: "316-334-6273", email: "normdalt@name.com", avatar: "../images/photos/o.png", itemTitleColor: "#4b0082", parents: [36, 37] },
    { id: 36, title: "Brent Holston", label: "Brent Holston", dates: "36, GM, Visual Studio Team System", phone: "925-386-2127", email: "brenhols@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082", parents: [20] },
    { id: 37, title: "Abbie Lawson", label: "Abbie Lawson", dates: "37, Root item, it is placed close to its children.", phone: "530-322-6413", email: "abbilaws@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },

    { id: 38, title: "Ernest Putnam", label: "Ernest Putnam", dates: "38, GM, Connected Systems Division", phone: "626-831-0555", email: "erneputn@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082", parents: [22] },
    { id: 39, title: "Robert Lemieux", label: "Robert Lemieux", dates: "39, GM, Connected Framework", phone: "662-787-2600", email: "robelemi@name.com", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082", parents: [22, 23] },

    { id: 40, title: "Arthur Wood", label: "Arthur Wood", dates: "40, GM, XML Enterprise Services", phone: "630-677-5265", email: "arthwood@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082", parents: [39] },
    { id: 41, title: "Jonathan Hitt", label: "Jonathan Hitt", dates: "41, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082", parents: [39] },

    { id: 42, title: "Celestina Crum", label: "Celestina Crum", dates: "42, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082", parents: [24] },
    { id: 43, title: "Cindy Turner", label: "Cindy Turner", dates: "43, GM, Pricing", phone: "530-934-4295", email: "cindturn@name.com", avatar: "../images/photos/j.png", itemTitleColor: "#4b0082", parents: [24] },
    { id: 44, title: "Victoria Sequeira", label: "Victoria Sequeira", dates: "44, GM, Worldwide Licensing", phone: "973-883-9137", email: "victsequ@name.com", avatar: "../images/photos/k.png", itemTitleColor: "#4b0082", parents: [24] },

    { id: 45, title: "James Workman", label: "James Workman", dates: "45, GM, Name Financing", phone: "713-624-6200", email: "jamework@name.com", avatar: "../images/photos/l.png", itemTitleColor: "#4b0082", parents: [44] },
    { id: 46, title: "Gil Adams", label: "Gil Adams", dates: "46, GM, WW Licensing Programs", phone: "313-630-8717", email: "giladam@name.com", avatar: "../images/photos/z.png", itemTitleColor: "#4b0082", parents: [44] },

    { id: 47, title: "Norma Moore", label: "Norma Moore", dates: "47, GM, WW Licensing Solutions", phone: "334-496-5203", email: "normmoor@name.com", avatar: "../images/photos/x.png", itemTitleColor: "#4b0082", parents: [49] },
    { id: 48, title: "Carlos Cardenas", label: "Carlos Cardenas", dates: "48, GM, Marketing and Readiness", phone: "775-999-3630", email: "carlcard@name.com", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082", parents: [46, 47] },

    { id: 49, title: "John Green", label: "John Green", dates: "49, Sr. VP, Software Core Operating System Division", phone: "937-475-8106", email: "johngree@name.com", avatar: "../images/photos/v.png", itemTitleColor: "#4b0082", parents: [25, 26] }
  ]
};

var crossShape = {
  cursorItem: 2,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 2,
      toItem: 1,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, title: "1", dates: "1", avatar: "../images/photos/t.png" },
    { id: 2, title: "2", dates: "2", avatar: "../images/photos/t.png" },
    { id: 3, parents: [1, 101, 102, 103], title: "3", dates: "3", avatar: "../images/photos/t.png" },
    { id: 4, parents: [1, 101, 102, 103], title: "4", dates: "4", avatar: "../images/photos/t.png" },
    { id: 5, parents: [1, 101, 102, 103], title: "5", dates: "5", avatar: "../images/photos/t.png" },
    { id: 6, parents: [2], title: "6", dates: "6", avatar: "../images/photos/t.png" },
    { id: 7, parents: [2], title: "7", dates: "7", avatar: "../images/photos/t.png" },
    { id: 8, parents: [2], title: "8", dates: "8", avatar: "../images/photos/t.png" },
    { id: 9, parents: [3], title: "9", dates: "9", avatar: "../images/photos/t.png" },
    { id: 12, parents: [8], title: "12", dates: "12", avatar: "../images/photos/t.png" },
    { id: 10, parents: [4, 6], title: "10", dates: "10", avatar: "../images/photos/t.png" },
    { id: 11, parents: [5, 7], title: "11", dates: "11", avatar: "../images/photos/t.png" }
  ]
};

var rombusShape = {
  cursorItem: 1,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 3,
      toItem: 8,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, title: "1", dates: "1", avatar: "../images/photos/t.png" },
    { id: 2, parents: [1, 101, 102, 103], title: "2", dates: "2", avatar: "../images/photos/t.png" },
    { id: 3, parents: [1, 101, 102, 103], title: "3", dates: "3", avatar: "../images/photos/t.png" },
    { id: 4, parents: [2], title: "4", dates: "4", avatar: "../images/photos/t.png" },
    { id: 5, parents: [2], title: "5", dates: "5", avatar: "../images/photos/t.png" },
    { id: 6, parents: [3], title: "6", dates: "6", avatar: "../images/photos/t.png" },
    { id: 7, parents: [3], title: "7", dates: "7", avatar: "../images/photos/t.png" },
    { id: 8, parents: [4, 5], title: "8", dates: "8", avatar: "../images/photos/t.png" },
    { id: 9, parents: [6, 7], title: "9", dates: "9", avatar: "../images/photos/t.png" },
    { id: 10, parents: [8, 9], title: "10", dates: "10", avatar: "../images/photos/t.png" }
  ]
};

var sandClockShape = {
  cursorItem: 7,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 7,
      toItem: 10,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    },
    new primitives.BackgroundAnnotationConfig({
      items: [7],
      borderColor: "#f8e5f9",
      fillColor: "#e5f9f8",
      lineWidth: 2,
      selectItems: true,
      includeChildren: true,
      lineType: primitives.LineType.Dotted,
      offset: new primitives.Thickness(20, 20, 20, 20)
    })
  ],
  items: [
    { id: 1, title: "1", dates: "1", avatar: "../images/photos/t.png" },
    { id: 2, title: "2", dates: "2", avatar: "../images/photos/t.png" },
    { id: 3, title: "3", dates: "3", avatar: "../images/photos/t.png" },
    { id: 4, title: "4", dates: "4", avatar: "../images/photos/t.png" },
    { id: 5, parents: [1, 2], title: "5", dates: "5", avatar: "../images/photos/t.png" },
    { id: 6, parents: [3, 4], title: "6", dates: "6", avatar: "../images/photos/t.png" },
    { id: 7, parents: [5, 6], title: "7", dates: "7", avatar: "../images/photos/t.png" },
    { id: 8, parents: [7], title: "8", dates: "8", avatar: "../images/photos/t.png" },
    { id: 9, parents: [7], title: "9", dates: "9", avatar: "../images/photos/t.png" },
    { id: 10, parents: [8], title: "10", dates: "10", avatar: "../images/photos/t.png" },
    { id: 11, parents: [8], title: "11", dates: "11", avatar: "../images/photos/t.png" },
    { id: 12, parents: [9], title: "12", dates: "12", avatar: "../images/photos/t.png" },
    { id: 13, parents: [9], title: "13", dates: "13", avatar: "../images/photos/t.png" }
  ]
};

var skippedMembers = {
  cursorItem: 12,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 2,
      toItem: 13,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, title: "James Holt", label: "James Holt", dates: "1, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    { id: 101, title: "Brad Whitt", label: "Brad Whitt", dates: "101, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082" },
    { id: 2, parents: [1, 101], title: "Thomas Williams", label: "Thomas Williams", dates: "2, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 3, parents: [2], title: "David Kirby", label: "David Kirby", dates: "3, AGM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 11, title: "Lynette Maloney", label: "Lynette Maloney", dates: "11, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },
    { id: 111, title: "Sara Kemp", label: "Sara Kemp", dates: "111, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 12, parents: [11, 111], title: "Glen Zeigler", label: "Glen Zeigler", dates: "12, GM, Core Infrastructure Solutions", phone: "920-665-7222", email: "glenzeig@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#4b0082" },
    { id: 13, parents: [12], title: "Ione Gallegos", label: "Ione Gallegos", dates: "13, GM, Patterns & Practices", phone: "478-322-5539", email: "ionegall@name.com", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 20, parents: [1, 101, 2, 11, 111, 12], title: "Heather Simmons", label: "Heather Simmons", dates: "20, GM, Name Learning", phone: "620-368-3620", email: "heatsimm@name.com", avatar: "../images/photos/p.png", itemTitleColor: "#4b0082" },
    { id: 21, title: "Steven Lacombe", label: "Steven Lacombe", dates: "21, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" },
    { id: 121, title: "Brian Cruz", label: "Brian Cruz", dates: "121, GM, Systems Management Server", phone: "320-833-9024", email: "briacruz@name.com", avatar: "../images/photos/h.png", itemTitleColor: "#4b0082" },
    { id: 22, parents: [21, 121], title: "Nancy Smith", label: "Nancy Smith", dates: "22, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },
    { id: 23, parents: [22], title: "Jean Kendall", label: "Jean Kendall", dates: "23, GM, DML Server Marketing", phone: "949-453-0415", email: "jeankend@name.com", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 30, parents: [21, 121, 22, 11, 111, 12], title: "Brad Whitt", label: "Brad Whitt", dates: "30, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082" }
  ]
};

var horizontalChain = {
  cursorItem: 2,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 8,
      toItem: 10,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, title: "James Holt", label: "James Holt", dates: "1, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    { id: 2, title: "Brad Whitt", label: "Brad Whitt", dates: "2, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082" },
    { id: 3, title: "Thomas Williams", label: "Thomas Williams", dates: "3, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 4, title: "David Kirby", label: "David Kirby", dates: "4, AGM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 5, parents: [1, 2], title: "Lynette Maloney", label: "Lynette Maloney", dates: "5, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },
    { id: 6, parents: [1, 2], title: "Sara Kemp", label: "Sara Kemp", dates: "6, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 7, parents: [1, 2, 3], title: "Glen Zeigler", label: "Glen Zeigler", dates: "7, GM, Core Infrastructure Solutions", phone: "920-665-7222", email: "glenzeig@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#4b0082" },
    { id: 8, parents: [2, 3, 4], title: "Ione Gallegos", label: "Ione Gallegos", dates: "8, GM, Patterns & Practices", phone: "478-322-5539", email: "ionegall@name.com", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 9, parents: [3, 4], title: "Heather Simmons", label: "Heather Simmons", dates: "9, GM, Name Learning", phone: "620-368-3620", email: "heatsimm@name.com", avatar: "../images/photos/p.png", itemTitleColor: "#4b0082" },
    { id: 10, parents: [3, 4], title: "Steven Lacombe", label: "Steven Lacombe", dates: "10, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" }
  ]
};

var alignmentData = {
  cursorItem: 6,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 2,
      toItem: 5,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, title: "James Holt", label: "James Holt", dates: "1, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    { id: 2, parents: [1, 101, 102, 103], title: "Brad Whitt", label: "Brad Whitt", dates: "2, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082" },
    { id: 3, parents: [2], title: "Thomas Williams", label: "Thomas Williams", dates: "3, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 4, parents: [3], title: "David Kirby", label: "David Kirby", dates: "4, AGM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 5, parents: [4], title: "Lynette Maloney", label: "Lynette Maloney", dates: "5, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },
    { id: 6, parents: [1, 101, 102, 103], title: "Aligned Item", label: "Aligned Item", dates: "Use GroupBy Parents/Children option to align this item", phone: "620-368-3620", email: "heatsimm@name.com", avatar: "../images/photos/p.png", itemTitleColor: "#ff0000" },
    { id: 7, parents: [5, 6], title: "Steven Lacombe", label: "Steven Lacombe", dates: "10, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" }
  ]
};

var famdataCascade = {
  cursorItem: 10,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 10,
      toItem: 5,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 10, title: "James", label: "James", dates: "Parent of: Steven, Heather, Ione, Glen & Sara", phone: "262-215-7998", email: "jameholt@name.com", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    { id: 11, title: "Brad", label: "Brad", dates: "Parent of: Heather, Ione, Glen & Sara", phone: "502-528-6379", email: "bradwhit@name.com", avatar: "../images/photos/f.png", itemTitleColor: "#4b0082" },
    { id: 12, title: "Thomas", label: "Thomas", dates: "Parent of: Ione, Glen & Sara", phone: "904-547-5342", email: "thomwill@name.com", avatar: "../images/photos/r.png", itemTitleColor: "#4b0082" },
    { id: 13, title: "David", label: "David", dates: "Parent of: Glen & Sara", phone: "614-395-7238", email: "davikirb@name.com", avatar: "../images/photos/t.png", itemTitleColor: "#4b0082" },
    { id: 14, title: "Lynette", label: "Lynette", dates: "Parent of Sara", phone: "540-822-3862", email: "lynemalo@name.com", avatar: "../images/photos/y.png", itemTitleColor: "#4b0082" },
    { id: 1, parents: [10, 11, 12, 13, 14], title: "Sara", label: "Sara", dates: "Child of James, Brad, Thomas, David & Lynette", phone: "918-257-4218", email: "sarakemp@name.com", avatar: "../images/photos/g.png", itemTitleColor: "#4b0082" },
    { id: 2, parents: [10, 11, 12, 13], title: "Glen", label: "Glen", dates: "Child of James, Brad, Thomas & David", phone: "920-665-7222", email: "glenzeig@name.com", avatar: "../images/photos/u.png", itemTitleColor: "#4b0082" },
    { id: 3, parents: [10, 11, 12], title: "Ione", label: "Ione", dates: "Child of James, Brad & Thomas", phone: "478-322-5539", email: "ionegall@name.com", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 4, parents: [10, 11], title: "Heather", label: "Heather", dates: "Child of James & Brad", phone: "620-368-3620", email: "heatsimm@name.com", avatar: "../images/photos/p.png", itemTitleColor: "#4b0082" },
    { id: 5, parents: [10], title: "Steven", label: "Steven", dates: "Child of James", phone: "805-800-7397", email: "stevlaco@name.com", avatar: "../images/photos/a.png", itemTitleColor: "#4b0082" }
  ]
};

var famdataWorld = {
  cursorItem: 2,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 2,
      toItem: 31,
      label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
      labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, parents: [], title: "S1", label: "S1", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 3, parents: [2], title: "3", label: "3", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 4, parents: [3, 11, 26, 38, 42], title: "4", label: "4", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 5, parents: [4], title: "5", label: "5", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 6, parents: [5], title: "6", label: "6", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 7, parents: [6], title: "7", label: "7", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 8, parents: [], title: "S8", label: "S8", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 9, parents: [8], title: "9", label: "9", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 10, parents: [1, 101, 102, 103], title: "10", label: "10", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 11, parents: [10], title: "11", label: "11", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 12, parents: [10], title: "12", label: "12", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 13, parents: [10], title: "13", label: "13", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 14, parents: [10], title: "14", label: "14", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 15, parents: [14, 16, 20, 39], title: "15", label: "15", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 16, parents: [2], title: "16", label: "16", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 17, parents: [2], title: "17", label: "17", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 18, parents: [2], title: "18", label: "18", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 19, parents: [13, 17, 36, 40], title: "19", label: "19", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 20, parents: [19], title: "20", label: "20", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 21, parents: [19], title: "21", label: "21", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 22, parents: [21], title: "22", label: "22", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 23, parents: [5, 22, 32], title: "23", label: "23", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 24, parents: [], title: "S24", label: "S24", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 25, parents: [24], title: "25", label: "25", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 26, parents: [25], title: "26", label: "26", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 27, parents: [24], title: "27", label: "27", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 28, parents: [19], title: "28", label: "28", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 29, parents: [12, 18, 28, 34, 41], title: "29", label: "29", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 30, parents: [], title: "S30", label: "S30", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 31, parents: [30], title: "31", label: "31", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 32, parents: [31], title: "32", label: "32", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 33, parents: [30], title: "33", label: "33", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 34, parents: [33], title: "34", label: "34", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 35, parents: [], title: "35", label: "35", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 36, parents: [35], title: "36", label: "36", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 37, parents: [], title: "37", label: "37", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 38, parents: [37, 43], title: "38", label: "38", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 39, parents: [37], title: "39", label: "39", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 40, parents: [37, 43], title: "40", label: "40", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 41, parents: [37], title: "41", label: "41", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 42, parents: [9], title: "42", label: "42", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 43, parents: [35], title: "43", label: "43", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 1001, parents: [2, 9, 10, 15, 23, 25, 31], title: "T1", label: "T1", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 1008, parents: [7], title: "T8", label: "T8", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 1024, parents: [23, 27], title: "T24", label: "T24", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 1030, parents: [29, 33], title: "T30", label: "T30", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 1035, parents: [5, 22], title: "T35", label: "T35", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" }
  ]
};

var linkedListLoopTest = {
  cursorItem: 2,
  annotations: [
    { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [2], title: "12%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 2, toItems: [3], title: "23%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 3, toItems: [4], title: "34%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 4, toItems: [5], title: "34%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [5], title: "15%" }
  ],
  items: [
    { id: 1, parents: [5,2], title: "1", label: "1", dates: "1", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },
    { id: 2, parents: [1,3], title: "2", label: "2", dates: "2", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 3, parents: [2,4], title: "3", label: "3", dates: "3", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },
    { id: 4, parents: [3,5], title: "4", label: "4", dates: "4", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 5, parents: [4,1], title: "5", label: "5", dates: "5", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
  ]
};

var intelinkedNodes = {
  cursorItem: 1,
  annotations: [
  ],
  items: [
    { id: 1, parents: [1,2,3,4,5], title: "1", label: "1", dates: "1", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },
    { id: 2, parents: [1,2,3,4,5], title: "2", label: "2", dates: "2", avatar: "../images/photos/b.png", itemTitleColor: "#4b0082" },
    { id: 3, parents: [1,2,3,4,5], title: "3", label: "3", dates: "3", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },
    { id: 4, parents: [1,2,3,4,5], title: "4", label: "4", dates: "4", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 5, parents: [1,2,3,4,5], title: "5", label: "5", dates: "5", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },
  ]
};

var famdataCharless2 = {
  cursorItem: 2,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 3,
      toItem: 4,
      label: "<span class=\"badge bg-danger\">1</span>",
      labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, title: "Philip of Castile", label: "Philip of Castile", dates: "1, 1478-1506", avatar: "../images/photos/p.png", itemTitleColor: "#ff0000" },
    { id: 2, title: "Joanna of Castile", label: "Joanna of Castile", dates: "2, 1479-1555", avatar: "../images/photos/j.png", itemTitleColor: "#4b0082" },
    { id: 3, parents: [1, 2], title: "Charles V", label: "Charles V", dates: "3, Holy Roman Emperor", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 4, title: "Isabella of Portugal", label: "Isabella of Portugal", dates: "4, 1503 - 39", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 5, parents: [3, 4], title: "Philip II of Spain", label: "Philip II of Spain", dates: "5, ", avatar: "../images/photos/p.png", itemTitleColor: "#4b0082" },
    { id: 6, parents: [3, 4], title: "Maria of Spain", label: "Maria of Spain", dates: "6, 1528 - 1603", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 7, parents: [1, 2], title: "Ferdinand I", label: "Ferdinand I", dates: "7, Holy Roman Emperor, 1503-64", avatar: "../images/photos/h.png", itemTitleColor: "#ff0000" },
    { id: 8, parents: [1, 2], title: "Isabella of Burgundy", label: "Isabella of Burgundy", dates: "8, 1501-26", avatar: "../images/photos/h.png", itemTitleColor: "#ff0000" },
    { id: 9, title: "Anna of Bohemia and Hungary", label: "Anna of Bohemia and Hungary", dates: "9, 1503-47", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 10, title: "Christian II of Denmark", label: "Christian II of Denmark", dates: "10, 1481-1559", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 11, parents: [7, 9], title: "Maximilian II", label: "Maximilian II", dates: "11, Holy Roman Emperor 1527-76", avatar: "../images/photos/h.png", itemTitleColor: "#ff0000" },
    { id: 12, parents: [7, 9], title: "Charles II of Austria", label: "Charles II of Austria", dates: "12, 1540-90", avatar: "../images/photos/h.png", itemTitleColor: "#ff0000" },
    { id: 13, parents: [7, 9], title: "Anne of Habsburg", label: "Anne of Habsburg", dates: "13, 1528-90", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },
    { id: 14, title: "Albert V", label: "Albert V", dates: "14, Duke of Bavaria 1528-79", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 15, parents: [8, 10], title: "Christina of Denmark", label: "Christina of Denmark", dates: "13, 1522-90", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },
    { id: 16, title: "Francis I", label: "Francis I", dates: "14, Duke of Lorraine 1517-45", avatar: "../images/photos/i.png", itemTitleColor: "#4b0082" },
    { id: 17, parents: [6, 11], title: "Anne of Austria", label: "Anne of Austria", dates: "17, 1549-80", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 18, parents: [5, 17], title: "Philip III of Spain", label: "Philip III of Spain", dates: "18, 1578-1621", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 19, parents: [13, 14], title: "Maria Anna of Bavaria", label: "Maria Anna of Bavaria", dates: "19, 1551-1608", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 20, parents: [13, 14], title: "William V, Duke of Bavaria", label: "William V, Duke of Bavaria", dates: "20, 1548-1626", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 21, parents: [15, 16], title: "Renata of Lorraine", label: "Renata of Lorraine", dates: "21, 1544-1602", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 22, parents: [12, 19], title: "Margarita of Austria", label: "Margarita of Austria", dates: "22, 1584-1611", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 23, parents: [12, 19], title: "Ferdinand II", label: "Ferdinand II", dates: "23, Holy Roman Emperor 1578-1637", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 24, parents: [20, 21], title: "Maria Anna of Bavaria", label: "Maria Anna of Bavaria", dates: "24, 1574-1616", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 25, parents: [18, 22], title: "Philip IV of Spain", label: "Philip IV of Spain", dates: "25, 1605-65", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 26, parents: [18, 22], title: "Maria Anna of Spain", label: "Maria Anna of Spain", dates: "26, 1606-46", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 27, parents: [23, 24], title: "Ferdinand III", label: "Ferdinand III", dates: "27, 1608-57", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 28, parents: [26, 27], title: "Manata of Austria", label: "Manata of Austria", dates: "28, 1634-96", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 29, parents: [25, 28], title: "Charles II of Spain", label: "Charles II of Spain", dates: "29, 1661-1700", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" }
  ]
};

var matrixLayout = {
  cursorItem: 1,
  enableMatrixLayout: true,
  //normalItemsInterval: 30,
  //dotItemsInterval: 20,
  //lineItemsInterval: 10,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 10,
      toItem: 24,
      label: "<span class=\"badge bg-danger\">1</span>",
      labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, parents: [], title: "1", label: "1", dates: "", avatar: "../images/photos/z.png", itemTitleColor: "#ff0000" },
    { id: 101, parents: [], title: "1", label: "1", dates: "", avatar: "../images/photos/z.png", itemTitleColor: "#ff0000" },
    { id: 102, parents: [], title: "1", label: "1", dates: "", avatar: "../images/photos/z.png", itemTitleColor: "#ff0000" },
    { id: 103, parents: [], title: "1", label: "1", dates: "", avatar: "../images/photos/z.png", itemTitleColor: "#ff0000" },
    { id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", dates: "", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },
    { id: 3, parents: [1, 101, 102, 103], title: "3", label: "3", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#ff0000" },
    { id: 4, parents: [1, 101, 102, 103], title: "4", label: "4", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 5, parents: [1, 101, 102, 103], title: "5", label: "5", dates: "", avatar: "../images/photos/d.png", itemTitleColor: "#ff0000" },
    { id: 6, parents: [1, 101, 102, 103], title: "6", label: "6", dates: "", avatar: "../images/photos/e.png", itemTitleColor: "#ff0000" },
    { id: 7, parents: [1, 101, 102, 103], title: "7", label: "7", dates: "", avatar: "../images/photos/f.png", itemTitleColor: "#ff0000" },
    { id: 8, parents: [1, 101, 102, 103], title: "8", label: "8", dates: "", avatar: "../images/photos/g.png", itemTitleColor: "#ff0000" },
    { id: 9, parents: [1, 101, 102, 103], title: "9", label: "9", dates: "", avatar: "../images/photos/h.png", itemTitleColor: "#ff0000" },
    { id: 10, parents: [1, 101, 102, 103], title: "10", label: "10", dates: "", avatar: "../images/photos/i.png", itemTitleColor: "#ff0000" },
    { id: 11, parents: [1, 101, 102, 103], title: "11", label: "11", dates: "", avatar: "../images/photos/j.png", itemTitleColor: "#ff0000" },
    { id: 12, parents: [1, 101, 102, 103], title: "12", label: "12", dates: "", avatar: "../images/photos/k.png", itemTitleColor: "#ff0000" },
    { id: 13, parents: [1, 101, 102, 103], title: "13", label: "13", dates: "", avatar: "../images/photos/l.png", itemTitleColor: "#ff0000" },
    { id: 14, parents: [1, 101, 102, 103], title: "14", label: "14", dates: "", avatar: "../images/photos/m.png", itemTitleColor: "#ff0000" },
    { id: 15, parents: [1, 101, 102, 103], title: "15", label: "15", dates: "", avatar: "../images/photos/n.png", itemTitleColor: "#ff0000" },
    { id: 16, parents: [1, 101, 102, 103], title: "16", label: "16", dates: "", avatar: "../images/photos/o.png", itemTitleColor: "#ff0000" },
    { id: 17, parents: [1, 101, 102, 103], title: "17", label: "17", dates: "", avatar: "../images/photos/p.png", itemTitleColor: "#ff0000" },
    { id: 18, parents: [1, 101, 102, 103], title: "18", label: "18", dates: "", avatar: "../images/photos/q.png", itemTitleColor: "#ff0000" },
    { id: 19, parents: [1, 101, 102, 103], title: "19", label: "19", dates: "", avatar: "../images/photos/r.png", itemTitleColor: "#ff0000" },
    { id: 20, parents: [1, 101, 102, 103], title: "20", label: "20", dates: "", avatar: "../images/photos/s.png", itemTitleColor: "#4b0082" },

    { id: 21, parents: [5], title: "D1", label: "D1", dates: "", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 22, parents: [5], title: "D2", label: "D2", dates: "", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 23, parents: [5], title: "D3", label: "D3", dates: "", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 24, parents: [5], title: "D4", label: "D4", dates: "", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 25, parents: [5], title: "D5", label: "D5", dates: "", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },
    { id: 26, parents: [5], title: "D6", label: "D6", dates: "", avatar: "../images/photos/d.png", itemTitleColor: "#4b0082" },

    { id: 27, parents: [26], title: "D61", label: "D61", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },
    { id: 28, parents: [26], addToMatrix: false, title: "D62", label: "D62", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },
    { id: 29, parents: [26], title: "D63", label: "D63", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },
    { id: 30, parents: [26], title: "D64", label: "D64", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },
    { id: 31, parents: [26, 9], title: "D65", label: "D65", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#4b0082" },
    { id: 32, parents: [27, 28, 29, 30], title: "E1", label: "E1", dates: "", avatar: "../images/photos/e.png", itemTitleColor: "#4b0082" },

    { id: 33, parents: [2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], title: "M1", label: "M1", dates: "", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" }
  ]
};

var matrixNLabelsLayout = {
  cursorItem: 1,
  enableMatrixLayout: true,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 10,
      toItem: 24,
      label: "<span class=\"badge bg-danger\">1</span>",
      labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, parents: [], title: "1", label: "1", dates: "", avatar: "../images/photos/z.png", itemTitleColor: "#ff0000" },
    { id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", dates: "", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },
    { id: 3, parents: [1, 101, 102, 103], title: "3", label: "3", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#ff0000" },
    { id: 4, parents: [1, 101, 102, 103], title: "4", label: "4", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 6, parents: [1, 101, 102, 103], title: "6", label: "6", dates: "", avatar: "../images/photos/e.png", itemTitleColor: "#ff0000" },
    { id: 7, parents: [1, 101, 102, 103], title: "7", label: "7", dates: "", avatar: "../images/photos/f.png", itemTitleColor: "#ff0000" },
    { id: 8, parents: [1, 101, 102, 103], title: "8", label: "8", dates: "", avatar: "../images/photos/g.png", itemTitleColor: "#ff0000" },
    { id: 10, parents: [1, 101, 102, 103], title: "10", label: "10", dates: "", avatar: "../images/photos/i.png", itemTitleColor: "#ff0000" },
    { id: 11, parents: [1, 101, 102, 103], title: "11", label: "11", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#ff0000" },
    { id: 12, parents: [11], title: "12", label: "12", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#ff0000" },
    { id: 33, parents: [2, 3, 4, 6, 7, 8, 10, 12], title: "33", label: "33", dates: "", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" }
  ],
  annotations: [
    { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [2], title: "1->2" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [3], title: "1->3" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [4], title: "1->4" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [6], title: "1->6" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [7], title: "1->7" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [8], title: "1->8" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [10], title: "1->10" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [2], title: "33->2" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [3], title: "33->3" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [4], title: "33->4" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [6], title: "33->6" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [7], title: "33->7" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [8], title: "33->8" }
  ]
};

var matrixGroups = {
  cursorItem: 1,
  enableMatrixLayout: true,
  minimumMatrixSize: 3,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 10,
      toItem: 24,
      label: "<span class=\"badge bg-danger\">1</span>",
      labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, parents: [], title: "1", label: "1", dates: "", avatar: "../images/photos/z.png", itemTitleColor: "#ff0000" },
    { id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", dates: "", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },
    { id: 3, parents: [1, 101, 102, 103], title: "3", label: "3", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#ff0000" },
    { id: 4, parents: [1, 101, 102, 103], title: "4", label: "4", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 5, parents: [1, 101, 102, 103], title: "5", label: "5", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 6, parents: [1, 101, 102, 103], matrixId: "2", title: "6", label: "6", dates: "", avatar: "../images/photos/e.png", itemTitleColor: "#ff0000" },
    { id: 7, parents: [1, 101, 102, 103], matrixId: "2", title: "7", label: "7", dates: "", avatar: "../images/photos/f.png", itemTitleColor: "#ff0000" },
    { id: 8, parents: [1, 101, 102, 103], matrixId: "2", title: "8", label: "8", dates: "", avatar: "../images/photos/g.png", itemTitleColor: "#ff0000" },
    { id: 9, parents: [1, 101, 102, 103], matrixId: "2", title: "10", label: "10", dates: "", avatar: "../images/photos/i.png", itemTitleColor: "#ff0000" },
    { id: 10, parents: [1, 101, 102, 103], addToMatrix: false,  title: "10", label: "10", dates: "", avatar: "../images/photos/i.png", itemTitleColor: "#ff0000" },
    { id: 33, parents: [2, 3, 4, 5, 6, 7, 8, 9, 10], title: "33", label: "33", dates: "", avatar: "../images/photos/m.png", itemTitleColor: "#4b0082" }
  ]
};

var labelsSelection = {
  cursorItem: 1,
  enableMatrixLayout: false,
  pageFitMode: primitives.PageFitMode.SelectionOnly,
  neighboursSelectionMode: primitives.NeighboursSelectionMode.ParentsAndChildren,
  annotations: [
    {
      annotationType: primitives.AnnotationType.Connector,
      fromItem: 10,
      toItem: 24,
      label: "<span class=\"badge bg-danger\">1</span>",
      labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
      connectorShapeType: primitives.ConnectorShapeType.OneWay,
      color: primitives.Colors.Red,
      offset: 5,
      lineWidth: 2,
      lineType: primitives.LineType.Dashed
    }
  ],
  items: [
    { id: 1, parents: [], title: "1", label: "1", dates: "", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },
    { id: 2, parents: [], title: "2", label: "2", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#ff0000" },
    { id: 3, parents: [], title: "3", label: "3", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 4, parents: [], title: "4", label: "4", dates: "", avatar: "../images/photos/d.png", itemTitleColor: "#ff0000" },
    { id: 5, parents: [], title: "5", label: "5", dates: "", avatar: "../images/photos/e.png", itemTitleColor: "#ff0000" },


    { id: 6, parents: [1, 2, 3], title: "6", label: "6", dates: "", avatar: "../images/photos/f.png", itemTitleColor: "#ff0000" },
    { id: 7, parents: [3, 4, 5], title: "7", label: "7", dates: "", avatar: "../images/photos/g.png", itemTitleColor: "#ff0000" },

    { id: 8, parents: [6, 7], title: "8", label: "8", dates: "", avatar: "../images/photos/h.png", itemTitleColor: "#ff0000" },

    { id: 9, parents: [8], title: "9", label: "9", dates: "", avatar: "../images/photos/a.png", itemTitleColor: "#ff0000" },
    { id: 10, parents: [8], title: "10", label: "10", dates: "", avatar: "../images/photos/b.png", itemTitleColor: "#ff0000" },
    { id: 11, parents: [8], title: "11", label: "11", dates: "", avatar: "../images/photos/c.png", itemTitleColor: "#ff0000" },
    { id: 12, parents: [8], title: "12", label: "12", dates: "", avatar: "../images/photos/e.png", itemTitleColor: "#ff0000" },
    { id: 13, parents: [8], title: "13", label: "13", dates: "", avatar: "../images/photos/f.png", itemTitleColor: "#ff0000" },
  ],
  annotations: [
    { annotationType: primitives.AnnotationType.Label, fromItem: 6, toItems: [1], title: "48.26%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 6, toItems: [2], title: "24.92%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 6, toItems: [3], title: "26.81%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 7, toItems: [3], title: "37.19%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 7, toItems: [4], title: "69.98%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 7, toItems: [5], title: "0.82%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 8, toItems: [6], title: "98.14%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 8, toItems: [7], title: "1.85%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 9, toItems: [8], title: "100%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 10, toItems: [8], title: "100%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 11, toItems: [8], title: "100%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 12, toItems: [8], title: "100%" },
    { annotationType: primitives.AnnotationType.Label, fromItem: 13, toItems: [8], title: "100%" }
  ]
};


var dataSetNames = {
  "2 Cross Relations": "crossShape",
  "3 Cross Relations": "famdata2",
  "Rombus": "rombusShape",
  "Sand Clock": "sandClockShape",
  "Mix": "famdata",
  "Side By Side": "sideBySide",
  "Skipped Members": "skippedMembers",
  "Horizontal Chain": "horizontalChain",
  "Alignment": "alignmentData",
  "Cascade": "famdataCascade",
  "World Dynamics": "famdataWorld",
  "Inter Marriage": "famdataCharless2",
  "Simple Rombus": "simpleRombus",
  "Simple Sand Clock": "simpleSandClock",
  "W Shape Family": "wFamily",
  "Simple Family": "simpleFamily",
  "Matrix": "matrixLayout",
  "Linked List Loop": "linkedListLoopTest",
  "Inter Linked": "intelinkedNodes",
  "Matrix & Labels": "matrixNLabelsLayout",
  "Matrix Groups": "matrixGroups",
  "Labels Selection": "labelsSelection"
};

var defaultDataSetName = dataSetNames["Mix"];
