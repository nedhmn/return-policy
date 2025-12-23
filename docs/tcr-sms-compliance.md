# TCR SMS Compliance Checklist

This document tracks the changes made to comply with TCR (The Campaign Registry) requirements for SMS messaging services.

**Date:** December 2025
**Company:** Return Policy
**SMS Use Case:** SMS verification for workers (property management)

---

## A. Privacy Policy Requirements

| #   | Requirement                                                                        | Status | Location                                              |
| --- | ---------------------------------------------------------------------------------- | ------ | ----------------------------------------------------- |
| 1   | Privacy policy clearly states how customer info is collected, utilized, and shared | ✅ Done | `app/privacy/page.tsx` - Multiple sections cover this |
| 2   | Privacy Policy is easy to find and linked from all pages (footer)                  | ✅ Done | `components/footer.tsx` - Links in Legal section      |
| 3   | Policy is on a single dedicated page                                               | ✅ Done | `/privacy` route                                      |
| 4   | Sharing section includes SMS non-sharing statement                                 | ✅ Done | `app/privacy/page.tsx` - "SMS Communication" section  |

**Statement added:**
> "Mobile Opt-in, SMS Consent, and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes."

---

## B. SMS Opt-In Language (Contact Forms)

| #   | Requirement                                                                | Status | Notes                                                                                                                |
| --- | -------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| 1   | Optional checkbox with consent statement on forms collecting phone numbers | ⚠️ N/A  | Phone number input was **removed** from the Partner form. No forms currently collect phone numbers for SMS purposes. |

**Note:** The Partner form (`components/partner-form.tsx`) previously collected phone numbers but this field was removed. If phone collection is added in the future, an opt-in checkbox with the following language will be required:

> "By checking this box, you agree to receive SMS messages from Return Policy related to [use case]. You may reply STOP to opt out at any time. Reply HELP to +1 (778) 742-5675 for assistance. Messages and data rates may apply. Message frequency will vary. Learn more on our privacy policy page and Terms & Conditions."

---

## C. SMS Terms & Conditions

All 8 required points have been added to `app/terms/page.tsx` under the "SMS Terms" section:

| #   | Requirement                      | Status | Content Added                                                                                                                                                      |
| --- | -------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | SMS Consent Communication        | ✅ Done | "The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes."                        |
| 2   | Types of SMS Communications      | ✅ Done | Verification codes for worker authentication, Account security notifications. Example message included.                                                            |
| 3   | Message Frequency                | ✅ Done | "Message frequency may vary. You may receive SMS messages when verification is required for account access or security purposes."                                  |
| 4   | Potential Fees for SMS Messaging | ✅ Done | "Standard message and data rates may apply, depending on your carrier's pricing plan. These fees may vary if the message is sent domestically or internationally." |
| 5   | Opt-In Method                    | ✅ Done | Via account registration or enabling SMS verification in account settings.                                                                                         |
| 6   | Opt-Out Method                   | ✅ Done | Reply "STOP" or contact help@returnpolicystays.com                                                                                                                 |
| 7   | Help                             | ✅ Done | Reply "HELP" or contact +1 (778) 742-5675 / help@returnpolicystays.com                                                                                             |
| 8   | Standard Messaging Disclosures   | ✅ Done | All 4 disclosure points included with links to Privacy Policy and Terms pages.                                                                                     |

---

## Files Modified

| File                              | Changes                                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `app/privacy/page.tsx`            | Added "SMS Communication" section with non-sharing statement. Changed age requirement from 16 to 18 (to match Terms). |
| `app/terms/page.tsx`              | Added complete "SMS Terms" section with all 8 required subsections.                                                   |
| `components/partner-form.tsx`     | Removed phone number input field.                                                                                     |
| `app/actions/partner-contact.tsx` | Removed phone from type definition and email template.                                                                |

---

## Additional Notes

- **Age consistency:** Both Privacy Policy and Terms now state 18+ age requirement.
- **Contact info used:**
  - Phone: +1 (778) 742-5675
  - Email: help@returnpolicystays.com
- **Footer links:** Privacy Policy and Terms are linked in the footer on all pages.

---

## Compliance Summary

| Section                        | Status                            |
| ------------------------------ | --------------------------------- |
| A. Privacy Policy Requirements | ✅ Complete                        |
| B. SMS Opt-In Language         | ⚠️ N/A (no phone collection forms) |
| C. SMS Terms & Conditions      | ✅ Complete                        |

**Overall Status: ✅ Compliant** (assuming no forms collect phone numbers for SMS)
