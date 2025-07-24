'use client';

import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { VendorPartnershipData } from './VendorPartnershipForm';

// Register a font to avoid errors with special characters
Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-ttf@0.1.1/fonts/OpenSans-Regular.ttf', fontWeight: 'normal' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-ttf@0.1.1/fonts/OpenSans-Bold.ttf', fontWeight: 'bold' },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Open Sans',
    fontSize: 12,
    color: '#333',
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0D3853',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#0EB5B2',
  },
  text: {
    marginBottom: 5,
    lineHeight: 1.5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  listItem: {
    marginLeft: 15,
    marginBottom: 3,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 15,
    marginTop: 15,
  }
});

interface VendorPartnershipPDFProps {
  formData: VendorPartnershipData;
}

const VendorPartnershipPDF = ({ formData }: VendorPartnershipPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Vendor Partnership Inquiry</Text>
        <Text style={styles.text}>Thank you for your interest in partnering with Vista Pacific Capital. Here's a summary of your inquiry:</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.subHeading}>Company Information</Text>
        <Text style={styles.text}><Text style={styles.label}>Company Name:</Text> {formData.companyName}</Text>
        <Text style={styles.text}><Text style={styles.label}>Contact Name:</Text> {formData.contactName}</Text>
        <Text style={styles.text}><Text style={styles.label}>Email:</Text> {formData.email}</Text>
        <Text style={styles.text}><Text style={styles.label}>Phone:</Text> {formData.phone}</Text>
        {formData.website && <Text style={styles.text}><Text style={styles.label}>Website:</Text> {formData.website}</Text>}
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.subHeading}>Equipment and Business Details</Text>
        {formData.equipmentTypes.length > 0 && (
          <View style={styles.text}>
            <Text style={styles.label}>Equipment Types You Sell:</Text>
            {formData.equipmentTypes.map((type: string, index: number) => (
              <Text key={index} style={styles.listItem}>- {type}</Text>
            ))}
          </View>
        )}
        <Text style={styles.text}><Text style={styles.label}>Average Deal Size:</Text> {formData.averageDealSize}</Text>
        <Text style={styles.text}><Text style={styles.label}>Monthly Deals Volume:</Text> {formData.monthlyDeals}</Text>
        {formData.yearsInBusiness && <Text style={styles.text}><Text style={styles.label}>Years in Business:</Text> {formData.yearsInBusiness}</Text>}
      </View>

      <View style={styles.divider} />

      {(formData.currentFinancingPartners || formData.partnershipGoals || formData.additionalInfo) && (
        <View style={styles.section}>
          <Text style={styles.subHeading}>Additional Information</Text>
          {formData.currentFinancingPartners && <Text style={styles.text}><Text style={styles.label}>Current Financing Partners:</Text> {formData.currentFinancingPartners}</Text>}
          {formData.partnershipGoals && <Text style={styles.text}><Text style={styles.label}>Partnership Goals:</Text> {formData.partnershipGoals}</Text>}
          {formData.additionalInfo && <Text style={styles.text}><Text style={styles.label}>Additional Info:</Text> {formData.additionalInfo}</Text>}
        </View>
      )}
    </Page>
  </Document>
);

export default VendorPartnershipPDF; 