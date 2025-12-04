import React, { useState, useEffect, useRef } from 'react';
import { 
  Lock, Mail, AlertCircle, ArrowRight, Building2, Briefcase, 
  UserCheck, Users, Headphones, Calculator, Shield, 
  CheckCircle2, Clock, Circle, AlertTriangle, MessageSquare, 
  RefreshCw, Database, Eye, Search, Zap, TrendingUp, 
  Phone, Calendar
} from 'lucide-react';
import './AtlasProject.css';

// ============================================
// ATLAS - AI-Accelerated ATS Migration Finalization
// For IT Resources Corp
// ============================================

const BRAND = {
    navy: '#1a2d4d',
    navyLight: '#2a4a6d',
    navyDark: '#0f1c2d',
    accent: '#4a9eff',
    accentLight: '#7ab8ff',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    grey: '#94a3b8',
    greyLight: '#e2e8f0',
    white: '#ffffff'
};

// Icon wrapper to match the provided code's interface
const Icon = ({ name, size = 20, color = 'currentColor', className = '' }: { name: string; size?: number; color?: string; className?: string }) => {
    const iconMap: Record<string, React.ElementType> = {
        Lock, Mail, AlertCircle, ArrowRight, Building2, Briefcase, 
        UserCheck, Users, HeadphonesIcon: Headphones, Calculator, Shield, 
        CheckCircle2, Clock, Circle, AlertTriangle, MessageSquare, 
        RefreshCw, Database, Eye, Search, Zap, TrendingUp, 
        Phone, Calendar
    };

    const LucideIcon = iconMap[name];
    if (!LucideIcon) return null;
    // @ts-ignore - Lucide props are compatible
    return <LucideIcon size={size} color={color} className={className} />;
};

// Mock data
interface Issue {
    id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    category: string;
    affectedRecords: number | null;
    department: string;
    dateIdentified: string;
}

const MOCK_ISSUES: Issue[] = [
    { id: 'ISS-001', title: 'Pager/LinkedIn Field Mismatch', description: 'LinkedIn URLs stored in legacy "Pager" field due to TrackerRMS UK naming conventions. 1,500 records affected.', status: 'resolved', priority: 'high', category: 'data-mapping', affectedRecords: 1500, department: 'all', dateIdentified: '2025-12-01' },
    { id: 'ISS-002', title: 'Candidate/Contact Duplicate ID Merge', description: 'Same ID used for both candidate and contact records caused ~5,000 records to merge incorrectly.', status: 'resolved', priority: 'critical', category: 'data-integrity', affectedRecords: 5000, department: 'recruiting', dateIdentified: '2025-11-15' },
    { id: 'ISS-003', title: 'State/County UK Naming Convention', description: 'TrackerRMS stores US states in "County" field (UK convention). All state data initially missing.', status: 'resolved', priority: 'high', category: 'data-mapping', affectedRecords: 155000, department: 'all', dateIdentified: '2025-11-10' },
    { id: 'ISS-004', title: 'Placement Count Discrepancies', description: 'JP Morgan Chase shows 11 placements in Dynamics vs 17 in Tracker. E2 Generations shows 7 vs 15.', status: 'in-progress', priority: 'critical', category: 'data-integrity', affectedRecords: null, department: 'backoffice', dateIdentified: '2025-12-05' },
    { id: 'ISS-005', title: 'Missing Start/End Dates on Placements', description: 'Some placement records missing start and end dates. Required for ADP integration.', status: 'in-progress', priority: 'medium', category: 'data-completeness', affectedRecords: null, department: 'backoffice', dateIdentified: '2025-12-05' },
    { id: 'ISS-006', title: 'Work Department Not Mapped', description: 'Work department field needed for ADP payroll not appearing on company records.', status: 'in-progress', priority: 'high', category: 'data-mapping', affectedRecords: 35, department: 'accounting', dateIdentified: '2025-12-05' },
    { id: 'ISS-007', title: 'Jobs Not Visible Without Manual Toggle', description: 'Open jobs require manual "Open" toggle in migrated data tab to appear in job lists.', status: 'pending', priority: 'medium', category: 'usability', affectedRecords: null, department: 'sales', dateIdentified: '2025-12-03' },
    { id: 'ISS-008', title: 'Available Start Date Field Broken', description: 'Available start date field on submission form not functioning during candidate screening.', status: 'pending', priority: 'low', category: 'functionality', affectedRecords: null, department: 'recruiting', dateIdentified: '2025-12-05' },
    { id: 'ISS-009', title: 'SharePoint Document Migration Pending', description: 'Historical documents not yet visible. SharePoint integration scheduled as final migration step.', status: 'pending', priority: 'medium', category: 'integration', affectedRecords: null, department: 'all', dateIdentified: '2025-11-01' }
];

const MOCK_VALIDATION = [
    { field: 'Pager → LinkedIn', issue: 'UK field naming convention', tracker: 'Pager (displays as LinkedIn)', dynamics: 'LinkedIn URL field', recordsAffected: 1500, status: 'fixed' },
    { field: 'State', issue: 'Stored in County field', tracker: 'County (contains state abbreviations)', dynamics: 'State field', recordsAffected: 155000, status: 'fixed' },
    { field: 'Date Format', issue: 'DD/MM/YYYY vs MM/DD/YYYY', tracker: 'DD/MM/YYYY (UK)', dynamics: 'MM/DD/YYYY (US)', recordsAffected: 'Unknown', status: 'needs-audit' },
    { field: 'Phone Numbers', issue: 'Format inconsistency', tracker: 'Mixed formats, some +44 prefixes', dynamics: 'Expects +1 format', recordsAffected: 'Unknown', status: 'needs-audit' },
    { field: 'Postal Code/ZIP', issue: 'Different validation', tracker: 'Postcode (UK term/format)', dynamics: 'ZIP Code (5 or 9 digit)', recordsAffected: 'Unknown', status: 'needs-audit' },
    { field: 'Candidate/Contact ID', issue: 'Duplicate identifiers', tracker: 'Same ID for both record types', dynamics: 'Single contact entity with flag', recordsAffected: 5000, status: 'fixed' },
    { field: 'Placement Records', issue: 'Count mismatch', tracker: 'Full history including terminated', dynamics: 'Subset imported', recordsAffected: '~30% missing', status: 'critical' },
    { field: 'Currency', issue: 'Symbol/format differences', tracker: 'May contain £ symbols', dynamics: 'Expects $ USD', recordsAffected: 'Unknown', status: 'needs-audit' }
];

const FEATURES = [
    { id: 'tracker', name: 'Migration Issue Tracker', description: 'Centralized dashboard to track all migration issues, assign ownership, and monitor resolution status.', effort: 'Low', timeline: '2-3 days' },
    { id: 'validation', name: 'AI Data Validation Engine', description: 'Automated cross-reference of Tracker vs Dynamics data using AI pattern recognition.', effort: 'Medium', timeline: '1 week' },
    { id: 'widget', name: 'Dynamics ATS Helper Widget', description: 'Browser extension providing contextual help, issue logging, and internal Q&A.', effort: 'Medium-High', timeline: '2 weeks' }
];

const ROLES = [
    { id: 'executive', name: 'Executive', icon: 'Building2', color: '#1a2d4d' },
    { id: 'sales', name: 'Sales / Account Mgmt', icon: 'Briefcase', color: '#2563eb' },
    { id: 'recruiting', name: 'Recruiting', icon: 'UserCheck', color: '#7c3aed' },
    { id: 'backoffice', name: 'Back Office / Ops', icon: 'Users', color: '#059669' },
    { id: 'hr', name: 'HR', icon: 'HeadphonesIcon', color: '#dc2626' },
    { id: 'accounting', name: 'Accounting', icon: 'Calculator', color: '#ca8a04' },
    { id: 'vendor', name: 'Vendor (DynamicsATS)', icon: 'Shield', color: '#64748b' }
];

// ============================================
// EMAIL GATE COMPONENT
// ============================================
const EmailGate = ({ onAuth }: { onAuth: (email: string) => void }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [shake, setShake] = useState(false);

    const validate = (e: React.FormEvent) => {
        e.preventDefault();
        const em = email.toLowerCase();
        if (em.endsWith('@itresourcescorp.com') || em.startsWith('vikas')) {
            onAuth(email);
        } else {
            setError('Access restricted to IT Resources team members');
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: `linear-gradient(135deg, ${BRAND.navyDark} 0%, ${BRAND.navy} 50%, ${BRAND.navyLight} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                padding: '60px',
                maxWidth: '480px',
                width: '100%',
                textAlign: 'center'
            }} className={shake ? 'animate-shake' : 'animate-fade-in'}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentLight})`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 30px',
                    boxShadow: '0 20px 40px rgba(74, 158, 255, 0.3)'
                }}>
                    <Icon name="Lock" size={36} color="white" />
                </div>
                <h1 style={{ color: BRAND.white, fontSize: '28px', fontWeight: '300', margin: '0 0 10px' }}>
                    <span style={{ fontWeight: '600' }}>ATLAS</span> Project Portal
                </h1>
                <p style={{ color: BRAND.grey, fontSize: '14px', margin: '0 0 40px', lineHeight: '1.6' }}>
                    AI-Accelerated ATS Migration Finalization<br />
                    <span style={{ color: BRAND.accent }}>IT Resources Corp</span>
                </p>
                <form onSubmit={validate}>
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                        <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}>
                            <Icon name="Mail" size={20} color={BRAND.grey} />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(''); }}
                            style={{
                                width: '100%',
                                padding: '16px 16px 16px 50px',
                                fontSize: '16px',
                                border: `2px solid ${error ? BRAND.danger : 'rgba(255,255,255,0.1)'}`,
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                color: BRAND.white,
                                outline: 'none'
                            }}
                        />
                    </div>
                    {error && (
                        <p style={{ color: BRAND.danger, fontSize: '13px', margin: '0 0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                            <Icon name="AlertCircle" size={16} color={BRAND.danger} /> {error}
                        </p>
                    )}
                    <button type="submit" style={{
                        width: '100%',
                        padding: '16px',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: BRAND.white,
                        background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentLight})`,
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}>
                        Access Portal <Icon name="ArrowRight" size={18} color="white" />
                    </button>
                </form>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', marginTop: '30px' }}>
                    Prepared by Vikas Bhatia • December 2025
                </p>
            </div>
        </div>
    );
};

// ============================================
// ROLE SELECTOR
// ============================================
const RoleSelector = ({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', padding: '20px 0' }}>
        {ROLES.map(role => (
            <button
                key={role.id}
                onClick={() => onSelect(role.id)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    fontSize: '13px',
                    fontWeight: selected === role.id ? '600' : '400',
                    color: selected === role.id ? BRAND.white : BRAND.grey,
                    background: selected === role.id ? role.color : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${selected === role.id ? role.color : 'rgba(255,255,255,0.1)'}`,
                    borderRadius: '100px',
                    cursor: 'pointer'
                }}
            >
                <Icon name={role.icon} size={16} color={selected === role.id ? 'white' : BRAND.grey} />
                {role.name}
            </button>
        ))}
    </div>
);

