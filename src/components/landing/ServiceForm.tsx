import React, { useState } from 'react';
import { BusinessType, ServiceItem, LeadFormData } from '@/types/landing';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface ServiceFormProps {
  businessType: BusinessType;
  services: ServiceItem[];
  primaryColor: string;
}

const ServiceForm: React.FC<ServiceFormProps> = ({
  businessType,
  services,
  primaryColor
}) => {
  const { submitLead, isSubmitting, result } = useLeadSubmission();

  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    zipCode: '',
    serviceNeeded: '',
    timeline: '',
    budgetRange: '',
    additionalNotes: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead(businessType, formData);
  };

  if (result?.success) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <CheckCircle size={64} className="mx-auto mb-4 text-green-500" />
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We've received your request and will call you back within 24 hours to discuss your project.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
    >
      {result?.error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
          <AlertCircle size={20} />
          <span>{result.error}</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(813) 555-1234"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="john@email.com"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="123 Main St"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="33601"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service Needed *
        </label>
        <select
          name="serviceNeeded"
          required
          value={formData.serviceNeeded}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a service...</option>
          {services.map((service, index) => (
            <option key={index} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          When do you need this done?
        </label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select timeline...</option>
          <option value="asap">As soon as possible</option>
          <option value="this_week">This week</option>
          <option value="this_month">This month</option>
          <option value="flexible">Flexible / Just getting quotes</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          name="additionalNotes"
          rows={4}
          value={formData.additionalNotes}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Tell us more about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 text-white font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ backgroundColor: primaryColor }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Submitting...
          </>
        ) : (
          'Get My Free Quote'
        )}
      </button>

      <p className="text-center text-sm text-gray-500">
        We'll call you back within 24 hours. No spam, guaranteed.
      </p>
    </form>
  );
};

export default ServiceForm;
