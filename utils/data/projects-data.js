export const projectsData = [
    
        {
  id: 1,
  name: 'YOLOv11-based Real-Time Smoke & Fire Detection',
  description: `
An intelligent system for detecting smoke and fire in real-time using a surveillance camera and a desktop interface. The solution utilizes the YOLOv11 deep learning model, trained on 144,000+ images, and achieves high accuracy even in low-light and noisy environments.

Detection follows a 3-step pipeline:

1. Color Pattern Analysis:  
Initial frame is scanned for potential fire/smoke color patterns like light gray or orange.

2. Color Conversion:  
Detected regions are converted to bright red/orange tones to highlight possible risk zones.

3. YOLOv11 Inference:  
The processed frame is passed to the trained model to confirm detection and return bounding boxes with precise location data.

The system includes live video display, report logging, and multi-platform alerting (Telegram, WhatsApp, SMS).`,
  
  tools: [
    'Python', 'OpenCV', 'YOLOv11', 'C# (WinForms)', 
    'Telegram Bot API', 'Twilio API', 'Textbelt', 
    'Roboflow', 'Google Colab'
  ],
  role: 'Computer Vision AI  & Backend Developer',
  code: '',
  demo: ''
},
{
  id: 2,
  name: 'Employee & Payroll Management System',
  description: `
A comprehensive desktop application for managing employees, salaries, and dynamic payroll grading.\n
The system automatically tracks yearly salary increments, promotions, and handles leave records, absences, and disciplinary actions.\n
\n
Key features include:\n
- Dynamic salary ladder with automatic grade upgrades based on service time.\n
- Complete employee records with registration dates and salary history.\n
- Absence and leave tracking, warnings, and bonuses management.\n
- Multi-user access with role-based permissions and secure login for each user.\n
- Detailed reports and activity logs for administrative auditing.\n
- Periodic notifications and built-in backup functionality.\n
\n
The system was designed and implemented as a university-level academic project and received an **"Excellent"** grade.
`,
  tools: [
    'C# (WinForms)',
    'SQL Server',
    'SSMS',
    'Entity Framework'
  ],
  role: 'Full Stack Developer – Desktop Application',
  code: '',
  demo: ''
},
    
   {
  
  id: 3,
  name: 'Smart Delivery Manager',
  description: `
A professional mobile application tailored for store owners and social media vendors to manage customer orders and delivery workflows efficiently.\n
\n
When a customer places an order, the seller records the order details and forwards it to a partnered delivery company.\n
\n
Key Features:\n
- Order Management: Add, update, and track customer orders.\n
- Real-time Delivery Tracking: Monitor each delivery status from dispatch to completion.\n
- Delivery Partner Integration: Automatically send order info to delivery agents.\n
- Wallet System: Track earnings, completed orders, and payment balance.\n
- Notifications: Instant push updates for order status.\n
- Order History: Full archive with search and filter options.\n
- User Access Levels: Role-based access for admins, store managers, and delivery personnel.\n
- Optional: Customer receipt generation and delivery rating system.\n
`,
  tools: [
    'Flutter',
    'Firebase',
    'Cloud Firestore',
    'Google Maps API',
    'Firebase Auth',
    'Firebase Cloud Messaging',
    'More ...',
  ],
  role: 'Cross-Platform Mobile Developer',
  code: '',
  demo: ''
},
    {
    id: 4,
    name: 'Automation Tools & Script Development',
    description: "Developed over 10 advanced Python scripts and automation tools to streamline digital tasks, including social media management, cybersecurity, and bulk operations. Designed tools for electronic armies (E-Armies) capable of managing 100+ accounts simultaneously, performing tasks such as automated commenting, liking, reporting violating accounts, and mass following. Additionally, created daily task automation tools and security utilities for detecting malicious links and online threats ... more",
    tools: ['Python', 'Telegram Bot API', 'Selenium', 'BeautifulSoup', 
        'PyAutoGUI', 'Requests', 'Asyncio', 'Multi-threading', 
        'OpenCV (for CAPTCHA)',
        'Pyrogram (Telegram automation)', 'Twint (Twitter scraping)',
        'SQLite'],
    code: '',
    demo: '',
    role: 'Automation & Scripting Developer',
}
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },