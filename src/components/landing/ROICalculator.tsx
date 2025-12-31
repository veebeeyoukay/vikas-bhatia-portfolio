import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export interface ROIData {
  investment: {
    min: number;
    max: number;
  };
  monthlySavings?: {
    min: number;
    max: number;
    type: 'dollars' | 'hours';
  };
  annualSavings?: {
    min: number;
    max: number;
    type: 'dollars' | 'hours';
  };
  paybackMonths?: {
    min: number;
    max: number;
  };
  valueProps: string[];
}

interface ROICalculatorProps {
  serviceName: string;
  data: ROIData;
  primaryColor: string;
  compact?: boolean;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({
  serviceName,
  data,
  primaryColor,
  compact = false,
}) => {
  const [showDetails, setShowDetails] = useState(!compact);

  const avgInvestment = (data.investment.min + data.investment.max) / 2;
  const avgMonthlySavings = data.monthlySavings
    ? (data.monthlySavings.min + data.monthlySavings.max) / 2
    : 0;
  const avgAnnualSavings = data.annualSavings
    ? (data.annualSavings.min + data.annualSavings.max) / 2
    : avgMonthlySavings * 12;
  const avgPaybackMonths = data.paybackMonths
    ? (data.paybackMonths.min + data.paybackMonths.max) / 2
    : data.annualSavings
    ? (avgInvestment / avgAnnualSavings) * 12
    : 0;

  // Calculate 5-year ROI
  const fiveYearSavings = avgAnnualSavings * 5;
  const fiveYearROI = fiveYearSavings - avgInvestment;
  const roiPercentage = ((fiveYearROI / avgInvestment) * 100).toFixed(0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatHours = (value: number) => {
    return `${Math.round(value)} hours`;
  };

  return (
    <div className="bg-white rounded-lg border-2 border-green-500 overflow-hidden">
      {/* Header */}
      <div
        className="px-4 py-3 text-white font-semibold flex items-center justify-between"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="flex items-center gap-2">
          <Icons.TrendingUp size={20} />
          <span>ROI Calculator</span>
        </div>
        {compact && (
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-white hover:text-gray-200"
          >
            {showDetails ? <Icons.ChevronUp size={20} /> : <Icons.ChevronDown size={20} />}
          </button>
        )}
      </div>

      {/* Content */}
      {showDetails && (
        <div className="p-4 space-y-4">
          {/* Investment */}
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-600">Initial Investment:</span>
            <span className="font-bold text-lg">
              {formatCurrency(data.investment.min)} - {formatCurrency(data.investment.max)}
            </span>
          </div>

          {/* Monthly Savings */}
          {data.monthlySavings && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Monthly Savings:</span>
              <span className="font-bold text-green-600">
                {data.monthlySavings.type === 'dollars'
                  ? `${formatCurrency(data.monthlySavings.min)} - ${formatCurrency(data.monthlySavings.max)}`
                  : `${formatHours(data.monthlySavings.min)} - ${formatHours(data.monthlySavings.max)}`}
              </span>
            </div>
          )}

          {/* Annual Savings */}
          {data.annualSavings && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Annual Savings:</span>
              <span className="font-bold text-green-600">
                {data.annualSavings.type === 'dollars'
                  ? `${formatCurrency(data.annualSavings.min)} - ${formatCurrency(data.annualSavings.max)}`
                  : `${formatHours(data.annualSavings.min)} - ${formatHours(data.annualSavings.max)}`}
              </span>
            </div>
          )}

          {/* Payback Period */}
          {avgPaybackMonths > 0 && (
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-600">Payback Period:</span>
              <span className="font-bold text-blue-600">
                {avgPaybackMonths < 12
                  ? `${Math.round(avgPaybackMonths)} months`
                  : `${(avgPaybackMonths / 12).toFixed(1)} years`}
              </span>
            </div>
          )}

          {/* 5-Year ROI */}
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">5-Year Net Benefit</div>
              <div className="text-3xl font-bold text-green-600 mb-1">
                {formatCurrency(fiveYearROI)}
              </div>
              <div className="text-sm text-gray-500">
                {roiPercentage}% ROI on your investment
              </div>
            </div>
          </div>

          {/* Value Props */}
          {data.valueProps && data.valueProps.length > 0 && (
            <div className="pt-3 border-t border-gray-200">
              <div className="text-sm font-semibold text-gray-700 mb-2">Why This Is a No-Brainer:</div>
              <ul className="space-y-2">
                {data.valueProps.map((prop, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <Icons.Check size={16} className="flex-shrink-0 mt-0.5 text-green-600" />
                    <span>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="pt-3">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
              <div className="text-sm font-semibold text-gray-800 mb-1">
                Based on Real South Tampa Data
              </div>
              <div className="text-xs text-gray-600">
                Average results from {data.investment.min === data.investment.max ? '50+' : '100+'} installations
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;