// ============================================
// STATUS & PRIORITY BADGES
// ============================================
const StatusBadge = ({ status }: { status: string }) => {
    const cfg: any = {
        'resolved': { color: BRAND.success, bg: 'rgba(34,197,94,0.15)', label: 'Resolved', icon: 'CheckCircle2' },
        'in-progress': { color: BRAND.warning, bg: 'rgba(245,158,11,0.15)', label: 'In Progress', icon: 'Clock' },
        'pending': { color: BRAND.grey, bg: 'rgba(148,163,184,0.15)', label: 'Pending', icon: 'Circle' },
        'fixed': { color: BRAND.success, bg: 'rgba(34,197,94,0.15)', label: 'Fixed', icon: 'CheckCircle2' },
        'needs-audit': { color: BRAND.warning, bg: 'rgba(245,158,11,0.15)', label: 'Needs Audit', icon: 'Clock' },
        'critical': { color: BRAND.danger, bg: 'rgba(239,68,68,0.15)', label: 'Critical', icon: 'AlertTriangle' }
    };
    const c = cfg[status] || cfg['pending'];
    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 10px',
            fontSize: '11px',
            fontWeight: '600',
            color: c.color,
            background: c.bg,
            borderRadius: '100px',
            textTransform: 'uppercase'
        }}>
            <Icon name={c.icon} size={12} color={c.color} /> {c.label}
        </span>
    );
};

const PriorityBadge = ({ priority }: { priority: string }) => {
    const colors: any = { critical: BRAND.danger, high: BRAND.warning, medium: BRAND.accent, low: BRAND.grey };
    return <span style={{ fontSize: '11px', fontWeight: '600', color: colors[priority] || BRAND.grey, textTransform: 'uppercase' }}>{priority}</span>;
};

