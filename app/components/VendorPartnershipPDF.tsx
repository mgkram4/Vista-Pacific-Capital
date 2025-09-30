import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { NewVendorPartnerData } from './NewVendorPartnerForm';

// Register fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/helvetica/v11/ fontes/helvetica-neue-regular.ttf' },
    { src: 'https://fonts.gstatic.com/s/helvetica/v11/fontes/helvetica-neue-bold.ttf', fontWeight: 'bold' },
  ]
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#333'
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#113E59',
  },
  subtitle: {
    fontSize: 10,
    color: '#555',
  },
  section: {
    marginBottom: 15,
    padding: 15,
    border: '1px solid #e2e8f0',
    borderRadius: 5,
    backgroundColor: '#f8fafc',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0D3853',
    marginBottom: 10,
    borderBottom: '1px solid #0EB5B2',
    paddingBottom: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
  },
  value: {
    width: '60%',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxLabel: {
    marginLeft: 5,
  }
});

interface VendorPartnershipPDFProps {
  formData: NewVendorPartnerData;
}

const VendorPartnershipPDF = ({ formData }: VendorPartnershipPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Vendor Partner Application</Text>
        <Text style={styles.subtitle}>Vista Pacific Capital</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Business Name:</Text>
          <Text style={styles.value}>{formData.businessName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Contact Person:</Text>
          <Text style={styles.value}>{formData.contactPersonFirstName} {formData.contactPersonLastName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Business Address:</Text>
          <Text style={styles.value}>{formData.businessAddress}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.value}>{formData.phoneNumber}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email Address:</Text>
          <Text style={styles.value}>{formData.emailAddress}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Website URL:</Text>
          <Text style={styles.value}>{formData.websiteUrl}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Years in Business:</Text>
          <Text style={styles.value}>{formData.yearsInBusiness}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Number of Sales Reps:</Text>
          <Text style={styles.value}>{formData.numberOfSalesReps}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Equipment Sales Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Types of Equipment Sold:</Text>
          <Text style={styles.value}>{formData.typesOfEquipmentSold}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>New or Used Equipment:</Text>
          <Text style={styles.value}>{formData.newOrUsedEquipment}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Average Ticket Price:</Text>
          <Text style={styles.value}>${formData.averageTicketLowPrice} - ${formData.averageTicketHighPrice}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Manufacturer/Reseller:</Text>
          <Text style={styles.value}>{formData.manufacturerInformation}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Average Lead Time:</Text>
          <Text style={styles.value}>{formData.averageLeadTime}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Terms of Payment:</Text>
          <Text style={styles.value}>{formData.termsOfPayment}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Financing Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Currently Offer Financing:</Text>
          <Text style={styles.value}>{formData.currentlyOfferFinancing}</Text>
        </View>
        {formData.currentlyOfferFinancing === 'Yes' && (
          <View style={styles.row}>
            <Text style={styles.label}>Financing Description:</Text>
            <Text style={styles.value}>{formData.financingDescription}</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vendor Interest Options</Text>
        <View style={styles.checkboxRow}>
            <Text>{formData.currentCustomerLookingForFinancing ? '[X]' : '[ ]'}</Text>
            <Text style={styles.checkboxLabel}>Current customer looking for financing</Text>
        </View>
        <View style={styles.checkboxRow}>
            <Text>{formData.lookingForInformationAboutPrograms ? '[X]' : '[ ]'}</Text>
            <Text style={styles.checkboxLabel}>Looking for information about financing programs</Text>
        </View>
        <View style={styles.checkboxRow}>
            <Text>{formData.wantToAddFinancingTabToWebsite ? '[X]' : '[ ]'}</Text>
            <Text style={styles.checkboxLabel}>Want to add financing tab to website</Text>
        </View>
        <View style={styles.checkboxRow}>
            <Text>{formData.lookingForCoBranding ? '[X]' : '[ ]'}</Text>
            <Text style={styles.checkboxLabel}>Looking for co-branding</Text>
        </View>
        <View style={styles.checkboxRow}>
            <Text>{formData.lookingForMeetingWithSalesStaff ? '[X]' : '[ ]'}</Text>
            <Text style={styles.checkboxLabel}>Looking for meeting with sales staff</Text>
        </View>
      </View>

      {formData.additionalInformation && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          <Text>{formData.additionalInformation}</Text>
        </View>
      )}
    </Page>
  </Document>
);

export default VendorPartnershipPDF;
