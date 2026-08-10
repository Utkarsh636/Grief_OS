import 'package:mobile/shared/models/task.dart';

final List<Task> initialTasks = [
  Task(
    id: 'death-certificate',
    title: 'Register the death certificate',
    titleHi: 'मृत्यु प्रमाण पत्र पंजीकृत करें',
    authority: 'Municipal Corporation',
    description:
        'The death certificate is the single document every other formality depends on. Apply at the municipal office of the area where the death was registered, or online through your state portal.',
    requiredDocuments: [
      'Hospital declaration',
      'Aadhaar of deceased',
      'Applicant ID proof',
    ],
    websiteLabel: 'crsorgi.gov.in',
    websiteUrl: 'https://crsorgi.gov.in',
    aiExplanation:
        'Apply within 21 days to avoid a late-registration fee. Ask for at least 8 certified copies — banks, insurers and pension offices each keep one and rarely return it.',
    priority: TaskPriority.urgent,
    timeline: 'Within 21 days',
    completed: true,
  ),
  Task(
    id: 'bank-accounts',
    title: 'Notify the bank and claim balances',
    titleHi: 'बैंक को सूचित करें और शेष राशि का दावा करें',
    authority: 'Bank branch',
    description:
        'Inform the home branch so the account is frozen against misuse, then file a claim as nominee or legal heir to release the balance.',
    requiredDocuments: [
      'Death certificate',
      'Passbook',
      'Nominee KYC',
      'Claim form',
    ],
    websiteLabel: 'Your bank branch',
    websiteUrl: 'https://www.rbi.org.in',
    aiExplanation:
        'If a nominee is registered, most banks settle within 15 days without a succession certificate. Without a nominee, balances above ₹1 lakh usually need a legal heir certificate.',
    priority: TaskPriority.urgent,
    timeline: 'Within 30 days',
    completed: true,
  ),
  Task(
    id: 'insurance-claim',
    title: 'File the life insurance claim',
    titleHi: 'जीवन बीमा दावा दायर करें',
    authority: 'Insurer / LIC',
    description:
        'Submit the claim intimation with the policy document and death certificate. The insurer will confirm the documents needed for your policy type.',
    requiredDocuments: [
      'Policy bond',
      'Death certificate',
      'Nominee bank details',
      'Claim form',
    ],
    websiteLabel: 'licindia.in',
    websiteUrl: 'https://licindia.in',
    aiExplanation:
        'IRDAI requires insurers to settle a clear claim within 30 days of receiving all papers. Keep the acknowledgement number — every follow-up will ask for it.',
    priority: TaskPriority.urgent,
    timeline: 'Within 90 days',
  ),
  Task(
    id: 'pension-transfer',
    title: 'Transfer the family pension',
    titleHi: 'पारिवारिक पेंशन स्थानांतरित करें',
    authority: 'Pension disbursing office',
    description:
        'Apply for the family pension to be transferred to the surviving spouse or dependant, along with any arrears due.',
    requiredDocuments: [
      'PPO copy',
      'Death certificate',
      'Joint bank passbook',
      'Form 14',
    ],
    websiteLabel: 'pensionersportal.gov.in',
    websiteUrl: 'https://pensionersportal.gov.in',
    aiExplanation:
        'If the pension account was held jointly with the spouse, the transfer is usually processed by the bank itself and no fresh application is needed.',
    priority: TaskPriority.important,
    timeline: 'Within 60 days',
  ),
  Task(
    id: 'property-mutation',
    title: 'Mutate property records',
    titleHi: 'संपत्ति रिकॉर्ड में नाम परिवर्तन',
    authority: 'Revenue department',
    description:
        'Update land and property records to reflect the legal heirs so that tax receipts and utility bills can be transferred.',
    requiredDocuments: [
      'Death certificate',
      'Legal heir certificate',
      'Property deed',
      'Tax receipt',
    ],
    websiteLabel: 'State revenue portal',
    websiteUrl: 'https://bhoomi.karnataka.gov.in',
    aiExplanation:
        'Mutation is not a transfer of ownership — it only updates the tax record. You will still need a will or succession certificate to establish title.',
    priority: TaskPriority.important,
    timeline: 'Within 6 months',
  ),
  Task(
    id: 'aadhaar-cancel',
    title: 'Surrender Aadhaar and PAN',
    titleHi: 'आधार और पैन सरेंडर करें',
    authority: 'UIDAI / Income Tax',
    description:
        'Deactivate the Aadhaar number and surrender the PAN card once all financial claims that reference them are settled.',
    requiredDocuments: [
      'Death certificate',
      'Aadhaar copy',
      'PAN card',
    ],
    websiteLabel: 'incometax.gov.in',
    websiteUrl: 'https://www.incometax.gov.in',
    aiExplanation:
        'Do this last. Surrendering PAN too early can stall insurance and bank claims that still need to be linked to it.',
    priority: TaskPriority.later,
    timeline: 'After claims settle',
  ),
  Task(
    id: 'utilities',
    title: 'Transfer utility connections',
    titleHi: 'उपयोगिता कनेक्शन स्थानांतरित करें',
    authority: 'Electricity / Gas / Water',
    description:
        'Move the electricity, gas and water connections into the name of the surviving family member to keep services uninterrupted.',
    requiredDocuments: [
      'Death certificate',
      'Latest bill',
      'Applicant ID proof',
    ],
    websiteLabel: 'Local utility board',
    websiteUrl: 'https://www.india.gov.in',
    aiExplanation:
        'Most boards accept an online name-change request with a small transfer fee. The security deposit carries over to the new holder.',
    priority: TaskPriority.later,
    timeline: 'No deadline',
  ),
];