// ============================================
// EMAIL SECTION
// ============================================
const EmailSection = () => (
    <div style={{ background: BRAND.white, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <div style={{ background: BRAND.navy, padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Icon name="Mail" size={20} color="white" />
            <span style={{ color: BRAND.white, fontWeight: '500' }}>Executive Summary</span>
        </div>
        <div style={{ padding: '24px', color: BRAND.navyDark }}>
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '8px 16px', fontSize: '14px', marginBottom: '20px', paddingBottom: '20px', borderBottom: `1px solid ${BRAND.greyLight}` }}>
                <span style={{ color: BRAND.grey }}>To:</span><span>Dan Jones, Christine Horan</span>
                <span style={{ color: BRAND.grey }}>From:</span><span>Vikas Bhatia</span>
                <span style={{ color: BRAND.grey }}>Subject:</span><span style={{ fontWeight: '600' }}>ATLAS Project - ATS Migration Assessment & Stabilization Plan</span>
                <span style={{ color: BRAND.grey }}>Date:</span><span>December 5, 2025</span>
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
                <p style={{ margin: '0 0 16px' }}>Dan, Christine,</p>
                <p style={{ margin: '0 0 16px' }}>Following my assessment call with Christine and observation of the DynamicsATS vendor meeting, I've compiled this analysis of the current migration state and proposed stabilization approach.</p>
                <p style={{ margin: '0 0 8px', fontWeight: '600' }}>Key Findings:</p>
                <ul style={{ margin: '0 0 16px', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}><strong>Data integrity issues exist but are being addressed.</strong> The vendor team has resolved several critical mapping issues (State/County, Candidate/Contact duplicates, Pager/LinkedIn).</li>
                    <li style={{ marginBottom: '8px' }}><strong>Placement records require urgent attention.</strong> Discrepancies between Tracker and Dynamics placement counts (e.g., 11 vs 17 for one client) need validation across all 35 active clients before jobs can be closed.</li>
                    <li style={{ marginBottom: '8px' }}><strong>Communication and tracking gaps</strong> between IT Resources and DynamicsATS are creating uncertainty. Issues are being discovered reactively rather than proactively validated.</li>
                </ul>
                <p style={{ margin: '0 0 8px', fontWeight: '600' }}>Immediate Actions Taken:</p>
                <ul style={{ margin: '0 0 16px', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '8px' }}>Created comprehensive issue tracker with all known migration problems</li>
                    <li style={{ marginBottom: '8px' }}>Developed AI-powered data validation prototype to audit field mappings</li>
                    <li style={{ marginBottom: '8px' }}>Documented UK/US regional data format risks requiring audit</li>
                </ul>
                <p style={{ margin: '0 0 16px' }}>I've prepared interactive prototypes below demonstrating how we can accelerate the validation process and establish better tracking. Please review and use the ranking system to indicate which capabilities would be most valuable for your team.</p>
                <p style={{ margin: '0' }}>Best regards,<br /><strong>Vikas Bhatia</strong><br /><span style={{ color: BRAND.grey }}>646-620-4000 • Vikas@JustProtect.co</span></p>
            </div>
        </div>
    </div>
);

// ============================================
// CURRENT STATE OBSERVATIONS
// ============================================
const CurrentState = () => {
    const obs = [
        { category: 'Communication Gaps', icon: 'MessageSquare', severity: 'high', items: ['DynamicsATS team is based in India (10.5 hour time difference) with documented language/context barriers', 'Changes made by vendor without notification - e.g., HR email integration re-enabled after being disabled', 'Lindsay (vendor PM) appears unaware of what her team is working on day-to-day', 'No structured approval process before vendor makes changes to production data'] },
        { category: 'Process Issues', icon: 'RefreshCw', severity: 'high', items: ['Issues discovered reactively by users rather than proactively validated', 'Change log maintenance fell behind when Christine shifted to accounting coverage', 'No clear escalation path from internal discovery to vendor resolution', 'Vendor has done "hundreds" of migrations but unfamiliar with TrackerRMS UK conventions'] },
        { category: 'Data Quality Concerns', icon: 'Database', severity: 'critical', items: ['Placement count discrepancies across multiple clients (30%+ missing in some cases)', 'UK/US format issues only discovered when data "looked wrong" (State in County field)', '155,000 candidate records - impossible to manually verify activity completeness', 'SharePoint document migration still pending - being done "last"'] },
        { category: 'Resource Constraints', icon: 'Users', severity: 'medium', items: ['Lost 3 back office staff recently - Christine covering accounting', 'Only 2 Tracker licenses retained - limited ability for parallel verification', 'Sales/recruiting team leading vendor calls but lack technical migration experience', 'Thursday meetings are only structured vendor touchpoint'] }
    ];
    const sevColor: any = { critical: BRAND.danger, high: BRAND.warning, medium: BRAND.accent };

    return (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ color: BRAND.white, fontSize: '18px', fontWeight: '600', margin: '0 0 24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon name="Eye" size={20} color={BRAND.accent} /> Current State Observations
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {obs.map((o, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '20px', borderLeft: `3px solid ${sevColor[o.severity]}` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <Icon name={o.icon} size={18} color={sevColor[o.severity]} />
                            <span style={{ color: BRAND.white, fontWeight: '600', fontSize: '14px' }}>{o.category}</span>
                            <span style={{ marginLeft: 'auto', fontSize: '10px', textTransform: 'uppercase', color: sevColor[o.severity], fontWeight: '600' }}>{o.severity}</span>
                        </div>
                        <ul style={{ margin: 0, padding: '0 0 0 16px', color: BRAND.grey, fontSize: '13px', lineHeight: '1.6' }}>
                            {o.items.map((item, j) => <li key={j} style={{ marginBottom: '8px' }}>{item}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ============================================
// ISSUE TRACKER
// ============================================
const IssueTracker = ({ role }: { role: string }) => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    
    const filtered = MOCK_ISSUES.filter(i => {
        const matchFilter = filter === 'all' || i.status === filter;
        const matchSearch = i.title.toLowerCase().includes(search.toLowerCase()) || i.description.toLowerCase().includes(search.toLowerCase());
        const matchRole = role === 'executive' || role === 'vendor' || i.department === 'all' || i.department === role;
        return matchFilter && matchSearch && matchRole;
    });

    const stats = {
        total: MOCK_ISSUES.length,
        resolved: MOCK_ISSUES.filter(i => i.status === 'resolved').length,
        inProgress: MOCK_ISSUES.filter(i => i.status === 'in-progress').length,
        pending: MOCK_ISSUES.filter(i => i.status === 'pending').length
    };

    return (
        <div style={{ background: BRAND.white, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <div style={{ background: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.navyLight})`, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                    <h3 style={{ color: BRAND.white, fontSize: '18px', fontWeight: '600', margin: '0 0 4px' }}>Migration Issue Tracker</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: 0 }}>Functional Demo • Real issues from migration</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    {[{ l: 'Total', v: stats.total, c: BRAND.white }, { l: 'Resolved', v: stats.resolved, c: BRAND.success }, { l: 'In Progress', v: stats.inProgress, c: BRAND.warning }, { l: 'Pending', v: stats.pending, c: BRAND.grey }].map(s => (
                        <div key={s.l} style={{ textAlign: 'center' }}>
                            <div style={{ color: s.c, fontSize: '24px', fontWeight: '700' }}>{s.v}</div>
                            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ padding: '16px 24px', borderBottom: `1px solid ${BRAND.greyLight}`, display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
                    <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                        <Icon name="Search" size={16} color={BRAND.grey} />
                    </div>
                    <input type="text" placeholder="Search issues..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', padding: '10px 10px 10px 36px', fontSize: '14px', border: `1px solid ${BRAND.greyLight}`, borderRadius: '8px', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {['all', 'pending', 'in-progress', 'resolved'].map(f => (
                        <button key={f} onClick={() => setFilter(f)} style={{ padding: '8px 14px', fontSize: '13px', border: `1px solid ${filter === f ? BRAND.accent : BRAND.greyLight}`, borderRadius: '6px', background: filter === f ? `${BRAND.accent}15` : 'transparent', color: filter === f ? BRAND.accent : BRAND.grey, cursor: 'pointer', fontWeight: filter === f ? '600' : '400', textTransform: 'capitalize' }}>
                            {f === 'all' ? 'All' : f.replace('-', ' ')}
                        </button>
                    ))}
                </div>
            </div>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }} className="atlas-scroll">
                {filtered.map(issue => (
                    <div key={issue.id} style={{ padding: '16px 24px', borderBottom: `1px solid ${BRAND.greyLight}`, display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: issue.status === 'resolved' ? `${BRAND.success}15` : issue.status === 'in-progress' ? `${BRAND.warning}15` : `${BRAND.grey}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Icon name={issue.status === 'resolved' ? 'CheckCircle2' : issue.status === 'in-progress' ? 'Clock' : 'Circle'} size={16} color={issue.status === 'resolved' ? BRAND.success : issue.status === 'in-progress' ? BRAND.warning : BRAND.grey} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                                <span style={{ color: BRAND.grey, fontSize: '12px', fontFamily: 'monospace' }}>{issue.id}</span>
                                <PriorityBadge priority={issue.priority} />
                                <StatusBadge status={issue.status} />
                            </div>
                            <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '600', color: BRAND.navyDark }}>{issue.title}</h4>
                            <p style={{ margin: 0, fontSize: '13px', color: BRAND.grey, lineHeight: '1.5' }}>{issue.description}</p>
                            {issue.affectedRecords && <span style={{ display: 'inline-block', marginTop: '8px', fontSize: '11px', color: BRAND.accent, background: `${BRAND.accent}10`, padding: '2px 8px', borderRadius: '4px' }}>{typeof issue.affectedRecords === 'number' ? issue.affectedRecords.toLocaleString() : issue.affectedRecords} records affected</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ============================================
// DATA VALIDATION DEMO
// ============================================
const DataValidation = () => {
    const [running, setRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const runValidation = () => {
        setRunning(true);
        setShowResults(false);
        setProgress(0);
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    setRunning(false);
                    setShowResults(true);
                    return 100;
                }
                return p + 2;
            });
        }, 50);
    };

    return (
        <div style={{ background: BRAND.white, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <div style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h3 style={{ color: BRAND.white, fontSize: '18px', fontWeight: '600', margin: '0 0 4px' }}>AI Data Validation Engine</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: 0 }}>Cross-reference Tracker ↔ Dynamics field mappings</p>
                </div>
                <button onClick={runValidation} disabled={running} style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: '#7c3aed', background: BRAND.white, border: 'none', borderRadius: '8px', cursor: running ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '8px', opacity: running ? 0.7 : 1 }}>
                    <Icon name={running ? 'RefreshCw' : 'Zap'} size={16} color="#7c3aed" className={running ? 'animate-spin-slow' : ''} />
                    {running ? 'Analyzing...' : 'Run AI Audit'}
                </button>
            </div>
            {running && (
                <div style={{ padding: '24px' }}>
                    <div style={{ background: BRAND.greyLight, borderRadius: '100px', height: '8px', overflow: 'hidden' }}>
                        <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #7c3aed, #a78bfa)', transition: 'width 0.1s' }} />
                    </div>
                    <p style={{ textAlign: 'center', color: BRAND.grey, fontSize: '13px', marginTop: '12px' }}>Scanning {Math.floor(progress * 1550)} of 155,000 records...</p>
                </div>
            )}
            {showResults && (
                <div>
                    <div style={{ padding: '16px 24px', background: '#f8fafc', borderBottom: `1px solid ${BRAND.greyLight}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: BRAND.navyDark }}>Validation Results</span>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <span style={{ fontSize: '13px' }}><span style={{ color: BRAND.success, fontWeight: '600' }}>3</span> Fixed</span>
                            <span style={{ fontSize: '13px' }}><span style={{ color: BRAND.warning, fontWeight: '600' }}>4</span> Need Audit</span>
                            <span style={{ fontSize: '13px' }}><span style={{ color: BRAND.danger, fontWeight: '600' }}>1</span> Critical</span>
                        </div>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                            <thead>
                                <tr style={{ background: '#f1f5f9' }}>
                                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: BRAND.navyDark }}>Field</th>
                                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: BRAND.navyDark }}>Issue Type</th>
                                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: BRAND.navyDark }}>Tracker</th>
                                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: BRAND.navyDark }}>Dynamics</th>
                                    <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '600', color: BRAND.navyDark }}>Records</th>
                                    <th style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '600', color: BRAND.navyDark }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {MOCK_VALIDATION.map((r, i) => (
                                    <tr key={i} style={{ borderBottom: `1px solid ${BRAND.greyLight}` }}>
                                        <td style={{ padding: '12px 16px', fontWeight: '500' }}>{r.field}</td>
                                        <td style={{ padding: '12px 16px', color: BRAND.grey }}>{r.issue}</td>
                                        <td style={{ padding: '12px 16px', fontSize: '12px', color: BRAND.grey }}>{r.tracker}</td>
                                        <td style={{ padding: '12px 16px', fontSize: '12px', color: BRAND.grey }}>{r.dynamics}</td>
                                        <td style={{ padding: '12px 16px', textAlign: 'center', fontFamily: 'monospace' }}>{typeof r.recordsAffected === 'number' ? r.recordsAffected.toLocaleString() : r.recordsAffected}</td>
                                        <td style={{ padding: '12px 16px', textAlign: 'center' }}><StatusBadge status={r.status} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {!running && !showResults && (
                <div style={{ padding: '40px', textAlign: 'center', color: BRAND.grey }}>
                    <Icon name="Database" size={40} color={BRAND.grey} />
                    <p style={{ margin: '16px 0 0', fontSize: '14px' }}>Click "Run AI Audit" to simulate field mapping validation</p>
                </div>
            )}
        </div>
    );
};

// ============================================
// BROWSER WIDGET DEMO
// ============================================
const BrowserWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tab, setTab] = useState('help');

    return (
        <div style={{ background: BRAND.white, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <div style={{ background: 'linear-gradient(135deg, #059669, #34d399)', padding: '20px 24px' }}>
                <h3 style={{ color: BRAND.white, fontSize: '18px', fontWeight: '600', margin: '0 0 4px' }}>Dynamics ATS Helper Widget</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: 0 }}>Conceptual Demo • Browser extension for in-context support</p>
            </div>
            <div style={{ padding: '24px', display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 400px', background: '#f8fafc', borderRadius: '12px', border: `1px solid ${BRAND.greyLight}`, overflow: 'hidden' }}>
                    <div style={{ background: '#e2e8f0', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                        </div>
                        <div style={{ flex: 1, background: 'white', borderRadius: '4px', padding: '4px 12px', fontSize: '12px', color: BRAND.grey }}>
                            itresources.crm.dynamics.com/candidate/12345
                        </div>
                    </div>
                    <div style={{ padding: '20px', minHeight: '200px', position: 'relative' }}>
                        <div style={{ fontSize: '14px', color: BRAND.grey, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ background: 'white', padding: '12px', borderRadius: '8px', border: `1px solid ${BRAND.greyLight}` }}>
                                <span style={{ fontWeight: '600', color: BRAND.navyDark }}>Candidate Profile</span>
                                <div style={{ marginTop: '8px', fontSize: '13px' }}>
                                    <div>Name: John Smith</div>
                                    <div>LinkedIn: <span style={{ color: BRAND.accent }}>linkedin.com/in/johnsmith</span></div>
                                    <div>Status: Active</div>
                                </div>
                            </div>
                            <div style={{ background: 'white', padding: '12px', borderRadius: '8px', border: `1px solid ${BRAND.greyLight}` }}>
                                <span style={{ fontWeight: '600', color: BRAND.navyDark }}>Migrated Data</span>
                                <div style={{ marginTop: '8px', fontSize: '12px', color: BRAND.warning, background: `${BRAND.warning}10`, padding: '8px', borderRadius: '4px' }}>
                                    ⚠️ Pager: linkedin.com/in/johnsmith-old
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} style={{ position: 'absolute', bottom: '16px', right: '16px', width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #059669, #34d399)', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(5,150,105,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="MessageSquare" size={22} color="white" />
                        </button>
                    </div>
                </div>
                <div style={{ flex: '0 0 280px', background: BRAND.white, borderRadius: '12px', border: `1px solid ${BRAND.greyLight}`, overflow: 'hidden', opacity: isOpen ? 1 : 0.5, transition: 'opacity 0.3s' }}>
                    <div style={{ background: 'linear-gradient(135deg, #059669, #34d399)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Icon name="Shield" size={18} color="white" />
                        <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>ATLAS Helper</span>
                    </div>
                    <div style={{ display: 'flex', borderBottom: `1px solid ${BRAND.greyLight}` }}>
                        {['help', 'report', 'ask'].map(t => (
                            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '10px', fontSize: '12px', border: 'none', background: tab === t ? '#f0fdf4' : 'transparent', color: tab === t ? '#059669' : BRAND.grey, fontWeight: tab === t ? '600' : '400', cursor: 'pointer' }}>
                                {t === 'help' ? '❓ Help' : t === 'report' ? '🐛 Report' : '💬 Ask'}
                            </button>
                        ))}
                    </div>
                    <div style={{ padding: '16px' }}>
                        {tab === 'help' && (
                            <div style={{ fontSize: '13px', color: BRAND.grey }}>
                                <p style={{ margin: '0 0 12px', fontWeight: '600', color: BRAND.navyDark }}>📍 You're viewing: Candidate Profile</p>
                                <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
                                    <p style={{ margin: '0 0 8px', fontWeight: '500', color: '#059669' }}>💡 Quick Tip</p>
                                    <p style={{ margin: 0, lineHeight: '1.5' }}>Check the "Migrated Data" tab for historical fields. LinkedIn URLs may be in the legacy "Pager" field.</p>
                                </div>
                            </div>
                        )}
                        {tab === 'report' && (
                            <div style={{ fontSize: '13px' }}>
                                <select style={{ width: '100%', padding: '8px', marginBottom: '12px', borderRadius: '6px', border: `1px solid ${BRAND.greyLight}`, fontSize: '13px' }}>
                                    <option>Select issue type...</option>
                                    <option>Data incorrect</option>
                                    <option>Field missing</option>
                                    <option>Feature broken</option>
                                </select>
                                <textarea placeholder="Describe the issue..." style={{ width: '100%', padding: '8px', borderRadius: '6px', border: `1px solid ${BRAND.greyLight}`, fontSize: '13px', resize: 'vertical', minHeight: '80px' }} />
                                <button style={{ width: '100%', marginTop: '12px', padding: '10px', background: '#059669', color: 'white', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Submit Issue</button>
                            </div>
                        )}
                        {tab === 'ask' && (
                            <div style={{ fontSize: '13px' }}>
                                <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
                                    <p style={{ margin: '0 0 8px', fontWeight: '500' }}>Recent Questions:</p>
                                    <ul style={{ margin: 0, padding: '0 0 0 16px', color: BRAND.grey }}>
                                        <li>How do I merge duplicate contacts?</li>
                                        <li>Where is the payroll number field?</li>
                                    </ul>
                                </div>
                                <input type="text" placeholder="Ask the team..." style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${BRAND.greyLight}`, fontSize: '13px' }} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div style={{ padding: '16px 24px', background: '#f8fafc', borderTop: `1px solid ${BRAND.greyLight}`, fontSize: '13px', color: BRAND.grey }}>
                <strong>Click the green button</strong> in the mock browser to toggle the widget panel →
            </div>
        </div>
    );
};

// ============================================
// FEATURE RANKING
// ============================================
const FeatureRanking = ({ rankings, setRankings }: { rankings: Record<string, string>; setRankings: React.Dispatch<React.SetStateAction<Record<string, string>>> }) => {
    const setRank = (id: string, rank: string) => setRankings(p => ({ ...p, [id]: rank }));
    const getColor = (r: string) => r === 'green' ? BRAND.success : r === 'yellow' ? BRAND.warning : r === 'red' ? BRAND.danger : BRAND.greyLight;

    return (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ color: BRAND.white, fontSize: '18px', fontWeight: '600', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon name="TrendingUp" size={20} color={BRAND.accent} /> Feature Priority Ranking
            </h3>
            <p style={{ color: BRAND.grey, fontSize: '14px', margin: '0 0 24px' }}>Help me understand which capabilities would be most valuable for your team</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '24px', marginBottom: '16px', paddingRight: '8px' }}>
                <span style={{ fontSize: '12px', color: BRAND.success, display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '12px', height: '12px', borderRadius: '50%', background: BRAND.success }} />Want It</span>
                <span style={{ fontSize: '12px', color: BRAND.warning, display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '12px', height: '12px', borderRadius: '50%', background: BRAND.warning }} />Maybe</span>
                <span style={{ fontSize: '12px', color: BRAND.danger, display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '12px', height: '12px', borderRadius: '50%', background: BRAND.danger }} />Not Needed</span>
            </div>
            {FEATURES.map(f => (
                <div key={f.id} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '20px', marginBottom: '16px', borderLeft: `3px solid ${getColor(rankings[f.id])}` }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ flex: 1, minWidth: '250px' }}>
                            <h4 style={{ margin: '0 0 8px', color: BRAND.white, fontSize: '16px', fontWeight: '600' }}>{f.name}</h4>
                            <p style={{ margin: '0 0 12px', color: BRAND.grey, fontSize: '13px', lineHeight: '1.6' }}>{f.description}</p>
                            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: BRAND.grey }}>
                                <span>⏱️ {f.timeline}</span>
                                <span>📊 {f.effort} effort</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            {['green', 'yellow', 'red'].map(r => (
                                <button key={r} onClick={() => setRank(f.id, r)} style={{ width: '40px', height: '40px', borderRadius: '50%', border: rankings[f.id] === r ? '3px solid white' : '2px solid transparent', background: getColor(r), cursor: 'pointer', opacity: rankings[f.id] === r ? 1 : 0.4 }} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            {Object.keys(rankings).length === FEATURES.length && (
                <div style={{ background: `${BRAND.accent}15`, border: `1px solid ${BRAND.accent}`, borderRadius: '12px', padding: '20px', textAlign: 'center', marginTop: '24px' }}>
                    <Icon name="CheckCircle2" size={32} color={BRAND.accent} />
                    <h4 style={{ color: BRAND.white, margin: '12px 0 8px' }}>Thank you for your feedback!</h4>
                    <p style={{ color: BRAND.grey, margin: 0, fontSize: '14px' }}>Your rankings help scope the engagement. Let's connect to discuss next steps.</p>
                </div>
            )}
        </div>
    );
};

// ============================================
// CONTACT SECTION
// ============================================
const Contact = () => (
    <div style={{ background: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.navyLight})`, borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
        <h3 style={{ color: BRAND.white, fontSize: '24px', fontWeight: '300', margin: '0 0 8px' }}>
            Ready to <span style={{ fontWeight: '600' }}>stabilize</span> your migration?
        </h3>
        <p style={{ color: BRAND.grey, fontSize: '14px', margin: '0 0 32px' }}>Let's connect to discuss a focused 1-week engagement</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="mailto:Vikas@JustProtect.co" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', color: BRAND.white, textDecoration: 'none', fontSize: '14px' }}>
                <Icon name="Mail" size={18} color="white" /> Vikas@JustProtect.co
            </a>
            <a href="tel:6466204000" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px', color: BRAND.white, textDecoration: 'none', fontSize: '14px' }}>
                <Icon name="Phone" size={18} color="white" /> 646-620-4000
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 24px', background: BRAND.accent, border: 'none', borderRadius: '12px', color: BRAND.white, textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
                <Icon name="Calendar" size={18} color="white" /> Schedule a Call
            </a>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', marginTop: '40px' }}>© 2025 Vikas Bhatia • Prepared for IT Resources Corp</p>
    </div>
);

// ============================================
// MAIN APP
// ============================================
const AtlasProject = () => {
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('executive');
    const [rankings, setRankings] = useState<Record<string, string>>({});

    // Check for previous auth in session storage or similar if desired, 
    // but for now, we'll stick to the component state to match the prototype.

    if (!auth) return <EmailGate onAuth={(e) => { setEmail(e); setAuth(true); }} />;

    return (
        <div style={{ minHeight: '100vh', background: `linear-gradient(180deg, ${BRAND.navyDark} 0%, ${BRAND.navy} 100%)` }}>
            <header style={{ padding: '24px 40px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', background: `linear-gradient(135deg, ${BRAND.accent}, ${BRAND.accentLight})`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="Zap" size={24} color="white" />
                    </div>
                    <div>
                        <h1 style={{ color: BRAND.white, fontSize: '22px', fontWeight: '300', margin: 0 }}><span style={{ fontWeight: '700' }}>ATLAS</span> Project</h1>
                        <p style={{ color: BRAND.grey, fontSize: '12px', margin: 0 }}>AI-Accelerated ATS Migration Finalization</p>
                    </div>
                </div>
                <span style={{ color: BRAND.grey, fontSize: '13px', padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>{email}</span>
            </header>
            <div style={{ padding: '0 40px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <RoleSelector selected={role} onSelect={setRole} />
            </div>
            <main style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="animate-fade-in">
                    <EmailSection />
                    <CurrentState />
                    <section>
                        <h2 style={{ color: BRAND.white, fontSize: '20px', fontWeight: '300', margin: '0 0 24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Icon name="Zap" size={22} color={BRAND.accent} />
                            <span style={{ fontWeight: '600' }}>Interactive Prototypes</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <IssueTracker role={role} />
                            <DataValidation />
                            <BrowserWidget />
                        </div>
                    </section>
                    <FeatureRanking rankings={rankings} setRankings={setRankings} />
                    <Contact />
                </div>
            </main>
        </div>
    );
};

export default AtlasProject;

