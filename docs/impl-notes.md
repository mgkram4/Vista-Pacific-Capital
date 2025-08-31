# Vista Pacific Capital Website Updates - Implementation Notes

## Repository Structure Analysis

### App Directory Structure
- **Framework**: Next.js 14 with App Router
- **Layout**: `/app/layout.tsx` with global navigation and footer
- **Navigation**: `/app/components/navbar.tsx` with dropdown menus
- **Footer**: `/app/components/footer.tsx` - currently minimal

### Existing Routes Inventory
- `/tools` - Not found, but tools links exist in navbar
- `/faq` - Exists with accordion-style FAQ
- `/tax-calculator` - Exists with Section179Calculator component
- `/equipment-finacing` (typo) - Exists, needs redirect to `/equipment-financing`
- `/equipment-financing` - Exists with proper structure
- `/about-us` - Exists but needs restructuring
- `/partner-program` - Exists
- `/vendor` - Exists
- `/vendor-form` - Exists

### Form Handlers
- API routes in `/app/api/`:
  - `submit-finance-application`
  - `submit-quote`
  - `submit-vendor-partnership`
  - `upload-documents`

### SEO & Metadata
- Metadata configuration in `/app/lib/metadata/`
- Structured data in navbar component

### Input Components
- Currency formatting needed for tax calculator
- Form components exist in `/app/components/`

## Changes Required

### 1. Navigation Updates
- Update navbar dropdown labels and structure
- Remove Contact from Tools dropdown
- Update Equipment Financing dropdown order

### 2. Tax Calculator Enhancement
- Add fixed `$` prefix to input
- Implement thousands separators
- Maintain pure numeric state

### 3. FAQ Page Conversion
- Remove accordion functionality
- Convert to static Q&A blocks
- Update page title

### 4. Vendor Partner Form Rebuild
- Complete form replacement with new field structure
- Implement on two pages: `/vendor-form` and `/partner-program`

### 5. About Us Restructure
- Create 5 dropdown pages
- Move content from existing pages
- Update navigation structure

### 6. Equipment Financing Updates
- Fix slug typo with redirect
- Update content and remove $750k references
- Move Industries content

### 7. Template Updates
- Reduce hero image height
- Simplify footer
- Update finance application form titles

## Implementation Status
- [x] Repository analysis complete
- [ ] Tools tab changes
- [ ] Partner/Vendor program changes
- [ ] About Us restructure
- [ ] Equipment Financing updates
- [ ] Template and form updates
- [ ] Global cleanup and SEO
- [ ] Accessibility and performance
