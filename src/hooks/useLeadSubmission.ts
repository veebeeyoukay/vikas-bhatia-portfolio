import { useState } from 'react';
import { BusinessType, LeadFormData, LeadSubmissionResult } from '@/types/landing';

export function useLeadSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<LeadSubmissionResult | null>(null);

  const submitLead = async (businessType: BusinessType, formData: LeadFormData) => {
    setIsSubmitting(true);
    setResult(null);

    try {
      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);

      const response = await fetch('/.netlify/functions/lead-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          business_type: businessType,
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          address: formData.address || null,
          zip_code: formData.zipCode || null,
          service_needed: formData.serviceNeeded,
          service_details: {
            additional_notes: formData.additionalNotes
          },
          timeline: formData.timeline || null,
          budget_range: formData.budgetRange || null,
          source: 'web',
          utm_source: urlParams.get('utm_source'),
          utm_medium: urlParams.get('utm_medium'),
          utm_campaign: urlParams.get('utm_campaign'),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit lead');
      }

      setResult({ success: true, leadId: data.lead_id });
    } catch (error: any) {
      setResult({
        success: false,
        error: error.message || 'Failed to submit. Please try again or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitLead, isSubmitting, result };
}
