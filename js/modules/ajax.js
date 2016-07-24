export const fetchCustomer = (custSubId) => {
  return Q({
    name: 'Super Customer Agency, Inc.',
    id: 12345455,
    type: 'agency',
    imcOwner: {
      name: 'Daniel IMC',
      email: 'dannys@hubspot.com',
      role: 'Inbound Marketing Consultant',
      scheduleUrl: 'https://www.hubspot.com'
    },
    csmOwner: {
      name: 'Daniel CSM',
      email: 'dannys@hubspot.com',
      role: 'Customer Success Manager',
      scheduleUrl: 'https://www.hubspot.com'
    },
    technicalConsultant: {
      name: 'Daniel ETC',
      email: 'dannys@hubspot.com',
      role: 'Technical Consultant',
      scheduleUrl: 'https://www.hubspot.com'
    }
  })
};

